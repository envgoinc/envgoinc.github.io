

# ENVGO Homepage Rebuild

## Overview
Complete redesign of the homepage (`src/pages/Index.tsx`) plus updates to the Navbar, Footer, global styles, and Tailwind config to match the new brand direction. This is a significant visual overhaul — new fonts, new color palette, new layout, 8 distinct sections.

## What changes

### 1. Global styles & config
- **`src/index.css`** — Replace Google Fonts import with Manrope, Plus Jakarta Sans, and Inter. Replace all CSS custom properties with the new palette (`#0A0E1A` background, `#1ABCAA` teal accent, `#378ADD` electric blue, `#A0A8B8` light grey, etc.). Add utility classes for section transitions and teal glow effects.
- **`tailwind.config.ts`** — Update `fontFamily` to `heading: Manrope`, `body: Plus Jakarta Sans`, `sub: Inter`. Update color tokens to match new palette. Keep existing animation keyframes and add new ones (scroll indicator pulse, staggered fade-in).
- **`mem://design/brand-guidelines`** and **`mem://index.md`** — Update to reflect the new brand direction.

### 2. Navbar (`src/components/Navbar.tsx`)
- Dark background with transparency + backdrop blur; becomes fully opaque on scroll (add scroll listener).
- Left: ENVGO logo. Right: Technology · Defence · Transportation · Recreation · About · "Partner with us" (teal outlined button).
- Mobile hamburger collapse. Teal underline slide-in on hover for nav links.
- Remove News from main nav (or keep as secondary — prompt doesn't include it).

### 3. Footer (`src/components/Footer.tsx`)
- Complete rebuild: 3-column layout with thin vertical separators.
- Left: logo + italic tagline + copyright. Centre: site links. Right: contact info.
- Bottom bar: teal full-width line + Privacy Policy / Terms of Use.

### 4. Homepage (`src/pages/Index.tsx`) — 8 sections
All sections rebuilt from scratch with the exact content, typography, and layout specified:

- **Section 1 — Hero**: Full viewport, centred content, eyebrow + headline (68-72px Manrope) + subhead + 2 CTAs + scroll indicator.
- **Section 2 — The Moment**: Eyebrow + headline + cinematic image placeholder with teal horizon glow + 2-column text + large italic quote.
- **Section 3 — The Platform**: Capability architecture diagram with 6 primary nodes connected by teal lines + hydrofoil additive node with glow. Responsive: vertical stack on mobile.
- **Section 4 — Performance Envelope**: 5 stat cards in horizontal row, wrapping responsively.
- **Section 5 — NV1 Proof Point**: Full-bleed image placeholder with bottom overlay, stats bar with teal dividers, CTA link.
- **Section 6 — Applications**: 2×2 card grid with image placeholders, dark overlays, eyebrow labels. Defence card gets teal top border accent.
- **Section 7 — Credibility**: 2-column layout — left: stacked images with teal diamond connector; right: text about Aeryon Labs heritage + credibility bar.
- **Section 8 — Final CTA**: Teal-tinted dark background, headline + subhead + 2 buttons + market labels.

### 5. Animations
- Framer Motion for scroll-triggered animations (already installed): staggered fade-ups on headlines, sequential node reveals on platform diagram, stat card stagger.
- CSS hover effects: card lift (`translateY(-4px)`), teal glow pulse on CTA buttons, nav link underline slide.

### 6. Image placeholders
All images will be dark placeholder `div`s with descriptive labels (white text on dark gradient), matching the exact labels from the prompt. No stock photos.

## Files modified
| File | Action |
|------|--------|
| `src/index.css` | Rewrite — new fonts, new palette, new utilities |
| `tailwind.config.ts` | Update — fonts, colors, animations |
| `src/pages/Index.tsx` | Full rewrite — all 8 sections |
| `src/components/Navbar.tsx` | Rewrite — new design, scroll behavior, "Partner with us" button |
| `src/components/Footer.tsx` | Rewrite — 3-column layout with bottom bar |
| `mem://design/brand-guidelines` | Update with new palette |
| `mem://index.md` | Update core rules |

## What stays the same
- All other pages (Defence, Transportation, Recreation, Technology, About, News, AdminNews) remain unchanged — their styling will shift due to global CSS variable changes, but layouts are untouched in this pass.
- Router structure in `App.tsx` unchanged.
- All shadcn/ui components unchanged.

## Risk note
Changing the global CSS variables will affect the look of all existing pages. The new dark palette is similar in spirit but different in specifics. Existing pages may need minor touch-ups after this change.

