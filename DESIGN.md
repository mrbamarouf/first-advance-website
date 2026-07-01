# Design

## Summary
First Advance is a premium Arabic-first Saudi corporate website. The approved direction uses dark forest green, warm white surfaces, restrained gold accents, Saudi architectural photography, and editorial corporate spacing.

## Color
The implementation uses OKLCH CSS tokens in `src/styles.css`.

- `--navy-deep`, `--navy`, and `--navy-soft` are preserved token names but represent calm dark forest green.
- `--canvas`, `--paper`, and `--stone` are warm white/off-white surfaces.
- `--accent-gold` is used sparingly for hierarchy, dividers, buttons, and metadata.
- Body text should stay readable and avoid low-contrast gray on tinted surfaces.

## Typography
Primary typography uses IBM Plex Sans Arabic with Inter fallback. Source Serif is used as an accent for numerals and selected editorial details. Arabic line-height should stay generous on dark sections.

## Layout
The site is a single Arabic landing page with fixed navigation, cinematic hero, service chapters, sector rail, process section, packages table, contact CTA, and footer. Polishing should adjust rhythm and responsiveness without changing the content model.

## Imagery
Approved imagery must be Saudi-only and non-portrait: Riyadh, Jeddah, KAFD, business districts, offices, boardrooms, towers, real estate, and infrastructure. No Dubai, Burj Khalifa, portraits, AI faces, or businessmen photos.

## Motion
Motion should remain restrained and performance-safe. Hover image scale and simple transitions are acceptable. Respect reduced-motion preferences.
