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
  assert.ok(urls.includes('https://www.milfordct.us/663/Tax-Collector'), 'Use direct city guidance for tax bills and sewer charges');
  assert.ok(urls.includes('https://www.milfordct.us/768/On-Line-Services'), 'Provide city portal for property records and tax payments');
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

test('Milford shoreline photo has reviewed CC BY provenance and bilingual historic caption', () => {
  const raw = block('lib/town-photography.ts');
  assert.ok(!raw.includes('CT-162 downtown Milford.jpg'), 'Do not reintroduce the unreviewed Commons transfer');
  assert.ok(raw.includes('Milford point on housatonic (28829150353).jpg'), 'Use the reviewed Milford Point photograph');
  assert.ok(raw.includes('Russ (Russ Whitehurst / russimages)'), 'Retain the credited photographer');
  assert.ok(raw.includes('https://creativecommons.org/licenses/by/2.0/'), 'Retain the reviewed CC BY 2.0 license');
  assert.ok(raw.includes('photographed September 2016'), 'Date the English historical photograph caption');
  assert.ok(raw.includes('fotografía de septiembre de 2016'), 'Date the Spanish historical photograph caption');
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


test('Milford beach access and water-quality guidance link directly to official current sources', () => {
  const entries = [...block('lib/town-official-links.ts').matchAll(/\{en:"([^"]+)",es:"([^"]+)",url:"([^"]+)"\}/g)];
  const links = new Map(entries.map(([, en, es, url]) => [url, {en, es}]));
  for (const url of [
    'https://milfordct.us/680/Resident-Parking-Stickers',
    'https://www.milfordct.us/402/Beach-Monitoring',
  ]) {
    assert.ok(links.has(url), 'Missing official beach resource: ' + url);
    assert.ok(links.get(url).en.length > 15 && links.get(url).es.length > 15, 'Both language labels must be useful');
  }
});


test('Milford tax guidance discloses the five-year 2025 revaluation phase-in in both languages', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes("slug==='milford'"), 'Limit Milford-specific guidance to Milford');
  assert.ok(component.includes('five-year phase-in'), 'Explain the adopted phase-in in English');
  assert.ok(component.includes('incorporación gradual de cinco años'), 'Explain the phase-in in Spanish');
  assert.ok(component.includes('October 1, 2025 revaluation'), 'Date the revaluation');
  assert.ok(component.includes('70% of an estimated home price may not match'), 'Disclose why generic estimates may be inaccurate');
  assert.ok(component.includes('70% del precio estimado de una vivienda puede no coincidir'), 'Include the Spanish estimate caveat');
  assert.ok(component.includes('https://www.milfordct.us/210/Assessors-Office'), 'Cite the official Milford Assessor source');
});


test('Milford sewer fee is sourced, bilingual and kept separate from property taxes', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes("slug==='milford'"), 'Only Milford should receive the Milford-specific sewer fee');
  assert.ok(component.includes('$361.92 per-unit user fee'), 'Show the official 2025 Grand List sewer fee in English');
  assert.ok(component.includes('$361.92 por unidad'), 'Show the same fee in Spanish');
  assert.ok(component.includes('2025 Grand List'), 'Do not present a dated fee as timeless');
  assert.ok(component.includes('lista de tasación de 2025'), 'Translate the dated fee context');
  assert.ok(component.includes('separate from the property tax estimate'), 'Do not include sewer user fees in mill-rate estimates');
  assert.ok(component.includes('distinto del impuesto inmobiliario estimado'), 'Translate the tax separation');
  assert.ok(component.includes('does not establish a particular property'), 'Warn that the actual bill is parcel-specific');
  assert.ok(component.includes('https://milfordct.us/744/Sewer-Commission'), 'Link directly to the city source');
});


test('Milford water and gas guidance uses operator sources without promising address-level service', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes('town-utility-providers-note'));
  assert.ok(component.includes('Regional Water Authority (RWA)'));
  assert.ok(component.includes('Autoridad Regional del Agua (RWA)'));
  assert.ok(component.includes('Southern Connecticut Gas'));
  assert.ok(component.includes('https://www.rwater.com/customer-care/start-or-stop-service/'));
  assert.ok(component.includes('https://www.soconngas.com/ourcompany/whoweare/servicearea'));
  assert.ok(component.includes('Verify both services at the exact address'));
  assert.ok(component.includes('Confirma ambos servicios en la dirección específica'));
  assert.ok(component.includes('do not assume a home has public water or natural gas'));
});


