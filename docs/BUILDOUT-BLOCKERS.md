# Explore Connecticut Living: deferred verification and buildout work

This file tracks specific blockers for incremental hourly town-profile work. A blocker must **not** stop unrelated town edits. Re-check a deferred item on a later run, and update or remove it only after verification.

## Open items (checked 2026-10-23, America/New_York)

| Item | Affected scope | Exact blocker | Safe next action |
| --- | --- | --- | --- |
| Full local test suite and build | Entire repository; most recently Manchester | The automation's container cannot resolve `github.com` during `git clone` (`Could not resolve host: github.com`). It therefore could not obtain the repository locally for `npm test`, `npm run lint` or `npm run build`. | Retry clone once on a future run; if DNS still fails, use the GitHub connector to verify changed blobs, run content assertions against fetched files, and continue with another town. |
| Latest GitHub Actions result | `.github/workflows/verify.yml` and `tests/manchester.test.mjs` | The first workflow run on commit `22370aa3fa040b2c6bc525b508411a772fe4f266` **completed successfully**; a newer run on `69b264a95fce2d8882640978ba9b88e35775ea85` was still in progress when checked. A passing test workflow does not verify a full Next.js build or Cloudflare deployment. | Recheck the newest run's conclusion and investigate any failing test without stopping town work. |
| Rendered-page audit | Manchester (`/en/towns/manchester`, `/es/towns/manchester`) | No successful live staging render was verified in this run. Metadata, hreflang, sitemap, image loading and layout have only been inspected in source. | Verify staging URL, rendered titles/descriptions, canonicals, language alternates, robots noindex/disallow and mobile image presentation when accessible. |
| Photo delivery | `lib/town-photography.ts`, Manchester | Three Commons file pages confirm locations, authors and licenses, but live image redirects and rendering have not been tested on staging. | Verify actual rendered images and attribution; preserve source/license links. |

## Editorial safeguards

- Never mark a town 100% complete until content, sources, bilingual copy, photographs, metadata, sitemap, legal notices and live rendering are checked.
- Keep staging noindex and robots disallow until explicitly authorized for public indexing.
- Preserve the Equal Housing Opportunity logo and disclosure, existing affiliate links/disclosures, legal text and bilingual navigation.
- Joey's only approved personal restaurant picks are Zuppardi's (West Haven), Rosso Vino (Branford), and Fuoco (Cheshire). Other restaurant listings are neutral editorial suggestions, not endorsements.
- Avoid retry loops: refresh branch head and file blob SHA, retry transient conflicts a limited number of times, then record the specific failure and work on another town.

## Manchester source ledger (2026-10-23)

- Attractions and visitor rules: official Manchester parks directory, Charter Oak Park page, Wickham Park website, Lutz Children's Museum website, Manchester historical information.
- Municipal research: official Manchester assessment/tax search, Town Clerk land records, Building Inspection Division, Planning and Economic Development.
- Restaurants: official sites for The Main Pub, Trattoria Toscana, Mulberry Street Pizza, Cafe Aura, and The Hollow at Manchester Country Club.
- Photos: Wikimedia Commons file pages for `Main Street, Manchester CT.jpg` (John Phelan, CC BY-SA 3.0), `Case Pond Manchester Connecticut.jpg` (Morrowlong, CC BY-SA 4.0), and `Cheney Rail Trail bridge over Bigelow Brook, Manchester CT.jpg` (John Phelan, CC BY-SA 4.0).

## New Haven County priority: West Haven (checked 2026-10-23)

- **Content now committed:** expanded English/Spanish town narrative, 12 verified bilingual municipal links, five source-checked restaurants with Spanish cuisine descriptions, and two Commons-licensed photos (Savin Rock by Staib, CC BY-SA 4.0; West Haven shoreline aerial by PostMan1107, CC BY-SA 3.0).
- **Rendered page not yet verified:** the configured staging URL `https://explore-connecticut-living-staging.joeysellsct.workers.dev/en/towns/west-haven` was inaccessible through the available browser tool (internal access error). Verify actual page rendering, images, captions, metadata, mobile layout, and accessibility in a later run. Do not claim deployment or mark West Haven 100% complete.
- **Photo rights:** Commons file pages verified for image identity, location, photographer, and licenses; check live image delivery and ensure cropped/modified-image notices and CC BY-SA conditions are respected in the rendered gallery.
- **Testing:** GitHub Actions runs validate content tests only; the workflow does not run a full Next.js build. Check the latest run after the last West Haven commit and resolve failures before treating content checks as passing.
- **Next productive steps:** audit the existing West Haven page for live rendering, then finish another incomplete New Haven County town before starting Fairfield County. Continue despite any inaccessible staging URL.

## New Haven County priority: Branford (checked 2026-10-23)

