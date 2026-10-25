# New Haven County town buildout tracker

Snapshot: **2026-10-25**. This is a source-code coverage checklist, not a claim that pages are live or complete. Refresh this table after meaningful updates; never count a town as 100% complete without a live rendered-page audit.

## Coverage of 27 New Haven County towns

- Directory routes: **27/27** via the 169-town shared data source.
- Town-specific English/Spanish highlights: **22/27**.
- Curated restaurant directory: **20/27** (counts any directory; individual lists still need review for approximately five current restaurants).
- Dedicated official municipal/moving links: **20/27**.
- Town-specific photo gallery data: **19/27** (license records still require live display checks).
- Fully launch-ready and independently certified: **0/27**. Rendered SEO, images, mobile, accessibility, legal notices and deployment remain unverified.

| Town | Bilingual highlights | Restaurants | Municipal links | Photos | 100% certified |
| --- | :---: | :---: | :---: | :---: | :---: |
| Ansonia | Yes | Yes | Yes | Yes | Not certified |
| Beacon Falls | Yes | Yes | Yes | Yes | Not certified |
| Bethany | Yes | Yes | Yes | Yes | Not certified |
| Branford | Yes | Yes | Yes | Yes | Not certified |
| Cheshire | Yes | Yes | Yes | Yes | Not certified |
| Derby | Yes | Yes | Yes | Yes | Not certified |
| East Haven | Yes | Yes | Yes | Yes | Not certified |
| Guilford | Yes | Yes | Yes | Yes | Not certified |
| Hamden | Yes | Yes | Yes | Yes | Not certified |
| Madison | Yes | Yes | Yes | Yes | Not certified |
| Meriden | Yes | Yes | Yes | Yes | Not certified |
| Middlebury | No | No | No | No | Not certified |
| Milford | Yes | Yes | Yes | Yes | Not certified |
| Naugatuck | Yes | Yes | Yes | Yes | Not certified |
| New Haven | Yes | Yes | Yes | Yes | Not certified |
| North Branford | No | No | No | No | Not certified |
| North Haven | Yes | Yes | Yes | Yes | Not certified |
| Orange | Yes | Yes | Yes | Yes | Not certified |
| Oxford | No | No | No | No | Not certified |
| Prospect | No | No | No | No | Not certified |
| Seymour | Yes | Yes | Yes | Yes | Not certified |
| Southbury | Yes | Yes | Yes | No | Not certified |
| Wallingford | Yes | Yes | Yes | Yes | Not certified |
| Waterbury | Yes | No | No | No | Not certified |
| West Haven | Yes | Yes | Yes | Yes | Not certified |
| Wolcott | No | No | No | No | Not certified |
| Woodbridge | Yes | No | No | No | Not certified |

## Southbury dining source pass (2026-10-25)

- Added **five neutral, English/Spanish restaurant listings** to `lib/town-restaurants.ts`: Brew Cafe & Bistro, Mercato Italian Kitchen & Bar, Farmer's Tavern, Samui Thai Cuisine, and DiPalma's Pizza. Current operator sources independently identify Southbury addresses and menus: https://brewcafebistro.com/contact ; https://www.mercatoitaliankitchen.com/locations/southbury ; https://www.farmerstavernct.com/ ; https://samui-thai-cuisine.square.site/ ; https://www.dipalmaspizza.com/ .
- **Important naming check:** the 466 Heritage Road cafe is now Brew Cafe & Bistro, formerly Hudson's Cafe & Bistro; use the current operator site rather than stale Hudson's pages. No scores, operating hours or additional Joey personal Top Picks were published.
- Southbury dining source commit `f2a23f5b1018147e46da2f1e5b3bc31570a3e3a3` and regression test commit `639430ffc4eae6aeac7a9cc007c3f24368403f51` were refetched and confirmed in `main`; source-level JSON parsing found five distinct HTTPS-backed bilingual entries. GitHub Actions and independent rendered-page QA remain **unconfirmed**. Licensed Southbury-specific photos remain missing, and Southbury is **not** 100% certified.

## Southbury official resources (2026-10-25)

- Added **15 bilingual, town-sourced municipal and moving links** covering Assessor, the official FY 2026–27 **25.4-mill** tax rate, Tax Collector and installments, Town Clerk deeds/fees, GIS, permits, planning/zoning, wetlands, Housatonic Valley Health District, Public Works and parks. Southbury's own Tax Collector rate page confirms **25.4 mills**, although the CCM Southbury community snapshot currently displays **23.29**; use the municipality's current published figure and verify parcel/district bills. Sources: https://www.southbury-ct.org/mill-rate ; https://www.southbury-ct.org/assessor ; https://www.southbury-ct.org/tax .
- The town WPCA says **Southbury has no municipal sewage system**. Septic and water sources are property-specific, and the health district oversees private systems. Sources: https://www.southbury-ct.org/content/20556/20610/20673/default.aspx ; https://www.southbury-ct.org/startbusiness .
- Added Southbury regression tests for 15 unique HTTPS municipal links, bilingual descriptions, correct FY2027 rate, sewer caution and the existing Top Picks restriction. **Still incomplete:** verified restaurant directory, licensed photography, full town guide review and independent EN/ES rendered QA, accessibility, SEO, staging robots, disclosures and Cloudflare deployment. No town marked 100%.

