# HD media update · 2026-11-20

- 37 independent visuals are rerendered directly from the existing source PDF using the original crop boxes at 3x rendering scale, capped at 3600 px. The PDF and original page/crop files remain unchanged.
- `scripts/prepare-hd-visuals.py` builds `src/visual-assets.json` and local responsive WebP variants. Case-study HTML content and data remain unchanged.
- The responsive renderer selects an appropriate width; the detail dialog opens the largest file. Re-rendering preserves vector detail and avoids cropping a previously compressed page. Raster images already embedded at low resolution remain limited by their source; no generative detail restoration was applied.
- SU7 uses the previously supplied 1692×3492 workshop prototype as the basis of a code-composed cover. The SVG viewport isolates the car; original pixels are retained in a same-resolution WebP. Labels are existing project concepts.
- The new 1254×1254 portrait is encoded as lossless WebP. Decoded RGBA bytes were verified equal to the supplied PNG. Styling is CSS only: rounded frame, light reflection and subtle pointer tilt; the facial image is unchanged.
- All original files remain intact. New generated media is under `public/projects/details-hd`, `public/projects/covers`, and `public/images/qian-guangyao-portrait.webp`.
