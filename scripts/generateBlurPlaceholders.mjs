import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");
const OUTPUT_FILE = join(__dirname, "..", "app", "lib", "blurPlaceholders.json");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);
const PLACEHOLDER_WIDTH = 16;

async function getImagePaths(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const paths = [];
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      paths.push(...(await getImagePaths(join(dir, e.name), rel)));
    } else if (IMAGE_EXTENSIONS.has(extname(e.name).toLowerCase())) {
      paths.push("/" + rel);
    }
  }
  return paths;
}

async function generate() {
  const imagePaths = await getImagePaths(PUBLIC_DIR);
  const placeholders = {};

  for (const key of imagePaths) {
    const filePath = join(PUBLIC_DIR, key.slice(1));
    const buffer = await sharp(filePath)
      .resize(PLACEHOLDER_WIDTH)
      .blur()
      .toFormat("webp", { quality: 20 })
      .toBuffer();
    placeholders[key] = `data:image/webp;base64,${buffer.toString("base64")}`;
  }

  await mkdir(dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(
    OUTPUT_FILE,
    JSON.stringify(placeholders, null, 2) + "\n",
  );

  console.log(`Blur » Generated placeholders for ${imagePaths.length} images`);
}

generate();
