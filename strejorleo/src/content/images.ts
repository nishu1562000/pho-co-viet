import type { StaticImageData } from "next/image";

import clamChowder from "../../public/images/clam-chowder.jpg";
import heroDiningRoom from "../../public/images/hero-dining-room.jpg";
import lobsterRoll from "../../public/images/lobster-roll.jpg";
import mussels from "../../public/images/mussels.jpg";
import oysterSingle from "../../public/images/oyster-single.jpg";
import oystersIce from "../../public/images/oysters-ice.jpg";
import oystersTable from "../../public/images/oysters-table.jpg";
import roomEvening from "../../public/images/room-evening.jpg";
import roomSconces from "../../public/images/room-sconces.jpg";
import roomWindows from "../../public/images/room-windows.jpg";
import tribecaStapleStreet from "../../public/images/tribeca-staple-street.jpg";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  /** Licensed stand-in until the client supplies their own photography. */
  credit: { name: string; url: string };
};

/**
 * Every image on the site, in one place.
 *
 * TODO(client): these are licensed Unsplash stand-ins chosen for mood, not
 * photographs of Strejorleo. Replace each file in /public/images with the
 * restaurant's own photography (same filename, similar aspect ratio) and
 * update the alt text.
 *
 * Recommended originals: 2400px on the long edge, JPEG q80+.
 *  - hero:        portrait 2:3
 *  - dishes:      landscape 3:2 or portrait 4:5
 *  - room:        landscape 3:2
 */
export const images = {
  hero: {
    src: heroDiningRoom,
    alt: "A long, low-lit dining room with dark wood panelling and tables set for service",
    credit: { name: "Haberdoedas", url: "https://unsplash.com/photos/-5RPt2CfWZ4" },
  },
  roomWindows: {
    src: roomWindows,
    alt: "Bistro tables beneath tall arched windows in soft afternoon light",
    credit: { name: "Mitchell Hollander", url: "https://unsplash.com/photos/Yx-lrVk1ZHY" },
  },
  roomEvening: {
    src: roomEvening,
    alt: "A dimly lit dining room in the evening, the bar glowing at the back",
    credit: { name: "Oliver Guhr", url: "https://unsplash.com/photos/EjHiN2KxTO4" },
  },
  roomSconces: {
    src: roomSconces,
    alt: "Warm wall sconces casting pools of light along a dark corridor",
    credit: { name: "Maria Ivanova", url: "https://unsplash.com/photos/1nq1Gg-deKk" },
  },
  chowder: {
    src: clamChowder,
    alt: "A white bowl of clam chowder with littleneck clams in the shell",
    credit: { name: "Do mee", url: "https://unsplash.com/photos/SH8_JmrsQcw" },
  },
  lobsterRoll: {
    src: lobsterRoll,
    alt: "A lobster roll in a toasted, buttered bun on a steel tray",
    credit: { name: "Crunch", url: "https://unsplash.com/photos/OCLUCZ14cmA" },
  },
  mussels: {
    src: mussels,
    alt: "A plate of steamed mussels being set down on the table",
    credit: { name: "Peyman Shojaei", url: "https://unsplash.com/photos/MU_vUBGsVX4" },
  },
  oystersTable: {
    src: oystersTable,
    alt: "Oysters on ice shared across a table with glasses of white wine",
    credit: { name: "Cathrine Skovly", url: "https://unsplash.com/photos/PbbYN1Oaw78" },
  },
  oystersIce: {
    src: oystersIce,
    alt: "A platter of freshly shucked oysters on crushed ice with lemon wedges",
    credit: { name: "Mitili Mitili", url: "https://unsplash.com/photos/h3wBwuECWg4" },
  },
  oysterSingle: {
    src: oysterSingle,
    alt: "A single oyster shell on a black surface",
    credit: { name: "Mitili Mitili", url: "https://unsplash.com/photos/2X8hAKCNKag" },
  },
  tribeca: {
    src: tribecaStapleStreet,
    alt: "Staple Street in Tribeca, with its brick skybridge and cast-iron warehouses",
    credit: { name: "Pelle Martin", url: "https://unsplash.com/photos/0KIDX1uhCVE" },
  },
} satisfies Record<string, SiteImage>;
