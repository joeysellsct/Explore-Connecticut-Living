// Editorial restaurant research, not endorsements or personal Top Picks.
// Verified against each business's own website on 2026-11-06.
// Rendered on bilingual town pages; entries overlapping the main directory are deduplicated.
// Recheck operating status, address, menus and accessibility before publication.
export type VerifiedRestaurant = {
  name: string;
  address: string;
  cuisineEn: string;
  cuisineEs: string;
  descriptionEn: string;
  descriptionEs: string;
  sourceUrl: string;
  verifiedOn: string;
};
export const verifiedTownRestaurants: Record<string, VerifiedRestaurant[]> = {
  milford: [
    {
      name: "Colony Grill", address: "36 Broad St, Milford, CT 06460",
      cuisineEn: "Thin-crust bar pizza", cuisineEs: "Pizza fina estilo bar",
      descriptionEn: "A downtown location of the Connecticut pizza restaurant known for its thin-crust bar pies and optional hot-oil topping.",
      descriptionEs: "Local del centro de esta pizzería de Connecticut, conocida por sus pizzas de masa fina y su opción de aceite picante.",
      sourceUrl: "https://colonygrill.com/locations", verifiedOn: "2026-11-06"
    },
    {
      name: "Stonebridge Restaurant", address: "50 Daniel Street, Milford, CT 06460",
      cuisineEn: "American and seafood", cuisineEs: "Cocina estadounidense y mariscos",
      descriptionEn: "A riverside downtown restaurant with American dishes, seafood and space for private events.",
      descriptionEs: "Restaurante junto al río en el centro con platos estadounidenses, mariscos y espacios para eventos privados.",
      sourceUrl: "https://stonebridgerestaurant.com/", verifiedOn: "2026-11-06"
    },
    {
      name: "7 Seas", address: "16 New Haven Avenue, Milford, CT 06460",
      cuisineEn: "Restaurant and bar", cuisineEs: "Restaurante y bar",
      descriptionEn: "A downtown restaurant and bar; consult its published menu and kitchen hours before visiting.",
      descriptionEs: "Restaurante y bar del centro; consulta el menú y los horarios de cocina publicados antes de ir.",
      sourceUrl: "https://www.7seasmilford.com/", verifiedOn: "2026-11-06"
    },
    {
      name: "Reggiano's", address: "487 Bridgeport Avenue, Milford, CT 06460",
      cuisineEn: "Italian", cuisineEs: "Italiana",
      descriptionEn: "An Italian restaurant publishing lunch, dinner and takeout menus. Its website displays inconsistent street numbers (487 and 489); confirm the exact entrance before visiting.",
      descriptionEs: "Restaurante italiano con menús de almuerzo, cena y comida para llevar. Su web muestra números de calle distintos (487 y 489); confirma la entrada antes de ir.",
      sourceUrl: "https://www.reggianosmilford.com/menus", verifiedOn: "2026-11-06"
    },
    {
      name: "Papa's Pizza II", address: "2005 Bridgeport Ave, Milford, CT 06460",
      cuisineEn: "New Haven-style pizza", cuisineEs: "Pizza al estilo de New Haven",
      descriptionEn: "The Bridgeport Avenue location of Papa's Pizza serves brick-oven New Haven-style pies, calzones and cone grinders.",
      descriptionEs: "El local de Papa's Pizza en Bridgeport Avenue ofrece pizzas al horno de ladrillo al estilo de New Haven, calzones y sándwiches tipo cono.",
      sourceUrl: "https://www.papaspizzaonline.com/", verifiedOn: "2026-11-06"
    },
    {
      name: "Scratch Baking", address: "84 Broad Street, Milford, CT 06460",
      cuisineEn: "Bakery and lunch café", cuisineEs: "Panadería y cafetería para almorzar",
      descriptionEn: "A downtown bakery with pastries, sandwiches, lunch offerings and cakes; check the current menu before visiting.",
      descriptionEs: "Panadería del centro con repostería, sándwiches, opciones de almuerzo y pasteles; consulta el menú actual antes de ir.",
      sourceUrl: "https://scratchbakingct.com/", verifiedOn: "2026-11-06"
    }
  ],
  west_haven: [
    {
      name: "Zuppardi’s Apizza", address: "179 Union Ave, West Haven, CT 06516",
      cuisineEn: "New Haven-style apizza", cuisineEs: "Apizza al estilo de New Haven",
      descriptionEn: "The original Union Avenue location of the family-run pizzeria, established in 1934, serving New Haven-style apizza.",
      descriptionEs: "El local original de Union Avenue de esta pizzería familiar, fundada en 1934, que sirve apizza al estilo de New Haven.",
      sourceUrl: "https://zuppardisapizza.com/west-haven/", verifiedOn: "2026-11-07"
    },
    {
      name: "744 West Restaurant", address: "744 Boston Post Road, West Haven, CT 06516",
      cuisineEn: "Restaurant and bar", cuisineEs: "Restaurante y bar",
      descriptionEn: "A restaurant on Boston Post Road; check its current menu and hours directly before visiting.",
      descriptionEs: "Restaurante en Boston Post Road; consulta directamente su menú y horario actual antes de ir.",
      sourceUrl: "https://744west.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "Dive Bar & Restaurant", address: "24 Ocean Ave, West Haven, CT 06516",
      cuisineEn: "Coastal American restaurant and bar", cuisineEs: "Restaurante y bar de cocina estadounidense costera",
      descriptionEn: "A casual Ocean Avenue restaurant near Long Island Sound with burgers, shareable plates and indoor and outdoor seating; check its current menu and hours.",
      descriptionEs: "Restaurante informal en Ocean Avenue, cerca de Long Island Sound, con hamburguesas, platos para compartir y mesas interiores y exteriores; consulta el menú y horario actuales.",
      sourceUrl: "https://divebarandrestaurant.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "Lorenzo’s Italian Restaurant", address: "39 Elm St, West Haven, CT 06516",
      cuisineEn: "Italian restaurant", cuisineEs: "Restaurante italiano",
      descriptionEn: "An Italian restaurant on Elm Street with a dining room; consult the restaurant directly for current menus, hours and reservations.",
      descriptionEs: "Restaurante italiano en Elm Street con comedor; consulta directamente los menús, horarios y reservas actuales.",
      sourceUrl: "https://www.lorenzoswh.net/contact", verifiedOn: "2026-11-07"
    },
    {
      name: "Duffy’s Tavern", address: "241 Campbell Avenue, West Haven, CT 06516",
      cuisineEn: "Irish pub and American comfort food", cuisineEs: "Pub irlandés y comida casera estadounidense",
      descriptionEn: "A Campbell Avenue Irish pub and restaurant established in 1983, serving comfort food and Sunday brunch; confirm current kitchen hours.",
      descriptionEs: "Pub irlandés y restaurante de Campbell Avenue fundado en 1983, con platos caseros y brunch dominical; confirma el horario actual de cocina.",
      sourceUrl: "https://www.duffystavern.net/", verifiedOn: "2026-11-07"
    }
  ],
  branford: [
    {
      name: "Rosso Vino", address: "130 Shore Dr, Branford, CT 06405",
      cuisineEn: "Italian restaurant", cuisineEs: "Restaurante italiano",
      descriptionEn: "An Italian restaurant on Shore Drive with a published menu; check current dining hours and reservations with the restaurant.",
      descriptionEs: "Restaurante italiano en Shore Drive con menú publicado; consulta directamente los horarios y las reservas.",
      sourceUrl: "https://rossovino.net/menu/", verifiedOn: "2026-11-07"
    },
    {
      name: "Rossitto's Ristorante", address: "284 E Main Street, Branford, CT 06405",
      cuisineEn: "Italian and modern American", cuisineEs: "Cocina italiana y estadounidense contemporánea",
      descriptionEn: "A family-operated restaurant on East Main Street serving Italian classics and modern American specials.",
      descriptionEs: "Restaurante familiar en East Main Street que ofrece clásicos italianos y especialidades estadounidenses contemporáneas.",
      sourceUrl: "https://www.rossittos.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "LoMonaco's Ristorante", address: "990 West Main Street, Branford, CT 06405",
      cuisineEn: "Italian restaurant", cuisineEs: "Restaurante italiano",
      descriptionEn: "An Italian restaurant on West Main Street; verify its current menu and hours directly before visiting.",
      descriptionEs: "Restaurante italiano en West Main Street; confirma directamente el menú y los horarios antes de visitarlo.",
      sourceUrl: "https://www.lomonacos.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "Nellie's", address: "50 Maple St, Branford, CT 06405",
      cuisineEn: "American restaurant and waterfront dining", cuisineEs: "Restaurante estadounidense junto al agua",
      descriptionEn: "A Maple Street restaurant by the Branford River with an all-day menu and seasonal hours; check the restaurant's website before visiting.",
      descriptionEs: "Restaurante de Maple Street junto al río Branford con menú para todo el día y horarios de temporada; consulta su sitio web antes de ir.",
      sourceUrl: "https://nelliesbranford.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "Lenny's Indian Head Inn", address: "205 South Montowese Street, Branford, CT 06405",
      cuisineEn: "New England seafood and American dishes", cuisineEs: "Mariscos de Nueva Inglaterra y platos estadounidenses",
      descriptionEn: "An Indian Neck restaurant established in 1968 serving New England seafood along with steaks and ribs; check current hours directly.",
      descriptionEs: "Restaurante de Indian Neck fundado en 1968 que sirve mariscos de Nueva Inglaterra, además de carnes y costillas; confirma directamente el horario actual.",
      sourceUrl: "https://www.lennysnow.com/", verifiedOn: "2026-11-07"
    }
  ],
  cheshire: [
    {
      name: "Fuoco Apizza", address: "461 W Main St, Cheshire, CT 06410",
      cuisineEn: "Coal-fired apizza", cuisineEs: "Apizza al horno de carbón",
      descriptionEn: "A West Main Street pizzeria specializing in coal-fired apizza, with takeout and catering information on its official website.",
      descriptionEs: "Pizzería en West Main Street especializada en apizza al horno de carbón; su sitio oficial ofrece información sobre pedidos para llevar y catering.",
      sourceUrl: "https://fuocoapizza.com/contact/", verifiedOn: "2026-11-07"
    },
    {
      name: "Viron Rondo Osteria", address: "1721 Highland Ave, Cheshire, CT 06410",
      cuisineEn: "Italian osteria", cuisineEs: "Osteria italiana",
      descriptionEn: "A Highland Avenue Italian restaurant with lunch and dinner menus and a garden bar; consult its official site for current service details.",
      descriptionEs: "Restaurante italiano en Highland Avenue con menús de almuerzo y cena y bar en el jardín; consulta su sitio oficial para conocer los servicios actuales.",
      sourceUrl: "https://www.vironrondoosteria.com/our-menu/", verifiedOn: "2026-11-07"
    },
    {
      name: "Vespucci's Restaurant", address: "150 Main Street, Cheshire, CT 06410",
      cuisineEn: "Italian restaurant", cuisineEs: "Restaurante italiano",
      descriptionEn: "A Main Street Italian restaurant serving pasta, pizza and other dishes, with catering and reservation information on its website.",
      descriptionEs: "Restaurante italiano en Main Street que sirve pasta, pizza y otros platos; su sitio web incluye información sobre catering y reservas.",
      sourceUrl: "https://vespuccisrestaurant.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "Rossini's Italian Restaurant & Pizza", address: "529 West Main Street, Cheshire, CT 06410",
      cuisineEn: "Italian restaurant and pizza", cuisineEs: "Restaurante italiano y pizzería",
      descriptionEn: "A West Main Street Italian restaurant and pizzeria that says it opened in 1979; check its official menu and opening days before visiting.",
      descriptionEs: "Restaurante italiano y pizzería en West Main Street que indica haber abierto en 1979; consulta su menú oficial y los días de apertura antes de visitarlo.",
      sourceUrl: "https://cheshirerossini.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "Bella'Gio Ristorante & Pizzeria", address: "835 West Main Street, Cheshire, CT 06410",
      cuisineEn: "Italian restaurant and pizza", cuisineEs: "Restaurante italiano y pizzería",
      descriptionEn: "A West Main Street restaurant with pizza and Italian dishes, including a published menu and contact information on its website.",
      descriptionEs: "Restaurante en West Main Street con pizzas y platos italianos; publica su menú y datos de contacto en su sitio web.",
      sourceUrl: "https://www.bellagioct.com/menu", verifiedOn: "2026-11-07"
    }
  ],
  north_haven: [
    {
      name: "J Roo's Restaurant", address: "243 State Street, North Haven, CT 06473",
      cuisineEn: "American, Italian and pizza", cuisineEs: "Cocina estadounidense, italiana y pizza",
      descriptionEn: "A State Street restaurant serving pizza and American and Italian dishes, with group dining and catering information on its website.",
      descriptionEs: "Restaurante en State Street con pizzas y platos estadounidenses e italianos; su sitio web ofrece información sobre comidas para grupos y catering.",
      sourceUrl: "https://www.jroosrestaurant.com/visit", verifiedOn: "2026-11-07"
    },
    {
      name: "Ludal Italian Restaurant", address: "28-30 Broadway, North Haven, CT 06473",
      cuisineEn: "Italian restaurant", cuisineEs: "Restaurante italiano",
      descriptionEn: "A Broadway Italian restaurant offering lunch, dinner, takeout and private-event dining; consult its official site for current service.",
      descriptionEs: "Restaurante italiano en Broadway con almuerzo, cena, comida para llevar y eventos privados; consulta su sitio oficial para conocer el servicio actual.",
      sourceUrl: "https://www.ludalct.com/visit", verifiedOn: "2026-11-07"
    },
    {
      name: "Bellini's Italian Restaurant & Pizza", address: "2 Broadway, North Haven, CT 06473",
      cuisineEn: "Italian restaurant and pizza", cuisineEs: "Restaurante italiano y pizzería",
      descriptionEn: "A Broadway Italian restaurant offering pizza, dining, takeout, catering and banquet menus.",
      descriptionEs: "Restaurante italiano en Broadway con pizzas, servicio de comedor, comida para llevar, catering y menús para banquetes.",
      sourceUrl: "https://bellinispizza.com/?page=contact", verifiedOn: "2026-11-07"
    },
    {
      name: "La Lupa Ristorante", address: "344 Washington Avenue, North Haven, CT 06473",
      cuisineEn: "Italian restaurant and brick-oven pizza", cuisineEs: "Restaurante italiano y pizza al horno de ladrillo",
      descriptionEn: "A Washington Avenue Italian restaurant publishing dinner, pizza, children's and catering menus.",
      descriptionEs: "Restaurante italiano en Washington Avenue que publica menús de cena, pizza, opciones infantiles y catering.",
      sourceUrl: "https://lalupact.com/", verifiedOn: "2026-11-07"
    },
    {
      name: "Giulio's Pizza Restaurant", address: "126 Middletown Avenue, North Haven, CT 06473",
      cuisineEn: "Pizza and Italian dishes", cuisineEs: "Pizza y platos italianos",
      descriptionEn: "A Middletown Avenue pizza restaurant with Italian dinners, appetizers and an adjoining lounge; check current hours before visiting.",
      descriptionEs: "Pizzería en Middletown Avenue con cenas italianas, aperitivos y un salón contiguo; confirma los horarios antes de visitarla.",
      sourceUrl: "https://giuliospizza.com/", verifiedOn: "2026-11-07"
    }
  ]
};
