import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Waterbury municipal directory contains 16 distinct bilingual verified sources', () => {
 const source = read('lib/town-official-links.ts');
 const match = source.match(/^ 'waterbury': \[(.*?)^ \],/ms);
 assert.ok(match, 'Waterbury official resources missing');
 const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 16);
 assert.equal(new Set(entries.map(entry => entry.url)).size, 16);
 for (const entry of entries) {
  assert.ok(entry.en.length > 40 && entry.es.length > 40, entry.url);
  assert.equal(new URL(entry.url).protocol, 'https:');
 }
 assert.ok(entries.some(entry => entry.en.includes('43.34 mills') && entry.es.includes('43,34 mills')));
 assert.ok(entries.some(entry => entry.en.includes('$3.50') && entry.es.includes('$3,50')));
 assert.ok(entries.some(entry => entry.en.includes('not boundary surveys')));
 assert.ok(entries.some(entry => entry.en.includes('do not assume every parcel is connected')));
 assert.ok(entries.some(entry => entry.url.includes('landrecords')));
 assert.ok(entries.some(entry => entry.url.includes('tax-collection')));
});

test('Waterbury resources use the bilingual town template without a new personal Top Pick', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.ok(page.includes('townOfficialLinks[slug].map(link=>'));
 assert.ok(page.includes('es?link.es:link.en'));
 assert.ok(page.includes('<TownMovingResources slug={slug}'));
 const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1] || '';
 assert.doesNotMatch(picks, /^\s*'waterbury':/m);
});
