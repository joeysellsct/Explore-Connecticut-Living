// Fast parser check before Cloudflare's longer Next.js build.
// Catches malformed town-data strings (including unescaped apostrophes).
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const paths = [
  'lib/town-highlights.ts',
  'lib/town-official-links.ts',
  'lib/town-restaurants.ts',
  'lib/town-photography.ts',
  'lib/fy2027-mill-rates.ts',
];
let failures = 0;
for (const path of paths) {
  const source = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  for (const diagnostic of source.parseDiagnostics) {
    const pos = source.getLineAndCharacterOfPosition(diagnostic.start ?? 0);
    console.error(`${path}:${pos.line + 1}:${pos.character + 1}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
    failures++;
  }
}
if (failures) {
  console.error(`Town data syntax check failed with ${failures} parser error(s).`);
  process.exitCode = 1;
} else {
  console.log(`Town data syntax check passed for ${paths.length} files.`);
}
