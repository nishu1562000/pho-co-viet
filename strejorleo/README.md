# Strejorleo — website

Marketing site for Strejorleo, a New England restaurant at 76 Reade Street, Tribeca.
Next.js 16 (App Router, all routes static), TypeScript and Tailwind CSS v4. The only runtime dependency beyond React and Next is `lucide-react`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.strejorleo.com`) in production. It drives canonical URLs, Open Graph, the sitemap, robots.txt and JSON-LD.

## Before launch: content to confirm with the client

Everything the client needs to supply lives in `src/content/`. Search for `TODO(client)`.

| What | Where | Current state |
| --- | --- | --- |
| Phone, email, opening hours | `src/content/site.ts` | `null`. The UI links to the Google listing for live hours. Once set, they show automatically in the Visit section, the footer and the JSON-LD. |
| Menu | `src/content/menu.ts` | **Sample** New England dishes, labelled as a sample on the site. Replace them and set `isSample: false`. |
| Photography | `src/content/images.ts`, `/public/images` | Licensed Unsplash stand-ins (credits in the file). Replace with the restaurant's own photos, keeping the same filenames. |
| Reviews | `site.reviews` | Empty, so the section is hidden. Add only verified reviews with their source. |
| Instagram / social | `site.social` | Empty, so the section and footer links are hidden. |
| Reservations / ordering | `site.links` | Not set. |
| Logo | `src/components/ui/Wordmark.tsx` | Typographic wordmark. |
| Social share image | `public/og.jpg` | Built from a stand-in photo. Regenerate it after the reshoot. |

See `docs/PROJECT_BRIEF.md` for the research, the brief, and what could and couldn't be verified.

## Structure

```
src/
  app/            routes (/, /menu, /privacy, 404), metadata, robots, sitemap
  components/
    layout/       Header (client), Footer, RevealObserver (client)
    sections/     one file per homepage section
    ui/           ButtonLink, Photo, Eyebrow, Hours, TransitLines, Wordmark
    location/     StreetMap (hand-drawn SVG, no map embed)
  content/        site facts, menu, image registry: the only files to edit for content
  lib/            JSON-LD, cn()
```

## Design system

Tokens live in `src/app/globals.css` (`@theme`).

- **Colour:** paper `#f3eee5`, paper-2 `#e9e2d5`, ink `#16212a`, muted `#5b6670`, brick accent `#9b3a24` (plus `#d9826a` on dark). All text pairs meet WCAG AA.
- **Type:** Instrument Serif (display) and Hanken Grotesk (body/UI). Utilities `type-display`, `type-h1`…`type-h3`, `type-lead`, `type-body`, `type-small`, `type-caption`, `type-nav`, `type-button`.
- **Space:** Tailwind's 4px scale plus fluid `--gutter`, `--section` and `--section-sm`.
- **Radius:** none, by design.
- **Motion:** CSS only. Hero line reveal on load, one shared IntersectionObserver for scroll reveals, and CSS scroll-driven parallax where supported. Everything is disabled under `prefers-reduced-motion`, and all content stays visible without JS.
