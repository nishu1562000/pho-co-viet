import type { StaticImageData } from "next/image";

import bunBoHue from "../../public/images/bun-bo-hue.jpg";
import grilledPork from "../../public/images/grilled-pork.jpg";
import heroPho from "../../public/images/hero-pho.jpg";
import lanterns from "../../public/images/lanterns.jpg";
import phoBowl from "../../public/images/pho-bowl.jpg";
import vermicelliBowl from "../../public/images/vermicelli-bowl.jpg";

export type SiteImage = { src: StaticImageData; alt: string };

/**
 * ALL IMAGES ARE PLACEHOLDERS (licensed Unsplash photos), not Pho Viet's food.
 * To swap in the owner's photos: replace the file in /public/images with the
 * same filename (similar aspect ratio, ~2000px+ on the long edge) and update
 * the alt text below. Nothing else needs to change.
 */
export const images = {
  // PLACEHOLDER → owner's best overhead/45° shot of a bowl of beef pho (portrait 2:3)
  hero: {
    src: heroPho,
    alt: "A steaming bowl of beef pho with rare steak, rice noodles, onion and fresh herbs on a wooden table",
  },
  // PLACEHOLDER → owner's photo of a beef pho bowl (landscape 3:2)
  pho: {
    src: phoBowl,
    alt: "A white bowl of beef pho with sliced beef, rice noodles and green onion",
  },
  // PLACEHOLDER → owner's photo of a rice vermicelli bowl (bún) (landscape 3:2)
  vermicelli: {
    src: vermicelliBowl,
    alt: "A rice vermicelli bowl topped with grilled meat, fresh herbs, pickled vegetables and crushed peanuts",
  },
  // PLACEHOLDER → owner's photo of a rice plate (cơm) with grilled pork chop (landscape 3:2)
  ricePlate: {
    src: grilledPork,
    alt: "Marinated pork chops caramelizing over a charcoal grill",
  },
  // PLACEHOLDER → owner's photo of bún bò Huế (landscape 3:2)
  bunBoHue: {
    src: bunBoHue,
    alt: "A bowl of spicy bún bò Huế with a red lemongrass broth, beef and herbs",
  },
  // PLACEHOLDER → owner's photo of the dining room with its paper lanterns (portrait 2:3)
  lanterns: {
    src: lanterns,
    alt: "Round paper lanterns glowing warm orange",
  },
} satisfies Record<string, SiteImage>;

/** Unsplash credits for the placeholder photos. */
export const imageCredits = [
  "Fujiphilm (ualwAKxto5U)",
  "Tuan Nguyen (A7zZtD7OIOU)",
  "Fujiphilm (QKfAMaH_-_U)",
  "Thu Nguyen (8EHina34FFA)",
  "Brett Wharton (_EwHC4gv59Q)",
  "Yingjie Wang (lJb8l3vjSnw)",
];
