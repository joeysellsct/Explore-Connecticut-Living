import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const townEntries = (path, town) => {
 const source = read(path);
 const escaped = town.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
 const match = source.match(new RegExp("^ '" + escaped + "': \\[([\\s\\S]*?)^ \\],", 'm'));
 assert.ok(match, 'Missing ' + town + ' records in ' + path);
 return match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
};

test('Woodbridge municipal directory has 13 distinct bilingual source links', () => {
 const links = townEntries('lib/town-official-links.ts', 'woodbridge');
 assert.equal(links.length, 13);
 assert.equal(new Set(links.map(item => item.url)).size, 13);
 for (const item of links) {
  assert.ok(item.en.length > 35 && item.es.length > 35);
  assert.equal(new URL(item.url).protocol, 'https:');
 }
 assert.ok(links.some(item => item.en.includes('33.99') && item.es.includes('33,99')));
 assert.ok(links.some(item => item.en.includes('32.46') && item.es.includes('32,46')));
 assert.ok(links.some(item => item.en.includes('sewer or septic')));
 assert.ok(links.some(item => item.en.includes('private well')));
 assert.ok(links.some(item => item.en.includes('Land Records') || item.en.includes('land records')));
});

test('Woodbridge restaurant directory has five current operator-sourced bilingual entries', () => {
 const restaurants = townEntries('lib/town-restaurants.ts', 'woodbridge');
 assert.equal(restaurants.length, 5);
 assert.equal(new Set(restaurants.map(item => item.name)).size, 5);
 assert.equal(new Set(restaurants.map(item => item.sourceUrl)).size, 5);
 for (const item of restaurants) {
  assert.ok(item.cuisine.length > 30 && item.cuisineEs.length > 30);
  assert.equal(new URL(item.website).protocol, 'https:');
  assert.equal(new URL(item.sourceUrl).protocol, 'https:');
  assert.equal(item.checkedOn, '2026-10-25');
  assert.equal(item.rating, undefined);
  assert.equal(item.reviewCount, undefined);
 }
 for (const name of ['Woodbridge Social', 'Thai Stories Restaurant', 'Solun Tapas Bar', 'El Gallo Dorado', "Katz's Deli"]) {
  assert.ok(restaurants.some(item => item.name === name), name);
 }
});

test('Woodbridge links and restaurants use shared town template and do not add personal Top Picks', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townOfficialLinks\[slug\]/);
 assert.match(page, /townRestaurants\[slug\]\.map/);
 const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1] || '';
 assert.doesNotMatch(picks, /^\s*'woodbridge':/m);
});

test('Woodbridge original bilingual guide covers landmarks, tax, permits, water and sewer', () => {
 const source = read('lib/town-highlights.ts');
 const match = source.match(/^ 'woodbridge':(\{.*\}),$/m);
 assert.ok(match, 'Woodbridge guide missing');
 const guide = JSON.parse(match[1]);
 assert.ok(guide.en.length > 2500 && guide.es.length > 2500);
 assert.equal(guide.en.split('\n\n').length, 4);
 assert.equal(guide.es.split('\n\n').length, 4);
 for (const place of ['Woodbridge Green Historic District', 'Darling Farmstead and History Museum', 'Alice Newton Street Memorial Park', 'Fitzgerald Tract', 'Lake Chamberlain']) {
  assert.ok(guide.places.includes(place), place);
 }
 assert.match(guide.en, /33\.99-mill/);
 assert.match(guide.es, /33,99 mills/);
 assert.match(guide.en, /private well/);
 assert.match(guide.en, /limited sewer network/);
 assert.match(guide.en, /not Joey's personal endorsements/);
});

test('Woodbridge has three correctly credited Commons photos with dated bilingual captions', () => {
 const photos = townEntries('lib/town-photography.ts', 'woodbridge');
 assert.equal(photos.length, 3);
 assert.equal(new Set(photos.map(photo => photo.file)).size, 3);
 for (const photo of photos) {
  assert.ok(photo.title.includes('photograph') && photo.titleEs.includes('fotografía'));
  assert.ok(photo.title.includes('Woodbridge') || photo.title.includes('Woodbridge Green'));
  assert.ok(photo.titleEs.includes('Woodbridge'));
  assert.match(photo.license, /^CC BY-SA (3\.0|4\.0)$/);
  assert.equal(new URL(photo.licenseUrl).protocol, 'https:');
  assert.ok(photo.credit === 'Staib' || photo.credit === 'Magicpiano');
 }
 assert.ok(photos.some(photo => photo.file === 'Woodbridge-ct-1st-church-of-christ.jpg' && photo.credit === 'Staib'));
 assert.ok(photos.some(photo => photo.file.includes('NewEnglandCementCompanyQuarry') && photo.credit === 'Magicpiano'));
 assert.ok(photos.some(photo => photo.file.includes('ChatfieldFarmstead') && photo.credit === 'Magicpiano'));
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townPhotography\[slug\]/);
});
