import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const directory = readFileSync(new URL('../app/[locale]/towns/page.tsx', import.meta.url), 'utf8');

test('historic county dropdown is translated without changing its filter value', () => {
  assert.ok(directory.includes('value={c} key={c}'), 'county filtering keeps the canonical county key');
  assert.ok(directory.includes('es ? `Condado de ${c}` : `${c} County`'), 'dropdown labels support Spanish and English');
});

test('town cards translate county labels and preserve English fallback', () => {
  assert.ok(directory.includes('es ? `Condado de ${t.county}` : `${t.county} County`'), 'town cards use localized county labels');
  assert.ok(directory.includes('href={`/${es?\'es\':\'en\'}/towns/${t.slug}`}'), 'town links preserve locale');
});
