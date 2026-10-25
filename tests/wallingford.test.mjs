import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Wallingford municipal directory has 14 unique, sourced bilingual resources', () => {
 const source = read('lib/town-official-links.ts');
 const match = source.match(/^ 'wallingford': \[(.*?)^ \],/ms);
 assert.ok(match, 'Missing Wallingford municipal links');
 const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 14);
 assert.equal(new Set(entries.map(entry => entry.url)).size, 14);
 for (const entry of entries) {
  assert.ok(entry.en.length > 25 && entry.es.length > 25);
  assert.equal(new URL(entry.url).protocol, 'https:');
 }
 assert.ok(entries.some(entry => entry.en.includes('24.57') && entry.es.includes('24,57')));
 assert.ok(entries.some(entry => entry.en.includes('Electric Division')));
 assert.ok(entries.some(entry => entry.en.includes('not every parcel')));
 assert.ok(entries.some(entry => entry.en.includes('RECORDhub')));
 assert.ok(entries.some(entry => entry.en.includes('Building')));
});

test('Wallingford original English and Spanish guides cover tax, utilities, attractions and transit', () => {
 const source = read('lib/town-highlights.ts');
 const match = source.match(/^ 'wallingford':(\{.*\}),$/m);
 assert.ok(match, 'Missing Wallingford town guide');
 const guide = JSON.parse(match[1]);
 assert.ok(guide.en.length > 1900);
 assert.ok(guide.es.length > 2000);
 assert.equal(guide.en.split('\n\n').length, 4);
 assert.equal(guide.es.split('\n\n').length, 4);
 assert.match(guide.en, /24\.57-mill/);
 assert.match(guide.es, /24,57 mills/);
 assert.match(guide.en, /2024.*revaluation/);
 assert.match(guide.en, /not necessarily every property/);
 assert.match(guide.es, /no necesariamente todas las propiedades/);
 assert.match(guide.en, /Hartford Line/);
 assert.match(guide.es, /Metro-North/);
 for (const place of ['Quinnipiac River Linear Trail', 'Community Lake Park', 'Gouveia Vineyards', 'Wallingford Station']) {
  assert.ok(guide.places.includes(place), place);
 }
});

test('Wallingford content retains bilingual town rendering and restricts Joey Top Picks', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townOfficialLinks\[slug\]\.map/);
 assert.match(page, /TownMovingResources slug=\{slug\}/);
 const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1] || '';
 assert.doesNotMatch(picks, /^\s*'wallingford':/m);
});

test('Wallingford has five operator-sourced bilingual restaurant listings without invented ratings', () => {
 const source = read('lib/town-restaurants.ts');
 const match = source.match(/^ 'wallingford': \[(.*?)^ \],/ms);
 assert.ok(match, 'Missing Wallingford dining directory');
 const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 5);
 assert.equal(new Set(entries.map(entry => entry.name)).size, 5);
 assert.equal(new Set(entries.map(entry => entry.website)).size, 5);
 for (const entry of entries) {
  assert.ok(entry.cuisine.length > 35 && entry.cuisineEs.length > 35);
  assert.equal(new URL(entry.website).protocol, 'https:');
  assert.equal(new URL(entry.sourceUrl).protocol, 'https:');
  assert.equal(entry.checkedOn, '2026-10-25');
  assert.equal(entry.rating, undefined);
  assert.equal(entry.reviewCount, undefined);
 }
 for (const name of ["Michael's Trattoria", 'Knuckleheads Taproom', 'Pig Rig BBQ', 'Hometown Pizza', 'Wood-n-Tap Wallingford']) {
  assert.ok(entries.some(entry => entry.name === name), name);
 }
});
