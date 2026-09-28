import { site } from "@/content/site";

/**
 * Schema.org markup for the café. Everything here comes from site.ts.
 * No aggregateRating: Google doesn't allow self-serving review markup
 * for LocalBusiness pages, and it wouldn't produce rich results anyway.
 */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "CafeOrCoffeeShop"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: site.phone.replace(/[^+\d]/g, ""),
    ...(site.email && { email: site.email }),
    servesCuisine: ["Vietnamese", "Cafe"],
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.links.googleMaps,
    hasMenu: `${site.url}/menu`,
    openingHoursSpecification: site.hours.map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${d.day}`,
      opens: d.opens,
      closes: d.closes,
    })),
    potentialAction: {
      "@type": "OrderAction",
      target: site.ordering.map((o) => ({ "@type": "EntryPoint", urlTemplate: o.url })),
    },
    sameAs: [site.links.yelp, ...site.social.map((s) => s.url)],
  };
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
