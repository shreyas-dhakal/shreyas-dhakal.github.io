---
name: Doclify
description: Shared pages for humans and agents.
colors:
  blue: '#2274A5'
  amber: '#FFBF00'
  pink: '#E83F6F'
  white: '#FFFFFF'
typography:
  display:
    fontFamily: '"Geist Serif", Georgia, serif'
    fontSize: clamp(64px, 8vw, 96px)
    fontWeight: 400
    lineHeight: 0.97
    letterSpacing: -.035em
  section:
    fontFamily: '"Geist Serif", Georgia, serif'
    fontSize: clamp(38px, 4.2vw, 60px)
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -.025em
  spread-heading:
    fontFamily: '"Geist Serif", Georgia, serif'
    fontSize: clamp(38px, 4.1vw, 58px)
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -.025em
  wordmark:
    fontFamily: '"Geist Serif", Georgia, serif'
    fontSize: 38px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -.03em
  body:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: normal
  lede:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: -.02em
  intro:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: normal
  action:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: normal
  strip:
    fontFamily: '"Geist Serif", Georgia, serif'
    fontSize: clamp(24px, 2.2vw, 31px)
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: normal
  idea-copy:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: normal
  spread-copy:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  spread-end:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: normal
  caption:
    fontFamily: '"Geist", system-ui, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: .015em
rounded:
  button: 5px
  navigation: 6px
  dot: 50%
spacing:
  gutter: clamp(22px, 5vw, 80px)
  hero-gap: 55px
  hero-copy-block: 36px
  action-gap: 28px
  nav-gap: 40px
  idea-block: 100px
  idea-gap: 70px
  invitation-block: 105px
components:
  button-white:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue}'
    typography: '{typography.action}'
    rounded: '{rounded.button}'
    padding: 15px 23px
  button-white-hover:
    backgroundColor: '{colors.blue}'
    textColor: '{colors.white}'
  button-blue:
    backgroundColor: '{colors.blue}'
    textColor: '{colors.white}'
    typography: '{typography.action}'
    rounded: '{rounded.button}'
    padding: 15px 23px
  button-blue-hover:
    backgroundColor: '{colors.white}'
    textColor: '{colors.blue}'
  navigation:
    backgroundColor: '{colors.blue}'
    textColor: '{colors.white}'
    height: 112px
  github-link:
    textColor: '{colors.white}'
    rounded: '{rounded.navigation}'
    padding: 12px 18px
  chapter-strip:
    backgroundColor: '{colors.pink}'
    textColor: '{colors.white}'
    typography: '{typography.strip}'
    padding: 25px clamp(22px, 5vw, 80px)
  spread-human:
    backgroundColor: '{colors.pink}'
    textColor: '{colors.white}'
  spread-agent:
    backgroundColor: '{colors.amber}'
    textColor: '{colors.blue}'
  book:
    width: 100%
    height: clamp(300px, 32vw, 450px)
  footer:
    backgroundColor: '{colors.blue}'
    textColor: '{colors.white}'
---

# Design System: Doclify

## Overview

**Creative North Star: "Shared pages"**

A bold contemporary editorial spread uses substantial fields of blue, pink, and amber to make shared documentation visible. Regular Geist Serif headlines give the page its voice; white space separates the large statements rather than dominating the opening.

The blue opening presents a white and amber headline above explanatory copy, a white GitHub action, and an interactive white book. Color then carries the visitor through a pink strip, a white idea statement, pink human and amber agent spreads, a white invitation, and a blue footer.

**Key Characteristics:**
- Substantial color coverage with a blue opening and footer.
- Large regular serif statements paired with clear Geist sans text.
- Human and agent perspectives expressed as adjacent colored spreads on desktop.
- A transparent interactive book backed by an inline SVG fallback.

This replaces the previous design documentation. Sources are the current `index.html`, `assets/site.css`, and `assets/book-scene.js`, interpreted against `docs/superpowers/specs/2026-11-05-doclify-bold-redesign.md`. The direction contract owns the landing-page sequence; the tokens below capture its actual implementation. No synthetic tonal ramps or unimplemented primitives are included.

## Colors

### Primary
Blue owns the opening and footer, supplies ink on white and amber, and fills the invitation CTA. White supplies text on blue and the opening CTA surface.

### Secondary
Amber emphasizes “Shared pages.”, fills the agent spread, and marks the wordmark period and human book caption dot.

