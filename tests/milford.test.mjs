import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const block = (path, slug = 'milford') => {
  const source = read(path);
  const start = source.indexOf(" '" + slug + "': [");
  assert.ok(start >= 0, 'Missing ' + slug + ' block in ' + path);
  const end = source.indexOf('\n ],', start);
  assert.ok(end > start, 'Missing array end in ' + path);
  return source.slice(start, end);
};

test('Milford has substantial original English and Spanish moving guidance', () => {
  const line = read('lib/town-highlights.ts').split('\n').find(x => x.startsWith(" 'milford':{en:"));
  assert.ok(line, 'Missing dedicated Milford guide');
  const en = line.match(/en:"([^"]+)"/)?.[1];
  const es = line.match(/es:"([^"]+)"/)?.[1];
  assert.ok(en?.length > 900 && es?.length > 900, 'Both guides need substantial content');
  for (const term of ['Silver Sands', 'Walnut Beach', 'Metro-North', 'flood', 'sewer']) {
    assert.ok(en.includes(term), 'Missing English topic: ' + term);
  }
  for (const term of ['Silver Sands', 'Walnut Beach', 'Metro-North', 'inundación', 'alcantarillado']) {
    assert.ok(es.includes(term), 'Missing Spanish topic: ' + term);
  }
});

