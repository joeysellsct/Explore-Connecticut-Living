// Curated, manually verified restaurant data. No paid API or runtime scraping.
// Add only businesses whose town, name and source have been checked.
// Review scores are optional snapshots: always include source and checkedOn if used.
export type TownRestaurant = {
 name:string;
 cuisine?:string;
 cuisineEs?:string;
 website?:string;
 sourceUrl:string;
 rating?:number;
 reviewCount?:number;
 checkedOn:string;
};
export const townRestaurants:Record<string,TownRestaurant[]> = {
  // Canton restaurants verified on their own websites 2026-10-23; no ratings or endorsements.
  'canton': [
    {"name":"LaSalle Market & Deli","cuisine":"Breakfast, deli sandwiches and market fare","cuisineEs":"Desayunos, sándwiches de deli y platos de mercado","website":"https://lasallemarket.com/","sourceUrl":"https://lasallemarket.com/","checkedOn":"2026-10-23"},
    {"name":"Crown & Hammer Restaurant & Pub","cuisine":"American pub dining in Collinsville","cuisineEs":"Cocina estadounidense de pub en Collinsville","website":"https://crownandhammer.com/","sourceUrl":"https://crownandhammer.com/hours-location/","checkedOn":"2026-10-23"},
    {"name":"Mercato Italian Kitchen & Bar","cuisine":"Contemporary Italian dishes and bar","cuisineEs":"Platos italianos contemporáneos y bar","website":"https://www.mercatoitaliankitchen.com/locations/canton","sourceUrl":"https://www.mercatoitaliankitchen.com/locations/canton","checkedOn":"2026-10-23"},
    {"name":"American Flatbread","cuisine":"Wood-fired flatbread pizzas","cuisineEs":"Pizzas artesanales al horno de leña","website":"https://canton.americanflatbread.com/","sourceUrl":"https://canton.americanflatbread.com/","checkedOn":"2026-10-23"},
    {"name":"Saybrook Fish House","cuisine":"Seafood and American dining","cuisineEs":"Mariscos y cocina estadounidense","website":"https://www.saybrookfishhousecanton.com/","sourceUrl":"https://www.saybrookfishhousecanton.com/","checkedOn":"2026-10-23"},
  ],
  // Avon restaurant locations and cuisines verified on restaurant-owned websites 2026-10-23.
  'avon': [
    {"name":"The North House","cuisine":"Modern New England and American dining","cuisineEs":"Cocina moderna de Nueva Inglaterra y estadounidense","website":"https://thenorthhouse.com/","sourceUrl":"https://thenorthhouse.com/","checkedOn":"2026-10-23"},
    {"name":"Max A Mia Ristorante","cuisine":"Italian bistro, pasta and stone-oven pizza","cuisineEs":"Bistró italiano, pastas y pizza al horno de piedra","website":"https://www.maxamiaristorante.com/","sourceUrl":"https://www.maxamiaristorante.com/","checkedOn":"2026-10-23"},
    {"name":"Market Place Kitchen & Bar","cuisine":"Farm-to-table American cooking and brunch","cuisineEs":"Cocina estadounidense de la granja a la mesa y brunch","website":"https://marketplacekitchenbar.com/locations/avon","sourceUrl":"https://marketplacekitchenbar.com/locations/avon","checkedOn":"2026-10-23"},
    {"name":"Max Burger","cuisine":"American burgers and gastropub fare","cuisineEs":"Hamburguesas estadounidenses y cocina de gastropub","website":"https://maxburgerbar.com/","sourceUrl":"https://maxburgerbar.com/","checkedOn":"2026-10-23"},
    {"name":"Seasons Restaurant & Tap Room","cuisine":"Seasonal American dining at Avon Old Farms Hotel","cuisineEs":"Cocina estadounidense de temporada en Avon Old Farms Hotel","website":"https://www.avonoldfarmshotel.com/dine","sourceUrl":"https://www.avonoldfarmshotel.com/dine","checkedOn":"2026-10-23"},
  ],
  // Simsbury restaurant location and cuisine verified on official sites 2026-10-23.
  'simsbury': [
    {"name":"Metro Bis","cuisine":"Contemporary American bistro","cuisineEs":"Bistró de cocina estadounidense contemporánea","website":"https://metrobis.com/","sourceUrl":"https://metrobis.com/","checkedOn":"2026-10-23"},
    {"name":"Abigail's Grille & Wine Bar","cuisine":"Modern American and continental dining","cuisineEs":"Cocina estadounidense moderna y continental","website":"https://abigailsgrill.com/","sourceUrl":"https://abigailsgrill.com/","checkedOn":"2026-10-23"},
    {"name":"Old Well Tavern","cuisine":"Casual American tavern and comfort food","cuisineEs":"Taberna informal de cocina estadounidense y platos caseros","website":"https://oldwelltavern.com/","sourceUrl":"https://oldwelltavern.com/","checkedOn":"2026-10-23"},
    {"name":"Maple Tree Cafe","cuisine":"Italian dishes, pasta and burgers","cuisineEs":"Platos italianos, pastas y hamburguesas","website":"https://www.mapletreecafe.com/","sourceUrl":"https://www.mapletreecafe.com/","checkedOn":"2026-10-23"},
    {"name":"Pop Over Eatery","cuisine":"Breakfast, brunch and sandwiches","cuisineEs":"Desayunos, brunch y sándwiches","website":"https://popovereatery.toast.site/visit-us","sourceUrl":"https://popovereatery.toast.site/visit-us","checkedOn":"2026-10-23"},
  ],
  // Farmington locations and cuisines checked on restaurant-owned websites 2026-10-23.
  'farmington': [
    {"name":"Fork & Fire","cuisine":"Contemporary American restaurant and bar","cuisineEs":"Restaurante y bar de cocina estadounidense contemporánea","website":"https://www.forkandfire.net/","sourceUrl":"https://www.forkandfire.net/","checkedOn":"2026-10-23"},
    {"name":"Butchers & Bakers","cuisine":"Coal-fired pizza, American fare and brunch","cuisineEs":"Pizza al horno de carbón, cocina estadounidense y brunch","website":"https://www.butchersandbakers.com/","sourceUrl":"https://www.butchersandbakers.com/","checkedOn":"2026-10-23"},
    {"name":"Piccolo Arancio","cuisine":"Italian bistro and pasta","cuisineEs":"Bistró italiano y pastas","website":"https://piccoloarancio.com/","sourceUrl":"https://piccoloarancio.com/","checkedOn":"2026-10-23"},
    {"name":"Naples Pizza","cuisine":"Neapolitan-style pizza, calzones and sandwiches","cuisineEs":"Pizza estilo napolitano, calzones y sándwiches","website":"https://www.naplespizza.net/story","sourceUrl":"https://www.naplespizza.net/story","checkedOn":"2026-10-23"},
    {"name":"Bamboo Asian Cuisine","cuisine":"Chinese, Thai and Japanese dishes","cuisineEs":"Platos chinos, tailandeses y japoneses","website":"https://www.bamboofarmington.com/","sourceUrl":"https://www.bamboofarmington.com/","checkedOn":"2026-10-23"},
  ],
  // Greenwich locations and menus checked on each restaurant's official website 2026-10-23.
  'greenwich': [
    {"name":"Harvest Wine Bar & Restaurant","cuisine":"Seasonal American cooking and wine bar","cuisineEs":"Cocina estadounidense de temporada y bar de vinos","website":"https://harvestwinebar.com/greenwich/index.php","sourceUrl":"https://harvestwinebar.com/greenwich/index.php","checkedOn":"2026-10-23"},
    {"name":"Elm Street Oyster House","cuisine":"Seafood and oyster bar","cuisineEs":"Mariscos y bar de ostras","website":"https://www.elmstreetoysterhouse.com/","sourceUrl":"https://www.elmstreetoysterhouse.com/","checkedOn":"2026-10-23"},
    {"name":"Townhouse","cuisine":"Modern seasonal American cuisine","cuisineEs":"Cocina estadounidense moderna de temporada","website":"https://www.townhousegreenwich.com/","sourceUrl":"https://www.townhousegreenwich.com/","checkedOn":"2026-10-23"},
    {"name":"Miku Sushi","cuisine":"Japanese sushi and cooked dishes","cuisineEs":"Sushi japonés y platos cocinados","website":"https://mikugreenwich.com/about.html","sourceUrl":"https://mikugreenwich.com/about.html","checkedOn":"2026-10-23"},
    {"name":"Mediterraneo","cuisine":"Mediterranean seafood, pasta and brick-oven pizza","cuisineEs":"Cocina mediterránea con mariscos, pasta y pizza al horno de ladrillo","website":"https://www.zhospitalitygroup.com/meditteraneo/home","sourceUrl":"https://www.zhospitalitygroup.com/meditteraneo/home","checkedOn":"2026-10-23"},
  ],
  // Westport restaurant locations and cuisines checked on business-owned websites 2026-10-23.
  'westport': [
    {"name":"The Cottage","cuisine":"Seasonal modern American cuisine","cuisineEs":"Cocina estadounidense contemporánea de temporada","website":"https://www.thecottage.kitchen/westport","sourceUrl":"https://www.thecottage.kitchen/westport","checkedOn":"2026-10-23"},
    {"name":"Kawa Ni","cuisine":"Japanese izakaya-inspired noodles, rice bowls and small plates","cuisineEs":"Platos pequeños, fideos y arroz inspirados en las izakayas japonesas","website":"https://www.kawaniwestport.com/about","sourceUrl":"https://www.kawaniwestport.com/about","checkedOn":"2026-10-23"},
    {"name":"bartaco Westport","cuisine":"Tacos and Latin-inspired street food","cuisineEs":"Tacos y comida callejera de inspiración latinoamericana","website":"https://bartaco.com/location/westport/","sourceUrl":"https://bartaco.com/location/westport/","checkedOn":"2026-10-23"},
    {"name":"The Whelk","cuisine":"Seafood and coastal American cuisine","cuisineEs":"Mariscos y cocina estadounidense costera","website":"https://thewhelkwestport.com/contact","sourceUrl":"https://thewhelkwestport.com/contact","checkedOn":"2026-10-23"},
    {"name":"OKO Westport","cuisine":"Contemporary Japanese cuisine and sushi","cuisineEs":"Cocina japonesa contemporánea y sushi","website":"https://okokitchen.com/westport","sourceUrl":"https://okokitchen.com/westport","checkedOn":"2026-10-23"},
  ],

  // Fairfield restaurant locations and cuisines checked on business-owned websites 2026-10-23.
  'fairfield': [
    {"name":"Barcelona Wine Bar","cuisine":"Spanish tapas and Mediterranean small plates","cuisineEs":"Tapas españolas y platos pequeños mediterráneos","website":"https://barcelonawinebar.com/location/fairfield/","sourceUrl":"https://barcelonawinebar.com/location/fairfield/","checkedOn":"2026-10-23"},
    {"name":"Sally's Apizza","cuisine":"New Haven-style apizza","cuisineEs":"Apizza al estilo de New Haven","website":"https://sallysapizza.com/locations/fairfield/","sourceUrl":"https://sallysapizza.com/locations/fairfield/","checkedOn":"2026-10-23"},
    {"name":"Colony Grill","cuisine":"Thin-crust bar pizza","cuisineEs":"Pizza fina estilo bar","website":"https://colonygrill.com/locations","sourceUrl":"https://colonygrill.com/locations","checkedOn":"2026-10-23"},
    {"name":"Geronimo Tequila Bar and Southwest Grill","cuisine":"Southwestern American and Mexican-inspired cuisine","cuisineEs":"Cocina del suroeste estadounidense con influencia mexicana","website":"https://www.geronimobarandgrill.com/","sourceUrl":"https://www.geronimobarandgrill.com/","checkedOn":"2026-10-23"},
    {"name":"Brick Walk Tavern","cuisine":"Seasonal American tavern fare","cuisineEs":"Platos estadounidenses de temporada estilo taberna","website":"https://www.brickwalktavern.com/","sourceUrl":"https://www.brickwalktavern.com/","checkedOn":"2026-10-23"},
  ],

  // Redding and Georgetown addresses and cuisines verified against business-owned sites, 2026-10-23.
  'redding': [
    {"name":"The Redding Roadhouse","cuisine":"American pub fare and seasonal entrees","cuisineEs":"Comida de pub estadounidense y platos de temporada","website":"https://www.thereddingroadhouse.com/","sourceUrl":"https://www.thereddingroadhouse.com/","checkedOn":"2026-10-23"},
    {"name":"Milestone Georgetown","cuisine":"American comfort food and wood-fired pizza","cuisineEs":"Platos caseros estadounidenses y pizza al horno de leña","website":"https://www.milestonect.com/location/milestone-georgetown/","sourceUrl":"https://www.milestonect.com/location/milestone-georgetown/","checkedOn":"2026-10-23"},
    {"name":"Wire Mill Saloon & Barbecue","cuisine":"Smoked barbecue and American sides","cuisineEs":"Barbacoa ahumada y acompañamientos estadounidenses","website":"https://wiremillbbq.com/","sourceUrl":"https://wiremillbbq.com/","checkedOn":"2026-10-23"},
    {"name":"The Georgetown Owl","cuisine":"Market café and contemporary restaurant","cuisineEs":"Café de mercado y restaurante contemporáneo","website":"https://www.georgetownowl.com/","sourceUrl":"https://www.georgetownowl.com/","checkedOn":"2026-10-23"},
    {"name":"Lombardi's Trattoria","cuisine":"Italian trattoria and pizza","cuisineEs":"Trattoria italiana y pizza","website":"https://www.lombarditrattoria.com/","sourceUrl":"https://www.lombarditrattoria.com/","checkedOn":"2026-10-23"},
  ],

  // Wilton locations and cuisine verified against restaurant-owned sites on 2026-10-23.
  'wilton': [
    {"name":"Orem's Diner","cuisine":"Classic American diner, breakfast and comfort food","cuisineEs":"Diner estadounidense clásico, desayunos y platos caseros","website":"https://oremsdiner.com/","sourceUrl":"https://oremsdiner.com/","checkedOn":"2026-10-23"},
    {"name":"Little Pub Wilton","cuisine":"American pub food and burgers","cuisineEs":"Comida de pub estadounidense y hamburguesas","website":"https://littlepub.com/wilton","sourceUrl":"https://littlepub.com/wilton","checkedOn":"2026-10-23"},
    {"name":"Bianco Rosso Wine Bar & Restaurant","cuisine":"Contemporary Italian and wine bar","cuisineEs":"Cocina italiana contemporánea y bar de vinos","website":"https://www.biancorossorestaurantandbar.com/","sourceUrl":"https://www.biancorossorestaurantandbar.com/","checkedOn":"2026-10-23"},
    {"name":"Craft 14 Kitchen + Bar","cuisine":"New American kitchen and bar","cuisineEs":"Cocina estadounidense contemporánea y bar","website":"https://www.craft14wilton.com/","sourceUrl":"https://www.craft14wilton.com/about/","checkedOn":"2026-10-23"},
    {"name":"BALDANZA at the Schoolhouse","cuisine":"Seasonal American farm-to-table","cuisineEs":"Cocina estadounidense de temporada y de la granja a la mesa","website":"https://baldanzarestaurants.com/","sourceUrl":"https://baldanzarestaurants.com/","checkedOn":"2026-10-23"},
  ],

  // New Canaan restaurant names, towns and cuisines checked against official business websites, 2026-10-23.
  'new-canaan': [
    {name:"Elm Restaurant",cuisine:"Seasonal New American",cuisineEs:"Nueva cocina estadounidense de temporada",website:"https://www.elmrestaurant.com/",sourceUrl:"https://www.elmrestaurant.com/about/",checkedOn:'2026-10-23'},
    {name:"Gates Restaurant & Bar",cuisine:"Modern American comfort food",cuisineEs:"Cocina casera estadounidense moderna",website:"https://gatesrestaurant.com/",sourceUrl:"https://gatesrestaurant.com/",checkedOn:'2026-10-23'},
    {name:"Solé Restaurant",cuisine:"Italian and Mediterranean",cuisineEs:"Italiana y mediterránea",website:"https://www.zhospitalitygroup.com/sole/home",sourceUrl:"https://www.zhospitalitygroup.com/sole/home",checkedOn:'2026-10-23'},
    {name:"Farmer's Table",cuisine:"Seasonal farm-to-table American",cuisineEs:"Cocina estadounidense de temporada con productos frescos",website:"https://farmerstablenc.com/",sourceUrl:"https://farmerstablenc.com/contact-us/",checkedOn:'2026-10-23'},
    {name:"Chef Luis Restaurant",cuisine:"Contemporary global fusion",cuisineEs:"Fusión internacional contemporánea",website:"https://www.chefluis.com/",sourceUrl:"https://www.chefluis.com/",checkedOn:'2026-10-23'},
  ],
  // Darien restaurant locations and cuisines verified against each business's official site, 2026-10-23.
  'darien': [
    {name:"The Goose",cuisine:"American bistro and tavern",cuisineEs:"Bistró y taberna de cocina estadounidense",website:"https://goosedarien.com/",sourceUrl:"https://goosedarien.com/contact/",checkedOn:'2026-10-23'},
    {name:"Bodega Taco Bar",cuisine:"Modern Mexican and tacos",cuisineEs:"Cocina mexicana moderna y tacos",website:"https://bodegatacobar.com/",sourceUrl:"https://bodegatacobar.com/locations",checkedOn:'2026-10-23'},
    {name:"Ten Twenty Post",cuisine:"Seafood, oyster bar and European bistro",cuisineEs:"Mariscos, ostras y bistró europeo",website:"https://www.tentwentypost.com/",sourceUrl:"https://www.tentwentypost.com/",checkedOn:'2026-10-23'},
    {name:"Post Corner Pizza",cuisine:"Pizza and Italian-American",cuisineEs:"Pizza y cocina italoestadounidense",website:"https://www.postcornerpizza.com/",sourceUrl:"https://www.postcornerpizza.com/",checkedOn:'2026-10-23'},
    {name:"Rory's Restaurant",cuisine:"American pub and comfort food",cuisineEs:"Pub estadounidense y platos tradicionales",website:"https://www.rorys.net/",sourceUrl:"https://www.rorys.net/",checkedOn:'2026-10-23'},
  ],
  'ridgefield': [
    {name:"Bailey's Backyard",cuisine:"American farm-to-table",cuisineEs:"Cocina estadounidense de la granja a la mesa",website:"https://baileysbackyard.com/",sourceUrl:"https://baileysbackyard.com/",checkedOn:'2026-10-23'},
    {name:"TerraSole Ristorante",cuisine:"Italian and wood-fired specialties",cuisineEs:"Italiana y especialidades al horno de leña",website:"https://terrasoleridgefield.com/",sourceUrl:"https://terrasoleridgefield.com/contact",checkedOn:'2026-10-23'},
    {name:"850 Degrees",cuisine:"Wood-fired pizza and Italian",cuisineEs:"Pizza al horno de leña y cocina italiana",website:"https://850degrees.com/",sourceUrl:"https://850degrees.com/",checkedOn:'2026-10-23'},
    {name:"The Hideaway",cuisine:"American gastropub",cuisineEs:"Gastropub de cocina estadounidense",website:"https://thehideawayridgefield.com/",sourceUrl:"https://thehideawayridgefield.com/",checkedOn:'2026-10-23'},
    {name:"Tablao Wine Bar & Restaurant",cuisine:"Spanish tapas and wine bar",cuisineEs:"Tapas españolas y bar de vinos",website:"https://tablaowinebar.com/ridgefield/",sourceUrl:"https://tablaowinebar.com/ridgefield/contact-us/",checkedOn:'2026-10-23'},
  ],
  'brookfield': [
    {name:"O'Connor's Public House",cuisine:"Irish pub and American",cuisineEs:"Pub irlandés y cocina estadounidense",website:"https://www.oconnorspublichouse.com/",sourceUrl:"https://www.oconnorspublichouse.com/locations/",checkedOn:'2026-10-23'},
    {name:"Portobello Italian Restaurant",cuisine:"Italian",cuisineEs:"Italiana",website:"https://portobelloct.com/",sourceUrl:"https://portobelloct.com/",checkedOn:'2026-10-23'},
    {name:"Housaku Asian Fusion",cuisine:"Chinese, Japanese, Thai and sushi",cuisineEs:"China, japonesa, tailandesa y sushi",website:"https://www.housakubrookfield.com/",sourceUrl:"https://www.housakubrookfield.com/locations",checkedOn:'2026-10-23'},
    {name:"Hacienda Don Manuel",cuisine:"Mexican",cuisineEs:"Mexicana",website:"https://www.haciendadonmanuel.com/",sourceUrl:"https://www.haciendadonmanuel.com/contact-us/",checkedOn:'2026-10-23'},
    {name:"BarNaan",cuisine:"Indian restaurant and cocktail bar",cuisineEs:"Restaurante indio y coctelería",website:"https://barnaanct.com/",sourceUrl:"https://barnaanct.com/",checkedOn:'2026-10-23'},
  ],

  'bethel': [
    {name:"La Zingara",cuisine:"Regional Italian",cuisineEs:"Italiana regional",website:"https://www.lazingara.com/",sourceUrl:"https://lazingara.com/about.php",checkedOn:'2026-10-23'},
    {name:"Broken Symmetry",cuisine:"Brewpub and American comfort food",cuisineEs:"Cervecería artesanal y comida casera estadounidense",website:"https://www.brokensymmetrybrew.com/",sourceUrl:"https://www.brokensymmetrybrew.com/lunchdinner",checkedOn:'2026-10-23'},
    {name:"House of Yoshida",cuisine:"Japanese grill and sushi",cuisineEs:"Parrilla japonesa y sushi",website:"https://www.houseofyoshida.com/",sourceUrl:"https://www.houseofyoshida.com/",checkedOn:'2026-10-23'},
    {name:"Bora Restaurant",cuisine:"New American",cuisineEs:"Nueva cocina estadounidense",website:"https://www.borarestaurant.com/",sourceUrl:"https://www.borarestaurant.com/",checkedOn:'2026-10-23'},
    {name:"Famous Pizza",cuisine:"Pizza and Italian-American",cuisineEs:"Pizza y cocina italoestadounidense",website:"https://famouspizzabethel.com/",sourceUrl:"https://famouspizzabethel.com/",checkedOn:'2026-10-23'},
  ],
  'newtown': [
    {name:"Sal e Pepe Contemporary Italian Bistro",cuisine:"Northern Italian and contemporary Italian",cuisineEs:"Italiana del norte y contemporánea",website:"https://www.salepeperestaurant.com/",sourceUrl:"https://www.salepeperestaurant.com/",checkedOn:'2026-10-23'},
    {name:"Barnwood Grill - Newtown",cuisine:"Contemporary American",cuisineEs:"Cocina estadounidense contemporánea",website:"https://www.barnwoodgrill.com/location/connecticut/",sourceUrl:"https://www.barnwoodgrill.com/location/connecticut/",checkedOn:'2026-10-23'},
    {name:"Jewel of Himalaya",cuisine:"Himalayan, Nepalese and Tibetan",cuisineEs:"Cocina del Himalaya, nepalí y tibetana",website:"https://www.jewelofhimalayact.com/",sourceUrl:"https://www.jewelofhimalayact.com/",checkedOn:'2026-10-23'},
    {name:"Good Old Days Pizzeria & Cocktail Den",cuisine:"Artisan pizza",cuisineEs:"Pizza artesanal",website:"https://www.goodolddayspizza.com/",sourceUrl:"https://www.goodolddayspizza.com/",checkedOn:'2026-10-23'},
    {name:"Nouveau Monde",cuisine:"New American bistro",cuisineEs:"Bistró de nueva cocina estadounidense",website:"https://www.nouveaumondesandyhook.com/",sourceUrl:"https://www.nouveaumondesandyhook.com/",checkedOn:'2026-10-23'},
  ],
  'monroe': [
    {name:"Monroe Diner",cuisine:"American diner and all-day breakfast",cuisineEs:"Restaurante estadounidense y desayunos durante todo el día",website:"https://monroediner.com/",sourceUrl:"https://monroediner.com/",checkedOn:'2026-10-23'},
    {name:"El Gallo de Oro",cuisine:"Mexican",cuisineEs:"Mexicana",website:"https://www.elgallodeorotogo.com/",sourceUrl:"https://www.elgallodeorotogo.com/",checkedOn:'2026-10-23'},
    {name:"Osteria Romana Monroe",cuisine:"Italian and Roman-style pasta",cuisineEs:"Italiana y pasta al estilo romano",website:"https://osteriaromana.com/monroe",sourceUrl:"https://osteriaromana.com/monroe",checkedOn:'2026-10-23'},
    {name:"Vazzy's Osteria",cuisine:"Italian and pizza",cuisineEs:"Italiana y pizza",website:"https://vazzysosteria.com/",sourceUrl:"https://vazzysosteria.com/",checkedOn:'2026-10-23'},
    {name:"Bella Rosa Pizzeria Ristorante",cuisine:"Italian, pizza and Portuguese dishes",cuisineEs:"Italiana, pizza y platos portugueses",website:"https://www.bellarosapizza.com/",sourceUrl:"https://www.bellarosapizza.com/",checkedOn:'2026-10-23'},
  ],
  'shelton': [
    {name:"Spotted Horse Tavern - Shelton",cuisine:"American tavern",website:"https://spottedhorsetavernct.com/shelton/",sourceUrl:"https://spottedhorsetavernct.com/shelton/",checkedOn:'2026-10-23'},
    {name:"Ritrovo",cuisine:"Italian and pizza",website:"https://ritrovoshelton.com/",sourceUrl:"https://ritrovoshelton.com/",checkedOn:'2026-10-23'},
    {name:"Il Palio",cuisine:"Italian and Tuscan",website:"https://ilpalioct.com/",sourceUrl:"https://ilpalioct.com/",checkedOn:'2026-10-23'},
    {name:"Tacomida",cuisine:"Mexican and tacos",website:"https://tacomidashelton.com/",sourceUrl:"https://tacomidashelton.com/",checkedOn:'2026-10-23'},
    {name:"Market Place Kitchen & Bar",cuisine:"Contemporary American",website:"https://marketplacekitchenbar.com/locations/shelton",sourceUrl:"https://marketplacekitchenbar.com/locations/shelton",checkedOn:'2026-10-23'},
  ],
  'trumbull': [
    {name:"Antonio’s Kitchen & Bar",cuisine:"Italian",website:"https://antoniostrumbull.com/",sourceUrl:"https://antoniostrumbull.com/",checkedOn:'2026-10-23'},
    {name:"Prime One Eleven",cuisine:"Steakhouse and New American",website:"https://primeoneeleven.com/",sourceUrl:"https://primeoneeleven.com/",checkedOn:'2026-10-23'},
    {name:"Old Towne Restaurant",cuisine:"American, Italian and pizza",website:"https://www.oldtownerestaurant.net/",sourceUrl:"https://www.oldtownerestaurant.net/",checkedOn:'2026-10-23'},
    {name:"Mici Asian Bistro",cuisine:"Japanese, Chinese and Thai",website:"https://www.miciasianbistro.com/",sourceUrl:"https://www.miciasianbistro.com/",checkedOn:'2026-10-23'},
    {name:"Mex On Main",cuisine:"Tex-Mex",website:"https://www.mexonmain.com/index.php",sourceUrl:"https://www.mexonmain.com/index.php",checkedOn:'2026-10-23'},
  ],
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
    {name:'Ola Restaurant',cuisine:'Nuevo Latino',website:'https://www.olarestaurantct.com/orange/',sourceUrl:'https://www.olarestaurantct.com/orange/',checkedOn:'2026-10-23'},
    {name:'Puerto Vallarta - Orange',cuisine:'Mexican',website:'https://puertovallartausa.com/orange',sourceUrl:'https://puertovallartausa.com/orange',checkedOn:'2026-10-23'},
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
