import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import { site } from "@/content/site";
import { jsonLdScript, restaurantJsonLd } from "@/lib/jsonld";

import "./globals.css";

// Static weights only, no italic: every preloaded font file delays the
// headline (the LCP element) on slow mobile connections.
const serif = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const title = "Afghan Restaurant Geelong | Charcoal Kebabs & Afghan Food on Moorabool St";

export const metadata: Metadata = {
  // Absolute production URL (see site.ts) so OG/canonical never point at localhost.
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [
    "Afghan restaurant Geelong",
    "kebabs Geelong",
    "Afghan food Geelong",
    "charcoal kebabs Geelong",
    "lamb shank Geelong",
    "Kabuli pulao Geelong",
    "Moorabool St restaurant",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Afghan Restaurant Geelong — 4.6 stars on Google — charcoal kebab platter",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og.jpg"] },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Geelong",
  },
};

export const viewport: Viewport = {
  themeColor: "#14100d",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal styles before first paint; without JS everything is simply visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(restaurantJsonLd())} />
      </head>
      <body>{children}</body>
    </html>
  );
}
