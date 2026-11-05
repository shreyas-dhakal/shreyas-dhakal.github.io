---
name: Doclify
description: Documentation for humans and agents, working together.
colors:
  blue: '#2274A5'
  amber: '#FFBF00'
  pink: '#E83F6F'
  white: '#FFFFFF'
typography:
  display:
    fontFamily: '"Geist Serif", Georgia, "Times New Roman", serif'
    fontSize: clamp(2.5rem, 5.2vw, 4.5rem)
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -.025em
  body:
    fontFamily: '"Geist", system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: normal
  lede:
    fontFamily: '"Geist", system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: clamp(1.125rem, 1.4vw, 1.25rem)
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: normal
  wordmark:
    fontFamily: '"Geist Serif", Georgia, "Times New Roman", serif'
    fontSize: 1.375rem
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -.01em
  action:
    fontFamily: '"Geist", system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: 1.0625rem
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: normal
  closing:
    fontFamily: '"Geist Serif", Georgia, "Times New Roman", serif'
    fontSize: clamp(1.75rem, 3.4vw, 2.75rem)
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -.02em
  footer:
    fontFamily: '"Geist", system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: .875rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: normal
rounded:
  pill: 999px
  focus: 4px
  skip: 6px
  dot: 50%
spacing:
  gutter: clamp(16px, 5vw, 64px)
  hero-gap: clamp(24px, 4vw, 56px)
  hero-block: clamp(32px, 6vw, 80px)
  headline-after: clamp(20px, 2.4vw, 32px)
  copy-after: clamp(28px, 3vw, 40px)
  closing-block: clamp(56px, 9vw, 128px)
  action-gap: 12px
components:
  button-primary:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue}'
    typography: '{typography.action}'
    rounded: '{rounded.pill}'
    padding: 0 24px
  button-primary-hover:
    backgroundColor: rgb(34 116 165 / .08)
  navigation:
    textColor: '{colors.blue}'
    height: 72px
  annotation:
    textColor: '{colors.pink}'
  closing:
    textColor: '{colors.blue}'
    typography: '{typography.closing}'
  skip-link:
    backgroundColor: '{colors.blue}'
    textColor: '{colors.white}'
    rounded: '{rounded.skip}'
    padding: 8px 14px
---

# Design System: Doclify

## Overview

**Creative North Star: "A contemporary book spread"**

A contemporary book spread pairs generous white space with blue editorial type, amber action accents, and small pink annotation marks. The open book and connected leaves give the documentation theme a visible form.

Regular serif display text carries the expressive voice; variable sans supporting text keeps navigation and explanation legible. The interface remains quiet around the book, with essential content and actions in semantic HTML.

**Key Characteristics:**
- Generous white space and blue editorial type.
- Regular Geist Serif display with Geist sans supporting text.
- Amber action details and pink annotations.
- A decorative open book with a static SVG fallback.

Extracted from `index.html` and `assets/site.css`, with canvas behavior checked in `assets/book-scene.js`. Product constraints come from `PRODUCT.md`; the approved landing composition is recorded in `docs/superpowers/specs/2026-11-05-doclify-landing-design.md`. These documents capture implementation, not a new visual direction.

## Colors

### Primary
Blue is the ink for text, outlines, links, page strokes, and book covers.

### Secondary
Amber marks the CTA dot, selection background, book edges, ribbon, and connections.

### Tertiary
Pink supplies the headline annotation and selected book nodes and connections.

### Neutral
White is the page, CTA surface, and paper. The blue wash (`rgb(34 116 165 / .08)`) is the existing translucent blue treatment for hover and the footer divider. It is not a fifth brand color. Lighting shades on the 3D paper are rendering effects rather than interface tokens.

**The Four-Color Rule.** Use the four brand colors in the frontmatter; blue opacity washes are derived treatments, not additional brand colors.

## Typography

Display, wordmark, and closing text use the locally shipped `assets/fonts/GeistSerif-Regular.woff2`. Supporting text uses `assets/fonts/Geist-Variable.woff2`, registered as Geist with weight range (100–900). Both use `font-display: swap`; the serif file is preloaded. Exact stacks and default sizes are in the frontmatter.

The headline is balanced with tight leading and tracking. The supporting paragraph is limited to (34ch) and uses pretty wrapping; the closing line is balanced and limited to (22ch). The CTA uses sans semibold (600); body text stays regular (400).

At the tablet breakpoint, the headline changes to `clamp(2.5rem, 6vw, 5.25rem)`. At the mobile breakpoint it is (2.5rem), with line-height (1.05). The annotated phrase may wrap on mobile.

**The Regular Display Rule.** Use the shipped Geist Serif Regular at its actual 400 weight; do not synthesize a heavier display face.

## Layout

