import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
function townEntry(path, slug, opener, closer) {
  const source = read(path);
  const key = "'" + slug + "':";
  const at = source.indexOf(key);
  assert.ok(at >= 0, slug + ' missing in ' + path);
  const start = source.indexOf(opener, at + key.length);
  const end = source.indexOf(closer, start + 1);
  assert.ok(start >= 0 && end > start, 'Malformed ' + slug + ' entry in ' + path);
  return source.slice(start + 1, end);
}

test('Rocky Hill has sourced, distinct English and Spanish editorial content', () => {
  const entry = townEntry('lib/town-highlights.ts', 'rocky-hill', '{', '}');
  for (const name of ['Dinosaur State Park', 'Quarry Park', 'Dividend Pond']) {
    assert.ok(entry.includes(name), 'Missing landmark ' + name);
  }
  assert.match(entry, /"en":/);
  assert.match(entry, /"es":/);
  assert.ok(entry.includes('Rocky Hill–Glastonbury Ferry'));
  assert.ok(entry.includes('rockyhillct.gov'));
});

test('Rocky Hill restaurant directory has five verified bilingual listings without invented ratings', () => {
  const entry = townEntry('lib/town-restaurants.ts', 'rocky-hill', '[', ']');
  for (const name of ['Salute Rocky Hill', "Carbone's Prime", 'Kob Jai Pho and Thai Restaurant', 'Saybrook Fish House', 'Wood-n-Tap Rocky Hill']) {
    assert.ok(entry.includes(name), 'Missing restaurant ' + name);
  }
  for (const field of ['"name":', '"cuisineEs":', '"sourceUrl":', '"checkedOn":']) {
    assert.equal((entry.match(new RegExp(field, 'g')) || []).length, 5, 'Expected five ' + field + ' fields');
  }
  assert.doesNotMatch(entry, /"rating":|"reviewCount":/);
  assert.doesNotMatch(read('lib/town-restaurants.ts').split('export const joeyTopPicks')[1] || '', /'rocky-hill':/);
});

test('Rocky Hill has official moving resources and two licensed, credited local photos', () => {
  const links = townEntry('lib/town-official-links.ts', 'rocky-hill', '[', ']');
  assert.equal((links.match(/"url":/g) || []).length, 8);
  for (const url of ['rockyhillct.gov/194/Assessor', 'rockyhillct.gov/423/Land-Records', 'rockyhillct.gov/195/Building-Department-Permits', 'ctparks.com/parks/dinosaur-state-park']) {
    assert.ok(links.includes(url), 'Missing official link ' + url);
  }
  const photos = townEntry('lib/town-photography.ts', 'rocky-hill', '[', ']');
  assert.equal((photos.match(/"file":/g) || []).length, 2);
  assert.ok(photos.includes('Daderot') && photos.includes('Denimadept'));
  assert.equal((photos.match(/"license":"CC BY-SA 3.0"/g) || []).length, 2);
  assert.ok(photos.includes('2007'));
});

test('Town template and sitemap retain bilingual town coverage', () => {
  const template = read('app/[locale]/towns/[slug]/page.tsx');
  const sitemap = read('app/sitemap.ts');
  assert.ok(template.includes('townHighlights[slug]'));
  assert.ok(template.includes('townRestaurants[slug]'));
  assert.ok(template.includes('townOfficialLinks[slug]'));
  assert.ok(template.includes('townPhotography[slug]'));
  assert.ok(sitemap.includes("['en','es']"));
  assert.ok(sitemap.includes("...connecticutTowns.map(t=>'towns/'+t.slug)"));
});
