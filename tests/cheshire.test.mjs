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
  assert.ok(left > start && right > left, 'Missing array in ' + path);
  return JSON.parse(source.slice(left, right + 1));
};

test('Cheshire has detailed original bilingual town and homebuyer guidance', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'cheshire':(\{.*\}),$/m);
  assert.ok(match);
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1200 && guide.es.length > 1200);
  for (const word of ['Lock 12', 'Mixville', 'Bartlem', '31.36', 'sewer', 'GIS']) {
    assert.ok(guide.en.includes(word), 'Missing English topic: ' + word);
  }
  for (const word of ['Lock 12', 'Mixville', 'Bartlem', '31,36', 'alcantarillado', 'GIS']) {
    assert.ok(guide.es.includes(word), 'Missing Spanish topic: ' + word);
  }
});

test('Cheshire links to twelve sourced bilingual municipal and moving resources', () => {
  const links = arrayFor('lib/town-official-links.ts', 'cheshire');
  assert.equal(links.length, 12);
  assert.equal(new Set(links.map(x => x.url)).size, 12);
  for (const x of links) {
    assert.ok(x.en && x.es && x.url);
    assert.equal(new URL(x.url).protocol, 'https:');
    assert.ok(['cheshirect.gov', 'www.cheshirect.gov', 'cheshire.mapxpress.net'].includes(new URL(x.url).hostname));
  }
  for (const path of ['/184/Assessor', '/258/Land-Records', '/186/Building-Department', '/208/Regulations-Permits-Forms', '/231/Sewer-Division-WPCD']) {
    assert.ok(links.some(x => x.url.includes(path)), 'Missing official resource: ' + path);
  }
});

test('Cheshire dining lists five sourced bilingual editorial businesses without ratings', () => {
  const restaurants = arrayFor('lib/town-restaurants.ts', 'cheshire');
  assert.equal(restaurants.length, 5);
  for (const r of restaurants) {
    assert.ok(r.name && r.cuisine && r.cuisineEs && r.website && r.sourceUrl);
    assert.equal(r.checkedOn, '2026-10-24');
    assert.equal(r.rating, undefined);
    assert.equal(r.reviewCount, undefined);
  }
  assert.ok(restaurants.some(x => x.name === 'Fuoco Coal Fired Apizza'));
});

test('Cheshire photography credits two real Commons files in both languages', () => {
  const photos = arrayFor('lib/town-photography.ts', 'cheshire');
  assert.equal(photos.length, 2);
  for (const p of photos) {
    assert.ok(p.title && p.titleEs && p.credit && p.licenseUrl);
    assert.ok(p.file.endsWith('.jpg'));
    assert.ok(p.license.startsWith('CC BY'));
  }
});

test('Cheshire edits preserve sitewide legal, staging, and affiliate protections', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /townPhotography\[slug\]\.map/);
  assert.match(page, /localizedSeo\(locale,/);
  assert.match(read('app/[locale]/layout.tsx'), /robots:\{index:allowIndexing,follow:allowIndexing\}/);
  assert.ok(read('app/robots.ts').includes("disallow:'/'"));
  const resources = read('lib/moving-resources.ts');
  assert.ok(resources.includes('frontier.com/ftr-buy'));
  assert.ok(resources.includes('amazon.com/shop/influencer-'));
});
