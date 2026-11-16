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

test('Guilford has a substantive English and Spanish town profile', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'guilford':(\{.*\}),$/m);
  assert.ok(match, 'Guilford town guide must be present');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 900 && guide.es.length > 900);
  assert.ok(guide.en.includes('Guilford') && guide.es.includes('Guilford'));
});

test('Guilford municipal research retains at least eleven unique bilingual source links', () => {
  const links = arrayFor('lib/town-official-links.ts', 'guilford');
  assert.ok(links.length >= 11, 'Guilford must retain its eleven baseline municipal resources');
  assert.equal(new Set(links.map(x => x.url)).size, links.length);
  for (const link of links) {
    assert.ok(link.en && link.es && link.url);
    assert.equal(new URL(link.url).protocol, 'https:');
  }
});

test('Guilford dining contains five verified bilingual editorial listings', () => {
  const restaurants = arrayFor('lib/town-restaurants.ts', 'guilford');
  assert.ok(restaurants.length >= 5, 'Retain at least five verified Guilford restaurants');
  assert.equal(new Set(restaurants.map(x => x.name)).size, restaurants.length);
  for (const restaurant of restaurants) {
    assert.ok(restaurant.name && restaurant.cuisine && restaurant.cuisineEs);
    assert.equal(new URL(restaurant.website).protocol, 'https:');
    assert.equal(new URL(restaurant.sourceUrl).protocol, 'https:');
    assert.match(restaurant.checkedOn, /^\\d{4}-\\d{2}-\\d{2}$/);
    const checked = new Date(restaurant.checkedOn + 'T00:00:00Z');
    assert.ok(Number.isFinite(checked.getTime()) && checked.toISOString().slice(0, 10) === restaurant.checkedOn,
      'Verification date must be a real calendar date');
    assert.ok(restaurant.checkedOn >= '2026-10-24', 'Do not regress the last source check');
    assert.ok(checked.getTime() <= Date.now(), 'Do not claim future verification');
    assert.equal(restaurant.rating, undefined);
    assert.equal(restaurant.reviewCount, undefined);
  }
});

test('Guilford has three credited Commons photos with bilingual captions', () => {
  const photos = arrayFor('lib/town-photography.ts', 'guilford');
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(x => x.file)).size, 3);
  for (const photo of photos) {
    assert.ok(photo.title && photo.titleEs && photo.credit);
    assert.equal(photo.license, 'CC BY-SA 4.0');
    assert.equal(photo.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
    assert.ok(photo.file.endsWith('.jpg'));
  }
});

test('Guilford town rendering keeps shared SEO, resources and staging safeguards', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  for (const fragment of ['townHighlights[slug]', 'townOfficialLinks[slug]', 'townPhotography[slug]', 'townRestaurants[slug]', 'TownMovingResources', 'localizedSeo(locale,']) {
    assert.ok(page.includes(fragment), 'Missing shared page feature: ' + fragment);
  }
  const seo = read('lib/seo.ts');
  assert.ok(seo.includes("'en-US'") && seo.includes("'es-US'"));
  assert.ok(read('app/[locale]/layout.tsx').includes('robots:{index:allowIndexing,follow:allowIndexing}'));
  assert.ok(read('app/robots.ts').includes("disallow:'/'"));
  const resources = read('lib/moving-resources.ts');
  assert.ok(resources.includes('frontier.com/ftr-buy'));
  assert.ok(resources.includes('amazon.com/shop/influencer-'));
});
