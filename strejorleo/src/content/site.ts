/**
 * Single source of truth for business facts (NAP, hours, links).
 *
 * Everything here is either verified from the public Google Maps listing or
 * deliberately left `null` / empty. Components hide anything that is missing,
 * so filling a field in here is all that is needed to publish it.
 * See docs/PROJECT_BRIEF.md for the open items list.
 */

export type DayHours = {
  /** Schema.org day, e.g. "Monday" */
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  /** 24h "HH:MM", or null when closed */
  opens: string | null;
  closes: string | null;
};

export type Review = {
  quote: string;
  author: string;
  source: "Google" | "Yelp" | "Resy" | "OpenTable" | "Press";
  url?: string;
};

export type SocialLink = {
  label: "Instagram" | "Facebook" | "TikTok";
  handle: string;
  url: string;
};

const address = {
  street: "76 Reade Street",
  streetShort: "76 Reade St",
  locality: "New York",
  region: "NY",
  postalCode: "10007",
  country: "US",
  neighborhood: "Tribeca",
  crossStreets: "Between Church Street & Broadway",
} as const;

const mapsQuery = encodeURIComponent(
  `Strejorleo, ${address.streetShort}, ${address.locality}, ${address.region} ${address.postalCode}`,
);

export const site = {
  name: "Strejorleo",
  tagline: "New England cooking in Tribeca",
  category: "New England restaurant",
  cuisine: "New England",
  description:
    "Strejorleo is a New England restaurant at 76 Reade Street in Tribeca, New York. Open for lunch and dinner, with dine-in and takeout.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  address,
  geo: { lat: 40.7153179, lng: -74.0070344 },

  // TODO(client): not publicly listed — confirm before launch.
  phone: null as string | null, // e.g. "+1 212 555 0100"
  email: null as string | null, // e.g. "hello@strejorleo.com"
  hours: null as DayHours[] | null,

  services: ["Lunch", "Dinner", "Dine-in", "Takeout"] as const,
  payment: ["Credit cards"] as const,

  links: {
    googleMaps:
      "https://www.google.com/maps/place/Strejorleo/@40.7153179,-74.0070344,17z/data=!4m6!3m5!1s0x89c25b628eed47bd:0xb205aad5708738cc!8m2!3d40.7153179!4d-74.0070344!16s%2Fg%2F11s86n03kx",
    directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
    // TODO(client): reservations / ordering provider (Resy, OpenTable, Toast…)
    reservations: null as string | null,
    ordering: null as string | null,
  },

  transit: [
    { station: "Chambers St", lines: ["A", "C", "1", "2", "3"] },
    { station: "City Hall", lines: ["R", "W"] },
    { station: "Brooklyn Bridge–City Hall", lines: ["4", "5", "6"] },
  ],

  // TODO(client): only add verified reviews with their source. Section is
  // hidden while empty.
  reviews: [] as Review[],

  // TODO(client): official handles. Section and footer links are hidden while
  // empty.
  social: [] as SocialLink[],
} as const;

export const nav = [
  { label: "The Restaurant", href: "/#restaurant" },
  { label: "Menu", href: "/menu" },
  { label: "Visit", href: "/#visit" },
] as const;

/** The best available way to reach the restaurant, in order of preference. */
export function primaryContact() {
  if (site.phone) {
    return { label: "Call the restaurant", short: "Call", href: `tel:${site.phone.replace(/[^+\d]/g, "")}` };
  }
  if (site.email) {
    return { label: "Email the restaurant", short: "Email", href: `mailto:${site.email}` };
  }
  return { label: "Contact via Google", short: "Contact", href: site.links.googleMaps };
}

export const fullAddress = `${address.street}, ${address.locality}, ${address.region} ${address.postalCode}`;
