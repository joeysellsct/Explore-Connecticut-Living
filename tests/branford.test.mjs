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
  assert.match(read('app/robots.ts'), /disallow:'\\/'/);
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /localizedSeo\(locale,/);
  const partners = read('lib/moving-resources.ts');
  assert.match(partners, /frontier\.com\\/ftr-buy/);
  assert.match(partners, /amazon\.com\\/shop\\/influencer-/);
  const restaurants = read('lib/town-restaurants.ts');
  assert.match(restaurants.split('export const joeyTopPicks')[1] || '', /'branford'/);
});
