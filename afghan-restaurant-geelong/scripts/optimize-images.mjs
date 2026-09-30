// Re-encode downloaded photos (*.raw.jpg) to web-sized JPEGs in public/images.
// Usage: node scripts/optimize-images.mjs
import { readdirSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const dir = join(import.meta.dirname, "..", "public", "images");
for (const f of readdirSync(dir).filter((f) => f.endsWith(".raw.jpg"))) {
  const out = f.replace(".raw.jpg", ".jpg");
  await sharp(join(dir, f))
    .rotate()
    .resize(1800, 1800, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(join(dir, out));
  unlinkSync(join(dir, f));
  console.log(out);
}
