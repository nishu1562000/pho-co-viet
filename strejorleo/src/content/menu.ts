/**
 * TODO(client): SAMPLE MENU.
 *
 * Strejorleo's menu is not published anywhere we could find. The dishes below
 * are standard New England classics used to design the page, and the page
 * labels them as a sample. Replace them with the kitchen's real menu (add
 * `price` when ready) and set `isSample` to false.
 */

export type MenuItem = {
  name: string;
  note?: string;
  price?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: { isSample: boolean; sections: MenuSection[] } = {
  isSample: true,
  sections: [
    {
      id: "raw-bar",
      title: "Raw Bar",
      items: [
        { name: "Oysters on the half shell", note: "Mignonette, lemon" },
        { name: "Littleneck clams", note: "Cocktail sauce, horseradish" },
        { name: "Shrimp cocktail" },
      ],
    },
    {
      id: "to-start",
      title: "To Start",
      items: [
        { name: "New England clam chowder", note: "Oyster crackers" },
        { name: "Fried Ipswich clams", note: "Tartar sauce" },
        { name: "Little gem salad", note: "Buttermilk dressing" },
      ],
    },
    {
      id: "mains",
      title: "Mains",
      items: [
        { name: "Lobster roll", note: "Warm with butter, or cold with mayo" },
        { name: "Steamed mussels", note: "White wine, garlic, grilled bread" },
        { name: "Baked cod", note: "Buttered crumbs, lemon" },
        { name: "Fish & chips" },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [{ name: "Hand-cut fries" }, { name: "Coleslaw" }, { name: "Corn on the cob" }],
    },
    {
      id: "dessert",
      title: "Dessert",
      items: [{ name: "Blueberry pie" }, { name: "Boston cream pie" }],
    },
  ],
};

/** A handful of signature items for the homepage preview. */
export const menuHighlights: MenuItem[] = [
  menu.sections[1].items[0],
  menu.sections[2].items[0],
  menu.sections[0].items[0],
  menu.sections[2].items[1],
  menu.sections[1].items[1],
];
