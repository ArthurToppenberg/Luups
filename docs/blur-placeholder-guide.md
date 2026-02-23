# Blur-Up Image Placeholder System

A build-time blur placeholder system for Next.js static exports (e.g. GitHub Pages). Uses `sharp` to generate tiny base64-encoded blurred versions of images at build time, then displays them instantly while the full image loads — fading smoothly from blur to sharp.

## Why

Next.js `<Image placeholder="blur">` requires server-side image optimization, which doesn't work with `output: "export"` (static hosting). This system replicates the same blur-up UX entirely at build time with zero runtime cost.

## How it works

1. A Node.js script scans a media directory for images
2. Each image is resized to 16px wide, blurred, and encoded as a base64 WebP data URI (~100 bytes each)
3. The data URIs are written to a JSON manifest
4. A custom image component reads the manifest, renders the blur inline (no network request), and fades in the real image on load

## Prerequisites

- Next.js with `output: "export"` and `images: { unoptimized: true }`
- TypeScript with `resolveJsonModule: true` in tsconfig

## Step 1: Install sharp

```bash
pnpm add -D sharp
```

## Step 2: Create the generation script

Create `scripts/generateBlurPlaceholders.mjs`:

```js
import { readdir, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const MEDIA_DIR = join(__dirname, "../public/media");
const OUTPUT_FILE = join(__dirname, "../app/lib/blurPlaceholders.json");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);
const PLACEHOLDER_WIDTH = 16;

async function generate() {
  const files = await readdir(MEDIA_DIR);
  const images = files.filter((f) =>
    IMAGE_EXTENSIONS.has(extname(f).toLowerCase()),
  );

  const placeholders = {};

  for (const file of images) {
    const buffer = await sharp(join(MEDIA_DIR, file))
      .resize(PLACEHOLDER_WIDTH)
      .blur()
      .toFormat("webp", { quality: 20 })
      .toBuffer();

    const key = `/media/${file}`;
    placeholders[key] = `data:image/webp;base64,${buffer.toString("base64")}`;
  }

  await writeFile(
    OUTPUT_FILE,
    JSON.stringify(placeholders, null, 2) + "\n",
  );

  console.log(
    `Blur » Generated placeholders for ${images.length} images`,
  );
}

generate();
```

> **Adapt paths**: `MEDIA_DIR` should point to your image directory and `OUTPUT_FILE` to wherever your component can import it from. The `key` format must match the `src` you pass to the component.

## Step 3: Create the image component

Create `app/components/AppImage.tsx`:

```tsx
"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties, type SyntheticEvent } from "react";
import blurMap from "../lib/blurPlaceholders.json";

type AppImageProps = Omit<ImageProps, "src"> & { src: string };

const BLUR_PLACEHOLDER_STYLE: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(20px)",
  transform: "scale(1.1)",
  transition: "opacity 500ms ease-out",
  pointerEvents: "none",
};

export function AppImage({
  src,
  fill,
  className,
  style,
  onLoad,
  width,
  height,
  ...props
}: AppImageProps) {
  const blurDataURL = (blurMap as Record<string, string>)[src];
  const [loaded, setLoaded] = useState(!blurDataURL);

  // No blur available — render plain Image
  if (!blurDataURL) {
    return (
      <Image
        src={src}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        style={style}
        onLoad={onLoad}
        {...props}
      />
    );
  }

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>): void => {
    setLoaded(true);
    if (typeof onLoad === "function") {
      (onLoad as (event: SyntheticEvent<HTMLImageElement>) => void)(event);
    }
  };

  const blurPlaceholder = (
    <img
      src={blurDataURL}
      alt=""
      aria-hidden="true"
      style={{ ...BLUR_PLACEHOLDER_STYLE, opacity: loaded ? 0 : 1 }}
    />
  );

  // Fill mode: wrapper takes the parent's full area
  if (fill) {
    return (
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {blurPlaceholder}
        <Image
          src={src}
          fill
          className={className}
          style={{
            ...style,
            transition: "opacity 500ms ease-out",
            opacity: loaded ? 1 : 0,
          }}
          onLoad={handleLoad}
          {...props}
        />
      </div>
    );
  }

  // Sized mode: wrapper shrinks to fit the image
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {blurPlaceholder}
      <Image
        src={src}
        width={width}
        height={height}
        className={className}
        style={{
          display: "block",
          ...style,
          transition: "opacity 500ms ease-out",
          opacity: loaded ? 1 : 0,
        }}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}
```

### Component behaviour

| Mode | Trigger | Wrapper | Blur position | Image position |
|------|---------|---------|---------------|----------------|
| **Fill** | `fill` prop passed | `position: absolute; inset: 0` | absolute inside wrapper | `fill` (absolute inside wrapper) |
| **Sized** | `width`/`height` passed | `position: relative` | absolute inside wrapper | in-flow (determines wrapper height) |
| **No blur** | image not in manifest | no wrapper | — | plain `<Image>` passthrough |

### Key design decisions

- **`transform: scale(1.1)`** on the blur prevents edge artifacts from the blur filter
- **`overflow: hidden`** on the wrapper clips the scaled blur
- **`useState(!blurDataURL)`** skips the fade when no blur exists (avoids flash)
- **`onLoad` passthrough** lets callers still hook into the load event
- Falls back to a plain `next/image` if a blur isn't available for a given path

## Step 4: Wire into build

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "generate:blur": "node scripts/generateBlurPlaceholders.mjs",
    "prebuild": "node scripts/generateBlurPlaceholders.mjs",
    "build": "next build",
    "clean": "rimraf .next .turbo node_modules out app/lib/blurPlaceholders.json"
  }
}
```

- `prebuild` runs automatically before `build`, so placeholders are always fresh
- `generate:blur` lets you regenerate manually (e.g. after adding new images)
- `clean` removes the generated JSON alongside other build artifacts

## Step 5: Gitignore the generated file

Add to `.gitignore` (or a local `.gitignore` next to the JSON):

```
blurPlaceholders.json
```

The file is regenerated on every build — no need to track it.

## Step 6: CI integration (GitHub Actions example)

Add a step before the build in your workflow:

```yaml
- name: Generate blur placeholders
  run: pnpm --filter web generate:blur

- name: Build
  run: pnpm build
```

> The explicit CI step is belt-and-suspenders with `prebuild`. Either one alone is sufficient, but having both makes the pipeline visible and resilient.

## Usage

Drop-in replacement for `next/image`. Any image in the media directory gets blur-up automatically:

```tsx
// Fill mode (hero/background images)
<AppImage
  src="/media/hero.png"
  alt="Hero"
  fill
  className="object-cover"
  priority
  sizes="100vw"
/>

// Sized mode (inline images)
<AppImage
  src="/media/profile.png"
  alt="Profile photo"
  width={600}
  height={600}
  className="rounded-2xl object-cover"
/>
```

New images added to the media directory are picked up automatically on the next build.

## Adapting to your project

| What to change | Where |
|---|---|
| Image source directory | `MEDIA_DIR` in the script |
| Output JSON location | `OUTPUT_FILE` in the script |
| Key format (must match `src` prop) | `key` variable in the script loop |
| Blur intensity | `PLACEHOLDER_WIDTH` (smaller = more blur) and `.blur()` sigma |
| Transition duration | `500ms` values in the component CSS |
| Base path prefix | Add your `assetPath()` or base path helper to the `src` passed to `<Image>` |
