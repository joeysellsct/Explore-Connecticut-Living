// Curated, manually verified restaurant data. No paid API or runtime scraping.
// Add only businesses whose town, name and source have been checked.
// Review scores are optional snapshots: always include source and checkedOn if used.
export type TownRestaurant = {
 name:string;
 cuisine?:string;
 website?:string;
 sourceUrl:string;
 rating?:number;
 reviewCount?:number;
 checkedOn:string;
};
export const townRestaurants:Record<string,TownRestaurant[]> = {
  'cheshire': [
    {name:"Rossini's Italian Restaurant & Pizza",cuisine:"Italian and pizza",sourceUrl:"https://www.rossinispizza.com/",checkedOn:'2026-10-22'},
    {name:"Pho & Spice",cuisine:"Vietnamese and Thai",sourceUrl:"https://www.phoandspice.com/",checkedOn:'2026-10-22'},
    {name:'Fuoco Coal Fired Apizza',cuisine:'Coal-fired New Haven-style apizza',website:'https://fuocoapizza.com/',sourceUrl:'https://fuocoapizza.com/contact/',checkedOn:'2026-10-22'},
    {name:'Viron Rondo Osteria',cuisine:'Italian',website:'https://www.vironrondoosteria.com/',sourceUrl:'https://www.vironrondoosteria.com/',checkedOn:'2026-10-22'},
    {name:'Avanti Grille',cuisine:'Italian',sourceUrl:'https://www.avantigrille.com/',checkedOn:'2026-10-22'},
  ],
  'ansonia': [
    {"name":"Relish Wine Bar & Grill","cuisine":"New American","sourceUrl":"https://www.relishwinebarandgrill.net/","checkedOn":"2026-10-22"},
    {"name":"Retro Bar & Char","cuisine":"Pizza and American bar","sourceUrl":"https://www.retrobarandchar.com/","checkedOn":"2026-10-22"},
    {"name":"Chifrijos Restaurant","cuisine":"Peruvian and Costa Rican","sourceUrl":"https://www.chifrijosct.com/","checkedOn":"2026-10-22"},
    {"name":"Koi Sushi Hibachi Asian Fusion","cuisine":"Asian fusion and sushi","sourceUrl":"https://www.koiasianfusionct.com/","checkedOn":"2026-10-22"},
    {"name":"Bangkok Room Ansonia","cuisine":"Thai","sourceUrl":"https://bangkokroomansonia.com/","checkedOn":"2026-10-22"},
  ],
  'seymour': [
    {"name":"Thai Dish","cuisine":"Thai","sourceUrl":"https://www.thaidishseymour.com/","checkedOn":"2026-10-22"},
    {"name":"Dock 34","cuisine":"American tavern","sourceUrl":"https://www.dock34.com/","checkedOn":"2026-10-22"},
    {"name":"First Street Apizza","cuisine":"Pizza and Italian","sourceUrl":"https://www.firststreetapizza.com/","checkedOn":"2026-10-22"},
    {"name":"Alberto's","cuisine":"Italian","sourceUrl":"https://www.albertosct.com/","checkedOn":"2026-10-22"},
    {"name":"Train Station Pizza","cuisine":"Pizza and Italian","sourceUrl":"https://www.trainstationpizza.com/","checkedOn":"2026-10-22"},
  ],
  'derby': [
    {"name":"Roseland Apizza","cuisine":"Pizza and Italian","sourceUrl":"https://www.roselandapizza.com/","checkedOn":"2026-10-22"},
    {"name":"Dew Drop Inn","cuisine":"American pub and wings","sourceUrl":"https://www.dewdropinnct.com/","checkedOn":"2026-10-22"},
    {"name":"Twisted Vine Restaurant","cuisine":"American and Italian","sourceUrl":"https://www.twistedvinerestaurant.com/","checkedOn":"2026-10-22"},
    {"name":"Tipsy Tomato Bar and Pizzeria","cuisine":"Pizza and Italian","sourceUrl":"https://www.tipsytomatopizzeria.com/","checkedOn":"2026-10-22"},
    {"name":"River Rock Tavern","cuisine":"American tavern","sourceUrl":"https://www.riverrocktavern.com/","checkedOn":"2026-10-22"},
  ],
  'chester': [
    {"name":"Grano Arso","cuisine":"Italian","sourceUrl":"https://www.visitchesterct.com/dining","checkedOn":"2026-10-21"},
    {"name":"River Tavern","cuisine":"Seasonal American","sourceUrl":"https://www.visitchesterct.com/dining","checkedOn":"2026-10-21"},
    {"name":"OTTO Pizza","cuisine":"Wood-fired pizza","sourceUrl":"https://www.visitchesterct.com/dining","checkedOn":"2026-10-21"},
    {"name":"Thai Riverside","cuisine":"Thai","sourceUrl":"https://www.visitchesterct.com/dining","checkedOn":"2026-10-21"},
    {"name":"The Brushmill","cuisine":"American","sourceUrl":"https://www.visitchesterct.com/dining","checkedOn":"2026-10-21"},
  ],
  'old-saybrook': [
    {"name":"Fresh Salt","cuisine":"Coastal American","sourceUrl":"https://ctvisit.com/listings/town-old-saybrook","checkedOn":"2026-10-21"},
    {"name":"La Marea","cuisine":"Italian","sourceUrl":"https://ctvisit.com/listings/town-old-saybrook","checkedOn":"2026-10-21"},
    {"name":"The Essex","cuisine":"Modern American","sourceUrl":"https://ctvisit.com/listings/town-old-saybrook","checkedOn":"2026-10-21"},
    {"name":"Zhang’s Restaurant","cuisine":"Asian","sourceUrl":"https://ctvisit.com/listings/town-old-saybrook","checkedOn":"2026-10-21"},
    {"name":"Otter Cove Restaurant & Bar","cuisine":"American","sourceUrl":"https://ctvisit.com/listings/town-old-saybrook","checkedOn":"2026-10-21"},
  ],
  'stratford': [
    {"name":"Outriggers Restaurant","cuisine":"Seafood and American waterfront dining","website":"https://outriggersrestaurant.com/","sourceUrl":"https://outriggersrestaurant.com/","checkedOn":"2026-10-21"},
    {"name":"Sitting Duck Tavern","cuisine":"New American tavern","website":"https://www.sittingducktavern.com/","sourceUrl":"https://www.sittingducktavern.com/stratford","checkedOn":"2026-10-21"},
    {"name":"Station House Wine Bar & Grill","cuisine":"American grill and Japanese sushi","website":"https://stationhousewinebargrill.com/","sourceUrl":"https://stationhousewinebargrill.com/about/","checkedOn":"2026-10-21"},
    {"name":"Joey C's Boathouse","cuisine":"Seafood, Mexican-inspired dishes and American comfort food","website":"https://www.joeycsboathouse.com/","sourceUrl":"https://www.joeycsboathouse.com/","checkedOn":"2026-10-21"},
    {"name":"Acapulcos Mexican Restaurant","cuisine":"Mexican","website":"https://acapulcos.net/","sourceUrl":"https://acapulcos.net/mexican-restaurant-locations/stratford-ct/","checkedOn":"2026-10-21"},
  ],
  'hamden': [
    {"name":"Mikro Depot","cuisine":"American gastropub and small plates","sourceUrl":"https://www.mikrodepot.com/","checkedOn":"2026-10-21"},
    {"name":"Cafe Amici","cuisine":"Italian","sourceUrl":"https://www.hamdenedc.com/business-clusters/restaurants-food-and-beverage/","checkedOn":"2026-10-21"},
    {"name":"Bangkok Boulevard","cuisine":"Thai","sourceUrl":"https://www.hamdenedc.com/business-clusters/restaurants-food-and-beverage/","checkedOn":"2026-10-21"},
    {"name":"Playwright Irish Pub","cuisine":"Irish pub and American","sourceUrl":"https://www.hamdenedc.com/business-clusters/restaurants-food-and-beverage/","checkedOn":"2026-10-21"},
    {"name":"Ristorante Luce","cuisine":"Italian","sourceUrl":"https://www.hamdenedc.com/business-clusters/restaurants-food-and-beverage/","checkedOn":"2026-10-21"},
  ],
  'madison': [
    {"name":"Cafe Allegre","cuisine":"Italian and Mediterranean","sourceUrl":"https://cafeallegre.com/","checkedOn":"2026-10-21"},
    {"name":"Amato's Pizza & Pasta","cuisine":"Pizza and Italian","sourceUrl":"https://www.visitmadisonct.org/BusinessDirectoryII.aspx?lngBusinessCategoryID=28","checkedOn":"2026-10-21"},
    {"name":"Bar Bouchée","cuisine":"French bistro","sourceUrl":"https://barbouchee.com/","checkedOn":"2026-10-21"},
    {"name":"The Wharf Restaurant","cuisine":"New England coastal","sourceUrl":"https://thewharfmadison.com/","checkedOn":"2026-10-21"},
    {"name":"Donahue's Madison Beach Grille","cuisine":"American pub and seafood","sourceUrl":"https://donahuesmadisonbeachgrille.com/our-story/","checkedOn":"2026-10-21"},
  ],
  'guilford': [
    {"name":"South Lane Bistro","cuisine":"Contemporary American","sourceUrl":"https://www.southlanebistro.com/","checkedOn":"2026-10-21"},
    {"name":"Quattro's Italian Restaurant and Wine Bar","cuisine":"Italian and Latin-inspired","sourceUrl":"https://www.quattrositalian.com/","checkedOn":"2026-10-21"},
    {"name":"The Guilford Bistro","cuisine":"Italian","sourceUrl":"https://www.theguilfordbistro.com/","checkedOn":"2026-10-21"},
    {"name":"Pasta Avest & Pizzeria","cuisine":"Italian and pizza","sourceUrl":"https://www.pastaavest.com/","checkedOn":"2026-10-21"},
    {"name":"Kamana Fine Indian Cuisine","cuisine":"Indian and Nepalese","sourceUrl":"https://www.kamanacuisine.com/","checkedOn":"2026-10-21"},
  ],
  'east-haven': [
    {"name":"Bistro Mediterranean & Tapas Bar","cuisine":"Mediterranean and Spanish tapas","sourceUrl":"https://www.bistromediterraneanandtapasbar.com/","checkedOn":"2026-10-21"},
    {"name":"Tolli's Apizza","cuisine":"Pizza and Italian","sourceUrl":"https://www.tolliseasthaven.com/","checkedOn":"2026-10-21"},
    {"name":"Transilvania Restaurant and Bar","cuisine":"Romanian and Eastern European","sourceUrl":"https://transilvaniact.com/","checkedOn":"2026-10-21"},
    {"name":"Sandpiper Restaurant","cuisine":"Seafood and American","sourceUrl":"https://sandpiper-easthaven.com/","checkedOn":"2026-10-21"},
    {"name":"The Lobster Shack","cuisine":"Seafood and lobster rolls","sourceUrl":"https://www.connecticutlobster.com/","checkedOn":"2026-10-21"},
  ],
  'new-haven': [
    {"name":"Sally’s Apizza","cuisine":"New Haven-style pizza","sourceUrl":"https://visitnewhaven.com/places/sallys-apizza/","checkedOn":"2026-10-21"},
    {"name":"Modern Apizza","cuisine":"New Haven-style pizza","sourceUrl":"https://visitnewhaven.com/events/national-pizza-day/","checkedOn":"2026-10-21"},
    {"name":"Zeneli Pizzeria","cuisine":"Neapolitan pizza","sourceUrl":"https://visitnewhaven.com/wp-content/uploads/2024/04/New-Haven-Visitors-Guide-2024-FINAL.pdf","checkedOn":"2026-10-21"},
    {"name":"Rawa","cuisine":"Middle Eastern and Mediterranean","sourceUrl":"https://visitnewhaven.com/wp-content/uploads/2024/04/New-Haven-Visitors-Guide-2024-FINAL.pdf","checkedOn":"2026-10-21"},
    {"name":"Olea","cuisine":"Spanish and Mediterranean","sourceUrl":"https://visitnewhaven.com/wp-content/uploads/2024/04/New-Haven-Visitors-Guide-2024-FINAL.pdf","checkedOn":"2026-10-21"},
  ],
  'west-haven': [
    {"name":"Zuppardi’s Apizza","cuisine":"New Haven-style pizza","sourceUrl":"https://visitnewhaven.com/places/zuppardis-apizza/","checkedOn":"2026-10-21"},
    {"name":"Biagetti’s Restaurant","cuisine":"Italian","sourceUrl":"https://ctvisit.com/listings/biagettis-restaurant","checkedOn":"2026-10-21"},
    {"name":"Duffy’s Tavern","cuisine":"Irish pub and American","sourceUrl":"https://ctvisit.com/listings/duffys-tavern","checkedOn":"2026-10-21"},
    {"name":"Stowe’s Seafood","cuisine":"Seafood","sourceUrl":"https://ctvisit.com/listings/city-west-haven","checkedOn":"2026-10-21"},
    {"name":"Jerri’s Luncheonette","cuisine":"Breakfast and lunch","sourceUrl":"https://ctvisit.com/listings/city-west-haven","checkedOn":"2026-10-21"},
  ],
  'branford': [
    {"name":"Lenny’s Indian Head","cuisine":"Seafood","sourceUrl":"https://visitnewhaven.com/places/lennys-indian-head/","checkedOn":"2026-10-21"},
    {"name":"Dockside Restaurant","cuisine":"Seafood and waterfront dining","sourceUrl":"https://visitnewhaven.com/places/dockside-restaurant/","checkedOn":"2026-10-21"},
    {"name":"Rossitto’s Ristorante","cuisine":"Italian","sourceUrl":"https://visitnewhaven.com/wp-content/uploads/2024/04/New-Haven-Visitors-Guide-2024-FINAL.pdf","checkedOn":"2026-10-21"},
    {"name":"Jalapeño Heaven","cuisine":"Mexican","sourceUrl":"https://visitnewhaven.com/wp-content/uploads/2024/04/New-Haven-Visitors-Guide-2024-FINAL.pdf","checkedOn":"2026-10-21"},
    {"name":"Ross Vino","cuisine":"Italian","sourceUrl":"https://ctvisit.com/articles/takeout-and-delivery-restaurants-connecticut","checkedOn":"2026-10-21"},
  ],
  'orange': [
    {name:"Andini's Restaurant",cuisine:'Italian-American and pizza',website:'https://andinisrestaurant.com/',sourceUrl:'https://andinisrestaurant.com/',checkedOn:'2026-10-23'},
    {name:'Coromandel Cuisine of India',cuisine:'Indian',website:'https://www.coromandelorange.com/',sourceUrl:'https://www.coromandelorange.com/',checkedOn:'2026-10-23'},
    {name:'Noodle House',cuisine:'Ramen, pho and Asian noodles',website:'https://noodle-house.com/',sourceUrl:'https://noodle-house.com/',checkedOn:'2026-10-23'},
  ],
  milford: [
    {name:'The Corner Restaurant',cuisine:'Breakfast and brunch',website:'https://www.thecornerbrunch.com',sourceUrl:'https://www.thecornerbrunch.com',checkedOn:'2026-10-21'},
    {name:'Bin 100 Restaurant',cuisine:'Italian and Mediterranean',website:'https://www.bin100.com',sourceUrl:'https://www.bin100.com/dinner-menu',checkedOn:'2026-10-21'},
    {name:'Stonebridge Restaurant',cuisine:'American and seafood',website:'https://stonebridgerestaurant.com/',sourceUrl:'https://stonebridgerestaurant.com/',checkedOn:'2026-10-21'},
    {name:'Flipside Burgers & Bar',cuisine:'Burgers and American',sourceUrl:'https://milfordct.com/restaurant-week-menus/',checkedOn:'2026-10-21'},
    {name:'Taste of Thai Restaurant',cuisine:'Thai',sourceUrl:'https://milfordct.com/restaurant-week-menus/',checkedOn:'2026-10-21'},
  ],
};
// Personal recommendations are separate from third-party ratings.
export const joeyTopPicks:Record<string,{name:string;note?:string;url?:string}[]> = {
  'cheshire': [
    {name:'Fuoco Coal Fired Apizza',note:'Joey’s personal pick for Cheshire. Coal-fired New Haven-style apizza.',url:'https://fuocoapizza.com/'},
  ],
  'branford': [
    {name:'Rosso Vino',note:'Joey’s personal pick for Branford.',url:'https://rossovino.net/'},
  ],
  'west-haven': [
    {name:'Zuppardi’s Apizza',note:'Joey’s personal pick for West Haven. A longtime favorite for classic New Haven-style apizza.',url:'https://zuppardisapizza.com/'},
  ],
};

// Deployment trigger test: no change to restaurant listings.
