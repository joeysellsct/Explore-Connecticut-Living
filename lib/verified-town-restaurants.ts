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
    }
  ]
};
