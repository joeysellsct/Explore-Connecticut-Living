import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const townArray = (path, slug) => {
  const source = read(path);
  const anchor = "'" + slug + "': [";
  const start = source.indexOf(anchor);
  assert.ok(start >= 0, 'Missing ' + slug + ' in ' + path);
  const left = source.indexOf('[', start + anchor.length - 1);
  const right = source.indexOf('],', left);
  assert.ok(right > left, 'Missing closing town array in ' + path);
  return JSON.parse(source.slice(left, right + 1).replace(/,\s*]/g, ']'));
};

test('Ansonia has substantive bilingual guide with current rail, tax and utility cautions', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'ansonia':(\{.*\}),$/m);
  assert.ok(match, 'Ansonia guide missing');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 2000 && guide.es.length > 2000);
  for (const term of ['Ansonia Nature', 'Waterbury Branch', 'July 20, 2026', 'May 31, 2027', '29.46', 'Aquarion']) {
    assert.ok(guide.en.includes(term), 'English guide missing ' + term);
  }
  for (const term of ['Nature and Recreation Center', '20 de julio de 2026', '31 de mayo de 2027', '29,46', 'Aquarion']) {
    assert.ok(guide.es.includes(term), 'Spanish guide missing ' + term);
  }
});

test('Ansonia has fifteen unique official bilingual research resources', () => {
  const links = townArray('lib/town-official-links.ts', 'ansonia');
  assert.equal(links.length, 15);
  assert.equal(new Set(links.map(x => x.url)).size, 15);
  for (const item of links) {
    assert.ok(item.en && item.es);
    assert.equal(new URL(item.url).protocol, 'https:');
  }
  assert.ok(links.some(x => x.url.includes('opm/igpp/publications/mill-rates')));
  assert.ok(links.some(x => x.url.includes('substitute-busing-wbl')));
  assert.ok(links.some(x => x.url.includes('cityofansonia.com/trash')));
});

test('Ansonia restaurant directory has five sourced bilingual editorial listings', () => {
  const items = townArray('lib/town-restaurants.ts', 'ansonia');
  assert.equal(items.length, 5);
  assert.equal(new Set(items.map(x => x.name)).size, 5);
  for (const item of items) {
    assert.ok(item.name && item.cuisine && item.cuisineEs && item.website && item.sourceUrl);
    assert.equal(item.checkedOn, '2026-10-24');
    assert.equal(item.rating, undefined);
    assert.equal(item.reviewCount, undefined);
  }
});

test('Ansonia has three distinct Commons photos with bilingual captions and licensing', () => {
  const photos = townArray('lib/town-photography.ts', 'ansonia');
  assert.equal(photos.length, 3);
  assert.equal(new Set(photos.map(x => x.file)).size, 3);
  for (const item of photos) {
    assert.ok(item.title && item.titleEs && item.credit && item.license);
    assert.ok(item.licenseUrl.startsWith('https://creativecommons.org/licenses/'));
  }
});

test('Town pages preserve SEO, staging and partner disclosure integration', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /return localizedSeo\(locale,/);
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /townPhotography\[slug\]/);
  assert.match(page, /townRestaurants\[slug\]/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
  assert.match(read('app/[locale]/towns/[slug]/TownMovingResources.tsx'), /partnerLinks\.map/);
});
