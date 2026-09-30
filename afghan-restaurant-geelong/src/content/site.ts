/**
 * Business facts. Everything here comes from the Google Business listing —
 * edit this one file to update the whole site.
 */

export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

/** 24h "HH:MM" open/close, or null when closed. Index 0 = Sunday (JS getDay order). */
export const weeklyHours: { day: Day; open: string | null; close: string | null }[] = [
  { day: "Sunday", open: "16:00", close: "22:00" },
  { day: "Monday", open: "16:00", close: "22:00" },
  { day: "Tuesday", open: "16:00", close: "22:00" },
  { day: "Wednesday", open: "16:00", close: "22:00" },
  { day: "Thursday", open: "16:00", close: "22:00" },
  { day: "Friday", open: "16:00", close: "22:00" },
  { day: "Saturday", open: "16:00", close: "22:00" },
];

const query = encodeURIComponent("118 Moorabool St, Geelong VIC 3220");

/**
 * Production URL, used for canonical, Open Graph and JSON-LD URLs. It must be
 * the public URL (never localhost) or WhatsApp previews won't show the image.
 *  1. NEXT_PUBLIC_SITE_URL, once there's a custom domain
 *  2. VERCEL_PROJECT_PRODUCTION_URL, set automatically on every Vercel build
 *  3. the expected *.vercel.app address as a last resort
 */
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://afghan-restaurant-geelong.vercel.app";
}

export const site = {
  // TODO(client): placeholder name — owner to confirm the official name.
  name: "Afghan Restaurant Geelong",
  tagline: "Afghan Kitchen · Geelong",
  description:
    "Afghan charcoal kebabs, slow-cooked lamb shank and Kabuli pulao at 118 Moorabool St, Geelong VIC 3220. Dine in or takeaway, open 7 days 4pm–10pm. Call 0450 509 430.",
  url: siteUrl(),

  address: {
    street: "118 Moorabool St",
    city: "Geelong",
    region: "VIC",
    postalCode: "3220",
    country: "AU",
  },
  timeZone: "Australia/Melbourne",

  phone: "+61 450 509 430",
  phoneDisplay: "0450 509 430",
  phoneHref: "tel:+61450509430",

  rating: { value: 4.6, count: 221, source: "Google" },
  hoursSummary: "Open 7 days · 4pm–10pm",

  links: {
    maps: `https://www.google.com/maps/search/?api=1&query=${query}`,
    directions: "https://www.google.com/maps/dir/?api=1&destination=118+Moorabool+St+Geelong+VIC+3220",
    embed: `https://www.google.com/maps?q=${query}&output=embed`,
  },

  /** What guests consistently praise in Google reviews (paraphrased themes, not quotes). */
  praise: [
    {
      title: "Juicy charcoal skewers",
      body: "The chicken skewers come up again and again: very juicy, tender and full of flavour.",
    },
    {
      title: "Generous portions",
      body: "Huge plates at reasonable prices. Most people take something home.",
    },
    {
      title: "Authentic Afghan flavour",
      body: "Proper Afghan cooking, and a herb rice that even the kids love.",
    },
    {
      title: "Relaxed dinner spot",
      body: "A peaceful, unhurried evening meal with friendly staff looking after you.",
    },
  ],

  preparedBy: "Nischay Sharma",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city} ${site.address.region} ${site.address.postalCode}`;

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
] as const;

/** "16:00" → "4pm", "21:30" → "9:30pm" */
export function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}
