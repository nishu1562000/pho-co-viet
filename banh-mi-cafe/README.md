# Banh Mi Cafe — website

Website for Banh Mi Cafe, a Vietnamese café at 46 Mulberry St in Chinatown, NYC.
Built with Next.js 16 (App Router, all routes static), TypeScript and Tailwind CSS v4. The only runtime dependency beyond React and Next is `lucide-react`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` in production (canonical URLs, Open Graph, sitemap, JSON-LD).

## Editing content

All content lives in `src/content/`:

- `site.ts`: address, phone, hours, ratings, reviews, ordering links, transit, social
- `menu.ts`: the full menu, best-seller tags, the three homepage pillars, and the ticker items
- `images.ts`: every image with its alt text and credit

Search the code for `TODO(client)` to find everything that still needs confirming. `docs/PROJECT_BRIEF.md` lists every fact, where it came from, and what's still open.

## Structure

```
src/
  app/          /, /menu, /privacy, 404, metadata, robots, sitemap, icon
  components/
    layout/     Header (client), Footer, RevealObserver (client)
    sections/   Hero, Marquee, Pillars, BestSellers, Reviews, TheSpace, Visit, Order
    ui/         ButtonLink, Photo, SectionHeading, Hours, Stars, TransitLines, Wordmark
    location/   StreetMap (hand-drawn SVG, no map embed)
  content/      the only files to edit for content
  lib/          JSON-LD, cn()
```

## Design system (`src/app/globals.css`)

- **Colour:** rice `#f7f1e6` / `#efe5d3`, phin `#231915`, chili `#b3331c` (CTA/accent), herb `#2f5d46`, lantern `#eeb445` (dark sections only). All text pairs pass WCAG AA; Lighthouse accessibility scores 100.
- **Type:** Fraunces (static 500/600 plus an italic accent) and Instrument Sans. Utilities `type-display`, `type-h1`–`type-h3`, `type-lead`, `type-small`, `type-caption`, `type-button`, `accent`.
- **Shape:** 6px image corners, pill buttons.
- **Motion:** CSS only. Hero line reveal on load, a single IntersectionObserver for scroll reveals, CSS scroll-driven parallax, and a menu ticker. Everything is off under `prefers-reduced-motion`, and content stays visible without JS.

## Performance note

The display font uses static weights instead of the full variable font. That cut preloaded fonts from ~290KB to ~90KB and took mobile Lighthouse from ~80 to ~92. Keep it that way unless a new design needs the variable axes.