## Wallingford four-category source pass (2026-10-25)

- Added **14 bilingual municipal and moving-resource links** sourced from Wallingford town departments and the Connecticut Conference of Municipalities. Coverage includes Assessor, Tax Collector, land records, permits, zoning, wetlands, engineering, municipal electricity, partial municipal water/sewer coverage, Public Works, parks, finance and library. FY 2026–27 **24.57-mill** real-property rate: https://hub.ccm-ct.org/community/wallingford/ . The Assessor reports a 2024 revaluation; confirm parcel assessments and bills independently.
- Expanded Wallingford to an original **2,181-character English / 2,471-character Spanish** four-paragraph guide covering downtown, parks, Quinnipiac River Linear Trail, Gouveia Vineyards, Hartford Line service, municipal electric utility, property records, tax context and address-specific water/sewer checks. Sources: https://www.wallingfordct.gov/government/departments/parks-recreation/ ; https://hartfordline.com/route_stations/wallingford/ ; https://www.wallingfordct.gov/government/departments/electric-division/ ; https://www.wallingfordct.gov/government/departments/water-sewer-divisions/ .
- Added **five operator-sourced neutral dining entries** with English/Spanish descriptions: Michael's Trattoria, Knuckleheads Taproom, Pig Rig BBQ, Hometown Pizza and Wood-n-Tap Wallingford. Sources: https://michaelstrattoria.com/ ; https://knuckleheadstaproom.com/ ; https://www.pigrigbbq.com/ ; https://hometownpizzawlfd.com/ ; https://woodntap.com/locations/wallingford . No ratings, hours or Joey personal Top Picks were added.
- Added **three town-specific Wikimedia Commons photographs** with dated bilingual captions, author credits and CC BY-SA license URLs: Town Hall (Nancysands1965, 2012, CC BY-SA 4.0), St. Paul's Episcopal Church (Gloucester1692, 2021, CC BY-SA 4.0) and Wallingford station (Pi.1415926535, 2017, CC BY-SA 3.0). Sources: https://commons.wikimedia.org/wiki/File:Town_Hall_of_Wallingford.jpg ; https://commons.wikimedia.org/wiki/File:St_Paul%27s_Episcopal_Church_Wallingford.jpg ; https://commons.wikimedia.org/wiki/File:Wallingford_station_from_northbound_platform,_December_2017.JPG .
- Added Wallingford-specific regression tests for source uniqueness, bilingual copy, five dining listings, three photo licenses and Top Picks restriction. **Not certified:** live EN/ES rendering, photo delivery and credits, canonical/hreflang, structured data, sitemap, mobile accessibility, Equal Housing/affiliate notices, staging noindex/robots and actual Cloudflare deployment require independent checks. GitHub Actions build success is not deployment evidence.

## Meriden licensed town photography (2026-10-25)

- Added **three location-verified Wikimedia Commons photographs** with photographer attribution, exact Creative Commons license links and bilingual dated captions: Castle Craig (Hallettx, 2018, CC BY-SA 4.0), downtown Hub pedestrian bridge (Mark Balcher, 2016, CC BY 3.0), and Hubbard Park Festival of Silver Lights (Morrowlong, 2018, CC BY-SA 4.0).
- Sources: https://commons.wikimedia.org/wiki/File:Castle_Craig_Meriden_CT_2.jpg ; https://commons.wikimedia.org/wiki/File:The_Walking_Bridge_At_The_Hub_Park_In_Meriden_(149365613).jpeg ; https://commons.wikimedia.org/wiki/File:Hubbard_Park_Festival_of_Silver_Lights_20181229_Big_Cat.jpg . Excluded misleading Commons images of Meriden in England.
- Meriden now has source-code entries for bilingual highlights, five restaurants, 15 municipal links and three photographs. **Not certified:** confirm the live EN/ES image delivery, visible credit/cropping notices, metadata/canonical/hreflang, structured data, sitemap, mobile accessibility, Equal Housing and partner disclosures, plus Cloudflare deployment independently before declaring launch readiness.

## Meriden dining source pass (2026-10-25)