The shared header, hero, closing section, and footer have full width, a centered maximum width (1200px), and the fluid gutter token. The header is (72px) high; the footer has minimum height (64px). The body uses a column flex layout with minimum height (100svh), and main fills remaining space.

For this landing page, the desktop editorial hero is a vertically centered grid with `minmax(0,7fr) minmax(0,5fr)` columns. The copy precedes the book. Fluid gap and block padding come from the frontmatter; minimum hero height is `min(100svh - 72px, 820px)` as implemented by `min(calc(100svh - 72px),820px)`.

At `max-width:1023px`, the hero stacks into one column with no minimum height. At `max-width:639px`, the smaller headline and wrapping annotation apply. Keep these inclusive max-width breakpoints; they are not min-width thresholds.

On desktop, the book reserves a (4/3) aspect ratio and extends one gutter to the right with `width:calc(100% + var(--gutter))` and a negative right margin. Below the tablet breakpoint it returns to full column width with height `clamp(300px,56svh,560px)`; below the mobile breakpoint height becomes `clamp(260px,44svh,400px)`. The canvas and fallback fill this reserved host absolutely, preventing layout movement on initialization.

## Elevation & Depth

The interface is flat; depth belongs to the curved book leaves and connected threads. The fallback lifted leaf uses `drop-shadow(0 10px 14px rgb(34 116 165 / .16))`. There are no elevated UI cards. The amber focus halo is a keyboard-state cue rather than a surface shadow.

## Shapes

The CTA and GitHub icon target are pill/circle forms using the pill radius token. The CTA dot is circular (8px). The CTA outline is a blue (1px) stroke. The headline annotation is a pink curved stroke (4px) with rounded ends; it extends slightly beyond the text. The closing rule is blue (80px × 2px). The book uses curved white pages and a blue cover, with leaf geometry meeting at the center gutter; mesh dimensions are implementation details rather than reusable design tokens.

## Components

### Primary action

“Explore on GitHub” is a real anchor to `https://github.com/shreyas-dhakal/doclify-harness`. Use the white outlined surface, blue ink, and amber trailing dot. Minimum height is (52px), horizontal padding (24px), and dot gap (12px). Hover applies the blue wash through a background-color transition (.2s) using `cubic-bezier(.16,1,.3,1)`. The implementation has no separate active or disabled treatment.

### Navigation and footer

The serif Doclify wordmark links home. The GitHub icon is an inline SVG inside a (44px × 44px) target with accessible name “Doclify on GitHub”; hover uses the blue wash. The navigation remains a simple wordmark/icon row on mobile. Footer text uses the footer token; its GitHub link has vertical padding (12px) and shares the repository destination.

### Annotation and closing statement

The annotation SVG is decorative and cannot intercept pointer events. Its draw animation scales horizontally over (1.1s), after a (.35s) delay, only under `prefers-reduced-motion:no-preference`. “On the same page.” is separated by the short blue rule and generous block spacing, not a card.

### Book canvas integration

A transparent Three.js canvas overlays the inline SVG book. The fallback stays visible until the first successful frame and returns after WebGL failure or context loss. The host and canvas are `aria-hidden`; this illustration is not an interaction required to understand or use the page. Keep the open spread, white curved leaves, blue cover and ink, and colored connections visually integrated with the white page rather than adding a separate panel.

The scene constructs geometry once and renders on demand. Fine hover pointers produce a restrained rotation; reduced motion disables that response and restores the base orientation. Rendering stops offscreen and while the document is hidden. Pixel ratio is capped at (1.5) and the drawing buffer budget at (1,000,000 pixels). These are runtime safeguards, not new visual tokens. Center-gutter mesh refinements do not change the documented palette or layout.

### Keyboard and accessibility

The skip link moves into view on focus and targets the main landmark. Global visible focus uses a blue (2px) outline offset (3px), an amber halo `0 0 0 6px var(--amber)`, and the focus radius token. Preserve semantic heading order, named icon links, decorative SVG hiding, and text-first reading order. Blue on white carries readable text; amber and pink remain accents. The page remains available with JavaScript or WebGL unavailable. This document records implemented accessibility behavior; it does not claim a completed browser or assistive-technology audit.

**The HTML First Rule.** Keep the headline, explanation, and GitHub action readable and usable without the canvas or JavaScript.

## Do's and Don'ts

### Do:
- Do preserve the four brand colors and the regular serif display face.
- Do keep text and actions in HTML with visible keyboard focus.
- Do reserve space for the book and retain its static fallback.
- Do honor reduced motion and suspend rendering offscreen or in hidden tabs.

### Don't:
- Don't add unverified product features, statistics, or customer claims.
- Don't turn the primary CTA into an amber-filled button.
- Don't use pink or amber for supporting body text.
- Don't gate the page content behind a scroll reveal or WebGL initialization.
