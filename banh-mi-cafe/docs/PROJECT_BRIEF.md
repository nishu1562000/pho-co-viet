# Banh Mi Cafe — Project Brief

_Research date: 28 September 2026. Google Maps listing: https://www.google.com/maps?cid=2798973645384731658_

## Verified facts

| Item | Finding | Source |
| --- | --- | --- |
| Name | Banh Mi Cafe (Google: "Banh mi Cafe") | Google Maps, Grubhub, Yelp, Apple Maps |
| Category | Coffee shop (Google) · Vietnamese (Yelp/Apple) · Cafe, Coffee & Tea (Grubhub) | Listings |
| Address | 46 Mulberry St, New York, NY 10013 (Chinatown) | Google Maps |
| Location detail | Across from Columbus Park | Google coordinates + Yelp review |
| Phone | +1 917-675-6811 | Google Maps, Grubhub, Apple Maps |
| Hours | Every day 9:30am–8pm | Apple Maps (Yelp data). Google shows Mon 9:30–8. **One Yelp snippet said Mon–Fri — confirm weekends.** |
| Online ordering | Grubhub, Seamless, Uber Eats (+Postmates), DoorDash | Store pages |
| Ratings | Google 4.8 (177), Yelp 4.2 (49), Grubhub 5.0 (5) | As of Sept 2026 |
| Amenities | Dine-in, takeout, delivery, wheelchair-accessible entrance, Apple Pay/contactless | Google, Apple Maps |
| Opened | Grand opening around March 2026 | @explorechinatown Instagram post, 8 Mar 2026 |
| Menu | Banh mi, pho, specialty noodles, vermicelli bowls, summer rolls, snacks, Vietnamese coffee, matcha and refreshers | Grubhub menu + Google-derived dish list |
| Price range | $10–20 | Yelp |
| Website | None | — |
| Official Instagram | **Not verified**. A community account announced the opening; no official handle confirmed. | — |
| Email | **Not found** | — |
| Photos | Only user/owner photos on Google/Yelp, which we can't reuse without permission | — |

## Brief

**BUSINESS:** Banh Mi Cafe, a new family-run Vietnamese café and banh mi shop at 46 Mulberry St, Chinatown, facing Columbus Park.

**TARGET CUSTOMER:** People working in the Civic Center and at the courts (jurors, lawyers, city staff) on a lunch break. Chinatown visitors. Local residents and students who want a seat to work or catch up. Delivery customers in Lower Manhattan.

**BRAND PERSONALITY:** Warm, quick, generous and unfussy. A family-owned place that takes its bread, broth and coffee seriously.

**PRIMARY CTA:** Order pickup or delivery (delivery apps), with one-tap calling on mobile.

**SECONDARY CTA:** See the menu / Get directions.

**KEY PRODUCTS:** Banh mi (Traditional and Satay Chicken are best sellers), pho (brisket), noodle soups, summer rolls, phin-dripped Vietnamese coffee, ube cream drinks and matcha.

**LOCATION:** Mulberry St between Bayard and Worth, across from Columbus Park, a short walk from Foley Square. Canal St, Chambers St and Brooklyn Bridge–City Hall stations are nearby.

**VISUAL DIRECTION:** A warm editorial café. Poster-scale serif headlines and a layered photo composition, with rice-paper cream as the base and a chili-red accent. Soft corners and pill buttons feel friendlier than a fine-dining site, but the layout stays disciplined.

**COLOR DIRECTION:** Rice #f7f1e6, phin coffee #231915, chili #b3331c, herb #2f5d46, lantern #eeb445 (dark sections only).

**TYPOGRAPHY DIRECTION:** Fraunces (display, with italic for accents) and Instrument Sans (UI and body).

**COMPETITIVE DIFFERENTIATION:** Nearby banh mi shops (e.g. Banh Mi Saigon, Banh Mi Co Ut) compete for the same customers on the same delivery apps and map listings. This site gives Banh Mi Cafe an owned hub with:
- the menu and one-tap ordering and calling
- real review proof from Google and Yelp
- the Columbus Park / courthouse location angle
- the coffee and matcha program, which sets it apart from sandwich-only shops

Competitor web presence was not audited in depth.

## Before launch — confirm with the client

1. Weekend hours (site currently says every day 9:30am–8pm) → `src/content/site.ts`
2. In-store prices, if they want them shown → `src/content/menu.ts`
3. Their own photos (current images are Unsplash stand-ins) → `src/content/images.ts`
4. Official Instagram/TikTok, if any → `site.social`
5. An email address, if they want one listed
6. Permission to quote the reviews shown (public excerpts, credited to the source)
7. Production domain → `NEXT_PUBLIC_SITE_URL`