- Added **five neutral bilingual dining listings** verified against business-operated sites: Ted's Restaurant (https://tedsrestaurant.com/contact/), K LaMay's Steamed Cheeseburgers (https://klamayssteamedcheeseburgers.com/locations/), Taino Smokehouse Prime (https://tainosmokehouse.com/contact), Violi's Restaurant (https://violisrestaurant.com/contact/) and Lido's Restaurant & Pizzeria (https://lidositalian.com/). All five sites identify Meriden locations and relevant food offerings.
- No ratings, review counts, operating hours or Joey personal Top Picks were added. Meriden regression tests cover bilingual descriptions, source URLs, distinct entries and the personal Top Picks restriction.
- **Still not certified:** Meriden needs properly licensed town photography, live bilingual SEO and image/accessibility checks, legal and partner disclosures in the rendered page, and independently verified Cloudflare deployment.

## Meriden municipal links and expanded bilingual guide (2026-10-25)

- Added **15 sourced English/Spanish municipal and moving-resource links** for assessment, the 2025 revaluation, FY2027 tax context, land records, GIS, building/zoning permits, engineering, water/sewer, district-specific waste collection and parks. Primary sources: https://www.meridenct.gov/city-services/finance/assessment-1/ ; https://www.meridenct.gov/city-services/finance/tax-collection/ ; https://www.meridenct.gov/city-services/utilities/meriden-water-division/ ; https://www.meridenct.gov/government/departments/public-works/curbside-recycling-solid-waste-trash-collection/ ; https://hub.ccm-ct.org/community/meriden/ .
- Expanded the town profile to an original **2,630-character English / 2,843-character Spanish** four-paragraph guide covering Hubbard Park, Castle Craig, Giuffrida Park, Meriden Green, Hartford Line connections, property due diligence, utilities and waste-collection districts. Sources: https://www.meridenct.gov/city-services/parks-and-recreation/hubbard-park/ ; https://www.meridenct.gov/city-services/parks-and-recreation/meriden-green/ ; https://ctrail.zendesk.com/hc/en-us/articles/38334078482843-Hartford-Line-Overview-and-FAQ .
- **Tax caution:** CCM reports a **29.99-mill FY2027 base real-estate rate**; the city Tax Collection webpage still shows older-year figures. Meriden's 2025 revaluation changed assessments, and district charges may vary. Do not infer a property's tax bill from the rate alone. Meriden Water Division announced rate changes effective September 1, 2026; verify actual service and balances for each address.
- Added dedicated Meriden regression tests. **Not certified:** five verified restaurants, licensed town photography, live bilingual SEO, rendered accessibility, affiliate/legal disclosures and independent Cloudflare deployment checks remain outstanding.

## North Haven licensed photo gallery (2026-10-25)

- Added **three North Haven-specific Wikimedia Commons photographs**, each with English/Spanish captions identifying the image year, author attribution and a direct Creative Commons license URL: St. John's Episcopal Church (Paperchaser29, 2013, CC BY-SA 3.0); former Rising Sun Tavern (Magicpiano, 2018, CC BY-SA 4.0); Pines Bridge Historic District (Magicpiano, 2018, CC BY-SA 4.0).
- Verified source pages: https://commons.wikimedia.org/wiki/File:St._Johns_Episcopal_Church,_North_Haven,_CT.jpg ; https://commons.wikimedia.org/wiki/File:NorthHavenCT_RisingSunTavern.jpg ; https://commons.wikimedia.org/wiki/File:NorthHavenCT_PinesBridgeHD_1.jpg . These are dated photographs, not a claim about present-day conditions. Regression tests check the source-code gallery's identity, licensing and bilingual credits.
- **Not certified:** image rendering and any cropping/ShareAlike obligations must still be checked on a live page, along with SEO, mobile accessibility, legal notices, staging robots and actual deployment.

## North Haven bilingual guide expansion (2026-10-25)

- Replaced the short generic North Haven highlight with an original **1,974-character English / 2,139-character Spanish** guide covering Peter's Rock Park, the Town Green, Quinnipiac River State Park, the public library, property due diligence, the 2024 revaluation, **30.56 mills for FY 2026–27**, and parcel-specific water/sewer checks.
- Sources: https://hub.ccm-ct.org/community/north-haven/ ; https://www.northhaven-ct.gov/ ; https://portal.ct.gov/-/media/CSC/1_Dockets-medialibrary/Docket_384/NorthHavenPOCDpdf.pdf ; https://portal.ct.gov/-/media/csc/1_dockets-medialibrary/1_media_do500_600/do508/applicantssubmissions/application/07-south-central-region---plan-of-conservation-and-development-2018-2028.pdf .
- Added regression coverage for bilingual text, local places, tax rate and sewer due-diligence language. **Not certified:** independent rendered-page/image-delivery/deployment verification remain outstanding.

## North Haven dining source pass (2026-10-25)

- Added **five English/Spanish editorial dining listings** with operator-verified North Haven locations and cuisine: La Lupa Ristorante (https://lalupact.com/), Ludal Italian Restaurant (https://www.ludalct.com/visit), Bellini's Italian Restaurant & Pizza (https://www.bellinisnorthhaven.com/), J Roo's Restaurant (https://www.jroosrestaurant.com/visit), and Giulio's Pizza Restaurant & Catering (https://giuliospizza.com/contact/).
- No review scores, review counts, hours, or personal Joey endorsements were added. The entries are directory suggestions only. `tests/north-haven.test.mjs` checks five unique operator sources, bilingual descriptions, and the absence of invented ratings.
- **Not certified:** North Haven still needs independent rendered-page checks for SEO, accessibility, disclosures, image delivery and deployment.

## North Haven municipal source pass (2026-10-24)

- Added **13 bilingual source-checked municipal and moving-resource links** for the Assessor, Tax Collector, tax payments, Town Clerk, Building, Land Use, Engineering, Public Works, GIS, parks, recreation, library services and Connecticut Conference of Municipalities. North Haven's official department directory: https://www.northhaven-ct.gov/ ; current fiscal-rate reference: https://hub.ccm-ct.org/community/north-haven/ .
- CCM lists a **30.56-mill FY2027 real-property base rate**; it is not an individual tax bill. The Assessor states that a revaluation was completed for the October 1, 2024 Grand List. Cott's land-record portal warns that tax and sewer-use liens are excluded from its electronic index, so buyers must check the Tax Collector and WPCA/Town Clerk separately. Utility connections and district charges require parcel-specific verification.
- Added `tests/north-haven.test.mjs` for bilingual link coverage, uniqueness, mill-rate wording, shared town template and preservation of Joey's personal Top Picks restriction. **Not certified:** North Haven's rendered bilingual SEO, accessibility, disclosures, image delivery and Cloudflare deployment have not been independently verified.

## Naugatuck source-completion pass (2026-10-24)

- Replaced the short Naugatuck town highlight with an original English/Spanish guide covering borough history, Gunntown and Andrew Mountain trails, Naugatuck State Forest, the Larkin State Park Trail closure outside Naugatuck, moving due diligence and the Waterbury Branch substitute-bus period **July 20, 2026–May 31, 2027**. Sources: https://naugatuck-ct.gov/parks-rec/parks-trails ; https://ctparks.com/parks/larkin-state-park-trail ; https://portal.ct.gov/dot/ctdot-press-releases/2026/substitute-busing-wbl-july-2026-through-may-2027 .
- Added **15 English/Spanish official and provider links** for property assessments, the Tax Office, land records, building permits, zoning, sewer/drainage, public works, recycling, recreation, Connecticut Water, CTDOT and state trails. The Borough Tax Office publishes **40.44 mills** for 2025 Grand List real estate/personal property (FY 2026–27) and **32.46 mills** for motor vehicles: https://naugatuck-ct.gov/tax-office . Connecticut Water lists Naugatuck among towns served, but public water and sewer service must be checked for the individual address: https://www.ctwater.com/about-us/ ; https://www.naugatuck-ct.gov/engineering-water-pollution-control .
- Added five bilingual, neutral Naugatuck restaurant listings verified against operator sites: Jesse Camille's (https://www.jessecamilles.com/), La Casita (https://www.lacasitact.com/), Salvadorenos (https://salvadorenosrestaurant.com/), The Hub (https://www.thehubpizzabar.com/) and The Station (https://www.stationrestaurantbar.com/). No ratings, hours or Joey personal endorsements were added.
- Added three Commons photo records with bilingual dated captions, attribution and verified licenses: Naugatuck Green (Kenneth C. Zirkel, 2023, CC BY-SA 4.0), Congregational Church (Kenneth C. Zirkel, 2023, CC BY-SA 4.0) and Civil War monument (Bill Hass, 2013, CC BY-SA 3.0). Sources: https://commons.wikimedia.org/wiki/File:Naugatuck_Green,_Connecticut.jpg ; https://commons.wikimedia.org/wiki/File:Congregational_Church,_Naugatuck,_Connecticut.jpg ; https://commons.wikimedia.org/wiki/File:Naugatuck_Civil_War_Monument._On_the_Green..jpg .
- Added Naugatuck-specific regression checks for bilingual narrative, tax values, unique official links, five dining listings, photo licensing and shared legal/affiliate safeguards. **Not certified:** all four major source-code categories are now present, but rendered EN/ES metadata, image delivery, mobile accessibility, legal disclosures, staging robots and Cloudflare deployment still need independent verification. New GitHub Actions results must be checked separately; no town is 100% complete.

## Bethany municipal sources and bilingual guide (2026-10-24)

- Expanded Bethany's existing English/Spanish guide with researched rural character, Veterans Memorial Park pass rules, West Rock Ridge/Regicides Trail, land records, permits, wetlands and parcel-specific utility due diligence. The Assessor lists **29.99 mills** for the 2025 Grand List/FY 2026–27; the Tax Collector page still references **29.14 mills** for the older 2024 Grand List, so readers are directed to verify the current bill. The town states that it has **no municipal water or sewer services**, and QVHD regulates septic systems. Sources: https://www.bethanyct.gov/assessor ; https://bethanyct.gov/tax-collector ; https://bethanyct.gov/about ; https://www.qvhd.org/septic ; https://bethanyct.gov/parks/vets-park ; https://ctparks.com/parks/west-rock-ridge-state-park .
- Added **15 bilingual, source-checked official links** for assessment/taxes, deeds, permitting, zoning, wetlands, septic, recreation and public works. Added `tests/bethany.test.mjs` to protect the content and site-wide compliance wiring.
- Added three Bethany-specific Commons photo records with original file sources, bilingual historic captions and verified CC BY-SA licensing: Downs Road (Ethan Long, 2024), Lake Watrous from the Regicides Trail (Tebersold, 2007), and the Whittemore side trail (Morrowlong, 2010). Sources: https://commons.wikimedia.org/wiki/File:Downs_Road,_Bethany,_Connecticut_(53834031755).jpg ; https://commons.wikimedia.org/wiki/File:Lake_Watrous10-28-07.jpg ; https://commons.wikimedia.org/wiki/File:WhittemoreSideTrailNaugatuckStateForestBethanyCT-MtLaurelPath.jpg . Added photo regression checks in `tests/bethany.test.mjs`.
- Added five bilingual Bethany dining/deli entries checked against current business sites, restaurant-operated ordering or a recent local deli listing: Country Corner, Teddy B's, Apizza Grande, Pronto Pizza and Evan's Deli. Evan's is explicitly identified as a deli; old Bethany Restaurant & Pizza listings at Pronto's address were excluded. No invented hours, ratings or Joey endorsements. Sources: https://www.countrycornerct.com/ ; https://www.toasttab.com/local/order/teddy-bs-restaurant-136-amity-road ; https://apizzagrandebethany.com/ ; https://www.prontopizzabethany.com/ ; https://www.restaurantji.com/ct/bethany/steven-s-deli-and-grocery-llc-/ .
- **Not certified:** Bethany now has all four source-code content categories but still requires independent rendered-page QA. Live English/Spanish rendering, image delivery, accessibility, metadata/hreflang, legal and affiliate disclosures, sitemap, robots and Cloudflare deployment remain independently unverified; staging pages and robots.txt were inaccessible through the browser on October 24. New GitHub Actions runs must be checked independently before claiming they pass.

## Work order and acceptance

**Priority:** Finish New Haven County before Fairfield County; after Fairfield, continue remaining counties. Prioritize towns with substantial existing material before opening more partial profiles. Branford, West Haven and Cheshire have all four source-code content categories but still need full rendered-page checks. New Haven now has 13 official municipal and transit resource links and an expanded bilingual guide with an August 2026 Lighthouse Point closure warning and 2025 Grand List tax context. Its restaurant directory and photo data still need individual source and live-display audits. Milford now has five sourced restaurant entries, eleven official resource links and expanded bilingual copy; its photo licensing and live display still require auditing. East Haven now has thirteen official resources, five rechecked bilingual restaurant entries, three credited Commons images, and a full bilingual town guide connected to its custom page. East Haven rendered images and live SEO still require checking. Hamden now has an expanded bilingual guide, five reverified restaurant listings, fourteen official resource links and three Commons photo records; its live render and full build remain unverified. Next: close remaining source, SEO and rendered-page gaps on New Haven County towns before starting Fairfield County.

A town is **not 100%** until all of the following are checked: original useful bilingual town narrative, five verified restaurants where available, real attractions, current municipal/moving resources, sourced tax and utility caveats, licensed town-specific photography with attribution, unique English/Spanish metadata, canonical and hreflang, internal links, structured data where appropriate, sitemap, accessibility, live image delivery, mobile presentation, staging noindex/robots protections, Equal Housing Opportunity logo/disclosure, affiliate disclosures, and successful full build and rendered deployment audit.

Do not infer that GitHub Actions content tests prove a full Next.js build or Cloudflare deployment. Track outstanding verification in [BUILDOUT-BLOCKERS.md](BUILDOUT-BLOCKERS.md). Preserve Joey's only approved personal dining picks: Zuppardi's in West Haven, Rosso Vino in Branford and Fuoco in Cheshire.

## Milford update (2026-10-24)

- Five Milford restaurants added with bilingual cuisine summaries and direct business-site source links: Stonebridge, Dockside Brewery, SBC Restaurant & Beer Bar, Bin 100 and Gusto Trattoria. These are neutral editorial listings, not Joey's personal picks.
- Eleven municipal, state park and transportation research links added in English and Spanish; the city site map and departments hub are intentional fallback entry points for records and permit departments.
- Expanded the Milford guide in both languages with coastal access, protected wildlife, commuter rail and property-specific tax, flood, permit and utility research.
- Existing Milford photo data remains subject to rendered-image and license-attribution QA. No town certified launch-ready yet; full build, live layout, accessibility, metadata and deployment checks remain open.

## East Haven update (2026-10-24)

- Replaced the brief English/Spanish guide with original shoreline, Farm River, trolley museum, town beach parking, property-specific due diligence, and 2025 Grand List real estate tax context (35.78 mills, effective July 1, 2026; separate motor-vehicle rate 32.46).
- Added 13 bilingual government, park and museum research links; updated five restaurant entries against their own current websites, with Spanish descriptions and no invented ratings.
- Recorded three town-specific Commons photographs with authors and Creative Commons license links. Updated the **special East Haven page**, which previously bypassed generic town highlights, resources and photo records, to render these verified data sources while preserving its custom layout and housing-search section.
- Added automated East Haven content and template regression tests. The first test run exposed a test-only JSON parser issue with valid JavaScript trailing commas; corrected the helper in a subsequent commit. Check the latest workflow conclusion before claiming a pass.
- **Still not certified:** live English/Spanish render, image delivery, metadata/hreflang, mobile/accessibility, full Next.js build, and Cloudflare deployment. Staging URL access was unsuccessful on 2026-10-24. Keep staging noindex/robots disallow.

## Hamden update (2026-10-24)

- Expanded English/Spanish town guide (2,500+ characters per language) covering Sleeping Giant, Farmington Canal Heritage Trail, Brooksvale Park, Eli Whitney Museum, neighborhoods, commuting and parcel-level due diligence. Hamden FY 2026–27 real-property mill rate is **53.67**, with the October 2024 revaluation being phased in over four years; check the actual bill rather than estimating from the online property card alone.
- Added **14** bilingual source-checked links to the Hamden Assessor, Tax Office, Town Clerk/IQS land records, Building, Planning & Zoning, GIS, parks, regional water and sewer providers, CT Parks and the Eli Whitney Museum. Municipal source: https://www.hamden.com/240/Tax-Office ; land-record source: https://www.hamden.com/243/Town-Clerk ; sewer source: https://gnhwpca.com/ ; visitor sources: https://ctparks.com/parks/sleeping-giant-state-park and https://hamden.com/570/Welcome-to-Brooksvale-Park .
- Reverified five Hamden restaurants from official sites, adding Spanish descriptions and direct source links: Mikro Depot (https://www.mikrodepot.com/), Cafe Amici (https://amicirestaurantgroup.com/), Bangkok Boulevard (https://www.bangkokblvd.com/), Playwright Irish Pub (https://www.playwrightirishpub.com/) and Ristorante Luce (https://ristoranteluce.net/). **Watch Luce's announced future Wallingford location**; the official site still listed Hamden when checked. None are presented as Joey's personal picks.
- Added three licensed, attributed Hamden Commons photo records: Hamden Town Hall by Kenneth C. Zirkel (CC BY-SA 4.0), Sleeping Giant State Park by Ethan Long (CC BY-SA 2.0), and Farmington Canal Heritage Trail by Ethan Long (CC BY-SA 2.0). Source file pages are recorded in `lib/town-photography.ts`. Live image loading and cropping/attribution still need review.
- Added five Hamden content and staging-safeguard regression tests. **No Hamden launch-ready certification**: the staging page could not be accessed through the available browser on October 24; rendered EN/ES SEO, images, mobile, accessibility, Equal Housing and affiliate notices, complete Next.js build and Cloudflare deployment remain unverified.

## Guilford update (2026-10-24)

- Expanded the original English and Spanish Guilford town guide with village/shoreline context, flood and wetlands due diligence, permit and septic questions, and parcel-specific utility checks.
- Added **11** bilingual municipal and moving-resource links to `lib/town-official-links.ts`, covering the Assessor, Tax Collector, Town Clerk, Building, Planning and Zoning, GIS, wetlands, health/septic, engineering/flood and parks. Official town directory: https://www.guilfordct.gov/ ; assessor: https://www.guilfordct.gov/town_departments/assessor/index.php ; GIS: https://guilford.mapxpress.net/portal.asp .
- FY 2026–27 real-property rate **28.40 mills** (October 2025 Grand List) cross-checked against Connecticut Conference of Municipalities Guilford profile https://hub.ccm-ct.org/community/guilford/ and June 18, 2026 Board of Finance coverage https://guilfordfreepress.com/guilford-sets-28-40-mill-rate-after-three-budget-votes-here-is-what-it-means-for-your-tax-bill/ . The town Assessor confirms the October 2026 revaluation and tax impact beginning July 2027: https://www.guilfordct.gov/town_departments/assessor/index.php . Rates do not establish any individual bill or district charge.
- **Updated later October 24:** three source-licensed, attributed town-specific photos and a five-restaurant source re-audit are now committed (see Guilford follow-up below). Still missing: live English/Spanish render, image delivery, mobile and accessibility checks; rendered metadata/hreflang/sitemap validation, full build and Cloudflare deployment verification. Guilford is **not** 100% complete.

## Guilford follow-up (2026-10-24)

- Rechecked all five Guilford dining listings directly against official restaurant websites, added English/Spanish cuisine descriptions, and retained neutral editorial placement without ratings or invented hours: [South Lane Bistro](https://www.southlanebistro.com/), [Quattro's](https://www.quattrositalian.com/), [The Guilford Bistro](https://www.theguilfordbistro.com/), [Pasta Avest & Pizzeria](https://www.pastaavest.com/), and [Kamana](https://www.kamanacuisine.com/).
- Added three Guilford-specific photographs with bilingual captions, Commons creator credits and verified CC BY-SA 4.0 licenses: [Guilford Town Green (Fergo22)](https://commons.wikimedia.org/wiki/File:The_Guilford_Town_Green_in_Connecticut.jpg), [Westwoods Preserve Rock Cave (Morrowlong)](https://commons.wikimedia.org/wiki/File:Green_Rectangle_Trail_passing_through_Rock_Cave_near_Moose_Hill_Road_in_Westwoods,_Guilford,_Connecticut.jpg), and [Dudleytown Historic District (Magicpiano)](https://commons.wikimedia.org/wiki/File:GuilfordCT_DudleytownHD_2.jpg).
- Added Guilford regression tests for bilingual guide presence, eleven municipal links, five sourced restaurants, three licensed photos and staging/affiliate safeguards. A content-only test cannot certify the full build or Cloudflare deployment.
- **Still not launch-ready:** Both staging locale routes and robots.txt were inaccessible through the available browser on October 24. Rendered image delivery, metadata/canonical/hreflang, mobile layout, accessibility, Equal Housing and affiliate disclosures, full Next.js build and actual deployment remain unverified. Do not certify Guilford as 100%.

## Madison source-completion pass (2026-10-24)

- Expanded Madison's original English/Spanish guide to cover Hammonasset Beach State Park and Meigs Point, Surf Club and municipal beach rules, Salt Meadow Park, Shore Line East commuting, parcel research, flood exposure and water/septic due diligence. Official sources: https://ctparks.com/parks/hammonasset-beach-state-park ; https://www.madisonct.org/504/Beaches ; https://www.madisonct.org/526/Salt-Meadow-Park ; https://shorelineeast.com/stations/madison-station/ ; https://www.madisonct.org/326/Surface-Water-Protection .
- Added **15 bilingual official municipal and transport links** for assessments, tax collection, the current tax rate, land records, permits, zoning, GIS, health, floodplain management, parks, emergency preparedness and rail service. The town publishes **23.06 mills effective July 1, 2026** at https://www.madisonct.org/434/Tax-Rate ; individual bills and special district charges must be confirmed separately.
- Rechecked five restaurants against their own sites and added bilingual cuisine descriptions: https://www.cafeallegre.com/ ; https://www.amatospizzapasta.com/ ; https://barbouchee.com/ ; https://thewharfmadison.com/ ; https://donahuesmadisonbeachgrille.com/ . All are neutral directory entries, not Joey's Top Picks.
- Added three Madison-specific photos with bilingual captions, creator credits and Commons licenses: [Madison Green (SveaA; CC BY-SA 3.0)](https://commons.wikimedia.org/wiki/File:Madison_Green,_Connecticut.JPG), [Meigs Point shoreline (Karl Thomas Moore; CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Hammonasset_Beach_State_Park.jpg), [Hammonasset salt-marsh footbridge (Jllm06; CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Hammonasset_Beach_State_Park_-_foot_bridge.jpg).
- Added `tests/madison.test.mjs` for source-code regression checks. **Not certified:** full Next.js build, live English/Spanish page rendering, photography delivery, mobile accessibility, rendered SEO/canonical/hreflang/sitemap, affiliate and Equal Housing display, and Cloudflare deployment still need independent checks.

## Orange follow-up (2026-10-24)

- Added 11 bilingual links to official Orange municipal departments, the permit portal and town site map. The Tax Collector explicitly publishes **27.40 mills for July 2026 real-estate bills (October 2025 Grand List)**: https://www.orange-ct.gov/206/Tax-Collector . Confirm the assessment, exemptions and actual bill for the property.
- Expanded the original English/Spanish guide with High Plains Community Center, Fred Wolfe Park, PEZ Visitor Center, and address-specific zoning, permits, land records, drainage, flood and utility due diligence. Sources include https://www.orange-ct.gov/153/Assessor , https://www.orange-ct.gov/158/Building-Department and https://www.orange-ct.gov/167/Public-Works .
- Added regression checks for the Orange guide, eleven distinct bilingual resources and unique town keys in restaurant data to prevent a repeat of the Milford TypeScript build failure.
- **Orange restaurant and photo follow-up:** rechecked five Orange restaurants directly against their official websites and added English/Spanish descriptions (Andini's, Coromandel, Noodle House, Ola and Puerto Vallarta). Added three Commons photos of Orange Town Hall, the PEZ Visitor Center and Orange Congregational Church with author, license, and bilingual captions; photos date from 2007–2012, not evidence of current conditions. Source file pages: https://commons.wikimedia.org/wiki/File:Orange_CT_town_hall.jpg , https://commons.wikimedia.org/wiki/File:Pez_Visitor%27s_Center_208.JPG and https://commons.wikimedia.org/wiki/File:Orange_ct_congregational_church.jpg . Added regression checks for the five dining records and three photo licenses. Live English/Spanish page render, photo delivery, mobile accessibility, metadata, disclosures, full build and Cloudflare rollout still require independent verification. Orange is **not** 100% certified.
- A separate Cloudflare Workers production-build job was added to GitHub Actions after the duplicate Milford key was removed. Check the job's actual conclusion; do not equate passing content tests with a successful production build or deployment.

## Ansonia source-code follow-up (2026-10-24)

- Expanded Ansonia's original English/Spanish guide with Ansonia Nature and Recreation Center, riverfront and downtown context, 29.46-mill FY 2026–27 real-property tax context (October 2025 Grand List), parcel-specific assessment and utility due diligence, and the CTDOT Waterbury Branch replacement-bus period (July 20, 2026–May 31, 2027). Sources: https://hub.ccm-ct.org/community/ansonia/ ; https://portal.ct.gov/dot/ctdot-press-releases/2026/substitute-busing-wbl-july-2026-through-may-2027 ; https://cityofansonia.com/content/8134/8374/default.aspx .
- Added 15 bilingual Ansonia municipal, GIS, property tax, clerk, zoning, parks, trash, water/sewer and transportation links, checked against city and state source pages.
- Rechecked five existing Ansonia restaurants on official sites and added Spanish descriptions, with no ratings or Joey personal-pick labels.
- Added three Ansonia-specific Wikimedia Commons photos (historic Main Street, Nature Center visitor building and public library) with verified photographer names, bilingual captions and Creative Commons license links. Images date from 2010–2017 and do not prove current conditions.
- Added dedicated regression tests. **Not 100% certified**: independent rendered EN/ES, image delivery, mobile accessibility, metadata/hreflang/sitemap, legal/affiliate visibility and Cloudflare deployment checks remain outstanding. GitHub Actions results are tracked separately from Cloudflare.

## Derby update (2026-10-24)

- Expanded Derby's original English/Spanish guide with the Greenway, Osbornedale State Park, Derby Green, Kellogg Environmental Center, riverfront diligence, and CTDOT's Waterbury Branch replacement buses through May 31, 2027.
- Added 15 official bilingual resources covering Assessor, 2025 revaluation, FY 2026–27 real estate taxes (38.44 mills; vehicles separately 32.46), Clerk land records, permits and occupancy rules, WPCA sewer charges, water contacts, parks and transit.
- Reverified five restaurant entries with bilingual cuisine descriptions and no invented ratings. Roseland's available site states it is unofficial; its entry instead uses a third-party directory source, not an official-website claim.
- Added three Commons-licensed Derby photographs with photographer credits and bilingual captions, plus regression tests.
- **Still not certified:** Cloudflare deployment, live images, mobile and accessibility, SEO/hreflang, legal and partner disclosures and property-specific data all require independent rendered-page QA. GitHub Actions must be checked separately from deployment.

## Seymour update (2026-10-24)

- Expanded the original English/Spanish town guide with sourced parks, property-tax, utility and Waterbury Branch replacement-bus information; added twelve bilingual municipal and moving links.
- Reverified five local restaurants, corrected outdated or unreachable source links, and added English/Spanish cuisine descriptions. Thai Dish uses an identifiable third-party online ordering source rather than a claimed official site. These remain editorial listings, not personal Top Picks.
- Added three 2012 Seymour-specific photographs of Town Hall, the railroad station and Bank Street, credited to Joe Mabel and documented under CC BY-SA 3.0; historical photographs must not imply current conditions.
- Added restaurant and photography regression tests. Full build and GitHub Actions results must be checked independently; staging rendering, mobile accessibility, metadata/hreflang, affiliate and housing disclosures, image delivery and Cloudflare deployment remain unverified. **Not certified launch-ready.**

## Beacon Falls municipal-resource pass (2026-10-24)

- Added **13 bilingual source-checked municipal, utility, tax and transit research links** in `lib/town-official-links.ts`: official department directory, Assessor, Tax Collector, final adopted FY27 budget, Town Clerk, Building, Planning/Zoning and wetlands contacts, Health, wastewater, regional water contact, Public Works, Parks and CTDOT.
- The town's [final adopted FY 2026–27 budget narrative](https://beaconfalls-ct.org/DocumentCenter/View/4758/TOBF-FY27-Narrative-Final-Adopted_52826) documents **23.67 mills** on the October 2025 Grand List; the 2025 revaluation means comparing the previous 30.46-mill rate alone does **not** establish a tax reduction for any property. The [Tax Collector](https://www.beaconfalls-ct.org/209/Tax-Collector) notes possible separate sewer/water assessments; verify service and actual charges at the property address.
- [CTDOT](https://portal.ct.gov/dot/ctdot-press-releases/2026/ctdot-announces-construction-underway-on-four-waterbury-branch-line-station-upgrades) documents Waterbury Branch substitute buses July 20, 2026–May 31, 2027, during station construction. Check live service alerts before travel.
- **Not certified:** Beacon Falls still needs its restaurant directory, licensed photo gallery, live English/Spanish render, image delivery, SEO/hreflang, mobile/accessibility, disclosure and deployment audits. This update only advances municipal-link coverage.

## Beacon Falls photo follow-up (2026-10-24)

- Added three Beacon Falls-specific Commons photo records with original photographer credits, license URLs and English/Spanish historical captions: Depot Street Bridge (Magicpiano, CC BY-SA 4.0, photographed 2017), Home Woolen Company (Magicpiano, CC BY-SA 4.0, photographed 2017) and Beacon Falls railroad station (Adam Moss, CC BY-SA 2.0, photographed 2011). Sources: https://commons.wikimedia.org/wiki/File:BeaconFalls_DepotStreetBridge.jpg ; https://commons.wikimedia.org/wiki/File:BeaconFallsCT_HomeWoolenCompany1.jpg ; https://commons.wikimedia.org/wiki/File:Beacon_Falls_Station.jpg .
- The station image is explicitly historical and does not indicate present-day Waterbury Branch train service. Added a regression test for photo file identity, licenses, credits and bilingual captions.
- **Still not certified:** no Beacon Falls restaurant directory yet; verify active local dining businesses rather than padding the list with nearby-town restaurants. Rendered image delivery, captions and source links, bilingual SEO, mobile accessibility, affiliate and Equal Housing notices, staging robots, and Cloudflare rollout remain independently unverified.

## Beacon Falls dining update (2026-10-24)

- Added six English/Spanish sourced dining entries in `lib/town-restaurants.ts`: The Beacon Pizza Bar, Beacon Falls Tavern, The Original Antonio's, Rocco's Pizza, The Tap House and Molly's Bakery (a bakery/cafe, not a full-service restaurant). The five restaurant entries have town-specific direct restaurant websites or their own ordering pages; no invented ratings, review counts or hours. A new regression test checks all six entries.
- Two older business websites claim **57 South Main Street** (New Harvest and Beacon Falls Tavern); the currently maintained Beacon Falls Tavern site was used, not both. An older Pizza Palace listing at **125 South Main Street** conflicts with Rocco's current ordering site; only Rocco's was included. The Tap House Toast ordering hours are inconsistent with third-party business hours, so hours were deliberately omitted. Recheck these in later runs.
- Beacon Falls now has bilingual narrative, municipal resources, licensed photo records and a dining directory in source code. **Not 100% certified:** live rendered English/Spanish SEO, image delivery, accessibility, mobile, Equal Housing, affiliate disclosures and independent Cloudflare deployment still require verification.
