import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const townBlock = (source, slug, opener, closer) => {
  const key = "'" + slug + "':";
  const keyAt = source.indexOf(key);
  assert.ok(keyAt >= 0, slug + ' must have a dedicated entry');
  const start = source.indexOf(opener, keyAt + key.length);
  assert.ok(start >= 0, 'Missing entry opening delimiter');
  const end = source.indexOf(closer, start + 1);
  assert.ok(end > start, 'Missing entry closing delimiter');
  return source.slice(start + 1, end);
};

test('Wethersfield has distinct English and Spanish sourced editorial content', () => {
  const source = read('lib/town-highlights.ts');
  const entry = townBlock(source, 'wethersfield', '{', '}');
  for (const name of ['Old Wethersfield', 'Webb Deane Stevens Museum', 'Keeney Memorial Cultural Center', 'Wethersfield Cove']) {
    assert.ok(entry.includes(name), 'Missing landmark: ' + name);
  }
  assert.match(entry, /"en":/);
  assert.match(entry, /"es":/);
  assert.ok(source.includes('www.wethersfieldct.gov/159/Assessor'));
});

test('Wethersfield dining listings are five researched businesses, not personal picks', () => {
  const source = read('lib/town-restaurants.ts');
  const entry = townBlock(source, 'wethersfield', '[', ']');
  for (const name of ['The Charles', "Lucky Lou's Bar and Grill", 'Village Pizza Restaurant', 'Heirloom Market at Comstock Ferre', 'River: A Waterfront Restaurant & Bar']) {
    assert.ok(entry.includes(name), 'Missing restaurant: ' + name);
  }
  assert.equal((entry.match(/"checkedOn":/g) || []).length, 5);
  assert.equal((entry.match(/"cuisineEs":/g) || []).length, 5);
  assert.equal((entry.match(/"sourceUrl":/g) || []).length, 5);
  assert.doesNotMatch(entry, /"rating":|"reviewCount":/);
  const picks = source.split('export const joeyTopPicks')[1] || '';
  assert.doesNotMatch(picks, /'wethersfield':/);
});

test('Wethersfield has official resources and licensed, credited photographs', () => {
  const links = townBlock(read('lib/town-official-links.ts'), 'wethersfield', '[', ']');
  assert.equal((links.match(/"url":/g) || []).length, 5);
  assert.ok(links.includes('www.wethersfieldct.gov/360/Town-Clerk'));
  assert.ok(links.includes('www.wethersfieldct.gov/173/Building'));
  const photos = townBlock(read('lib/town-photography.ts'), 'wethersfield', '[', ']');
  assert.equal((photos.match(/"file":/g) || []).length, 2);
  assert.equal((photos.match(/"credit":"Ethan Long"/g) || []).length, 2);
  assert.ok(photos.includes('CC BY-SA 4.0'));
  assert.ok(photos.includes('CC BY-SA 2.0'));
});
