/**
 * Menu as published on the café's Grubhub store (descriptions verbatim,
 * lightly tidied) plus dish names listed on its Google/aggregator profiles.
 *
 * Prices are deliberately omitted: delivery-platform prices are set per
 * platform and "may be lower in-store" (Grubhub). TODO(client): confirm the
 * in-store menu and prices, then add `price` to each item.
 */

export type MenuItem = {
  name: string;
  description?: string;
  tags?: Array<"Best seller">;
  price?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

const banhMiBuild =
  "With mayo, sriracha, butter, jalapeño, cucumber, pickled carrot & daikon and cilantro, on a toasted French baguette.";

export const menu: MenuSection[] = [
  {
    id: "banh-mi",
    title: "Banh Mi",
    note: banhMiBuild + " Sauce contains peanuts.",
    items: [
      { name: "Traditional", description: "Vietnamese ham and roasted ground pork.", tags: ["Best seller"] },
      { name: "Satay Chicken", tags: ["Best seller"] },
      { name: "Premium Char Siu", description: "BBQ pork." },
      { name: "Curry Chicken" },
      { name: "Lemongrass Pork" },
      { name: "Lemongrass Chicken" },
      { name: "Lemongrass Beef" },
      { name: "Veggie Lover" },
    ],
  },
  {
    id: "pho",
    title: "Pho",
    items: [
      { name: "Brisket Pho" },
      { name: "Beef Eye Round Pho" },
      { name: "Special Pho" },
      { name: "Chicken Pho" },
    ],
  },
  {
    id: "noodles",
    title: "Chef’s Specialty Noodles",
    items: [
      { name: "Curry Noodle", description: "Chicken, fish balls or tofu in a hot & spicy curry soup with bean sprouts, mint and bok choy." },
      { name: "Tom Yum Shrimp Noodle Soup", description: "Thai hot and sour soup, bright with lemongrass, galangal and lime." },
      { name: "Wonton Noodle Soup", description: "Thin egg noodles, pork wontons and bok choy in a savory broth." },
      { name: "Spicy Minced Pork Dry Mix Noodle", description: "House chili sauce, ground pork and bok choy." },
      { name: "Pickled Cabbage & Tomato Noodle Soup" },
      { name: "Pad See Ew", description: "Fried flat rice noodles with chicken." },
    ],
  },
  {
    id: "vermicelli",
    title: "Vermicelli Bowls",
    items: [
      { name: "Lemongrass Pork" },
      { name: "Lemongrass Chicken" },
      { name: "Lemongrass Beef" },
      { name: "Beef Bulgogi" },
      { name: "Fresh Shrimp" },
    ],
  },
  {
    id: "rolls-snacks",
    title: "Summer Rolls & Snacks",
    items: [
      {
        name: "Summer Rolls (3)",
        description: "Mix and match. Vermicelli, lettuce, mint, bean sprouts and pickled carrot & daikon in rice paper, with peanuts and hoisin.",
        tags: ["Best seller"],
      },
      { name: "Spring Rolls" },
      { name: "Scallion Pancake" },
      { name: "Steamed Dumplings" },
      { name: "Popcorn Chicken" },
      { name: "Kaya Toast" },
      { name: "Peanut Sauce Noodles" },
      { name: "Ma La Sauce Noodles" },
      { name: "Garlic Parmesan Fries" },
    ],
  },
  {
    id: "coffee",
    title: "Vietnamese Coffee & Tea",
    items: [
      { name: "Hot or Iced Vietnamese Coffee", description: "Phin-dripped." },
      { name: "Black Coffee Phin Drip" },
      { name: "Ube Cream Coffee" },
      { name: "Hot Milk Tea" },
      { name: "Hot Chocolate" },
    ],
  },
  {
    id: "matcha",
    title: "Matcha & Refreshers",
    items: [
      { name: "Matcha Latte", description: "Organic matcha with whole milk." },
      { name: "Ube Cream Matcha", description: "Topped with ube cream foam." },
      { name: "Strawberry Matcha", description: "Topped with strawberry cream foam." },
      { name: "Coconut Water Matcha" },
      { name: "Thai Tea", description: "Strong-brewed, with evaporated milk and boba." },
      { name: "Oolong Milk Tea" },
      { name: "Peach Orange Oolong Tea" },
      { name: "Honey Passionfruit", description: "With popping boba." },
      { name: "Mango Dragon Fruit" },
      { name: "Sparkling Ribena", description: "Blackcurrant, with popping boba." },
    ],
  },
];

/** The three pillars shown on the homepage. */
export const pillars = [
  {
    id: "banh-mi",
    title: "Banh mi",
    line: "Crackling baguette, pickled carrot and daikon, cilantro, jalapeño.",
    items: ["Traditional", "Satay Chicken", "Premium Char Siu", "Lemongrass Pork"],
  },
  {
    id: "pho",
    title: "Pho & noodles",
    line: "Long-simmered broths, from brisket pho to tom yum shrimp.",
    items: ["Brisket Pho", "Special Pho", "Curry Noodle", "Wonton Noodle Soup"],
  },
  {
    id: "coffee",
    title: "Coffee & matcha",
    line: "Vietnamese coffee dripped through a phin, and organic matcha.",
    items: ["Iced Vietnamese Coffee", "Ube Cream Coffee", "Ube Cream Matcha", "Thai Tea"],
  },
] as const;

/** Menu words for the moving ticker. */
export const tickerItems = [
  "Satay Chicken Banh Mi",
  "Brisket Pho",
  "Iced Vietnamese Coffee",
  "Summer Rolls",
  "Ube Cream Matcha",
  "Tom Yum Shrimp",
  "Premium Char Siu",
  "Kaya Toast",
];