test('Milford has five distinct dated bilingual editorial restaurant listings', () => {
  const entries = [...block('lib/town-restaurants.ts').matchAll(/\{name:"([^"]+)",cuisine:"([^"]+)",cuisineEs:"([^"]+)",website:"([^"]+)",sourceUrl:"([^"]+)",checkedOn:"([^"]+)"\}/g)];
  assert.equal(entries.length, 5);
  assert.equal(new Set(entries.map(x => x[1])).size, 5);
  for (const [, name, en, es, website, source, date] of entries) {
    assert.ok(name && en && es);
    assert.equal(new URL(website).protocol, 'https:');
    assert.equal(new URL(source).protocol, 'https:');
    assert.equal(date, '2026-10-24');
  }
  const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks')[1];
  assert.ok(!/^\s*'milford':\s*\[/m.test(picks), 'Milford cannot be labeled a personal Top Pick');
});

test('Milford municipal research has bilingual official and parcel-specific links', () => {
  const entries = [...block('lib/town-official-links.ts').matchAll(/\{en:"([^"]+)",es:"([^"]+)",url:"([^"]+)"\}/g)];
  assert.ok(entries.length >= 10);
  const urls = entries.map(x => x[3]);
  assert.equal(new Set(urls).size, urls.length, 'Avoid duplicate municipal links');
  for (const [, en, es, url] of entries) {
    assert.ok(en.length > 8 && es.length > 8);
    assert.equal(new URL(url).protocol, 'https:');
  }
  assert.ok(urls.some(url => url.includes('milford.mapxpress.net')));
  assert.ok(urls.some(url => url.includes('/210/Assessors-Office')));
  assert.ok(urls.some(url => url.includes('/540/Planning-Zoning')));
});

test('Milford photographs retain bilingual captions and explicit reuse licenses', () => {
  const raw = block('lib/town-photography.ts');
  const records = JSON.parse('[' + raw.slice(raw.indexOf('[') + 1).trim().replace(/,\s*$/, '') + ']');
  assert.equal(records.length, 3);
  assert.equal(new Set(records.map(x => x.file)).size, 3);
  for (const photo of records) {
    assert.ok(photo.title.length > 15 && photo.titleEs.length > 15);
    assert.ok(photo.file.endsWith('.jpg') && photo.credit && photo.license);
    assert.equal(new URL(photo.licenseUrl).protocol, 'https:');
    assert.ok(photo.licenseUrl.includes('creativecommons.org/'));
  }
});

test('Milford FY2027 base rate and district caveat are explicit in both languages', () => {
  const rates = read('lib/fy2027-mill-rates.ts');
  assert.match(rates, /'milford':28\.67/);
  assert.match(rates, /data\.ct\.gov/);
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes("slug==='milford'"));
  for (const name of ['Woodmont Borough', 'Laurel Beach Association', 'Morningside Association']) {
    assert.ok(component.includes(name), 'Missing district: ' + name);
  }
  for (const rate of ['0.5205', '3.34', '0.0738', '0,5205', '3,34', '0,0738']) {
    assert.ok(component.includes(rate), 'Missing English or Spanish rate: ' + rate);
  }
  assert.ok(component.includes('not included in the base estimate'));
  assert.ok(component.includes('No están incluidas en la estimación base'));
  assert.ok(component.includes('fy2027MillRateSource'));
});

test('Milford uses bilingual SEO, sitemap and staging safeguards', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.match(page, /localizedSeo\(locale,/);
  assert.match(page, /inLanguage:es\?'es-US':'en-US'/);
  assert.match(read('lib/seo.ts'), /'en-US':en,'es-US':es/);
  assert.match(read('app/sitemap.ts'), /connecticutTowns\.map\(t=>'towns\/'\+t\.slug\)/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
  const moving = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(moving.includes('affiliate-disclosure'));
  assert.ok(moving.includes('partnerLinks.map'));
});


test('Milford dining source links identify their restaurant for screen readers and display verification dates', () => {
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.ok(page.includes('aria-label={es?`Ver fuente de ${restaurant.name}`:`View source for ${restaurant.name}`}'));
  assert.ok(page.includes("{es?'Fuente consultada':'Source checked'}: {restaurant.checkedOn}"));
  assert.ok(page.includes('href={restaurant.sourceUrl}'));
});


test('Milford language switch preserves the current town route in either direction', () => {
  const switcher = read('app/[locale]/LocaleSwitcher.tsx');
  const layout = read('app/[locale]/layout.tsx');
  assert.ok(layout.includes("import LocaleSwitcher from './LocaleSwitcher'"));
  assert.ok(layout.includes('<LocaleSwitcher locale={locale}/>'));
  assert.ok(switcher.includes('usePathname()'), 'Switcher must read the active route');
  assert.ok(switcher.includes('href={href}'), 'Switcher must use the computed localized route');
  assert.ok(switcher.includes('hrefLang='), 'Alternate language must be labeled');
  const localize = (pathname, target) => pathname.replace(new RegExp('^/(?:en|es)(?=/|$)'), '/' + target);
  assert.equal(localize('/en/towns/milford', 'es'), '/es/towns/milford');
  assert.equal(localize('/es/towns/milford', 'en'), '/en/towns/milford');
  assert.equal(localize('/en/towns', 'es'), '/es/towns');
  assert.equal(localize('/es', 'en'), '/en');
});


test('Milford special-district rates support fractional precision without implying edited rates are verified', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes('step="any"'), 'Allow district rates such as 0.5205 mills without native step validation errors');
  assert.ok(component.includes('Mill rate (editable)'), 'The user-entered rate must not be labeled verified');
  assert.ok(component.includes('Tasa en mills (editable)'), 'The editable label must also be translated');
  assert.ok(component.includes('validRate'), 'Retain input validation for the estimator');
  const base = 28.67;
  const district = 0.5205;
  const assessed = 400000 * 0.7;
  assert.equal(assessed * (base + district) / 1000, 8173.34);
});


test('Milford tax estimate explains invalid fields and formats currency in the selected language', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes("const moneyLocale=es?'es-US':'en-US'"), 'Currency must follow the selected town-guide language');
  assert.ok(component.includes('estimate.toLocaleString(moneyLocale'), 'Annual amount should use localized currency');
  assert.ok(component.includes('(estimate/12).toLocaleString(moneyLocale'), 'Monthly amount should use localized currency');
  assert.ok(component.includes('!validValue?'), 'Check the home value before reporting a mill-rate error');
  assert.ok(component.includes('Enter a valid home value'));
  assert.ok(component.includes('Ingresa un valor de vivienda válido'));
  assert.ok(component.includes('Enter a valid mill rate'));
  assert.ok(component.includes('Ingresa una tasa en mills válida'));
  assert.ok(component.includes('aria-live="polite" aria-atomic="true"'), 'Announce complete recalculated totals to assistive technology');
});
