import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const arrayFor = (path, slug) => {
  const source = read(path);
  const anchor = "'" + slug + "':";
  const start = source.indexOf(anchor);
  assert.ok(start >= 0, 'Missing ' + slug + ' in ' + path);
  const left = source.indexOf('[', start + anchor.length);
  const right = source.indexOf('],', left);
  assert.ok(left > start && right > left, 'Missing array for ' + slug + ' in ' + path);
  return JSON.parse(source.slice(left, right + 1).replace(/,\s*]/g, ']'));
};

test('Madison English and Spanish guide contains sourced local and property research', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'madison':(\{.*\}),$/m);
  assert.ok(match, 'Madison guide must be present');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1200 && guide.es.length > 1200);
  for (const place of ['Hammonasset', 'Salt Meadow', 'Shore Line East']) {
    assert.ok(guide.en.includes(place) && guide.es.includes(place), 'Missing bilingual context: ' + place);
  }
  assert.ok(guide.en.includes('23.06') && guide.es.includes('23,06'));
  assert.ok(guide.en.includes('septic') && guide.es.includes('sépticos'));
});

test('Madison has 15 distinct bilingual official municipal and transport links', () => {
  const links = arrayFor('lib/town-official-links.ts', 'madison');
  assert.equal(links.length, 15);
  assert.equal(new Set(links.map(x => x.url)).size, 15);
  for (const link of links) {
    assert.ok(link.en && link.es);
    assert.equal(new URL(link.url).protocol, 'https:');
  }
  assert.ok(links.some(x => x.url.endsWith('/434/Tax-Rate')));
  assert.ok(links.some(x => x.url.endsWith('/800/Floodplain-Management')));
});

test('Madison restaurants have five sourced bilingual descriptions without fabricated ratings', () => {
  const restaurants = arrayFor('lib/town-restaurants.ts', 'madison');
  assert.equal(restaurants.length, 5);
  assert.equal(new Set(restaurants.map(x => x.name)).size, 5);
  for (const restaurant of restaurants) {
    assert.ok(restaurant.cuisine && restaurant.cuisineEs && restaurant.website && restaurant.sourceUrl);
    assert.equal(restaurant.checkedOn, '2026-10-24');
    assert.equal(restaurant.rating, undefined);
    assert.equal(restaurant.reviewCount, undefined);
  }
});

test('Madison has three town-specific photos with Commons credits and reuse licenses', () => {
  const photos = arrayFor('lib/town-photography.ts', 'madison');
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(x => x.file)).size, 3);
  for (const photo of photos) {
    assert.ok(photo.title && photo.titleEs && photo.credit && photo.license);
    assert.ok(photo.licenseUrl.startsWith('https://creativecommons.org/licenses/'));
    assert.ok(photo.file.toLowerCase().endsWith('.jpg'));
  }
});

test('Shared town pages retain SEO, bilingual routes, affiliate and staging safeguards', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  for (const fragment of ['townHighlights[slug]', 'townOfficialLinks[slug]', 'townPhotography[slug]', 'townRestaurants[slug]', 'TownMovingResources', 'localizedSeo(locale,']) {
    assert.ok(page.includes(fragment), 'Missing shared town feature: ' + fragment);
  }
  const seo = read('lib/seo.ts');
  assert.ok(seo.includes("'en-US'") && seo.includes("'es-US'"));
  assert.ok(read('app/[locale]/layout.tsx').includes('index:false,follow:false'));
  assert.ok(read('app/robots.ts').includes("disallow:'/'"));
  const resources = read('lib/moving-resources.ts');
  assert.ok(resources.includes('frontier.com/ftr-buy'));
  assert.ok(resources.includes('amazon.com/shop/influencer-'));
});
