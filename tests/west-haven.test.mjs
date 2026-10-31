import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('West Haven guide has original English and Spanish local guidance', () => {
  const guides = read('lib/town-highlights.ts');
  const section = guides.match(/'west-haven':\s*\{en:'([\s\S]*?)',es:'([\s\S]*?)',places:\[([\s\S]*?)\]\}/);
  assert.ok(section, 'West Haven bilingual guide must exist');
  for (const phrase of ['Sandy Point Beach & Bird Sanctuary', 'Metro-North', 'sewer bills', 'flood']) {
    assert.ok(section[1].includes(phrase), 'English guide missing ' + phrase);
  }
  for (const phrase of ['Sandy Point Beach & Bird Sanctuary', 'Metro-North', 'alcantarillado', 'inundación']) {
    assert.ok(section[2].includes(phrase), 'Spanish guide missing ' + phrase);
  }
  assert.ok(section[1].length > 900 && section[2].length > 900, 'Guides should provide useful depth');
});

test('West Haven municipal links cover property due diligence and local life in both languages', () => {
  const source = read('lib/town-official-links.ts');
  const section = source.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven official links must exist');
  assert.equal((section[1].match(/"en":/g) || []).length, 21);
  assert.equal((section[1].match(/"es":/g) || []).length, 21);
  assert.equal((section[1].match(/"url":/g) || []).length, 21);
  for (const link of ['152/Assessors-Office', '156/City-Clerks-Office', '180/Tax-Collector', '154/Building', '172/Parks-and-Recreation']) {
    assert.ok(section[1].includes(link), 'Missing municipal resource ' + link);
  }
});

test('West Haven photos have Commons file identities, creators and reusable licenses', () => {
  const photos = read('lib/town-photography.ts');
  const section = photos.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven photo gallery must exist');
  const photosByFile = [...section[1].matchAll(/\{[^{}]+\}/g)].map(match => JSON.parse(match[0]));
  assert.equal(photosByFile.length, 3, 'Keep three distinct town-specific photographs');
  assert.equal(new Set(photosByFile.map(photo => photo.file)).size, 3, 'Do not duplicate photographs');
  for (const name of ['Savin Rock, West Haven, CT, USA.jpg', 'WestHavenAerial5.jpg', 'West Haven City Hall 109.JPG']) {
    assert.ok(photosByFile.some(photo => photo.file === name), 'Missing photo ' + name);
  }
  for (const photo of photosByFile) {
    assert.ok(photo.title.length > 20 && photo.titleEs.length > 20, 'Bilingual captions required');
    assert.ok(photo.credit && photo.license && photo.licenseUrl, 'Attribution and reuse license required');
    assert.equal(new URL(photo.licenseUrl).protocol, 'https:');
  }
  const cityHall = photosByFile.find(photo => photo.file === 'West Haven City Hall 109.JPG');
  assert.equal(cityHall.credit, 'Pedro Xing');
  assert.equal(cityHall.license, 'CC0 1.0');
  assert.equal(cityHall.licenseUrl, 'https://creativecommons.org/publicdomain/zero/1.0/');
  assert.match(cityHall.title, /West Haven City Hall.*2012/);
  assert.match(cityHall.titleEs, /Ayuntamiento de West Haven.*2012/);
});

