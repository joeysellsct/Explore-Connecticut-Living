import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Seymour guide has sourced, substantive English and Spanish moving guidance', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'seymour':(\{.*\}),$/m);
  assert.ok(match, 'Missing Seymour town highlight');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1000 && guide.es.length > 1000);
  for (const term of ['Broad Street Park', 'French Memorial Park', '28.64', 'July 20, 2026', 'May 31, 2027', 'Aquarion']) {
    assert.ok(guide.en.includes(term), 'Missing English detail: ' + term);
  }
  for (const term of ['Broad Street Park', 'French Memorial Park', '28,64', '20 de julio de 2026', '31 de mayo de 2027', 'Aquarion']) {
    assert.ok(guide.es.includes(term), 'Missing Spanish detail: ' + term);
  }
  assert.ok(guide.places.length >= 4);
});

test('Seymour has twelve distinct bilingual official research resources', () => {
  const source = read('lib/town-official-links.ts');
  const match = source.match(/^ 'seymour': \[(.*?)^ \],/ms);
  assert.ok(match, 'Missing Seymour municipal links');
  const links = JSON.parse('[' + match[1] + ']');
  assert.equal(links.length, 12);
  assert.equal(new Set(links.map(link => link.url)).size, links.length);
  for (const link of links) {
    assert.ok(link.en && link.es);
    assert.equal(new URL(link.url).protocol, 'https:');
  }
  assert.ok(links.some(link => link.url.includes('/directory/assessor')));
  assert.ok(links.some(link => link.url.includes('/TownClerk')));
  assert.ok(links.some(link => link.url.includes('/WaterPollutionControlAuthority')));
});

test('Seymour does not gain an unapproved personal restaurant Top Pick', () => {
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1];
  assert.ok(picks, 'Missing personal-picks registry');
  assert.doesNotMatch(picks, /['"]seymour['"]\s*:/);
});
