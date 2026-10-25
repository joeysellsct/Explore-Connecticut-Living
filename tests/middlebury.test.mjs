import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Middlebury municipal and moving links contain 12 distinct bilingual sources', () => {
 const source = read('lib/town-official-links.ts');
 const start = source.indexOf(" 'middlebury': [");
 assert.ok(start >= 0, 'Middlebury resources missing');
 const end = source.indexOf('\n ],', start);
 assert.ok(end > start, 'Middlebury resource block not closed');
 const entries = source.slice(start, end).split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 12);
 assert.equal(new Set(entries.map(item => item.url)).size, 12);
 for (const item of entries) {
  assert.ok(item.en.length > 45 && item.es.length > 45, item.url);
  assert.equal(new URL(item.url).protocol, 'https:');
 }
 assert.ok(entries.some(item => item.en.includes('26.46-mill') && item.es.includes('26,46 mills')));
 assert.ok(entries.some(item => item.en.includes('public sewer or uses septic')));
 assert.ok(entries.some(item => item.en.includes('public water or a private well') || item.en.includes('utility service and fees by address')));
 assert.ok(entries.some(item => item.url.includes('Town-Clerks-Office')));
 assert.ok(entries.some(item => item.url.includes('Building-Land-Use-Department')));
});

test('Middlebury guide contains four substantive English and Spanish paragraphs', () => {
 const source = read('lib/town-highlights.ts');
 const line = source.split('\n').find(item => item.trimStart().startsWith("'middlebury':{"));
 assert.ok(line, 'Middlebury town guide missing');
 const guide = JSON.parse(line.slice(line.indexOf('{')).replace(/,$/, ''));
 assert.ok(guide.en.length > 2000 && guide.es.length > 2200);
 assert.equal(guide.en.split('\n\n').length, 4);
 assert.equal(guide.es.split('\n\n').length, 4);
 for (const place of ['Quassy Amusement & Waterpark', 'Middlebury Greenway', 'Larkin State Park Trail', 'Hetzel Refuge']) {
  assert.ok(guide.places.includes(place), place);
  assert.ok(guide.en.includes(place), place);
 }
 assert.ok(guide.en.includes('26.46-mill'));
 assert.ok(guide.es.includes('26,46 mills'));
 assert.ok(guide.en.includes('public sewer versus septic'));
 assert.ok(guide.es.includes('alcantarillado frente a sistema séptico'));
});

test('Middlebury resources and guide use the shared bilingual template without adding a personal Top Pick', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.ok(page.includes('townOfficialLinks[slug]'));
 assert.ok(page.includes('townHighlights[slug]'));
 assert.ok(page.includes('townRestaurants[slug]'));
 assert.ok(page.includes('townPhotography[slug]'));
 const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1] || '';
 assert.ok(!picks.includes("'middlebury':"));
 for (const town of ["'cheshire':", "'branford':", "'west-haven':"]) assert.ok(picks.includes(town));
});

test('Middlebury dining contains five current operator-sourced bilingual listings', () => {
 const source = read('lib/town-restaurants.ts');
 const start = source.indexOf(" 'middlebury': [");
 assert.ok(start >= 0, 'Middlebury dining directory missing');
 const end = source.indexOf('\n ],', start);
 assert.ok(end > start, 'Middlebury dining block not closed');
 const entries = source.slice(start, end).split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
 assert.equal(entries.length, 5);
 assert.equal(new Set(entries.map(item => item.name)).size, 5);
 assert.equal(new Set(entries.map(item => item.sourceUrl)).size, 5);
 for (const item of entries) {
  assert.ok(item.cuisine.length > 50 && item.cuisineEs.length > 50, item.name);
  assert.equal(new URL(item.sourceUrl).protocol, 'https:');
  assert.equal(new URL(item.website).protocol, 'https:');
  assert.equal(item.checkedOn, '2026-10-25');
  assert.equal(item.rating, undefined);
  assert.equal(item.reviewCount, undefined);
 }
 for (const name of ["Maggie McFly's | Middlebury", 'Vyne Restaurant & Bar', 'Pies & Pub', 'Maples Family Restaurant', "Señor Pancho's of Middlebury"]) {
  assert.ok(entries.some(item => item.name === name), name);
 }
});
