import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { site } from "@/content/site";
import { jsonLdScript, restaurantJsonLd } from "@/lib/jsonld";

import "./globals.css";

// Static weights (latin only) rather than the full variable font: the
// display files drop from ~130KB to a fraction, which matters for LCP on
// slow mobile connections.
const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: "normal",
  weight: ["500", "600"],
  display: "swap",
});

const displayItalic = Fraunces({
  variable: "--font-fraunces-italic",
  subsets: ["latin"],
  style: "italic",
  weight: "500",
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} — Banh Mi, Pho & Vietnamese Coffee in Chinatown, NYC`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}, Chinatown NYC` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name}, 46 Mulberry St, Chinatown` }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og.jpg"] },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "New York",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f1e6",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${display.variable} ${displayItalic.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal styles before first paint; without JS everything is simply visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(restaurantJsonLd())} />
      </head>
      <body>
        <a
          href="#main"
          className="type-button fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-phin px-5 py-4 text-rice transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