### Tertiary
Pink fills the typographic strip and human spread, highlights the second lines of the idea and invitation headings, and marks the agent caption dot. Selection uses pink with white text.

### Neutral
White supplies the idea and invitation surfaces, the book paper, and reverse text. Header navigation uses a translucent white border (`rgb(255 255 255 / .5)`); the mobile footer divider uses white at (.35) opacity. Neither is a separate brand color. The scene's hemisphere lighting produces shaded paper without adding a UI palette token.

**The Four-Color Rule.** Keep the four user-selected colors; translucent white borders and 3D lighting are treatments, not additional brand tokens.

**The Large Accent Text Rule.** Use pink/white and blue/amber text pairings only at large-text sizes: at least 24px regular or 20px bold.

## Typography

The locally hosted `GeistSerif-Regular.woff2` is registered at (400); `Geist-Variable.woff2` is registered as Geist at (100–900). Both use `font-display:swap`; the serif file is preloaded. The exact stacks and default type roles are normative in the frontmatter.

The hero headline uses tight leading and tracking, with a desktop maximum (96px). Its two lines are explicit HTML breaks. At `max-width:700px`, its size becomes `clamp(54px,11vw,76px)`. The wordmark becomes (32px). The lede is (23px) at the tablet breakpoint and (25px) on mobile, while the intro remains (17px).

Idea and invitation headings share the section role; on mobile the invitation heading is (40px). Spread headings become (44px) on mobile. Spread copy remains (24px regular) and the closing spread lines remain (20px, 700) at every breakpoint, preserving large-text treatment on the colored fields. Idea supporting copy drops from (20px) to (18px) on mobile and is limited to (41ch).

Navigation and footer links use (15px) sans text. Book captions use (13px), then (11px) at the tablet breakpoint and (12px) on mobile; these stay white on blue. Footer statement text uses (24px) regular serif, becoming (20px) on mobile.

**The Regular Serif Rule.** Use Geist Serif Regular at its shipped 400 weight for display, section headings, and the wordmark.

## Layout

The shared wrapper has centered maximum width (1440px) and the fluid gutter token. Full-width color surfaces extend beyond this wrapper. The desktop header height is (112px). The hero starts with (35px) top padding and ends with (50px) bottom padding.

The headline spans above a lower grid of `1fr 1.65fr`, with gap (55px) and top margin (4px). Copy is limited to (390px) and padded vertically (36px). The book stage is lifted by a top margin (-85px); its caption is limited to (440px), and its reserved canvas height is `clamp(300px,32vw,450px)`. This creates the overlapping editorial composition without putting text in the canvas.

The white idea section uses `1.25fr 1fr` columns, gap (70px), and block padding (100px). The human and agent spreads use equal columns; each inner area has maximum width (720px) and padding `62px var(--gutter) 48px`, aligned toward the shared center. The white invitation is a flex row with gap (35px), block padding (105px), and an action that does not shrink. The footer is a flex row with minimum height (135px) and gap (24px).

### Responsive rules

- At `min-width:1600px`, the lower hero grid gap becomes (90px).
- From `min-width:1051px` through `max-width:1200px`, the book stage top margin is (0), keeping its caption clear of the headline.
- At `max-width:1050px`, the header becomes (92px), hero top padding (24px), and lower hero grid `1fr 1.3fr` with gap (24px). The book stage top margin becomes (0). The strip removes its final phrase and last star; the idea section uses gap (35px) and block padding (72px). The spreads stack into one column with full-width inner content, no maximum width, and zero inline margins; their block padding is (48px). Invitation block padding becomes (76px).
- At `max-width:700px`, the header becomes (88px), the “The idea” link is hidden, and navigation gap is (20px). The lower hero grid stacks in reading order: copy/action, then book. It uses gap (12px), top margin (10px), and copy width limit (440px). Hero padding is (30px) above and (35px) below. The book stage uses margins `0 -10px`, a (300px) canvas height, and a (300px) caption width limit.
- On mobile, only the strip's first phrase remains; it is centered and all strip SVG stars are hidden. The idea section stacks with gap (25px) and block padding (65px). Spread inner padding becomes `42px var(--gutter)`. The invitation stacks with block padding (65px) and a (28px) action margin above. The footer wraps with block padding (32px); its GitHub link occupies a full-width final row.

## Elevation & Depth

