// Development-time integrity checks for the manually sourced bilingual restaurant registry.
// This is a source-shape audit, not a live business verification or browser certification.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../lib/verified-town-restaurants.ts', import.meta.url), 'utf8');
const entries = [...source.matchAll(/\{\s*name:\s*["'“]/g)];
const fields = ['name', 'address', 'cuisineEn', 'cuisineEs', 'descriptionEn', 'descriptionEs', 'sourceUrl', 'verifiedOn'];

test('verified restaurant records retain bilingual fields and provenance', () => {
  assert.ok(entries.length >= 1, 'Expected at least one editorial restaurant');
  // Each entry is one object with scalar quoted fields, and the next entry starts at the next name key.
  const segments = source.split(/(?=\{\s*name:\s*["'“])/).slice(1);
  for (const segment of segments) {
    const record = segment.slice(0, segment.indexOf('}') + 1);
    for (const field of fields) {
      assert.match(record, new RegExp('\\b' + field + ':\\s*["\\x27]\\S'), 'Missing ' + field + ' in ' + record.slice(0, 90));
    }
    assert.match(record, /sourceUrl:\s*["']https:\/\//, 'Restaurant source must be HTTPS');
    assert.match(record, /verifiedOn:\s*["']\d{4}-\d{2}-\d{2}["']/, 'Missing dated source check');
  }
});

test('editorial registry does not label restaurants as personal picks', () => {
  assert.doesNotMatch(source, /(?:isTopPick|personalTopPick|joeyPick)\s*:\s*true/);
});
