import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Wolcott municipal links are bilingual, unique and sourced', () => {
 const source = read('lib/town-official-links.ts');
 const start = source.indexOf(" 'wolcott': [");
 assert.ok(start >= 0);
 const end = source.indexOf('\n ],', start);
 assert.ok(end > start);
 const entries = source.slice(start, end).split('\n').map(s => s.trim()).filter(s => s.startsWith('{')).map(s => JSON.parse(s.replace(/,$/, '')));
 assert.equal(entries.length, 11);
 assert.equal(new Set(entries.map(x => x.url)).size, 11);
 for (const entry of entries) {
  assert.ok(entry.en.length >= 60 && entry.es.length >= 60, entry.url);
  assert.equal(new URL(entry.url).protocol, 'https:');
 }
 assert.ok(entries.some(x => x.en.includes('28.90 mills') && x.es.includes('28,90 mills')));
 for (const urlPart of ['/181/Assessor', '/218/Tax-Collector', '/230/Town-Clerk', '/216/Sewer-Water']) {
  assert.ok(entries.some(x => x.url.includes(urlPart)), urlPart);
 }
});

test('Wolcott has a four-paragraph English and Spanish guide with careful property claims', () => {
 const source = read('lib/town-highlights.ts');
 const line = source.split('\n').find(x => x.trimStart().startsWith("'wolcott': "));
 assert.ok(line);
 const guide = JSON.parse(line.slice(line.indexOf('{')).replace(/,$/, ''));
 assert.ok(guide.en.length >= 2400 && guide.es.length >= 2600);
 assert.equal(guide.en.split('\n\n').length, 4);
 assert.equal(guide.es.split('\n\n').length, 4);
 for (const name of ['Woodtick Reservoir', 'Mill Pond Way', 'Peterson Park']) {
  assert.ok(guide.places.includes(name), name);
  assert.ok(guide.en.includes(name), name);
 }
 assert.ok(guide.en.includes('28.90-mill'));
 assert.ok(guide.es.includes('28,90 mills'));
 assert.ok(guide.en.includes('specific assessment'));
 assert.ok(guide.es.includes('por dirección'));
});

test('Wolcott guide does not create unverified dining, photos or Joey Top Picks', () => {
 const source = read('lib/town-restaurants.ts');
 assert.ok(source.includes(" 'wolcott': ["));
 const photos = read('lib/town-photography.ts');
 assert.ok(!photos.includes(" 'wolcott': ["));
 const picks = source.slice(source.indexOf('export const joeyTopPicks'));
 assert.ok(!picks.includes("'wolcott':"));
});


test('Wolcott dining directory has five sourced bilingual restaurants and no invented scores', () => {
 const source = read('lib/town-restaurants.ts');
 const start = source.indexOf(" 'wolcott': [");
 assert.ok(start >= 0);
 const end = source.indexOf('\n ],', start);
 assert.ok(end > start);
 const entries = source.slice(start, end).split('\n').map(s => s.trim()).filter(s => s.startsWith('{')).map(s => JSON.parse(s.replace(/,$/, '')));
 assert.equal(entries.length, 5);
 assert.equal(new Set(entries.map(x => x.name)).size, 5);
 for (const entry of entries) {
  assert.ok(entry.cuisine.length >= 45 && entry.cuisineEs.length >= 45, entry.name);
  assert.equal(new URL(entry.sourceUrl).protocol, 'https:');
  assert.equal(entry.checkedOn, '2026-10-25');
  assert.equal(entry.rating, undefined);
  assert.equal(entry.reviewCount, undefined);
 }
 const picks = source.slice(source.indexOf('export const joeyTopPicks'));
 assert.ok(!picks.includes("'wolcott':"));
});
