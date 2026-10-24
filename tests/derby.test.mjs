import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const townArray = (path, slug) => {
  const source = read(path);
  const anchor = "'" + slug + "': [";
  const start = source.indexOf(anchor);
  assert.ok(start >= 0, 'Missing ' + slug + ' in ' + path);
  const left = source.indexOf('[', start + anchor.length - 1);
  const right = source.indexOf('],', left);
  assert.ok(right > left, 'Missing closing town array in ' + path);
  return JSON.parse(source.slice(left, right + 1).replace(/,\s*]/g, ']'));
};

test('Derby has substantive bilingual guide with accurate taxes, sewer and rail cautions', () => {
  const match = read('lib/town-highlights.ts').match(/^  'derby':(\{.*\}),$/m);
  assert.ok(match, 'Derby guide missing');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 2400 && guide.es.length > 2600);
  for (const term of ['Derby Greenway', 'Osbornedale', '38.44', '32.46', 'Waterbury Branch', 'May 31, 2027', 'Water Pollution Control Authority']) {
    assert.ok(guide.en.includes(term), 'English guide missing ' + term);
  }
  for (const term of ['Derby Greenway', 'Osbornedale', '38,44', '32,46', '31 de mayo de 2027', 'alcantarillado']) {
    assert.ok(guide.es.includes(term), 'Spanish guide missing ' + term);
  }
});

test('Derby has fifteen unique bilingual public research links', () => {
  const links = townArray('lib/town-official-links.ts', 'derby');
  assert.equal(links.length, 15);
  assert.equal(new Set(links.map(x => x.url)).size, 15);
  for (const item of links) {
    assert.ok(item.en && item.es);
    assert.equal(new URL(item.url).protocol, 'https:');
  }
  assert.ok(links.some(x => x.url.includes('/tax-collector')));
  assert.ok(links.some(x => x.url.includes('/water-pollution-control-authority')));
  assert.ok(links.some(x => x.url.includes('substitute-busing-wbl')));
});

test('Derby dining directory has five verified bilingual editorial listings', () => {
  const items = townArray('lib/town-restaurants.ts', 'derby');
  assert.equal(items.length, 5);
  assert.equal(new Set(items.map(x => x.name)).size, 5);
  for (const item of items) {
    assert.ok(item.name && item.cuisine && item.cuisineEs && item.sourceUrl);
    assert.equal(item.checkedOn, '2026-10-24');
    assert.equal(new URL(item.sourceUrl).protocol, 'https:');
    assert.equal(item.rating, undefined);
    assert.equal(item.reviewCount, undefined);
  }
  assert.ok(items.find(x => x.name === 'Roseland Apizza')?.sourceUrl.includes('superpages.com'));
});

test('Derby photo credits preserve three distinct Commons licenses', () => {
  const photos = townArray('lib/town-photography.ts', 'derby');
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(x => x.file)).size, 3);
  for (const photo of photos) {
    assert.ok(photo.title && photo.titleEs && photo.credit && photo.license);
    assert.ok(photo.licenseUrl.startsWith('https://creativecommons.org/licenses/'));
  }
  assert.ok(photos.some(x => x.credit === 'Staib'));
  assert.ok(photos.some(x => x.credit === 'John Phelan'));
  assert.ok(photos.some(x => x.credit === 'Polaron'));
});

test('Shared town page retains resources, photos, partner disclosures and staging robots', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /townPhotography\[slug\]/);
  assert.match(page, /townRestaurants\[slug\]/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
  assert.match(read('app/[locale]/towns/[slug]/TownMovingResources.tsx'), /partnerLinks\.map/);
});
