import { site, weeklyHours } from "@/content/site";

/**
 * Schema.org Restaurant markup for local SEO. Uses only the confirmed NAP and
 * hours. aggregateRating is intentionally omitted: Google doesn't allow
 * self-served review markup on a business's own LocalBusiness page.
 */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: "+1-940-500-4109",
    servesCuisine: ["Vietnamese", "Pho"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: "Wichita Falls, TX",
    hasMap: site.links.maps,
    openingHoursSpecification: weeklyHours
      .filter((d) => d.open && d.close)
      .map((d) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${d.day}`,
        opens: d.open,
        closes: d.close,
      })),
  };
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
