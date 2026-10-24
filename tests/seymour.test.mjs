import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Seymour guide has sourced, substantive English and Spanish moving guidance', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'seymour':(\{.*\}),$/m);
  assert.ok(match, 'Missing Seymour town highlight');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1000 && guide.es.length > 1000);
  for (const term of ['Broad Street Park', 'French Memorial Park', '28.64', 'July 20, 2026', 'May 31, 2027', 'Aquarion']) {
    assert.ok(guide.en.includes(term), 'Missing English detail: ' + term);
  }
  for (const term of ['Broad Street Park', 'French Memorial Park', '28,64', '20 de julio de 2026', '31 de mayo de 2027', 'Aquarion']) {
    assert.ok(guide.es.includes(term), 'Missing Spanish detail: ' + term);
  }
  assert.ok(guide.places.length >= 4);
});

test('Seymour has twelve distinct bilingual official research resources', () => {
  const source = read('lib/town-official-links.ts');
  const match = source.match(/^ 'seymour': \[(.*?)^ \],/ms);
  assert.ok(match, 'Missing Seymour municipal links');
  const links = JSON.parse(('[' + match[1] + ']').replace(/,\s*]/g, ']'));
  assert.equal(links.length, 12);
  assert.equal(new Set(links.map(link => link.url)).size, links.length);
  for (const link of links) {
    assert.ok(link.en && link.es);
    assert.equal(new URL(link.url).protocol, 'https:');
  }
  assert.ok(links.some(link => link.url.includes('/directory/assessor')));
  assert.ok(links.some(link => link.url.includes('/TownClerk')));
  assert.ok(links.some(link => link.url.includes('/WaterPollutionControlAuthority')));
});

test('Seymour does not gain an unapproved personal restaurant Top Pick', () => {
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1];
  assert.ok(picks, 'Missing personal-picks registry');
  assert.doesNotMatch(picks, /['"]seymour['"]\s*:/);
});


test('Seymour restaurants have verified bilingual descriptions and no invented ratings', () => {
  const source = read('lib/town-restaurants.ts');
  const match = source.match(/^  'seymour': \[(.*?)^  \],/ms);
  assert.ok(match, 'Missing Seymour restaurant directory');
  const restaurants = JSON.parse(('[' + match[1] + ']').replace(/,\s*]/g, ']'));
  assert.equal(restaurants.length, 5);
  assert.equal(new Set(restaurants.map(item => item.name)).size, 5);
  for (const item of restaurants) {
    assert.ok(item.cuisine && item.cuisineEs, 'Missing bilingual cuisine for ' + item.name);
    assert.equal(item.checkedOn, '2026-10-24');
    assert.equal(new URL(item.sourceUrl).protocol, 'https:');
    assert.equal(item.rating, undefined);
    assert.equal(item.reviewCount, undefined);
  }
  assert.ok(restaurants.some(item => item.name === 'Dock 34' && item.sourceUrl.includes('dock34seymour.com')));
  assert.ok(restaurants.some(item => item.name === 'Train Station Pizza' && item.website.includes('seymourtrainstationpizza.com')));
});

test('Seymour has three separately attributed CC-licensed historic photos', () => {
  const source = read('lib/town-photography.ts');
  const match = source.match(/^ 'seymour': \[(.*?)^ \],/ms);
  assert.ok(match, 'Missing Seymour photo registry');
  const photos = JSON.parse(('[' + match[1] + ']').replace(/,\s*]/g, ']'));
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(photo => photo.file)).size, 3);
  for (const photo of photos) {
    assert.ok(photo.title.includes('2012') && photo.titleEs.includes('2012'));
    assert.equal(photo.credit, 'Joe Mabel');
    assert.equal(photo.license, 'CC BY-SA 3.0');
    assert.equal(photo.licenseUrl, 'https://creativecommons.org/licenses/by-sa/3.0/');
    assert.ok(photo.file.startsWith('Seymour, CT - '));
  }
});


test('Seymour gallery discloses cropped historic images in both languages and links original licensing', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /Images are cropped to fit the layout and may depict historic scenes/);
  assert.match(page, /Las imágenes se recortan para ajustarse al diseño/);
  assert.match(page, /photo\.licenseUrl/);
  assert.match(page, /File:\$\{encodeURIComponent\(photo\.file\)\}/);
  assert.match(page, /className="eh-gallery-credits"/);
});


test('Seymour town profile offers a same-town English/Spanish switch', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.ok(page.includes("href={`/${es?'en':'es'}/towns/${slug}`}"));
  assert.ok(page.includes("hrefLang={es?'en-US':'es-US'}"));
  assert.ok(page.includes('Leer esta guía en español'));
  assert.ok(page.includes('Read this town guide in English'));
});

test('Seymour and other town guides publish localized municipality structured data', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /const townPlaceSchema=/);
  assert.match(page, /'@type':'AdministrativeArea'/);
  assert.match(page, /'@type':'WebPage'/);
  assert.match(page, /inLanguage:es\?'es-US':'en-US'/);
  assert.match(page, /about:\{'@id':townPlaceId\}/);
  assert.match(page, /JSON\.stringify\(townPlaceSchema\)/);
  assert.match(page, /const townPageUrl=/);
  assert.match(page, /const townPlaceId=/);
});
