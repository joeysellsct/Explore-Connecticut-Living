import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Bethany guide gives original English and Spanish local and buyer information', () => {
  const source = read('lib/town-highlights.ts');
  const match = source.match(/^ 'bethany':(\{.*\}),$/m);
  assert.ok(match, 'Missing Bethany guide');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 2400 && guide.es.length > 2600);
  for (const term of ['Veterans Memorial Park', 'Hockanum Lake', 'Regicides Trail', '29.99', '29.14', '1960', 'March 20, 2026']) {
    assert.ok(guide.en.includes(term), 'English guide missing ' + term);
  }
  for (const term of ['Veterans Memorial Park', 'lago Hockanum', 'Regicides Trail', '29,99', '29,14', '1960', '20 de marzo de 2026']) {
    assert.ok(guide.es.includes(term), 'Spanish guide missing ' + term);
  }
  assert.ok(guide.en.includes('no municipal water or sewer'));
  assert.ok(guide.es.includes('no ofrece servicios municipales de agua ni alcantarillado'));
  assert.equal(guide.places.length, 4);
});

test('Bethany official links have fifteen unique, bilingual and sourced URLs', () => {
  const source = read('lib/town-official-links.ts');
  const match = source.match(/^ 'bethany': \[(.*?)^ \],/ms);
  assert.ok(match, 'Missing Bethany official resources');
  const entries = match[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('{')).map(line => JSON.parse(line.replace(/,$/, '')));
  assert.equal(entries.length, 15);
  const urls = entries.map(entry => {
    assert.ok(entry.en.length > 18 && entry.es.length > 18);
    assert.equal(new URL(entry.url).protocol, 'https:');
    return entry.url;
  });
  assert.equal(new Set(urls).size, entries.length);
  for (const required of ['/assessor', '/tax-collector', '/town-clerk/land-records', '/land-use', '/inland-wetlands-commission', '/septic', '/parks/vets-park']) {
    assert.ok(urls.some(url => url.includes(required)), 'Missing official resource ' + required);
  }
  assert.ok(entries.some(e => e.en.includes('29.99')));
  assert.ok(entries.some(e => e.en.includes('older Grand List')));
});

test('Bethany uses shared bilingual town, referral and compliance protections', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /townOfficialLinks\[slug\]\.map/);
  assert.match(page, /townHighlights\[slug\]\.es/);
  assert.match(page, /townHighlights\[slug\]\.en/);
  assert.match(page, /TownMovingResources slug=\{slug\}/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1];
  assert.ok(picks);
  assert.doesNotMatch(picks, /['"]bethany['"]\s*:/);
});
