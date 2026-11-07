// Editorial restaurant research, not endorsements or personal Top Picks.
// Verified against each business's own website on 2026-11-06.
// Not yet connected to the town-page renderer; integrate after reviewing its data model.
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
    }
  ]
};