test('Milford district tax estimator explains combined rates and offers a verified-rate reset', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes('const rateEdited=verifiedRate!==undefined&&validRate&&Number(millRate)!==verifiedRate;'), 'Only show reset for a valid edited rate');
  assert.ok(component.includes('onClick={()=>setMillRate(String(verifiedRate))}'), 'Restore the sourced base rate without requiring a page reload');
  assert.ok(component.includes('Restore verified municipal base rate'), 'Describe the reset in English');
  assert.ok(component.includes('Restaurar tasa municipal base verificada'), 'Describe the reset in Spanish');
  assert.ok(component.includes('add its rate to the municipal base rate'), 'Explain how to enter a combined district rate');
  assert.ok(component.includes('suma sus tasas a la tasa municipal base'), 'Translate the combined-rate guidance');
  assert.ok(component.includes('not automatically included'), 'Do not falsely imply manually entered district levies are excluded');
});

test('Milford guide has four readable bilingual sections with sourced beach safety and tax caveats', () => {
  const line = read('lib/town-highlights.ts').split('\n').find(x => x.startsWith(" 'milford':{en:"));
  assert.ok(line, 'Milford guide must exist');
  const match = line.match(/en:("(?:\\.|[^"\\])*"),es:("(?:\\.|[^"\\])*"),places:/);
  assert.ok(match, 'Guide should have safely quoted English and Spanish fields');
  const en = JSON.parse(match[1]);
  const es = JSON.parse(match[2]);
  assert.equal(en.split(/\n\s*\n/).length, 4, 'Show four English paragraphs');
  assert.equal(es.split(/\n\s*\n/).length, 4, 'Show four Spanish paragraphs');
  assert.ok(en.length >= 2000 && es.length >= 2000, 'Each language should have useful depth');
  for (const phrase of ['May 1 through September 9', 'dangerous currents', 'five-year phase-in', 'special-district', 'flood maps', 'public water and sewer']) {
    assert.ok(en.includes(phrase), 'Missing English buyer or visitor guidance: ' + phrase);
  }
  for (const phrase of ['1 de mayo al 9 de septiembre', 'corrientes peligrosas', 'incorporación gradual de cinco años', 'distritos especiales', 'mapas de inundación', 'agua y alcantarillado públicos']) {
    assert.ok(es.includes(phrase), 'Missing Spanish buyer or visitor guidance: ' + phrase);
  }
  const page = read('app/[locale]/towns/[slug]/page.tsx');
  assert.ok(page.includes('.split(/\\n\\s*\\n/)'), 'Render paragraph breaks as separate elements');
});

test('Milford taxable assessment override supports the five-year revaluation phase-in', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes("const [assessedValue,setAssessedValue]=useState('');"), 'Keep the assessed-value override optional');
  assert.ok(component.includes("const hasAssessedValue=assessedValue.trim()!=='';"), 'Blank means use the illustrative 70% assessment');
  assert.ok(component.includes('const validAssessedValue=!hasAssessedValue'), 'Reject invalid taxable assessment entries');
  assert.ok(component.includes('const taxableBase=hasAssessedValue?Number(assessedValue):Number(homeValue)*.7;'), 'Use actual taxable assessment when supplied');
  assert.ok(component.includes('(hasAssessedValue?validAssessedValue:validValue)&&validRate'), 'Allow a valid assessment to supersede an invalid market-value entry');
  assert.ok(component.includes('Current taxable assessed value ($, optional)'), 'Label the optional input in English');
  assert.ok(component.includes('Tasación imponible actual ($, opcional)'), 'Label the optional input in Spanish');
  assert.ok(component.includes('instead of assuming 70% of the price'), 'Explain why the override matters');
  assert.ok(component.includes('en vez de suponer el 70% del precio'), 'Explain the override in Spanish');
  assert.ok(component.includes('Exemptions and special district levies are not automatically included'), 'Retain the estimate caveat');
  const millRate = 28.67;
  assert.equal(Math.round(400000 * .7 * millRate) / 1000, 8027.6, 'Blank override uses 70% of estimated market value');
  assert.equal(240000 * millRate / 1000, 6880.8, 'A current taxable assessment overrides the generic 70% assumption');
});
