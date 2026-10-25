import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Meriden municipal directory has 15 distinct, bilingual, sourced resources', () => {
 const source = read('lib/town-official-links.ts');
 const match = source.match(/^ 'meriden': \\[(.*?)^ \\],/ms);
 assert.ok(match, 'Missing Meriden municipal resource directory');
 const entries = match[1].split('\\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 15);
 assert.equal(new Set(entries.map(entry => entry.url)).size, 15);
 for (const entry of entries) {
  assert.ok(entry.en.length > 25 && entry.es.length > 25);
  assert.equal(new URL(entry.url).protocol, 'https:');
 }
 assert.ok(entries.some(entry => entry.en.includes('29.99') && entry.es.includes('29,99')));
 assert.ok(entries.some(entry => entry.en.includes('older tax years')));
 assert.ok(entries.some(entry => entry.en.includes('outer-district')));
 assert.ok(entries.some(entry => entry.en.includes('Water Division')));
 assert.ok(entries.some(entry => entry.en.includes('Water Pollution Control')));
 assert.ok(entries.some(entry => entry.en.includes('Building Department')));
});

test('Meriden town narrative is substantial, bilingual and cautious about revaluation and utilities', () => {
 const source = read('lib/town-highlights.ts');
 const match = source.match(/^ 'meriden':(\\{.*\\}),$/m);
 assert.ok(match, 'Missing Meriden town guide');
 const guide = JSON.parse(match[1]);
 assert.ok(guide.en.length > 2200);
 assert.ok(guide.es.length > 2400);
 assert.equal(guide.en.split('\\n\\n').length, 4);
 assert.equal(guide.es.split('\\n\\n').length, 4);
 for (const name of ['Hubbard Park','Castle Craig','Giuffrida Park','Meriden Green']) {
  assert.ok(guide.places.includes(name), name);
 }
 assert.match(guide.en, /29\\.99/);
 assert.match(guide.es, /29,99/);
 assert.match(guide.en, /district charges/);
 assert.match(guide.es, /cargos distritales/);
 assert.match(guide.en, /private hauler/);
 assert.match(guide.es, /proveedor privado/);
 assert.match(guide.en, /Grand Central/);
});

test('Meriden keeps bilingual resources and does not invent Joey personal Top Picks', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townOfficialLinks\\[slug\\]\\.map/);
 assert.match(page, /TownMovingResources slug=\\{slug\\}/);
 const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1] || '';
 assert.doesNotMatch(picks, /^\\s*'meriden':/m);
});