UI surfaces are flat color fields with no CSS shadows. The book supplies depth through curved white leaves, a blue cover, colored connecting arcs, and orthographic lighting. Leaves converge at the center gutter. The canvas clears transparently so the surrounding blue surface remains continuous. Do not turn the book into a separate raised card.

## Shapes

Actions have lightly rounded rectangular corners using the button radius (5px), while the header GitHub link uses the navigation radius (6px). The only small circles are caption markers and book nodes. CTA arrows are inline (24px × 24px) SVGs with stroke width (1.6). Chapter icons are (50px × 50px), outlined in the current text color at stroke width (1.8). The spread closing line has a (1px) current-color top rule and (20px) padding above.

## Components

### Actions

The white opening CTA reads “Explore on GitHub”; the blue invitation CTA reads “Meet Doclify”. Both link to `https://github.com/shreyas-dhakal/doclify-harness`. Their default minimum height is (58px), becoming (56px) on mobile. Shared padding, text style, and radius are in the frontmatter. The default border is (1px transparent).

Hover inverts each action's surface/text pairing and exposes a matching border: white action to blue with white ink/border; blue action to white with blue ink/border. Background and color transition over (.2s) using the CSS default ease; the arrow translates (4px) over (.2s). No separate active or disabled variant is defined. Keyboard focus uses the global (3px) outline at (7px) offset, with explicit white outline for the opening action and blue outline for the invitation action, chosen for their surrounding surfaces.

### Navigation and footer

The lowercase serif wordmark has an amber period. Header navigation includes “The idea” anchor and a GitHub icon/text link with an accessible name. The GitHub link has minimum height (48px), default padding `12px 18px`, and a translucent white border; hover fills white and uses blue text. Mobile padding is `10px 12px`. The idea link underlines on hover. Footer repeats the wordmark, “On the same page.”, and the GitHub destination.

### Chapter strip and perspective spreads

The strip is a decorative, `aria-hidden` typographic interlude with outlined star separators. Its responsive hiding rules affect decorative repetition, not essential content. The human and agent sections are semantic articles with h2 headings, large sans copy, outlined icons, and bold final statements. They express perspective and context without asserting shipped product capabilities. Their adjacent color fields become full-width stacked chapters at the tablet breakpoint.

### Book integration

Visible HTML captions label human perspective and agent potential above the scene, followed by the shared-ground note. The host and canvas are `aria-hidden`; the static inline SVG is the non-WebGL visual fallback. The fallback is hidden only after a successful render and restored after failure or context loss. Canvas and fallback absolutely fill a reserved host, so initialization does not change the layout.

Geometry is constructed once. Fine hover pointers produce bounded rotation with interpolation; reduced-motion preference resets to the base orientation and suppresses pointer response. Rendering is demand-driven and stops offscreen or when the document is hidden. Pixel ratio is capped at (1.5), with a drawing-buffer budget of (1,000,000 pixels). The scene uses a transparent renderer, sRGB output, and no tone mapping. These lifecycle protections are implementation constraints, not new design primitives.

### Accessibility and motion

The skip link becomes visible on focus and targets the main landmark. Links use visible focus outlines; icon links have accessible names and decorative SVGs are hidden from assistive technology. All essential copy and actions remain HTML and work without the scene. The accent text size rule above is part of the direction contract's contrast strategy; this documentation pass does not claim a fresh browser accessibility audit.

Reduced motion disables CSS transitions and replaces smooth scrolling with automatic scrolling, as well as disabling the book's pointer response. The root easing custom property remains declared, but the current CTA transitions use CSS default easing rather than referencing it; do not describe it as an active animation standard.

**The HTML First Rule.** Keep content and actions in semantic HTML; the decorative book must not gate understanding or navigation.

## Do's and Don'ts

### Do:
- Do preserve the exact palette and substantial blue, pink, and amber surfaces.
- Do keep the serif display regular and the accent-color text at large sizes.
- Do preserve responsive stacking, visible focus, and reduced-motion behavior.
- Do retain the SVG fallback until the first successful WebGL frame.

### Don't:
- Don't restore the sparse white opening or treat color as small accents only.
- Don't add invented features, pricing, customer numbers, or product-ready claims.
- Don't replace the rectangular arrow actions with pill buttons or trailing dots.
- Don't require WebGL or pointer interaction to read the page or reach GitHub.
