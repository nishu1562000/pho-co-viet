# Afghan Restaurant Geelong — demo website

Single-page demo site for an Afghan charcoal-kebab restaurant at 118 Moorabool St, Geelong VIC.
Next.js 16 (App Router, fully static), TypeScript, Tailwind CSS v4, `lucide-react`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploying to Vercel

Import the repo in Vercel and set **Root Directory** to `afghan-restaurant-geelong`. No env vars are required:
canonical, Open Graph and JSON-LD URLs use `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel sets on every build,
so link previews never point at localhost. Once there's a custom domain, set `NEXT_PUBLIC_SITE_URL`
(e.g. `https://example.com.au`) and redeploy.

After deploying, paste the URL into https://developers.facebook.com/tools/debug/ to check the preview
(WhatsApp uses the same Open Graph tags) and to refresh any cached preview.

## Editing content

Everything lives in `src/content/`:

- `site.ts`: name, address, phone, hours, rating, praise themes, links
- `menu.ts`: the sample menu (no prices)
- `images.ts`: every image with its alt text and Unsplash credit

Search for `TODO(client)` and `PLACEHOLDER` to find what still needs the owner's input:

- Official restaurant name (currently a placeholder)
- Real menu and prices
- Real food photos: replace files in `public/images/` keeping the same names
- Three real Google reviews in `src/components/sections/Reviews.tsx`, copied word for word

## Images and the link-preview image

- `node scripts/optimize-images.mjs` re-encodes any `public/images/*.raw.jpg` to ~1800px web JPEGs.
- `node scripts/make-og.mjs` rebuilds `public/og.jpg` (1200×630, ~170 KB) from the hero photo.
  Re-run it after changing the hero photo, name or rating. It stays a static JPEG on purpose:
  WhatsApp drops preview images much over ~300 KB.

## Design system (`src/app/globals.css`)

- **Colour:** charcoal `#14100d`, saffron `#e6a93a` (on dark only), pomegranate `#b3232f` (buttons),
  cream `#f6ecdb`. All text pairs pass WCAG AA; ratios are noted beside each token.
- **Type:** Playfair Display 500 (headings) and DM Sans 400/600 (body). Keep it to these static
  weights: every extra font file delays the hero headline, which is the mobile LCP element.
- **Ornament:** an eight-point star tile (`tile-band`, `tile-rule`), SVG in CSS.
- **Motion:** CSS only, all off under `prefers-reduced-motion`. The hero entrance is transform-only
  (no fade) so it doesn't delay LCP.

Lighthouse (mobile, local production build on Windows): Performance 83–92 across runs, usually
91–92 (LCP ~3.2 s, CLS 0); Accessibility, Best Practices and SEO 100.
