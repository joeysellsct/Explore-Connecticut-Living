import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Naugatuck English and Spanish guides explain verified local and moving facts', () => {
  const source = read('lib/town-highlights.ts');
  const match = source.match(/^ 'naugatuck':(\{.*\}),$/m);
  assert.ok(match, 'Naugatuck town guide missing');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 2000 && guide.es.length > 2200);
  for (const phrase of ['Gunntown', 'Andrew Mountain', 'Larkin', '40.44', '32.46', 'May 31, 2027', 'Connecticut Water']) {
    assert.ok(guide.en.includes(phrase), 'English guide missing ' + phrase);
  }
  for (const phrase of ['Gunntown', 'Andrew Mountain', 'Larkin', '40,44', '32,46', '31 de mayo de 2027', 'Connecticut Water']) {
    assert.ok(guide.es.includes(phrase), 'Spanish guide missing ' + phrase);
  }
  assert.equal(guide.places.length, 5);
});

test('Naugatuck official resources have 15 unique bilingual sourced links', () => {
  const source = read('lib/town-official-links.ts');
  const match = source.match(/^ 'naugatuck': \[(.*?)^ \],/ms);
  assert.ok(match, 'Naugatuck official resources missing');
  const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
  assert.equal(entries.length, 15);
  assert.equal(new Set(entries.map(entry => entry.url)).size, 15);
  for (const entry of entries) {
    assert.ok(entry.en.length > 20 && entry.es.length > 20);
    assert.equal(new URL(entry.url).protocol, 'https:');
  }
  for (const urlPart of ['/assessor', '/tax-office', '/town-clerk', '/building-inspector', '/land-use-planning-zoning', '/engineering-water-pollution-control', '/parks-trails', '/substitute-busing-wbl']) {
    assert.ok(entries.some(entry => entry.url.includes(urlPart)), 'Missing ' + urlPart);
  }
});

test('Naugatuck uses the shared compliance, moving and bilingual town template', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /townHighlights\[slug\]\.es/);
  assert.match(page, /TownMovingResources slug=\{slug\}/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1];
  assert.ok(picks);
  assert.doesNotMatch(picks, /['"]naugatuck['"]\s*:/);
});

test('Naugatuck dining directory has five current operator-sourced bilingual entries', () => {
  const source = read('lib/town-restaurants.ts');
  const match = source.match(/^ 'naugatuck': \[(.*?)^ \],/ms);
  assert.ok(match, 'Missing Naugatuck restaurant directory');
  const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
  assert.equal(entries.length, 5);
  assert.equal(new Set(entries.map(entry => entry.name)).size, 5);
  for (const name of ["Jesse Camille's Restaurant", 'La Casita Mexican Restaurant & Cantina', 'Salvadorenos Restaurant', 'The Hub Wood Burning Pizza Bar', 'The Station Restaurant & Bar']) {
    assert.ok(entries.some(entry => entry.name === name), 'Missing ' + name);
  }
  for (const entry of entries) {
    assert.ok(entry.cuisine.length > 25 && entry.cuisineEs.length > 25);
    assert.ok(entry.sourceUrl.startsWith('https://'));
    assert.equal(entry.checkedOn, '2026-10-24');
    assert.equal(entry.rating, undefined);
    assert.equal(entry.reviewCount, undefined);
  }
});

test('Naugatuck photo gallery has three town-specific licensed bilingual images', () => {
  const source = read('lib/town-photography.ts');
  const match = source.match(/^ 'naugatuck': \[(.*?)^ \],/ms);
  assert.ok(match, 'Naugatuck gallery missing');
  const photos = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(photo => photo.file)).size, 3);
  for (const photo of photos) {
    assert.ok(photo.title.length > 20 && photo.titleEs.length > 20);
    assert.ok(photo.credit.length > 5);
    assert.match(photo.license, /^CC BY-SA [34]\.0$/);
    assert.ok(photo.licenseUrl.startsWith('https://creativecommons.org/licenses/'));
  }
  assert.equal(photos[0].file, 'Naugatuck Green, Connecticut.jpg');
  assert.equal(photos[1].credit, 'Kenneth C. Zirkel');
  assert.equal(photos[2].credit, 'Bill Hass');
  assert.ok(photos[2].title.includes('2013'));
});
