# Doclify landing page

Replace the parchment Coming soon page with a basic, responsive landing page for documentation that humans and agents work on collaboratively.

## Direction

User-selected typography: Geist Serif for the headline and expressive display text. Use Geist Sans for small navigation and supporting copy to keep it legible.

A contemporary book spread: generous white space, large blue editorial type, amber action accents, and small pink annotation marks. Use the confirmed colors #FFFFFF, #2274A5, #FFBF00, and #E83F6F. An open book rendered with Three.js is the focal object; connected pages communicate shared knowledge. Keep the page short and readable, with the book complementing real HTML text.

Desktop composition: a quiet top navigation, oversized headline and compact supporting copy, and a three-quarter view of the open book with connected leaves. On mobile, stack text, action, and book in that order. Keep the closing statement short; do not add invented feature cards. Geist Serif Regular is the display face at its actual 400 weight, with Geist Sans for navigation and supporting copy. Blue on white is the text pairing; use white action surfaces with blue text and amber accents to preserve contrast without adding an unrequested fifth color. Use blue keyboard focus outlines.

## Content and behavior

- Header: Doclify wordmark and an accessible GitHub icon linking directly to https://github.com/shreyas-dhakal/doclify-harness.
- Headline: “Documentation for humans and agents, working together.”
- Supporting copy: “We’re building documentation that people and agents can work on together.”
- Primary action: “Explore on GitHub”, linking to the same repository.
- Short closing statement: “On the same page.”
- Remove all Coming soon copy and the scroll-to-reveal gate.
- Three.js: an open book, subtly separated pages, colored connecting lines, restrained pointer response. Respect reduced motion, pause when offscreen, and provide a static fallback when WebGL is unavailable.

## Approaches

1. Recommended: build directly in the existing static HTML/CSS site with a separate Three.js module. This keeps GitHub Pages deployment simple and makes the actual interactive result reviewable quickly.
2. Generate a visual mockup first, then reproduce it. Useful for choosing among substantially different layouts, but slower and less representative of the interactive book.

The user approved this direction and direct implementation on 2026-11-05, with Orca Claude and Codex sessions.

## Constraints and verification

No invented product features, customer claims, pricing, or statistics. No framework migration. Verify the GitHub links, mobile layout, keyboard focus, reduced motion, WebGL fallback, and rendered desktop/mobile presentation. Preserve unrelated existing files. Do not publish or push unless requested.

## Worker review incorporated

Two Claude sessions reviewed composition and copy; two Codex sessions reviewed technical feasibility and build risks. Ship Geist WOFF2 files and their license under assets/fonts. Ship a pinned browser-compatible Three.js module and its license under assets/vendor, including relative dependencies. Do not rely on node_modules being served by GitHub Pages.

Use a small orthographic book scene, curved page meshes, blue covers, and a few colored connections. Avoid per-frame geometry construction, model downloads, and postprocessing. Reserve the canvas dimensions; cap pixel ratio and buffer size. Render only when needed, suspend in hidden tabs/offscreen, and disable pointer motion for reduced-motion users. Keep a static fallback visible until the first successful frame and restore it after WebGL failure. Verify at 390, 768, and 1440 pixels, with keyboard, zoom, reduced motion, and unavailable WebGL.
