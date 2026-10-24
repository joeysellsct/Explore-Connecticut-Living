# New Haven County town buildout tracker

Snapshot: **2026-10-24**. This is a source-code coverage checklist, not a claim that pages are live or complete. Refresh this table after meaningful updates; never count a town as 100% complete without a live rendered-page audit.

## Coverage of 27 New Haven County towns

- Directory routes: **27/27** via the 169-town shared data source.
- Town-specific English/Spanish highlights: **22/27**.
- Curated restaurant directory: **13/27** (counts any directory; individual lists still need review for approximately five current restaurants).
- Dedicated official municipal/moving links: **8/27**.
- Town-specific photo gallery data: **8/27** (license records still require live display checks).
- Fully launch-ready and independently certified: **0/27**. Rendered SEO, images, mobile, accessibility, legal notices and deployment remain unverified.

| Town | Bilingual highlights | Restaurants | Municipal links | Photos | 100% certified |
| --- | :---: | :---: | :---: | :---: | :---: |
| Ansonia | Yes | Yes | No | No | Not certified |
| Beacon Falls | Yes | No | No | No | Not certified |
| Bethany | Yes | No | No | No | Not certified |
| Branford | Yes | Yes | Yes | Yes | Not certified |
| Cheshire | Yes | Yes | Yes | Yes | Not certified |
| Derby | Yes | Yes | No | No | Not certified |
| East Haven | Yes | Yes | Yes | Yes | Not certified |
| Guilford | Yes | Yes | Yes | Yes | Not certified |
| Hamden | Yes | Yes | Yes | Yes | Not certified |
| Madison | Yes | Yes | No | No | Not certified |
| Meriden | Yes | No | No | No | Not certified |
| Middlebury | No | No | No | No | Not certified |
| Milford | Yes | Yes | Yes | Yes | Not certified |
| Naugatuck | Yes | No | No | No | Not certified |
| New Haven | Yes | Yes | Yes | Yes | Not certified |
| North Branford | No | No | No | No | Not certified |
| North Haven | Yes | No | No | No | Not certified |
| Orange | Yes | Yes | No | No | Not certified |
| Oxford | No | No | No | No | Not certified |
| Prospect | No | No | No | No | Not certified |
| Seymour | Yes | Yes | No | No | Not certified |
| Southbury | Yes | No | No | No | Not certified |
| Wallingford | Yes | No | No | No | Not certified |
| Waterbury | Yes | No | No | No | Not certified |
| West Haven | Yes | Yes | Yes | Yes | Not certified |
| Wolcott | No | No | No | No | Not certified |
| Woodbridge | Yes | No | No | No | Not certified |

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
