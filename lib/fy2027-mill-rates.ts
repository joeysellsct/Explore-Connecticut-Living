// Connecticut Office of Policy and Management (OPM), FY2027 real/personal property municipal base rates.
// October 1, 2025 Grand List; FY2027 runs July 1, 2026 through June 30, 2027.
// Official source: https://data.ct.gov/Local-Government/Mill-Rates-for-FY-2014-2027/emyx-j53e
// Municipal base rates only. Special districts, boroughs, exemptions, phase-ins and
// actual assessed values may change a parcel's tax bill. Never use for motor vehicles.
// Coverage currently: all 27 New Haven County towns and 23 Fairfield County towns.
// Absence from this map means the rate has NOT been verified for this site.
export const fy2027MillRates: Readonly<Record<string, number>> = {
 'ansonia':29.46,'beacon-falls':23.67,'bethany':29.99,'branford':22.16,
 'cheshire':31.36,'derby':38.44,'east-haven':35.78,'guilford':28.4,
 'hamden':53.67,'madison':23.06,'meriden':29.99,'middlebury':26.46,
 'milford':28.67,'naugatuck':40.44,'new-haven':39.962,'north-branford':28.81,
 'north-haven':30.56,'orange':27.4,'oxford':20.55,'prospect':28.47,
 'seymour':28.64,'southbury':25.4,'wallingford':24.57,'waterbury':43.34,
 'west-haven':25.58,'wolcott':28.9,'woodbridge':33.99,
 'bethel':31.71,'bridgeport':27.95,'brookfield':29.97,'danbury':25.23,
 'darien':16.05,'easton':33.15,'fairfield':19.19,'greenwich':10.125,
 'monroe':29.88,'new-canaan':16.967,'new-fairfield':27.54,'newtown':29.26,
 'norwalk':32,'redding':30.47,'ridgefield':28.36,'shelton':15.51,
 'sherman':17.41,'stamford':28.47,'stratford':37.73,'trumbull':37.42,
 'weston':24.57,'westport':13.2,'wilton':25.0623,
};
export const fy2027MillRateSource = 'https://data.ct.gov/Local-Government/Mill-Rates-for-FY-2014-2027/emyx-j53e';
