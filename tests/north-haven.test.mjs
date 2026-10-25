import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('North Haven municipal resource directory has 13 unique, bilingual, sourced links', () => {
 const source = read('lib/town-official-links.ts');
 const match = source.match(/^ 'north-haven': \[(.*?)^ \],/ms);
 assert.ok(match, 'Missing North Haven resource directory');
 const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 13);
 assert.equal(new Set(entries.map(entry => entry.url)).size, entries.length);
 for (const entry of entries) {
  assert.ok(entry.en.length > 25 && entry.es.length > 25);
  assert.equal(new URL(entry.url).protocol, 'https:');
 }
 assert.ok(entries.some(entry => entry.en.includes('30.56') && entry.es.includes('30,56')));
 assert.ok(entries.some(entry => entry.en.includes('sewer')));
 assert.ok(entries.some(entry => entry.en.includes('Building')));
 assert.ok(entries.some(entry => entry.en.includes('Land Use')));
});

test('North Haven uses bilingual town template and does not add personal Top Picks', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townOfficialLinks\[slug\]\.map/);
 assert.match(page, /TownMovingResources slug=\{slug\}/);
 const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1];
 assert.ok(picks);
 assert.doesNotMatch(picks, /['"]north-haven['"]\s*:/);
});
