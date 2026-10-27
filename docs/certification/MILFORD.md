# Milford, Connecticut — launch certification dossier

**Status: NOT CERTIFIED — awaiting independent deployment provenance, source-currency checks, human accessibility and visual review, and Joey's final approval.**

- **Review snapshot:** 2026-10-27 (America/New_York).
- **County sequence:** New Haven County town 1 of 27 for formal certification. West Haven is next; Fairfield County follows only after all 27 New Haven County towns are certified.
- **Public staging routes:** [English](https://explore-connecticut-living-staging.joeysellsct.workers.dev/en/towns/milford) · [Español](https://explore-connecticut-living-staging.joeysellsct.workers.dev/es/towns/milford).
- **Source revision checked:** `cea3486e929a05270b14fcc7fc16a3aa9c0efb43` on `main`.
- **CI evidence:** [GitHub Actions run 40573410398](https://github.com/joeysellsct/Explore-Connecticut-Living/actions/runs/40573410398) at commit `cea3486e929a05270b14fcc7fc16a3aa9c0efb43`, all four jobs individually reported `success`: `content-tests`, `production-build`, `staging-smoke`, and `new-haven-browser-audit`.
- **Important evidence boundary:** GitHub's source/build revision is **not** proof of the Cloudflare-deployed revision. The browser/HTTP checks interrogated whatever version staging served when the jobs ran. No Cloudflare deployment commit SHA was independently obtained.
- **Certification count:** New Haven County **0/27**; statewide **0/169** claimed certified.

## Evidence-backed checklist

Legend: **PASS (automated)** means the named GitHub-hosted check succeeded against the staging response or source; **PRESENT (source)** means relevant material exists but editorial/source verification remains; **PENDING** is a hard certification gate. These are separate levels of assurance.

| Gate | Current status | Evidence and what remains |
| --- | --- | --- |
| Useful original English/Spanish town profiles | **PRESENT (source)** | `lib/town-highlights.ts` has substantial, distinct EN/ES Milford guidance on downtown/harbor, transit, beaches, flood due diligence, 2025 revaluation and property research; `tests/milford.test.mjs` checks topic and length. Final editorial/factual read-through **PENDING**. |
| Approximately five real restaurants | **PRESENT (source)** | Five dated EN/ES editorial entries in `lib/town-restaurants.ts`: Stonebridge Restaurant, Dockside Brewery, SBC Restaurant & Beer Bar, Bin 100 Restaurant, Gusto Trattoria. Operator/source URLs were recorded as checked **2026-10-24**; source regression test checks count, distinctness, links and date. Recheck operators, town locations and current operation before approval **PENDING**. These are **not** Joey's personal Top Picks. |
| Real local attractions | **PRESENT (source)** | Milford Green, Milford Harbor, Silver Sands State Park, Walnut Beach, Milford station, Connecticut Audubon Coastal Center and Milford Historical Society; official/operator resources in `lib/town-official-links.ts`. Current access/rules and editorial accuracy recheck **PENDING**. |
| Municipal and moving resources | **PASS (automated markup); source currency PENDING** | Assessor, GIS, Tax Collector, planning/zoning, permits, wetlands, schools, Metro-North, beaches, water-quality and other resources are in `lib/town-official-links.ts`. Source tests check uniqueness and required links; the live bilingual smoke test checks selected critical URLs in rendered HTML. Full external-link health/currency review **PENDING**. |
| Property tax accuracy and caveats | **PRESENT (source); calculator PASS (browser)** | `lib/fy2027-mill-rates.ts` records Milford municipal base **28.67 mills** for FY2027, with source link. Town guide discloses Woodmont Borough, Laurel Beach and Morningside special-district considerations and the five-year phase-in following the Oct. 1, 2025 revaluation. Browser audit verified editable taxable assessment, mill-rate override and reset in EN/ES desktop/mobile. Independently recheck rate, district applicability and parcel-specific caveats before certification **PENDING**. |
| Water, sewer, utilities | **PRESENT (source)** | `TownMovingResources.tsx` provides Regional Water Authority and Southern Connecticut Gas operator links with address-level caveats; the separate **$361.92 per-unit** sewer charge is explicitly dated to the **2025 Grand List** and excluded from property-tax estimates. Source/regression checks exist. Fresh utility and fee-source recheck **PENDING**. |
| Town-specific licensed photography | **PASS (rendered/loaded); source license recheck PENDING** | Three Milford photos: Milford Green (Fadein, CC0 1.0), Milford Point on the Housatonic (Russ Whitehurst/russimages, CC BY 2.0), Silver Sands State Park (Rhododendrites, CC BY-SA 4.0). `scripts/staging-town-audit.mjs` verifies localized alt text, per-photo credit, license URL and Commons original-file attribution on both HTML pages. Real-browser audit reports **3 loaded images** in each of EN/ES desktop/mobile. Original Commons license/creator/identity recheck before approval **PENDING**. |
| Unique title and meta description | **PASS (automated staging HTML)** | `scripts/staging-town-audit.mjs` checks Milford-specific title and 50–170-character description on both locales. Human editorial quality/duplication review across neighboring towns **PENDING**. |
| Canonical, en-US/es-US and x-default hreflang | **PASS (automated staging HTML)** | Exact bilingual canonical and alternate links checked on both staging routes. |
| Internal navigation | **PASS (selected browser flows); full crawl PENDING** | Browser test follows town-language link and header locale switch in both directions and verifies document language and town preservation. Back-to-town navigation markup and keyboard focus are checked. Comprehensive internal-link crawl **PENDING**. |
| Structured data | **PASS (presence/markup); semantic validation PENDING** | Live audit requires JSON-LD containing `BreadcrumbList` and `WebPage`; independent schema validation and semantic inspection **PENDING**. |
| Sitemap coverage | **PASS (automated staging XML)** | Live audit requires both Milford language routes in `/sitemap.xml`. |
| Equal Housing, broker and legal information | **PASS (selected rendered checks); full legal review PENDING** | Live audit checks Equal Housing Opportunity text, Joey McVety and mygoodagent identification. Complete Equal Housing logo/disclosure and legal-text review on town and shared pages **PENDING**. |
| Amazon, Frontier and compensation disclosures | **PASS (selected town HTML); shared-page review PENDING** | Live EN/ES audit checks Amazon Associate disclosure, paid Frontier referral disclosure and partner names on the town page. Dedicated **Moving & Home Resources** page disclosure/link check **PENDING**. Preserve both referral destinations and the disclosure language. |
| Staging indexing safeguards | **PASS (automated staging HTTP)** | GitHub-hosted smoke audit confirmed `/robots.txt` disallows all and both Milford pages expose `noindex`. Do not confuse staging safeguards with production launch SEO. |
| Responsive rendering and loaded images | **PASS (automated browser)** | [Run 40573410398 browser job](https://github.com/joeysellsct/Explore-Connecticut-Living/actions/runs/40573410398) exercised EN/ES at **1440×900 desktop** and **390×844 mobile**. Log: **3 images loaded, 0px horizontal overflow, 0 axe violations** in all four combinations. Screenshots were uploaded as artifact `new-haven-browser-screenshots` (artifact ID `12766141423`, retention seven days); **human visual inspection of those screenshots PENDING**. |
| Automated accessibility | **PASS (automated scope only)** | Playwright + axe tags WCAG 2 A/AA, 2.1 A/AA and 2.2 AA reported **zero automated violations** for four Milford viewport/locale cases. Script also tests white-on-dark photo-credit styling and keyboard Tab/focus indicators for selected links. This is **not** a WCAG conformance certification. |
| Human accessibility | **PENDING — hard gate** | A person must review keyboard-only task completion, focus order and visibility across the whole page, screen-reader announcements (including tax-estimate updates), reading order, image descriptions and both languages. Record reviewer, date, assistive technology and findings. Automated axe results cannot replace this. |
| Independent Cloudflare deployment provenance | **PENDING — hard gate** | Obtain the actual deployed Cloudflare Worker/Pages deployment ID and deployed Git commit SHA from Cloudflare's deployment records (or another independently trustworthy deployment source), and reconcile against GitHub. Live GitHub-runner HTTP/browser success does **not** establish deployed SHA. Direct external staging retrieval from the assistant's web environment was inaccessible on 2026-10-27; GitHub-hosted staging requests did succeed. |
| Final Joey visual approval | **PENDING — hard gate** | After outstanding technical/editorial checks pass, provide EN/ES desktop/mobile previews, summary of resolved issues, and request Joey's sign-off. Do not ask Joey to perform technical QA. |

## Current certification decision

**NOT CERTIFIED.** Do not increment 0/27 or describe Milford as 100% complete merely because the latest GitHub Actions run is green. The remaining blockers are: (1) independent deployed-commit provenance; (2) fresh primary-source/restaurant/photo-license checks and complete external/internal link review; (3) human visual and screen-reader/keyboard usability review; (4) semantic structured-data and shared-page legal/disclosure review; and (5) Joey's final visual approval.

### Next productive sequence

1. Verify primary-source currency and original photo licensing, recording checked dates and evidence in this dossier.
2. Audit the dedicated Moving & Home Resources page and remaining internal/external links, plus structured-data semantics.
3. Inspect saved browser screenshots and complete human assistive-technology review; log actual findings and fixes.
4. Independently reconcile Cloudflare deployment ID/commit with GitHub `main`; if access is blocked, preserve exact blocker and continue other checks.
5. Present the finished EN/ES Milford pages for Joey's **visual approval**; certify only when all gates are satisfied, then open the West Haven dossier.

This document is a living evidence ledger, not a declaration that staging is production-ready.
