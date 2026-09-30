// Builds public/og.jpg (1200×630) for WhatsApp / Facebook / iMessage link previews.
// Usage: node scripts/make-og.mjs   (re-run after changing the hero photo or rating)
//
// A static JPEG (not a generated PNG route) keeps the file well under
// WhatsApp's ~300 KB preview limit, so the thumbnail reliably appears.
import { statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = join(import.meta.dirname, "..");
const W = 1200;
const H = 630;
const PHOTO_W = 520;

const charcoal = "#15100d";
const saffron = "#e6a93a";
const cream = "#f6ecdb";
const pomegranate = "#b3232f";

// Eight-point star (two squares at 45°), the same motif as the site's tile border.
const tile = `
  <pattern id="tile" width="28" height="28" patternUnits="userSpaceOnUse">
    <g fill="none" stroke="${saffron}" stroke-width="1.3" opacity="0.9">
      <rect x="8" y="8" width="12" height="12" />
      <rect x="8" y="8" width="12" height="12" transform="rotate(45 14 14)" />
    </g>
    <circle cx="0" cy="0" r="1.6" fill="${saffron}" /><circle cx="28" cy="0" r="1.6" fill="${saffron}" />
    <circle cx="0" cy="28" r="1.6" fill="${saffron}" /><circle cx="28" cy="28" r="1.6" fill="${saffron}" />
  </pattern>`;

const panel = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${tile}
    <linearGradient id="fade" x1="0" x2="1">
      <stop offset="0" stop-color="${charcoal}" stop-opacity="1" />
      <stop offset="1" stop-color="${charcoal}" stop-opacity="0" />
    </linearGradient>
    <radialGradient id="glow" cx="0.1" cy="0.9" r="0.8">
      <stop offset="0" stop-color="${pomegranate}" stop-opacity="0.28" />
      <stop offset="1" stop-color="${pomegranate}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${W - PHOTO_W}" height="${H}" fill="${charcoal}" />
  <rect width="${W - PHOTO_W}" height="${H}" fill="url(#glow)" />
  <rect x="${W - PHOTO_W}" width="90" height="${H}" fill="url(#fade)" />

  <!-- Tile borders top and bottom -->
  <rect x="0" y="0" width="${W}" height="28" fill="${charcoal}" />
  <rect x="0" y="0" width="${W}" height="28" fill="url(#tile)" opacity="0.8" />
  <rect x="0" y="${H - 28}" width="${W}" height="28" fill="${charcoal}" />
  <rect x="0" y="${H - 28}" width="${W}" height="28" fill="url(#tile)" opacity="0.8" />

  <g font-family="Segoe UI, Arial, sans-serif">
    <text x="72" y="130" fill="${saffron}" font-size="21" font-weight="700" letter-spacing="4">AFGHAN CHARCOAL KITCHEN</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="${cream}">
    <text x="68" y="232" font-size="84">Afghan</text>
    <text x="68" y="322" font-size="84">Restaurant</text>
    <text x="68" y="412" font-size="84" fill="${saffron}" font-style="italic">Geelong</text>
  </g>

  <!-- Rating pill -->
  <rect x="72" y="455" width="292" height="56" rx="28" fill="${pomegranate}" />
  <text x="218" y="492" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff">4.6 ★ · Geelong</text>

  <text x="72" y="560" font-family="Segoe UI, Arial, sans-serif" font-size="21" fill="${cream}" opacity="0.82">118 Moorabool St · Open 7 days, 4pm–10pm</text>
</svg>`;

const photo = await sharp(join(root, "public/images/hero-grill-platter.jpg"))
  .resize(PHOTO_W, H, { fit: "cover", position: "centre" })
  .modulate({ brightness: 1.03, saturation: 1.05 })
  .toBuffer();

const out = join(root, "public/og.jpg");
await sharp({ create: { width: W, height: H, channels: 3, background: charcoal } })
  .composite([
    { input: photo, left: W - PHOTO_W, top: 0 },
    { input: Buffer.from(panel), left: 0, top: 0 },
  ])
  .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(out);

console.log(`og.jpg ${Math.round(statSync(out).size / 1024)} KB`);
