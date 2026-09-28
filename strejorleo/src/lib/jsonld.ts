import { site } from "@/content/site";

/**
 * Schema.org Restaurant markup. Only includes fields we can stand behind:
 * telephone, email and opening hours appear automatically once set in site.ts.
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
    servesCuisine: site.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.links.googleMaps,
    hasMenu: `${site.url}/menu`,
    paymentAccepted: "Credit Card",
    ...(site.phone && { telephone: site.phone }),
    ...(site.email && { email: site.email }),
    ...(site.hours && {
      openingHoursSpecification: site.hours
        .filter((d) => d.opens && d.closes)
        .map((d) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: `https://schema.org/${d.day}`,
          opens: d.opens,
          closes: d.closes,
        })),
    }),
    ...(site.social.length > 0 && { sameAs: site.social.map((s) => s.url) }),
  };
}

/** Serialise JSON-LD safely for an inline <script>. */
export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
