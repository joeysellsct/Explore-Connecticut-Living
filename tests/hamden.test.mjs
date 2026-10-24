import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const listFor = (path, slug) => {
  const source = read(path);
  const anchor = "'" + slug + "':";
  const start = source.indexOf(anchor);
  assert.ok(start >= 0, 'Missing ' + slug + ' in ' + path);
  const left = source.indexOf('[', start + anchor.length);
  const right = source.indexOf('],', left);
  assert.ok(left > start && right > left, 'Missing array in ' + path);
  return JSON.parse(source.slice(left, right + 1).replace(/,\s*]/g, ']'));
};

test('Hamden has original English and Spanish guides with current tax context', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'hamden':(\{.*\}),$/m);
  assert.ok(match, 'Hamden town guide must be a JSON object');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1800 && guide.es.length > 1800);
  for (const word of ['Sleeping Giant', 'Brooksvale', 'Eli Whitney', '53.67', 'revaluation', 'IQS']) {
    assert.ok(guide.en.includes(word), 'Missing English topic: ' + word);
  }
  for (const word of ['Sleeping Giant', 'Brooksvale', 'Eli Whitney', '53,67', 'reevaluación', 'IQS']) {
    assert.ok(guide.es.includes(word), 'Missing Spanish topic: ' + word);
  }
});

test('Hamden has fourteen unique bilingual municipal and moving links', () => {
  const links = listFor('lib/town-official-links.ts', 'hamden');
  assert.equal(links.length, 14);
  assert.equal(new Set(links.map(x => x.url)).size, 14);
  for (const link of links) {
    assert.ok(link.en && link.es && link.url);
    assert.equal(new URL(link.url).protocol, 'https:');
  }
  for (const fragment of ['/168/Assessors-Office', '/240/Tax-Office', '/243/Town-Clerk', '/174/Building', '/199/Planning-Zoning']) {
    assert.ok(links.some(x => x.url.includes(fragment)), 'Missing official source: ' + fragment);
  }
});

test('Hamden restaurants are five current source-backed bilingual editorial listings', () => {
  const restaurants = listFor('lib/town-restaurants.ts', 'hamden');
  assert.equal(restaurants.length, 5);
  assert.equal(new Set(restaurants.map(x => x.name)).size, 5);
  for (const restaurant of restaurants) {
    assert.ok(restaurant.name && restaurant.cuisine && restaurant.cuisineEs);
    assert.ok(restaurant.website && restaurant.sourceUrl);
    assert.equal(restaurant.checkedOn, '2026-10-24');
    assert.equal(restaurant.rating, undefined);
    assert.equal(restaurant.reviewCount, undefined);
  }
});

test('Hamden has three attributed Commons photographs and Spanish captions', () => {
  const photos = listFor('lib/town-photography.ts', 'hamden');
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(x => x.file)).size, 3);
  for (const photo of photos) {
    assert.ok(photo.title && photo.titleEs && photo.credit && photo.licenseUrl);
    assert.ok(photo.license.startsWith('CC BY-SA'));
    assert.ok(photo.file.endsWith('.jpg'));
  }
});

test('Hamden shared page preserves bilingual SEO, staging protections and moving resources', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.ok(page.includes('townHighlights[slug]'));
  assert.ok(page.includes('townOfficialLinks[slug]'));
  assert.ok(page.includes('townPhotography[slug]'));
  assert.ok(page.includes('townRestaurants[slug]'));
  assert.ok(page.includes('TownMovingResources'));
  const seo = read('lib/seo.ts');
  assert.ok(seo.includes("'en-US'") && seo.includes("'es-US'"));
  assert.ok(read('app/[locale]/layout.tsx').includes('robots:{index:allowIndexing,follow:allowIndexing}'));
  assert.ok(read('app/robots.ts').includes("disallow:'/'"));
  const resources = read('lib/moving-resources.ts');
  assert.ok(resources.includes('frontier.com/ftr-buy'));
  assert.ok(resources.includes('amazon.com/shop/influencer-'));
});
