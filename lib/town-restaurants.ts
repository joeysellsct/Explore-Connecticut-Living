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
  milford: [
    {name:'The Corner Restaurant',cuisine:'Breakfast and brunch',website:'https://www.thecornerbrunch.com',sourceUrl:'https://www.thecornerbrunch.com',checkedOn:'2026-10-21'},
    {name:'Bin 100 Restaurant',cuisine:'Italian and Mediterranean',website:'https://www.bin100.com',sourceUrl:'https://www.bin100.com/dinner-menu',checkedOn:'2026-10-21'},
    {name:'Stonebridge Restaurant',cuisine:'American and seafood',website:'https://stonebridgerestaurant.com/',sourceUrl:'https://stonebridgerestaurant.com/',checkedOn:'2026-10-21'},
    {name:'Flipside Burgers & Bar',cuisine:'Burgers and American',sourceUrl:'https://milfordct.com/restaurant-week-menus/',checkedOn:'2026-10-21'},
    {name:'Taste of Thai Restaurant',cuisine:'Thai',sourceUrl:'https://milfordct.com/restaurant-week-menus/',checkedOn:'2026-10-21'},
  ],
};
// Personal recommendations are separate from third-party ratings.
export const joeyTopPicks:Record<string,{name:string;note?:string;url?:string}[]> = {};
