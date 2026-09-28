import type { StaticImageData } from "next/image";

import banhMiHero from "../../public/images/banh-mi-hero.jpg";
import banhMiPaper from "../../public/images/banh-mi-paper.jpg";
import chinatownPell from "../../public/images/chinatown-pell.jpg";
import chinatownSigns from "../../public/images/chinatown-signs.jpg";
import creamCoffee from "../../public/images/cream-coffee.jpg";
import icedMatcha from "../../public/images/iced-matcha.jpg";
import phinDrip from "../../public/images/phin-drip.jpg";
import phoBowl from "../../public/images/pho-bowl.jpg";
import phoOverhead from "../../public/images/pho-overhead.jpg";
import summerRolls from "../../public/images/summer-rolls.jpg";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  credit: { name: string; url: string };
};

/**
 * Every image on the site, in one place.
 *
 * TODO(client): these are licensed Unsplash stand-ins, not photos of Banh Mi
 * Cafe's food or room. Replace with the café's own photography (same
 * filenames, similar aspect ratios; 2400px long edge) and update the alt text.
 */
export const images = {
  banhMi: {
    src: banhMiHero,
    alt: "A banh mi on a dark slate, the baguette split and packed with pork, pickled carrot and a crown of cilantro",
    credit: { name: "stefan cruceru", url: "https://unsplash.com/photos/reA8UQHmNTQ" },
  },
  banhMiPaper: {
    src: banhMiPaper,
    alt: "A banh mi on brown wax paper with cucumber, pickled vegetables and fresh herbs",
    credit: { name: "Amy Tran", url: "https://unsplash.com/photos/pTcexK1TB98" },
  },
  pho: {
    src: phoBowl,
    alt: "A dark bowl of beef pho with rice noodles, sliced onion and herbs",
    credit: { name: "You Le", url: "https://unsplash.com/photos/i5OO8PJQ-HY" },
  },
  phoOverhead: {
    src: phoOverhead,
    alt: "Pho seen from above, chopsticks lifting noodles from the broth",
    credit: { name: "Sergei Mironov", url: "https://unsplash.com/photos/LdMOXLJWfQ4" },
  },
  phin: {
    src: phinDrip,
    alt: "Coffee dripping slowly through a steel phin filter into a glass",
    credit: { name: "Thuyen Ngo", url: "https://unsplash.com/photos/E1wDXAfXsUQ" },
  },
  creamCoffee: {
    src: creamCoffee,
    alt: "A layered iced Vietnamese coffee topped with cream",
    credit: { name: "Nguyen Phuc Hau", url: "https://unsplash.com/photos/gQemdyCSA5A" },
  },
  matcha: {
    src: icedMatcha,
    alt: "An iced matcha latte, green over white, on a small round table",
    credit: { name: "Gaia&Co", url: "https://unsplash.com/photos/VKWjhlgFFwc" },
  },
  summerRolls: {
    src: summerRolls,
    alt: "Fresh summer rolls in rice paper with a dipping sauce",
    credit: { name: "Emily Webster", url: "https://unsplash.com/photos/L7dVTV02afU" },
  },
  chinatown: {
    src: chinatownPell,
    alt: "A narrow Chinatown street lined with fire escapes and hanging signs",
    credit: { name: "Luke Stackpoole", url: "https://unsplash.com/photos/3b-DIhmEmC8" },
  },
  chinatownSigns: {
    src: chinatownSigns,
    alt: "Stacked shop signs on a tenement building in Manhattan's Chinatown",
    credit: { name: "Valeriia Neganova", url: "https://unsplash.com/photos/w-tMeJqsGys" },
  },
} satisfies Record<string, SiteImage>;
