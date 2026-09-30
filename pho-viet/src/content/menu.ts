/**
 * SAMPLE MENU — final menu from owner.
 *
 * Dish names come from Pho Viet's publicly listed menu (third-party menu
 * sites, late 2025) and are shown WITHOUT prices on purpose. Replace with the
 * owner's current menu before launch.
 */

export type Dish = { name: string; vietnamese?: string; description?: string };
export type MenuGroup = { id: string; title: string; vietnamese: string; dishes: Dish[] };

export const sampleMenu: MenuGroup[] = [
  {
    id: "pho",
    title: "Pho & Noodle Soups",
    vietnamese: "Phở & Bún",
    dishes: [
      { name: "Eye Round Steak & Brisket Pho", description: "Rich beef broth and rice noodles with eye round steak and brisket." },
      { name: "Chicken Pho", vietnamese: "Phở Gà", description: "A lighter chicken broth with rice noodles and chicken." },
      { name: "Spicy Beef Noodle Soup", vietnamese: "Bún Bò Huế", description: "Lemongrass broth with brisket, pork and beef shank." },
    ],
  },
  {
    id: "vermicelli",
    title: "Rice Vermicelli Bowls",
    vietnamese: "Bún",
    dishes: [
      { name: "Grilled Pork, Shrimp & Egg Roll", vietnamese: "Bún Tôm Nướng Thịt Nướng Chả Giò" },
      { name: "Grilled Pork & Egg Roll", vietnamese: "Bún Thịt Nướng Chả Giò" },
      { name: "Grilled Shrimp", vietnamese: "Bún Tôm Nướng" },
      { name: "Fried Marinated Chicken", vietnamese: "Bún Gà" },
    ],
  },
  {
    id: "rice",
    title: "Rice Plates",
    vietnamese: "Cơm",
    dishes: [
      { name: "Pork Chop, Pork Skewer & Shrimp with Fried Egg", vietnamese: "Cơm Sườn Thịt Nướng Tôm Trứng Ốp La" },
      { name: "Grilled Pork Chop with Fried Egg", vietnamese: "Cơm Sườn Trứng Ốp La" },
      { name: "Grilled Pork Skewer with Fried Egg", vietnamese: "Cơm Thịt Nướng Trứng Ốp La" },
      { name: "Fried Marinated Chicken with Fried Egg", vietnamese: "Cơm Gà Trứng Ốp La" },
    ],
  },
];
