# Doclify Landing Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans for your assigned task. User approved execution through Orca Claude and Codex workers.

**Goal:** Replace Coming soon with the approved Doclify landing page.
**Architecture:** Static semantic HTML/CSS, locally served Geist fonts, and a separate decorative Three.js module.
**Tech Stack:** HTML, CSS, JavaScript modules, Geist, Three.js.
**Spec:** docs/superpowers/specs/2026-11-05-doclify-landing-design.md (approved by user).

## Global Constraints
Palette #FFFFFF #2274A5 #FFBF00 #E83F6F. Geist Serif display typography. GitHub actions link to https://github.com/shreyas-dhakal/doclify-harness. No Coming soon, fabricated claims, publishing, or framework migration. Preserve unrelated files.

## Review Focus
Mobile/zoom overflow; font and module loading on static hosting; keyboard navigation and contrast; reduced-motion and hidden-tab rendering; WebGL/module failure with usable fallback.

## Task 1: Page (Claude)
- [x] Replace index.html and create assets/site.css; copy local fonts and license into assets/fonts.
- [x] Use approved copy, header GitHub icon, responsive layout and accessible links.
- [x] Provide decorative #book-scene host with an HTML/CSS static book fallback. Load assets/book-scene.js as a module. Module controls .is-ready on host; only hide fallback under that state.
- [x] Verify semantics and static asset paths. Do not modify package files or book-scene.js.

## Task 2: Book (Codex)
- [x] Install pinned Three.js, vendor required ESM files/license into assets/vendor, create assets/book-scene.js.
- [x] Auto-mount on #book-scene; append canvas, set .is-ready after first render, remove state on failure. Do not edit page or site.css.
- [x] Implement open book with connecting threads, bounded pointer interaction, reduced motion, offscreen/hidden pause and WebGL fallback.
- [x] Verify syntax, local imports, and geometry/render budgets.

## Task 3: Integration and review (coordinator)
- [x] Serve over HTTP, inspect desktop/mobile/tablet, exercise links and fallback/reduced motion.
- [x] Run Impeccable detector once; fix material issues.
- [x] Obtain independent rendered review, document final design tokens, and report evidence.