test('West Haven stays Joey personal pick only and staging protections stay in place', () => {
  const restaurants = read('lib/town-restaurants.ts');
  const picks = restaurants.split('export const joeyTopPicks')[1] || '';
  assert.ok(picks.includes("'west-haven'"), 'West Haven personal pick key exists');
  assert.ok(picks.includes('Zuppardi'), 'Zuppardi personal pick remains');
  const layout = read('app/[locale]/layout.tsx');
  assert.match(layout, /robots:\{index:allowIndexing,follow:allowIndexing\}/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
});


test('West Haven beach parking guidance distinguishes lot plate checks from street guest passes', () => {
  const source = read('lib/town-official-links.ts');
  const section = source.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven municipal links missing');
  const entries = [...section[1].matchAll(/\{[^{}]+\}/g)].map(match => JSON.parse(match[0]));
  const parking = entries.find(entry => entry.url === 'https://www.cityofwesthaven.com/166/Human-Resources-Social-Services');
  assert.ok(parking, 'Retain the official city beach and restricted-street parking guidance');
  for (const term of ['license-plate-based', 'nonresident payment', 'guest/event permits', 'check current rules']) {
    assert.ok(parking.en.includes(term), 'English parking guidance missing: ' + term);
  }
  for (const term of ['matrícula', 'no residentes', 'invitados y eventos', 'tarifas vigentes']) {
    assert.ok(parking.es.includes(term), 'Spanish parking guidance missing: ' + term);
  }
  for (const term of ['Dawson Avenue', 'residents and annual pass holders', 'delinquent vehicle taxes', 'half an hour after sunset']) {
    assert.ok(parking.en.includes(term), 'English parking exceptions missing: ' + term);
  }
  for (const term of ['Dawson Avenue', 'residentes y titulares de pases anuales', 'impuestos de vehículo vencidos', 'media hora después de la puesta del sol']) {
    assert.ok(parking.es.includes(term), 'Spanish parking exceptions missing: ' + term);
  }
  assert.equal(entries.filter(entry => entry.url === parking.url).length, 1, 'Do not duplicate the official parking link');
});

test('West Haven official moving resources cover recycling, collection, disposal and school registration', () => {
  const source = read('lib/town-official-links.ts');
  const section = source.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven official links must exist');
  const entries = [...section[1].matchAll(/\{[^{}]+\}/g)].map(match => JSON.parse(match[0]));
  assert.equal(entries.length, 21, 'Keep all twenty-one verified bilingual links');
  assert.equal(new Set(entries.map(entry => entry.url)).size, entries.length, 'Avoid duplicate official URLs');
  const expected = [
    ['266/Recycling-Info-Carts', 'recyclables loose', 'sin bolsas plásticas'],
    ['1394/RubbishRecycling-Pickup-Schedule-Weekly', 'city district', 'distrito municipal'],
    ['260/Bulk-Trash-Pickup-Other-Services', 'construction-debris', 'escombros'],
    ['whschools.org/page/registration', 'school assignment', 'escuela asignada'],
    ['rwater.com/customer-care/start-or-stop-service', 'property-closing statements', 'estados de cuenta para el cierre']
  ];
  for (const [urlPart, en, es] of expected) {
    const entry = entries.find(item => item.url.includes(urlPart));
    assert.ok(entry, 'Missing verified West Haven resource: ' + urlPart);
    assert.ok(entry.en.includes(en), 'Missing English detail for ' + urlPart);
    assert.ok(entry.es.includes(es), 'Missing Spanish detail for ' + urlPart);
  }
});

test('West Haven guide explains fire-district tax and address-specific water service in both languages', () => {
  const guides = read('lib/town-highlights.ts');
  const section = guides.match(/'west-haven':\s*\{en:'([\s\S]*?)',es:'([\s\S]*?)',places:\[([\s\S]*?)\]\}/);
  assert.ok(section, 'West Haven bilingual guide must exist');
  for (const term of ['25.58 mills', 'fire district', 'street-by-fire-district', 'sewer bills separately', 'Regional Water Authority', 'does not prove']) {
    assert.ok(section[1].includes(term), 'English due-diligence guidance missing: ' + term);
  }
  for (const term of ['25,58 mills', 'distrito de bomberos', 'facturas de alcantarillado por separado', 'Regional Water Authority', 'no garantiza']) {
    assert.ok(section[2].includes(term), 'Spanish due-diligence guidance missing: ' + term);
  }
  assert.ok(section[1].length > 2500 && section[2].length > 2500, 'Both guides should have practical depth');
  assert.ok(section[1].includes('\\n\\n') && section[2].includes('\\n\\n'), 'Keep readable multi-paragraph guidance');
});

test('West Haven Assessor resource warns about district-specific combined tax rates', () => {
  const source = read('lib/town-official-links.ts');
  const section = source.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven official links missing');
  const entries = [...section[1].matchAll(/\{[^{}]+\}/g)].map(match => JSON.parse(match[0]));
  const assessor = entries.find(entry => entry.url.endsWith('/152/Assessors-Office'));
  assert.ok(assessor, 'Official Assessor page must remain available');
  assert.ok(assessor.en.includes('fire-district street list') && assessor.en.includes('combined tax rate'));
  assert.ok(assessor.es.includes('distrito de bomberos') && assessor.es.includes('tasa total'));
});

test('West Haven estimator clearly warns that base mills exclude three fire-district rates', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  const section = component.match(/\{slug==='west-haven'&&<p className="town-tax-district-note">([\s\S]*?)<\/p>\}/);
  assert.ok(section, 'West Haven needs a prominent bilingual calculator-specific district warning');
  for (const phrase of ['25.58-mill', '36.48', '33.36', '34.41', 'Center', 'West Shore', 'Allingtown', 'replace the base rate', 'actual bill']) {
    assert.ok(section[1].includes(phrase), 'English district-tax warning missing ' + phrase);
  }
  for (const phrase of ['25,58 mills', '36,48', '33,36', '34,41', 'distrito de bomberos', 'sustituye la tasa base', 'tasa vigente']) {
    assert.ok(section[1].includes(phrase), 'Spanish district-tax warning missing ' + phrase);
  }
  assert.ok(section[1].includes('https://www.cityofwesthaven.com/m/faq'), 'Link to official district-rate FAQ');
  assert.ok(section[1].includes('https://www.cityofwesthaven.com/152/Assessors-Office'), 'Link to district street list');
  assert.ok(component.includes("const rateEdited=verifiedRate!==undefined"), 'Keep editable rate and reset behavior');
});

