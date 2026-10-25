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

test('Waterbury dining contains five operator-sourced bilingual listings without invented scores', () => {
 const source = read('lib/town-restaurants.ts');
 const match = source.match(/^ 'waterbury': \[(.*?)^ \],/ms);
 assert.ok(match, 'Waterbury restaurant directory missing');
 const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 5);
 assert.equal(new Set(entries.map(entry => entry.name)).size, 5);
 assert.equal(new Set(entries.map(entry => entry.sourceUrl)).size, 5);
 for (const entry of entries) {
  assert.ok(entry.cuisine.length > 40 && entry.cuisineEs.length > 40, entry.name);
  assert.equal(new URL(entry.sourceUrl).protocol, 'https:');
  assert.equal(new URL(entry.website).protocol, 'https:');
  assert.equal(entry.checkedOn, '2026-10-25');
  assert.equal(entry.rating, undefined);
  assert.equal(entry.reviewCount, undefined);
 }
 for (const name of ['Diorio Restaurant & Bar', "D'Amelio's Italian Eatery", 'Signatures Restaurant', 'Brass City Bistro', 'La Tavola Ristorante']) {
  assert.ok(entries.some(entry => entry.name === name), name);
 }
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.ok(page.includes('townRestaurants[slug]'));
});

test('Waterbury photography includes three dated, attributed Commons-licensed town images', () => {
 const source = read('lib/town-photography.ts');
 const match = source.match(/^ 'waterbury': \[(.*?)^ \],/ms);
 assert.ok(match, 'Waterbury photo gallery missing');
 const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 3);
 assert.equal(new Set(entries.map(entry => entry.file)).size, 3);
 for (const entry of entries) {
  assert.match(entry.title, /photograph/);
  assert.match(entry.titleEs, /fotografía/);
  assert.ok(entry.credit.length > 4);
  assert.equal(entry.license, 'CC BY-SA 4.0');
  assert.equal(entry.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
  assert.ok(entry.file.toLowerCase().endsWith('.jpg'));
 }
 assert.ok(entries.some(entry => entry.file === 'Waterbury City Hall.jpg' && entry.credit === 'Farragutful'));
 assert.ok(entries.some(entry => entry.file === 'PalaceTheater-WaterburyCT-1.jpg' && entry.credit === 'Koskenart'));
 assert.ok(entries.some(entry => entry.file === 'WATERBURY UNION STATION BUILDING.jpg' && entry.credit.includes('Ted Shaffrey')));
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.ok(page.includes('townPhotography[slug]'));
 assert.ok(page.includes('photo.licenseUrl'));
});
