import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const section = (path, close) => {
  const src = read(path);
  const marker = "'manchester':";
  const from = src.indexOf(marker);
  assert.ok(from >= 0, `Manchester missing from ${path}`);
  const end = src.indexOf(close, from);
  assert.ok(end > from, `Manchester entry not closed in ${path}`);
  return src.slice(from, end);
};

test('Manchester overview contains original English and Spanish research and property cautions', () => {
  const text = section('lib/town-highlights.ts', '\n');
  for (const term of ['"en":', '"es":', 'Cheney Homestead', 'Charter Oak Park', 'Wickham Park', "Lutz Children's Museum", 'Town Clerk', 'inundación']) {
    assert.ok(text.includes(term), term);
  }
  assert.ok(text.length > 2000, 'Overview unexpectedly short');
});

test('Manchester restaurants are five bilingual source-checked listings without fabricated ratings', () => {
  const text = section('lib/town-restaurants.ts', '\n],');
  for (const term of ['The Main Pub', 'Trattoria Toscana', 'Mulberry Street Pizza', 'Cafe Aura', 'The Hollow at Manchester Country Club']) {
    assert.ok(text.includes(term), term);
  }
  for (const key of ['"name"', '"cuisineEs"', '"sourceUrl"', '"checkedOn"']) {
    assert.equal(text.split(key).length - 1, 5, key);
  }
  assert.doesNotMatch(text, /"rating"|"reviewCount"/);
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks')[1];
  assert.ok(picks);
  assert.doesNotMatch(picks, /'manchester':/);
  for (const slug of ["'cheshire':", "'branford':", "'west-haven':"]) assert.ok(picks.includes(slug));
});

test('Manchester municipal links are bilingual and use official town domains', () => {
  const text = section('lib/town-official-links.ts', '\n],');
  assert.equal(text.split('"en"').length - 1, 7);
  assert.equal(text.split('"es"').length - 1, 7);
  assert.equal(text.split('"url"').length - 1, 7);
  assert.equal(text.split('https://www.manchesterct.gov/').length - 1, 7);
  for (const token of ['Tax-Public-Computer', 'Land-Records', 'Building-Inspection-Division', 'Planning-and-Economic-Development']) assert.ok(text.includes(token), token);
});

test('Shared staging, bilingual and equal housing safeguards are preserved', () => {
  const robots = read('app/robots.ts');
  const sitemap = read('app/sitemap.ts');
  const seo = read('lib/seo.ts');
  assert.ok(robots.includes("disallow:'/'"));
  assert.ok(robots.includes('ENABLE_PRODUCTION_INDEXING'));
  assert.ok(sitemap.includes("['en','es']"));
  assert.ok(seo.includes('alternates'));
});
