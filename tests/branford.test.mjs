import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Branford has original detailed bilingual local and moving guidance', () => {
  const source = read('lib/town-highlights.ts');
  const match = source.match(/^ 'branford':(\{.*\}),$/m);
  assert.ok(match, 'Branford highlight should exist');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1200 && guide.es.length > 1200);
  for (const phrase of ['Thimble Islands','Shore Line East','sewer','flood','GIS']) {
    assert.ok(guide.en.includes(phrase), 'Missing English guidance: ' + phrase);
  }
  for (const phrase of ['Thimble Islands','Shore Line East','alcantarillado','inundación','GIS']) {
    assert.ok(guide.es.includes(phrase), 'Missing Spanish guidance: ' + phrase);
  }
  assert.ok(guide.places.includes('Stony Creek'));
});

test('Branford municipal resources are bilingual and point to verified official sites', () => {
  const source = read('lib/town-official-links.ts');
  const match = source.match(/'branford':\s*(\[[\s\S]*?\]),\n/);
  assert.ok(match, 'Branford municipal links should exist');
  const links = JSON.parse(match[1]);
  assert.equal(links.length, 12);
  assert.equal(new Set(links.map(link => link.url)).size, links.length);
  for (const link of links) {
    assert.ok(link.en && link.es && link.url, 'Each link needs both languages and a URL');
    const url = new URL(link.url);
    assert.equal(url.protocol, 'https:');
    assert.ok(['www.branford-ct.gov','shorelineeast.com'].includes(url.hostname));
  }
  for (const resource of ['/179/Assessors-Office','/333/Land-Records','/200/Building-Department','/319/Tax-Collector','/329/Water-Pollution-Control-Facility']) {
    assert.ok(links.some(link => link.url.includes(resource)), 'Missing ' + resource);
  }
});

test('Branford additions preserve staging SEO, housing and affiliate safeguards', () => {
  assert.match(read('app/[locale]/layout.tsx'), /index:false,follow:false/);
  assert.ok(read('app/robots.ts').includes("disallow:'/'"));
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /localizedSeo\(locale,/);
  const partners = read('lib/moving-resources.ts');
  assert.ok(partners.includes('frontier.com/ftr-buy'));
  assert.ok(partners.includes('amazon.com/shop/influencer-'));
  const restaurants = read('lib/town-restaurants.ts');
  assert.match(restaurants.split('export const joeyTopPicks')[1] || '', /'branford'/);
});

test('Branford restaurant directory has five sourced bilingual entries without invented ratings', () => {
  const source = read('lib/town-restaurants.ts');
  const match = source.match(/'branford':\s*(\[[\s\S]*?\]),\n\s*(?:\/\/[^\n]*\n\s*)*'orange':/);
  assert.ok(match, 'Branford restaurant directory should exist');
  const restaurants = JSON.parse(match[1]);
  assert.equal(restaurants.length, 5);
  assert.equal(new Set(restaurants.map(restaurant => restaurant.name)).size, 5);
  for (const restaurant of restaurants) {
    assert.ok(restaurant.cuisine && restaurant.cuisineEs && restaurant.sourceUrl && restaurant.checkedOn);
    assert.ok(!('rating' in restaurant), 'Ratings require verified provenance');
  }
  assert.ok(restaurants.some(restaurant => restaurant.name === 'Rosso Vino'));
});

test('Branford photo licenses and attribution are recorded for two town-specific images', () => {
  const source = read('lib/town-photography.ts');
  const match = source.match(/'branford':\s*(\[[\s\S]*?\]),\n/);
  assert.ok(match, 'Branford photo gallery should exist');
  const photos = JSON.parse(match[1]);
  assert.equal(photos.length, 2);
  for (const photo of photos) {
    assert.ok(photo.title && photo.titleEs && photo.credit && photo.file);
    assert.equal(photo.license, 'CC BY-SA 4.0');
    assert.equal(photo.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
  }
  assert.ok(photos.some(photo => photo.file === 'Stony creek branford.jpg'));
});
