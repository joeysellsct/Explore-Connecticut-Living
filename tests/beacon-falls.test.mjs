import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Beacon Falls has a substantive original bilingual guide with moving and visitor cautions', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'beacon-falls':(\{.*\}),$/m);
  assert.ok(match, 'Missing Beacon Falls guide');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 2000 && guide.es.length > 2200);
  for (const term of ['Matthies Park', 'Pent Road', 'Riverbend Park', '23.67', '2025 revaluation', 'May 31, 2027']) {
    assert.ok(guide.en.includes(term), 'English guide missing ' + term);
  }
  for (const term of ['Matthies Park', 'Pent Road', 'Riverbend Park', '23,67', 'reevaluación', '31 de mayo de 2027']) {
    assert.ok(guide.es.includes(term), 'Spanish guide missing ' + term);
  }
  assert.ok(guide.places.length >= 5);
});

test('Beacon Falls has thirteen unique bilingual official municipal and moving resources', () => {
  const source = read('lib/town-official-links.ts');
  const match = source.match(/^ 'beacon-falls': \[(.*?)^ \],/ms);
  assert.ok(match, 'Missing Beacon Falls resource collection');
  const entries = match[1].split('\n').map(line => line.trim()).filter(Boolean);
  assert.equal(entries.length, 13);
  const urls = [];
  for (const line of entries) {
    assert.match(line, /^\{en:"[^"]+",es:"[^"]+",url:"https:\/\/[^"]+"\},?$/);
    const url = line.match(/url:"([^"]+)"/)[1];
    assert.equal(new URL(url).protocol, 'https:');
    urls.push(url);
  }
  assert.equal(new Set(urls).size, 13);
  assert.ok(urls.some(url => url.includes('FY27-Narrative-Final-Adopted')));
  assert.ok(urls.some(url => url.includes('/209/Tax-Collector')));
  assert.ok(urls.some(url => url.includes('/206/Wastewater-Treatment-Plant')));
  assert.ok(urls.some(url => url.includes('station-upgrades')));
});

test('Beacon Falls stays outside Joey personal restaurant Top Picks', () => {
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1];
  assert.ok(picks, 'Missing personal picks registry');
  assert.doesNotMatch(picks, /['"]beacon-falls['"]\s*:/);
});

test('Shared town page retains bilingual resources and staging indexing safeguards', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /townRestaurants\[slug\]/);
  assert.match(page, /townPhotography\[slug\]/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
});


test('Beacon Falls has three sourced and attributed historic photographs', () => {
  const source = read('lib/town-photography.ts');
  const match = source.match(/^ 'beacon-falls': \[(.*?)^ \],/ms);
  assert.ok(match, 'Missing Beacon Falls photo gallery');
  const photos = JSON.parse(('[' + match[1] + ']').replace(/,\s*]/g, ']'));
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(photo => photo.file)).size, 3);
  const expected = new Map([
    ['BeaconFalls DepotStreetBridge.jpg', ['Magicpiano', 'CC BY-SA 4.0', '2017']],
    ['BeaconFallsCT HomeWoolenCompany1.jpg', ['Magicpiano', 'CC BY-SA 4.0', '2017']],
    ['Beacon Falls Station.jpg', ['Adam Moss', 'CC BY-SA 2.0', '2011']],
  ]);
  for (const photo of photos) {
    const details = expected.get(photo.file);
    assert.ok(details, 'Unexpected photo: ' + photo.file);
    assert.equal(photo.credit, details[0]);
    assert.equal(photo.license, details[1]);
    assert.ok(photo.title.includes(details[2]) && photo.titleEs.includes(details[2]));
    assert.equal(new URL(photo.licenseUrl).protocol, 'https:');
  }
  assert.ok(photos.find(photo => photo.file === 'Beacon Falls Station.jpg').title.includes('historic'));
});

test('Beacon Falls has six independently sourced dining and bakery entries in both languages', () => {
  const source = read('lib/town-restaurants.ts');
  const match = source.match(/^  'beacon-falls': \[([\s\S]*?)^  \],/m);
  assert.ok(match, 'Missing Beacon Falls dining directory');
  const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{'))
    .map(line => JSON.parse(line.replace(/,$/, '')));
  assert.equal(entries.length, 6);
  assert.equal(new Set(entries.map(entry => entry.name)).size, 6);
  const expected = [
    'The Beacon Pizza Bar', 'Beacon Falls Tavern', "The Original Antonio's",
    "Rocco's Pizza", 'The Tap House', "Molly's Bakery",
  ];
  assert.deepEqual(entries.map(entry => entry.name), expected);
  for (const entry of entries) {
    assert.ok(entry.cuisine.length > 20 && entry.cuisineEs.length > 20);
    assert.equal(new URL(entry.sourceUrl).protocol, 'https:');
    if (entry.website) assert.equal(new URL(entry.website).protocol, 'https:');
    assert.equal(entry.checkedOn, '2026-10-24');
    assert.equal(entry.rating, undefined, 'Do not invent ratings');
    assert.equal(entry.reviewCount, undefined, 'Do not invent review counts');
  }
  assert.ok(!entries.some(entry => /New Harvest|Pizza Palace/i.test(entry.name)),
    'Conflicting older restaurant listings should not be added without verification');
});