- **Committed content:** Expanded original English and Spanish Branford guide, 12 bilingual municipal/transit links, five refreshed restaurant listings with current sources and Spanish cuisine descriptions, and two town-specific Commons photographs with author and CC BY-SA 4.0 attribution. Added regression tests. Existing personal pick remains Rosso Vino only.
- **Official source ledger:** Branford Assessor `https://www.branford-ct.gov/179/Assessors-Office`; Town Clerk land records `https://www.branford-ct.gov/333/Land-Records`; GIS `https://www.branford-ct.gov/220/Branford-GIS`; Building `https://www.branford-ct.gov/200/Building-Department`; Planning/Zoning `https://www.branford-ct.gov/288/Planning-Zoning-Section`; Tax Collector `https://www.branford-ct.gov/319/Tax-Collector`; Engineering `https://www.branford-ct.gov/219/Engineering-Department`; sewer `https://www.branford-ct.gov/329/Water-Pollution-Control-Facility`; resident permits `https://www.branford-ct.gov/320/Branford-Resident-Permits`; rail `https://shorelineeast.com/stations/`.
- **Restaurant sources:** `https://www.lennysnow.com/`; `https://visitnewhaven.com/places/dockside-restaurant/` (tourism directory; direct restaurant website not independently confirmed); `https://www.rossittos.com/`; `https://jalapeno-heaven.com/jalapeno-dr-menu-2022-fall.pdf`; `https://rossovino.net/contact/`. No ratings, hours, or unapproved endorsements were added.
- **Photo rights:** `https://commons.wikimedia.org/wiki/File:Branford_Town_Green,_Connecticut.jpg` (Kenneth C. Zirkel, CC BY-SA 4.0) and `https://commons.wikimedia.org/wiki/File:Stony_creek_branford.jpg` (Andreas Faessler, CC BY-SA 4.0). Both source pages identify Branford locations and authors. Check live delivery, displayed credit, any layout cropping and license conditions before marking complete.
- **Live-render blocker:** `https://explore-connecticut-living-staging.joeysellsct.workers.dev/en/towns/branford` returned an internal access error from the available browser tool. English and Spanish live rendering, image delivery, mobile layout, accessibility, SEO metadata, noindex headers, and Cloudflare deployment are **unverified**. Do not label Branford 100% complete.
- **Build blocker:** GitHub Actions currently runs `node --test tests/*.test.mjs` but does not perform a complete Next.js build. A successful content test is not proof of a deployable site.
- **Next actions:** Check the latest Branford content-test run, inspect rendered English/Spanish pages when staging becomes accessible, verify photo delivery, check restaurant listings periodically, and then move to another incomplete New Haven County town. Continue without retrying inaccessible staging indefinitely.

## New Haven County priority: Cheshire (checked 2026-10-24)

- **Committed content:** Expanded original English and Spanish guide with trail, Lock 12, Mixville, Bartlem Park, 2025 Grand List tax-rate context and parcel-specific utility due diligence. Added 12 bilingual municipal links. Rechecked five restaurant businesses against official websites, corrected Rossini's and Pho & Spice source domains and added Spanish descriptions. Verified two existing Commons photos and added Spanish captions. Added five regression tests. Personal pick remains Fuoco only.
- **Municipal source ledger:** https://cheshirect.gov/184/Assessor (2025 Grand List rate 31.36); https://cheshirect.gov/258/Land-Records ; https://cheshire.mapxpress.net/ ; https://cheshirect.gov/186/Building-Department ; https://cheshirect.gov/208/Regulations-Permits-Forms ; https://cheshirect.gov/187/Collector-of-Revenue ; https://cheshirect.gov/231/Sewer-Division-WPCD ; https://cheshirect.gov/490/Engineering-and-Water-Pollution-Control ; https://cheshirect.gov/241/Recreation ; https://cheshirect.gov/237/Trash-Recycling ; https://cheshirect.gov/207/Open-Space . The town's 2023 Annual Comprehensive Financial Report describes Lock 12, Mixville and Bartlem facilities.
- **Restaurant source ledger:** https://cheshirerossini.com/contact-us/ ; https://www.phoandspice-ct.com/ ; https://fuocoapizza.com/contact/ ; https://www.vironrondoosteria.com/ ; https://www.avantigrille.com/contact . No ratings, operating hours or new personal endorsements added.
- **Photo source ledger:** https://commons.wikimedia.org/wiki/File:Farmington_Canal_Heritage_Trail,_West_Cheshire_CT.jpg (John Phelan, CC BY 4.0) and https://commons.wikimedia.org/wiki/File:Farmington_canal_lock_12.jpg (Staib, CC BY-SA 3.0). The files and locations are verified; the live delivery/cropping/attribution remain untested.
- **Live-render blocker:** Both https://explore-connecticut-living-staging.joeysellsct.workers.dev/en/towns/cheshire and https://explore-connecticut-living-staging.joeysellsct.workers.dev/es/towns/cheshire returned an internal access error in the browser tool. Do not certify Cheshire 100% until bilingual rendered SEO, canonicals/hreflang, images, mobile layout, accessibility, Equal Housing Opportunity and affiliate disclosures and noindex/robots behavior are checked.
- **Build blocker:** GitHub Actions verifies Node content tests, not the complete Next.js build or Cloudflare deployment. Continue to another New Haven County town if staging remains inaccessible.
