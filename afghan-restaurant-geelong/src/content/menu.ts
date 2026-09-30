/**
 * SAMPLE MENU — final menu and prices from owner.
 *
 * These are typical dishes for an Afghan charcoal kitchen, shown WITHOUT
 * prices on purpose. Replace with the owner's current menu before launch.
 */

export type Dish = { name: string; description: string };
export type MenuGroup = { id: string; title: string; dishes: Dish[] };

export const sampleMenu: MenuGroup[] = [
  {
    id: "kebabs",
    title: "Kebabs",
    dishes: [
      { name: "Chicken Kebab", description: "Marinated chicken skewers, charcoal-grilled until juicy and tender." },
      { name: "Lamb Kebab", description: "Chunks of marinated lamb, seared over hot coals." },
      { name: "Lamb Mince Kebab (Kofta)", description: "Spiced lamb mince shaped on the skewer and grilled." },
      { name: "Trio Kebab", description: "One each of chicken, lamb and kofta — can’t decide? Have all three." },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    dishes: [
      { name: "Lamb Shank with Rice", description: "Lamb shank slow-cooked until it falls off the bone, served on rice." },
      { name: "Kabuli Pulao", description: "Afghanistan’s national dish: spiced rice with lamb, carrots and raisins." },
      { name: "Herb Rice", description: "Fragrant rice cooked with fresh herbs. A favourite with kids." },
    ],
  },
  {
    id: "starters",
    title: "Starters & Sides",
    dishes: [
      { name: "Mantu", description: "Afghan dumplings filled with spiced mince, topped with yoghurt." },
      { name: "Bolani", description: "Thin flatbread stuffed with potato and herbs, pan-crisped." },
      { name: "Shirazi Salad", description: "Diced cucumber, tomato and onion with lemon and mint." },
      { name: "Afghan Naan", description: "Long, soft-baked flatbread for mopping up every last bit." },
    ],
  },
];
