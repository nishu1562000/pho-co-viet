import type { StaticImageData } from "next/image";

import charcoalGrill from "../../public/images/charcoal-grill.jpg";
import chickenSkewers from "../../public/images/chicken-skewers.jpg";
import heroGrillPlatter from "../../public/images/hero-grill-platter.jpg";
import kabuliPulao from "../../public/images/kabuli-pulao.jpg";
import lambShank from "../../public/images/lamb-shank.jpg";
import mantu from "../../public/images/mantu.jpg";

export type SiteImage = { src: StaticImageData; alt: string };

/**
 * ALL IMAGES ARE PLACEHOLDERS (free Unsplash photos), not this restaurant's food.
 * To swap in the owner's photos: replace the file in /public/images with the
 * same filename (similar aspect ratio, ~1800px on the long edge), update the
 * alt text below, then run `node scripts/make-og.mjs` if the hero changed.
 */
export const images = {
  // PLACEHOLDER → owner's best shot of a mixed kebab platter (portrait 2:3)
  hero: {
    src: heroGrillPlatter,
    alt: "A charcoal-grilled platter of chicken and lamb skewers, kofta, grilled peppers and potatoes on flatbread with dipping sauces",
  },
  // PLACEHOLDER → owner's photo of chicken kebabs on the grill (landscape 3:2)
  kebabs: {
    src: chickenSkewers,
    alt: "Rows of chicken kebab skewers charring over a hot grill",
  },
  // PLACEHOLDER → owner's photo of lamb shank with rice (square)
  lambShank: {
    src: lambShank,
    alt: "A slow-cooked lamb shank in rich gravy with vegetables",
  },
  // PLACEHOLDER → owner's photo of Kabuli pulao (portrait 2:3)
  pulao: {
    src: kabuliPulao,
    alt: "A platter of spiced rice pulao with carrots and tender pieces of lamb",
  },
  // PLACEHOLDER → owner's photo of mantu (landscape 3:2)
  mantu: {
    src: mantu,
    alt: "Steamed meat-filled dumplings in a steamer tray with a small bowl of sauce",
  },
  // PLACEHOLDER → owner's photo of their charcoal grill (landscape)
  grill: {
    src: charcoalGrill,
    alt: "Skewers of meat cooking over glowing charcoal with smoke rising",
  },
} satisfies Record<string, SiteImage>;

/** Unsplash credits for the placeholder photos. */
export const imageCredits = [
  "Victoria Shes (UC0HZdUitWY)",
  "Mihir Sabnis (FOZbF67e-DE)",
  "Neil Marshall (2nJ7fYeuXVI)",
  "Otabek Xatipov (a85Px4ZCSK4)",
  "Tamara Malaniy (VdcAnwXHr9U)",
  "Hamid Roshaan (uIiMSu88RZQ)",
];