test('West Haven tax estimate requires a district selection and uses combined rates', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes("const [westHavenDistrict,setWestHavenDistrict]=useState('')"), 'District must start unselected');
  assert.ok(component.includes("slug==='west-haven'||verifiedRate===undefined?'':String(verifiedRate)"), 'Do not prefill base-only West Haven rate');
  assert.ok(component.includes("const needsWestHavenDistrict=slug==='west-haven'&&!westHavenDistrict"), 'Require district before estimating');
  assert.ok(component.includes('const estimate=!needsWestHavenDistrict&&'), 'Suppress misleading base-only estimate');
  const selector = component.split('className="town-tax-district-select"')[1]?.split('</label>}')[0];
  assert.ok(selector, 'District selector must render on West Haven pages');
  for (const phrase of ['District 1: Center (36.48 mills)', 'District 2: West Shore (33.36 mills)', 'District 3: Allingtown (34.41 mills)', 'Other verified rate (enter manually)', 'Distrito 1: Center (36,48 mills)', 'Distrito 2: West Shore (33,36 mills)', 'Distrito 3: Allingtown (34,41 mills)']) {
    assert.ok(selector.includes(phrase), 'Missing bilingual fire-district option: ' + phrase);
  }
  assert.ok(selector.includes("district==='center'?'36.48':district==='west-shore'?'33.36':district==='allingtown'?'34.41':''"), 'Selection must populate the verified combined rate');
  assert.ok(component.includes("if(slug==='west-haven')setWestHavenDistrict('custom')"), 'Manual edits must switch to custom-rate mode');
  assert.ok(component.includes("rateEdited&&slug!=='west-haven'"), 'Never offer a misleading West Haven base-rate reset');
});

test('West Haven rejects manually entered municipal-base-only tax estimates in both languages', () => {
  const component = read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
  assert.ok(component.includes("const invalidWestHavenBaseRate=slug==='west-haven'&&validRate&&Number(millRate)===verifiedRate"),
    'Detect manual entry of the municipal base rate without a fire district');
  assert.ok(component.includes('const estimate=!needsWestHavenDistrict&&!invalidWestHavenBaseRate&&'),
    'Never display a West Haven estimate using only the municipal base rate');
  assert.ok(component.includes('The 25.58-mill municipal base rate excludes fire-district taxes.'),
    'English visitors must see why the entered base rate cannot be used');
  assert.ok(component.includes('La tasa municipal base de 25,58 mills no incluye el distrito de bomberos.'),
    'Spanish visitors must see why the entered base rate cannot be used');
});
