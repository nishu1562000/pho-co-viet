import { site, weeklyHours } from "@/content/site";

/** Schema.org Restaurant markup for local SEO, built only from confirmed listing facts. */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: site.phone.replace(/ /g, "-"),
    servesCuisine: ["Afghan", "Persian", "Kebabs"],
    acceptsReservations: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: "Geelong VIC",
    hasMap: site.links.maps,
    openingHoursSpecification: weeklyHours
      .filter((d) => d.open && d.close)
      .map((d) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${d.day}`,
        opens: d.open,
        closes: d.close,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
