/**
 * Single source of truth for business facts (NAP, hours, ordering, reviews).
 * Sources and verification status are recorded in docs/PROJECT_BRIEF.md.
 */

export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export type Review = {
  quote: string;
  /** Reviewer name as shown publicly; omit when the source doesn't show one. */
  author?: string;
  source: "Google" | "Yelp";
  url: string;
};

const address = {
  street: "46 Mulberry Street",
  streetShort: "46 Mulberry St",
  locality: "New York",
  region: "NY",
  postalCode: "10013",
  country: "US",
  neighborhood: "Chinatown",
  landmark: "Across from Columbus Park",
} as const;

const days: Day[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const links = {
  googleMaps:
    "https://www.google.com/maps/place/Banh+mi+Cafe/@40.7150336,-73.9994501,17z/data=!4m6!3m5!1s0x89c25b290c2529eb:0x26d7f3b36cd64c0a!8m2!3d40.7150336!4d-73.9994501!16s%2Fg%2F11z0zjcs5j",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Banh+mi+Cafe%2C+46+Mulberry+St%2C+New+York%2C+NY+10013",
  yelp: "https://www.yelp.com/biz/banh-mi-cafe-new-york-2",
} as const;

export const site = {
  name: "Banh Mi Cafe",
  tagline: "Vietnamese café in Chinatown",
  description:
    "Banh Mi Cafe is a family-run Vietnamese café at 46 Mulberry Street in Manhattan's Chinatown, across from Columbus Park. Banh mi, pho, noodle soups, Vietnamese coffee and matcha. Dine in, pick up or order delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  address,
  geo: { lat: 40.7150336, lng: -73.9994501 },

  phone: "+1 917-675-6811",
  phoneDisplay: "(917) 675-6811",
  phoneHref: "tel:+19176756811",
  email: null as string | null, // TODO(client): not publicly listed

  // Every day 9:30am–8pm per Apple Maps / Yelp; Google shows the same for
  // weekdays. TODO(client): confirm weekend hours.
  hours: days.map((day) => ({ day, opens: "09:30", closes: "20:00" })),
  hoursSummary: "Open daily, 9:30am – 8pm",

  priceRange: "$10–20",
  amenities: [
    "Dine-in",
    "Pickup",
    "Delivery",
    "Communal tables",
    "Wheelchair-accessible entrance",
    "Apple Pay & contactless",
  ],

  ratings: [
    { source: "Google", value: 4.8, count: 177, url: links.googleMaps },
    { source: "Yelp", value: 4.2, count: 49, url: links.yelp },
  ],
  ratingsAsOf: "September 2026",

  links,

  ordering: [
    {
      name: "Grubhub",
      url: "https://www.grubhub.com/restaurant/banh-mi-cafe-46-mulberry-st-new-york/14090688",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/banh-mi-cafe-chinatown-46-mulberry-street-new-york-ny/3JUH7rJtXXa-d6RJYHFOAA",
    },
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/banh-mi-cafe-46-mulberry-st---46-mulberry-st-new-york-41448625/",
    },
    {
      name: "Seamless",
      url: "https://www.seamless.com/menu/banh-mi-cafe-46-mulberry-st-new-york/14090688",
    },
  ],

  transit: [
    { station: "Canal St", lines: ["J", "Z", "N", "Q", "R", "W", "6"] },
    { station: "Chambers St", lines: ["J", "Z"] },
    { station: "Brooklyn Bridge–City Hall", lines: ["4", "5", "6"] },
  ],

  // Verbatim public reviews. Google quotes appear without names because the
  // mirror we verified them from doesn't show reviewer names.
  reviews: [
    {
      quote:
        "I had their Viet coffee + brisket pho & it was genuinely one of the best broths I’ve ever tasted. Kind owner as well.",
      source: "Google",
      url: links.googleMaps,
    },
    {
      quote:
        "The bread is perfectly crispy on the outside and soft on the inside, and you can tell all the ingredients are incredibly fresh.",
      source: "Google",
      url: links.googleMaps,
    },
    {
      quote:
        "If you are serving jury duty and are in the mood for something flavorful and not from a vending machine, I highly recommend coming here!",
      author: "Fiona H.",
      source: "Yelp",
      url: links.yelp,
    },
    {
      quote:
        "Lots of space and communal tables to sit and catch up with friends or get some work done.",
      source: "Google",
      url: links.googleMaps,
    },
  ] satisfies Review[],

  // No official account could be verified. TODO(client): add handles.
  social: [] as { label: string; handle: string; url: string }[],
} as const;

export const nav = [
  { label: "Menu", href: "/menu" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Visit", href: "/#visit" },
  { label: "Order", href: "/#order" },
] as const;

export const fullAddress = `${address.street}, ${address.locality}, ${address.region} ${address.postalCode}`;
