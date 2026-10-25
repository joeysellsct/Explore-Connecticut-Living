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

test('North Haven dining directory contains five sourced bilingual operator listings without invented ratings', () => {
 const source = read('lib/town-restaurants.ts');
 const match = source.match(/^ 'north-haven': \[(.*?)^ \],/ms);
 assert.ok(match, 'Missing North Haven restaurant directory');
 const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 5);
 assert.equal(new Set(entries.map(entry => entry.name)).size, 5);
 assert.equal(new Set(entries.map(entry => entry.website)).size, 5);
 for (const entry of entries) {
  assert.ok(entry.cuisine.length > 25 && entry.cuisineEs.length > 25);
  assert.equal(new URL(entry.website).protocol, 'https:');
  assert.equal(new URL(entry.sourceUrl).protocol, 'https:');
  assert.equal(entry.checkedOn, '2026-10-25');
  assert.equal(entry.rating, undefined);
  assert.equal(entry.reviewCount, undefined);
 }
 const names = entries.map(entry => entry.name);
 assert.ok(names.includes('La Lupa Ristorante'));
 assert.ok(names.includes('Ludal Italian Restaurant'));
 assert.ok(names.includes("Bellini's Italian Restaurant & Pizza"));
 assert.ok(names.includes("J Roo's Restaurant"));
 assert.ok(names.includes("Giulio's Pizza Restaurant & Catering"));
});

test('North Haven bilingual guide explains property due diligence and local attractions', () => {
 const source = read('lib/town-highlights.ts');
 const match = source.match(/^ 'north-haven':(\{.*\}),$/m);
 assert.ok(match, 'Missing North Haven town guide');
 const guide = JSON.parse(match[1]);
 assert.ok(guide.en.length > 1700);
 assert.ok(guide.es.length > 1800);
 assert.match(guide.en, /30\.56/);
 assert.match(guide.es, /30,56/);
 assert.match(guide.en, /revaluation/);
 assert.match(guide.es, /reevaluación/);
 assert.match(guide.en, /sewer/);
 assert.match(guide.es, /alcantarillado/);
 assert.ok(guide.places.includes("Peter's Rock Park"));
 assert.ok(guide.places.includes('Quinnipiac River State Park'));
});
