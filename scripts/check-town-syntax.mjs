// Fast parser check before Cloudflare's longer Next.js build.
// Catches malformed town-data strings (including unescaped apostrophes).
import { readFileSync, readdirSync } from 'node:fs';
import ts from 'typescript';

const paths = readdirSync('lib').filter(name => name.endsWith('.ts') || name.endsWith('.tsx')).map(name => `lib/${name}`);
let failures = 0;
for (const path of paths) {
  const source = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  for (const diagnostic of source.parseDiagnostics) {
    const pos = source.getLineAndCharacterOfPosition(diagnostic.start ?? 0);
    console.error(`${path}:${pos.line + 1}:${pos.character + 1}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
    failures++;
  }

  // A file can parse successfully while TypeScript still rejects duplicate
  // keys (TS1117). Check the outer town registries before Next.js builds.
  const registryNames = new Set(['shorelineGuides', 'townOfficialLinks']);
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) ||
          !registryNames.has(declaration.name.text) ||
          !declaration.initializer ||
          !ts.isObjectLiteralExpression(declaration.initializer)) continue;
      const seen = new Map();
      for (const property of declaration.initializer.properties) {
        if (!ts.isPropertyAssignment(property)) continue;
        const name = property.name;
        if (!ts.isIdentifier(name) && !ts.isStringLiteral(name) &&
            !ts.isNumericLiteral(name)) continue;
        const key = name.text;
        const line = source.getLineAndCharacterOfPosition(name.getStart(source)).line + 1;
        if (seen.has(key)) {
          console.error(`${path}:${line}: duplicate town key "${key}" (previously defined on line ${seen.get(key)})`);
          failures++;
        } else {
          seen.set(key, line);
        }
      }
    }
  }
}
if (failures) {
  console.error(`Town data syntax check failed with ${failures} parser error(s).`);
  process.exitCode = 1;
} else {
  console.log(`Town data syntax check passed for ${paths.length} files.`);
}
