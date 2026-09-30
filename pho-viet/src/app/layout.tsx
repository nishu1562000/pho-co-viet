import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, DM_Serif_Display } from "next/font/google";

import { site } from "@/content/site";
import { jsonLdScript, restaurantJsonLd } from "@/lib/jsonld";

import "./globals.css";

const serif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

// Be Vietnam Pro renders Vietnamese dish names (Phở, Bún, Cơm) correctly.
const sans = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Pho Viet | Pho & Vietnamese Restaurant in Wichita Falls, TX";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [
    "pho Wichita Falls",
    "Vietnamese restaurant Wichita Falls",
    "Pho Viet",
    "vermicelli bowl Wichita Falls",
    "Vietnamese food Wichita Falls TX",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Pho Viet, Vietnamese restaurant in Wichita Falls, TX" }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og.jpg"] },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Wichita Falls",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b2418",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal styles before first paint; without JS everything is simply visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(restaurantJsonLd())} />
      </head>
      <body>{children}</body>
    </html>
  );
}
