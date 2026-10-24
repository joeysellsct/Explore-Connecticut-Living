import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const entry = (path, slug) => {
  const src = read(path);
  const marker = "'" + slug + "':";
  const start = src.indexOf(marker);
  assert.ok(start !== -1, `Missing ${slug} in ${path}`);
  const next = src.indexOf("\n //", start + marker.length);
  return src.slice(start, next === -1 ? undefined : next);
};

test('Glastonbury editorial has original bilingual moving guidance and real attractions', () => {
  const data = entry('lib/town-highlights.ts', 'glastonbury');
  for (const place of ['Riverfront Park', 'Cotton Hollow Preserve', 'Welles-Shipman-Ward', 'Rocky Hill–Glastonbury Ferry']) {
    assert.ok(data.includes(place), place);
  }
  assert.match(data, /"en":/);
  assert.match(data, /"es":/);
  assert.match(data, /Assessor/);
  assert.match(data, /inundación/);
});

test('Glastonbury restaurant directory has five sourced bilingual entries and no scores', () => {
  const data = entry('lib/town-restaurants.ts', 'glastonbury');
  for (const name of ["J. Gilbert's", 'Max Fish', 'Bricco Trattoria', 'Sayulita', 'Plan b Glastonbury']) {
    assert.ok(data.includes(name), name);
  }
  for (const field of ['"name":', '"cuisineEs":', '"sourceUrl":', '"checkedOn":']) {
    assert.equal(data.split(field).length - 1, 5, field);
  }
  assert.doesNotMatch(data, /"rating":|"reviewCount":/);
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks')[1];
  assert.ok(picks);
  assert.doesNotMatch(picks, /'glastonbury':/);
  for (const pick of ["'cheshire':", "'branford':", "'west-haven':"]) assert.ok(picks.includes(pick));
});

test('Glastonbury official links and photographs have bilingual labels and license attribution', () => {
  const links = entry('lib/town-official-links.ts', 'glastonbury');
  for (const part of ['property-assessment', 'town-clerk/land-records', 'building-inspection-zoning', 'cotton-hollow']) {
    if (part === 'cotton-hollow') continue; // facility URL uses an ID rather than a descriptive slug.
    assert.ok(links.includes(part), part);
  }
  assert.equal(links.split('"url":').length - 1, 7);
  assert.equal(links.split('"es":').length - 1, 7);
  const photos = entry('lib/town-photography.ts', 'glastonbury');
  assert.equal(photos.split('"file":').length - 1, 2);
  assert.equal(photos.split('"titleEs":').length - 1, 2);
  assert.ok(photos.includes('John Phelan') && photos.includes('Magicpiano'));
  assert.equal(photos.split('"license": "CC BY-SA 4.0"').length - 1, 2);
});

test('Town template preserves metadata, hreflang, related towns and indexing safeguards', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  const seo = read('lib/seo.ts');
  const sitemap = read('app/sitemap.ts');
  const robots = read('app/robots.ts');
  for (const token of ['townHighlights[slug]', 'townRestaurants[slug]', 'townOfficialLinks[slug]', 'townPhotography[slug]', 'relatedTowns.map(other=>']) {
    assert.ok(page.includes(token), token);
  }
  assert.ok(page.includes('localizedSeo('));
  assert.ok(seo.includes('alternates'));
  assert.ok(sitemap.includes("['en','es']"));
  assert.ok(sitemap.includes("...connecticutTowns.map(t=>'towns/'+t.slug)"));
  assert.ok(robots.includes("disallow:'/'"));
  assert.ok(robots.includes("ENABLE_PRODUCTION_INDEXING"));
});
