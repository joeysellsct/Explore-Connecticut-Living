import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('North Branford has bilingual property and moving resources with current sourced tax information', () => {
 const source = read('lib/town-official-links.ts');
 const start = source.indexOf(" 'north-branford': [");
 assert.ok(start >= 0);
 const end = source.indexOf('\n ],', start);
 assert.ok(end > start);
 const entries = source.slice(start, end).split('\n').map(s => s.trim()).filter(s => s.startsWith('{')).map(s => JSON.parse(s.replace(/,$/, '')));
 assert.equal(entries.length, 13);
 assert.equal(new Set(entries.map(x => x.url)).size, 12); // Engineering is intentionally linked for both sewer and streetlights.
 for (const item of entries) {
  assert.ok(item.en.length > 55 && item.es.length > 55, item.url);
  assert.equal(new URL(item.url).protocol, 'https:');
 }
 assert.ok(entries.some(x => x.en.includes('28.81 mills') && x.es.includes('28,81 mills')));
 assert.ok(entries.some(x => x.en.includes('public sewer connection')));
 assert.ok(entries.some(x => x.en.includes('septic permits and private-well')));
 assert.ok(entries.some(x => x.url.includes('Town-Clerk')));
 assert.ok(entries.some(x => x.url.includes('Building-Department')));
});

test('North Branford town guide has four original paragraphs per language and property caveats', () => {
 const source = read('lib/town-highlights.ts');
 const line = source.split('\n').find(x => x.trimStart().startsWith("'north-branford':{"));
 assert.ok(line);
 const guide = JSON.parse(line.slice(line.indexOf('{')).replace(/,$/, ''));
 assert.ok(guide.en.length > 2400 && guide.es.length > 2600);
 assert.equal(guide.en.split('\n\n').length, 4);
 assert.equal(guide.es.split('\n\n').length, 4);
 for (const place of ['Reynolds-Beers House','Harrison Farm Preserve','North Farms Park']) {
  assert.ok(guide.places.includes(place));
  assert.ok(guide.en.includes(place));
 }
 assert.ok(guide.en.includes('28.81 mills'));
 assert.ok(guide.es.includes('28,81 mills'));
 assert.ok(guide.en.includes('28.91-mill proposal'));
 assert.ok(guide.en.includes('septic system'));
 assert.ok(guide.es.includes('sistema séptico'));
 assert.ok(guide.en.includes('electric supplier must be confirmed directly'));
});

test('North Branford uses shared town template and does not add Joey personal Top Picks', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 for (const snippet of ['townHighlights[slug]','townOfficialLinks[slug]','townRestaurants[slug]','townPhotography[slug]']) {
  assert.ok(page.includes(snippet), snippet);
 }
 const restaurants = read('lib/town-restaurants.ts');
 const start = restaurants.indexOf(" 'north-branford': [");
 assert.ok(start >= 0);
 const end = restaurants.indexOf('\\n ],', start);
 assert.ok(end > start);
 const listings = restaurants.slice(start, end).split('\\n').map(x => x.trim()).filter(x => x.startsWith('{')).map(x => JSON.parse(x.replace(/,$/, '')));
 assert.equal(listings.length, 5);
 assert.equal(new Set(listings.map(x => x.name)).size, 5);
 for (const item of listings) {
  assert.ok(item.cuisine.length > 55 && item.cuisineEs.length > 55, item.name);
  assert.ok(item.website.startsWith('https://'));
  assert.ok(item.sourceUrl.startsWith('https://'));
  assert.equal(item.checkedOn, '2026-10-25');
  assert.equal(item.rating, undefined);
 }
 assert.ok(listings.some(x => x.name.includes('Millpond') && x.cuisine.includes('Northford')));
 const photos = read('lib/town-photography.ts');
 assert.ok(!photos.includes("'north-branford': ["), 'photos require separate location and license verification');
});
