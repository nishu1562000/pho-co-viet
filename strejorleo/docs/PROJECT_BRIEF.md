# Strejorleo — Project Brief

_Research date: 28 September 2026_

## Research summary

| Item | Finding | Status |
| --- | --- | --- |
| Business name | Strejorleo | Verified (Google Maps listing) |
| Category | New England restaurant | Verified (Google category) |
| Address | 76 Reade St, New York, NY 10007 | Verified (Maps + directories) |
| Neighbourhood | Tribeca — Reade St between Church St and Broadway | Derived from coordinates 40.7153179, -74.0070344 |
| Service | Lunch, dinner, dine-in, takeout, credit cards; "popular for solo dining" | Google attributes via directories |
| Phone | — | **Not found** |
| Email | — | **Not found** |
| Opening hours | — | **Not found** |
| Website | — | None found |
| Instagram / social | — | **None found** |
| Reviews / rating | — | **None found** (directories list 0 reviews) |
| Official imagery | — | **None found** |
| Menu | — | **Not found** |

Several directory pages about this listing contain generic, machine-written copy ("symphony of tastes", vegan/gluten-free options, catering). None of it could be corroborated, so none of it is used.

## Brief

**BUSINESS:** Strejorleo, a New England restaurant at 76 Reade Street, Tribeca. Open for lunch and dinner, with dine-in and takeout.

**TARGET CUSTOMER:** People who work in Lower Manhattan (the courts, City Hall, the Civic Center offices and Tribeca studios) looking for a proper lunch. Tribeca residents and visitors looking for a relaxed dinner. Solo diners.

**BRAND PERSONALITY:** Quiet confidence. Coastal and unfussy, with a New York address. Editorial rather than decorative.

**PRIMARY CTA:** Plan your visit / Get directions.

**SECONDARY CTA:** See the menu. Contact is phone or email once supplied; until then it goes to the Google listing.

**KEY OFFERINGS:** Lunch · Dinner · Takeout, and the New England menu (sample dishes until the client supplies the real menu).

**LOCATION:** Reade St between Church St and Broadway, a block from City Hall Park. Chambers St (A C, 1 2 3) and City Hall (R W) stations are nearby.

**VISUAL DIRECTION:** An editorial restaurant site in the style of a printed menu or a magazine feature. Warm, low-light photography, hairline rules, generous margins, asymmetric splits and square corners. The material cues are Tribeca's cast iron and brick and New England's sailcloth.

**COLOR DIRECTION:** Sailcloth paper, harbour ink and Reade Street brick as the one accent. No gradients.

**TYPOGRAPHY DIRECTION:** Instrument Serif (display, with an expressive italic) and Hanken Grotesk (body and UI; small caps-style labels).

**COMPETITIVE DIFFERENTIATION:** Downtown seafood and New England rooms lean either nautical-kitsch or generic fine-dining. Strejorleo can own two things: the everyday New England table, and the specific Tribeca address.

## Competitor notes (NYC New England / seafood)

- **The Mermaid Inn, Pearl Oyster Bar, Grand Banks, Luke's Lobster, Greenpoint Fish & Lobster.** Common patterns: the menu and reservations sit one click from the hero, hours and address stay in the footer on every page, and the photography is food-first. Weak spots: PDF menus, cluttered homepages and nautical clichés (rope, anchors, navy stripes).
- Our response: an HTML menu page (fast and indexable), address and hours in one clear location block, and no nautical props.

## Open items for the client (must confirm before launch)

1. Phone number, email and opening hours → `src/content/site.ts`
2. The real menu → `src/content/menu.ts` (currently a clearly labelled **sample**)
3. Owner photography of the room, kitchen and dishes → `src/content/images.ts` (current images are licensed Unsplash stand-ins)
4. Instagram / social handles → `src/content/site.ts` (the section is hidden until set)
5. Verified reviews → `src/content/site.ts` (the section is hidden until set)
6. Production domain → `NEXT_PUBLIC_SITE_URL`
7. Reservations / online ordering provider, if any
