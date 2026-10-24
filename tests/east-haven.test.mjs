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

test('East Haven has detailed original English and Spanish research', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'east-haven':(\{.*\}),$/m);
  assert.ok(match);
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1500 && guide.es.length > 1500);
  for (const word of ['Farm River', 'Trolley', '35.78', '32.46', 'permit', 'flood']) {
    assert.ok(guide.en.includes(word), 'Missing English topic: ' + word);
  }
  for (const word of ['Farm River', 'Trolley', '35,78', '32,46', 'permisos', 'inundación']) {
    assert.ok(guide.es.includes(word), 'Missing Spanish topic: ' + word);
  }
});

test('East Haven offers thirteen unique official bilingual links', () => {
  const links = listFor('lib/town-official-links.ts', 'east-haven');
  assert.equal(links.length, 13);
  assert.equal(new Set(links.map(x => x.url)).size, 13);
  for (const link of links) {
    assert.ok(link.en && link.es && link.url);
    assert.equal(new URL(link.url).protocol, 'https:');
    assert.ok(['www.easthaven-ct.gov', 'easthaven-ct.gov', 'ctparks.com', 'shorelinetrolley.org'].includes(new URL(link.url).hostname));
  }
  for (const suffix of ['/162/Assessor', '/196/Tax-Department', '/201/Town-Clerk', '/168/Building-Department', '/183/Planning-Zoning-Department', '/286/Permit-Parking---East-Haven-Town-Beach']) {
    assert.ok(links.some(x => x.url.includes(suffix)), 'Missing source ' + suffix);
  }
});

test('East Haven restaurant entries are five sourced bilingual editorial listings', () => {
  const restaurants = listFor('lib/town-restaurants.ts', 'east-haven');
  assert.equal(restaurants.length, 5);
  for (const restaurant of restaurants) {
    assert.ok(restaurant.name && restaurant.cuisine && restaurant.cuisineEs && restaurant.website && restaurant.sourceUrl);
    assert.equal(restaurant.checkedOn, '2026-10-24');
    assert.equal(restaurant.rating, undefined);
    assert.equal(restaurant.reviewCount, undefined);
  }
});

test('East Haven photos credit three named Commons files and compatible licenses', () => {
  const photos = listFor('lib/town-photography.ts', 'east-haven');
  assert.equal(photos.length, 3);
  for (const photo of photos) {
    assert.ok(photo.title && photo.titleEs && photo.credit && photo.license && photo.licenseUrl);
    assert.equal(photo.license.startsWith('CC BY-SA'), true);
    assert.ok(photo.file.endsWith('.jpg'));
  }
});

test('East Haven custom layout actually renders the new town data', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.ok(page.includes("{slug === 'east-haven' && <>"));
  assert.ok(page.includes('townHighlights[slug]?.es'));
  assert.ok(page.includes('(townOfficialLinks[slug]||[]).map'));
  assert.ok(page.includes('(townPhotography[slug]||[]).map'));
  assert.ok(page.includes('photo.licenseUrl'));
  assert.ok(page.includes('townRestaurants[slug].map'));
  assert.ok(page.includes('TownMovingResources'));
  assert.ok(read('app/[locale]/layout.tsx').includes('robots:{index:allowIndexing,follow:allowIndexing}'));
  assert.ok(read('app/robots.ts').includes("disallow:'/'"));
  const resources = read('lib/moving-resources.ts');
  assert.ok(resources.includes('frontier.com/ftr-buy'));
  assert.ok(resources.includes('amazon.com/shop/influencer-'));
});
