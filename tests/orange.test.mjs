import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Orange has a substantive sourced English-Spanish guide', () => {
  const match = read('lib/town-highlights.ts').match(/^ 'orange':(\{.*\}),$/m);
  assert.ok(match, 'Orange town guide must exist');
  const guide = JSON.parse(match[1]);
  assert.ok(guide.en.length > 1100 && guide.es.length > 1100);
  assert.ok(guide.en.includes('27.40') && guide.es.includes('27,40'));
  for (const place of ['High Plains', 'Fred Wolfe', 'PEZ']) {
    assert.ok(guide.en.includes(place) && guide.es.includes(place), 'Missing bilingual place: ' + place);
  }
  assert.ok(guide.en.includes('septic') && guide.es.includes('séptico'));
});

test('Orange provides eleven distinct official bilingual property research links', () => {
  const source = read('lib/town-official-links.ts');
  const anchor = " 'orange': [";
  const start = source.indexOf(anchor);
  assert.ok(start >= 0);
  const left = source.indexOf('[', start + anchor.length - 1);
  const right = source.indexOf('],', left);
  const links = JSON.parse(source.slice(left, right + 1).replace(/,\s*]/g, ']'));
  assert.equal(links.length, 11);
  assert.equal(new Set(links.map(x => x.url)).size, 11);
  for (const link of links) {
    assert.ok(link.en && link.es);
    assert.equal(new URL(link.url).protocol, 'https:');
  }
  assert.ok(links.some(x => x.url.endsWith('/206/Tax-Collector')));
  assert.ok(links.some(x => x.url.endsWith('/212/Town-Clerk')));
});

test('No duplicate town keys in restaurant directory, including Milford', () => {
  const source = read('lib/town-restaurants.ts');
  const section = source.split('// Personal recommendations are separate from third-party ratings.')[0];
  const keys = [...section.matchAll(/^\s*['"]?([a-z]+(?:-[a-z]+)*)['"]?:\s*\[/gm)].map(x => x[1]);
  assert.equal(keys.length, new Set(keys).size, 'Duplicate town keys break the production TypeScript build');
  assert.equal(keys.filter(x => x === 'milford').length, 1);
});
