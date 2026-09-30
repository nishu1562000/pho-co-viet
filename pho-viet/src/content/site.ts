/**
 * Business facts. Everything here was supplied by the owner/Google listing —
 * edit this one file to update the whole site.
 */

export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

/** 24h "HH:MM" open/close, or null when closed. Index 0 = Sunday (JS getDay order). */
export const weeklyHours: { day: Day; open: string | null; close: string | null }[] = [
  { day: "Sunday", open: "11:00", close: "15:00" },
  { day: "Monday", open: null, close: null },
  { day: "Tuesday", open: "11:00", close: "21:00" },
  { day: "Wednesday", open: "11:00", close: "21:00" },
  { day: "Thursday", open: "11:00", close: "21:00" },
  { day: "Friday", open: "11:00", close: "21:00" },
  { day: "Saturday", open: "11:00", close: "21:00" },
];

const query = encodeURIComponent("Pho Viet, 3801 Call Field Rd, Wichita Falls, TX 76308");

export const site = {
  name: "Pho Viet",
  description:
    "Pho Viet is a family-run Vietnamese restaurant in Wichita Falls, TX serving rich beef pho, rice vermicelli bowls and rice plates. Dine in or take out at 3801 Call Field Rd. Call (940) 500-4109.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  address: {
    street: "3801 Call Field Rd",
    city: "Wichita Falls",
    region: "TX",
    postalCode: "76308",
    country: "US",
  },
  timeZone: "America/Chicago",

  phone: "+1 (940) 500-4109",
  phoneDisplay: "(940) 500-4109",
  phoneHref: "tel:+19405004109",

  rating: { value: 4.5, count: 544, source: "Google" },

  links: {
    maps: `https://www.google.com/maps/search/?api=1&query=${query}`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${query}`,
    embed: `https://www.google.com/maps?q=${query}&output=embed`,
  },

  /** What customers consistently praise (paraphrased themes, not quotes). */
  praise: [
    { title: "Fast, friendly service", body: "Food comes out quickly, whether you’re on a lunch break or feeding the family." },
    { title: "Spotless dining room", body: "Guests regularly mention how clean and well kept the restaurant is." },
    { title: "Family-run warmth", body: "A kind owner and family behind the counter." },
    { title: "Cozy on cold days", body: "Paper lanterns, artwork and a busy, steamy room when the North Texas wind picks up." },
  ],

  // Shown in the footer credit.
  // TODO: replace with your name before showing the demo.
  preparedBy: "[MY NAME]",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
] as const;

/** "11:00" → "11am", "21:00" → "9pm", "15:30" → "3:30pm" */
export function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}
