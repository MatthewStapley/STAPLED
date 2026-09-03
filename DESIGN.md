---
name: Stapled.
description: Web design and build studio for Southampton small businesses.
colors:
  primary: "#c8f560"
  primary-ink: "#1a2405"
  secondary: "#111111"
  neutral-bg: "#f5f3ee"
  neutral-white: "#ffffff"
  neutral-border: "#d8d5ce"
  neutral-muted: "#6e6b65"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, Manrope, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "24px"
  full: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  container: "1280px"
  section: "clamp(4rem, 9vw, 7.5rem)"
  section-tight: "clamp(2.5rem, 5vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "0.95rem 1.75rem"
  button-primary-hover:
    backgroundColor: "#000000"
  button-lime:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.full}"
    padding: "0.95rem 1.75rem"
  button-lime-hover:
    backgroundColor: "{colors.primary}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: "0.95rem 1.75rem"
  card:
    backgroundColor: "{colors.neutral-white}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  input:
    backgroundColor: "{colors.neutral-white}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.9rem"
---

# Design System: Stapled.

## Overview

**Creative North Star: "The Staple Mark"**

The staple is both the literal brand mark and the governing metaphor: a small, precise, structural fastener that joins two things together with intention — here, a good local business and a website that actually represents it. Nothing about the system is loud by default. It sits on warm paper (#f5f3ee) with near-black ink type (#111111), flat surfaces, and thin hairline borders — honest and unpolished-corporate rather than glossy-agency. Signal lime (#c8f560) is the one bright, deliberate mark: it appears as a dot, an underline, a single CTA, a numeral badge — never as a wash of color across a surface. The voice matching this system is warm, direct and unpretentious, written in Matt's own first person, never a corporate "we".

The system deliberately keeps a distance from three things: the generic template/stock-agency look (default corporate blue, stock-photo hero banners, cookie-cutter DIY-builder polish) that Stapled. is explicitly positioned against; anything overly playful or whimsical (mascots, novelty display fonts, cartoonish illustration) that would undercut credibility with tradespeople and professional local clients; and dense, dashboard-like enterprise UI, even in utility sections like the enquiry form.

**Key Characteristics:**
- A single accent color (lime) used as punctuation, never as a fill
- Flat, hairline-bordered surfaces at rest; soft shadow reserved for floating device mockups and hover feedback
- Pill radius (999px) for anything tappable, soft 24px rectangles for content containers, no sharp corners
- A recurring "eyebrow" label (uppercase + lime dot) introduces every section
- Full-bleed light/dark section banding down the page, not a site-wide dark mode

## Colors

A warm, paper-and-ink palette with a single, sparingly-used signal accent.

### Primary
- **Signal Lime** (`#c8f560`): the one accent color in the system. Used for the wordmark's trailing dot, primary CTA buttons, the eyebrow-label dot, nav link underlines, the hero "staple" illustration, and small filled numeral badges. Never used as a large background fill.
- **Deep Lime Ink** (`#1a2405`): the text color placed on top of lime fills (lime buttons, lime numeral badges) so the accent stays legible and doesn't need a separate contrast workaround.

### Secondary
- **Near-Black Ink** (`#111111`): primary text color everywhere, and the background of every `[data-dark]` section band (pricing, the enquiry form, final CTA, footer) and the primary (non-lime) button.

### Neutral
- **Warm Paper** (`#f5f3ee`): the base page background and the text color used on dark ink sections.
- **Card White** (`#ffffff`): surface color for cards, mockup chrome, and form fields — a slightly cooler white than the paper background, used to lift content off the page.
- **Soft Warm Grey** (`#d8d5ce`): hairline borders and dividers on light surfaces.
- **Warm Stone** (`#6e6b65`): muted/secondary text (subheads, captions, disclaimers).

### Named Rules
**The One Staple Rule.** Lime marks a single deliberate point per view — a dot, one CTA, one underline sweep, one numeral badge — never a background wash or large fill. If a section needs more visual weight, reach for the ink/paper contrast, not more lime.

## Typography

**Display Font:** Bricolage Grotesque (variable, weight 400–800, optical size 12–96), falling back to Manrope, then system-ui
**Body Font:** Inter (weights 400–700), falling back to system-ui, -apple-system

**Character:** A punchy, slightly quirky grotesque for anything that needs presence (headings, numerals, the wordmark) paired with a clean, neutral workhorse for everything read at length or interacted with (body copy, nav, buttons, form labels).

### Hierarchy
- **Display** (600, `clamp(2.4rem, 5.4vw, 4.4rem)`, line-height 1.05, letter-spacing -0.02em): the single hero H1 only.
- **Headline** (600, `clamp(2rem, 4vw, 2.75rem)`, up to `3rem` on the Work section, line-height 1.05): every section H2.
- **Title** (600, 1.15rem–2.1rem depending on context, line-height 1.05): card and subsection H3s (work card titles, feature project title, service/process item titles).
- **Body** (400, 1rem base / 1.1–1.125rem for section intro subheads, line-height 1.55, Inter): paragraph copy, capped around 42–52ch for readability.
- **Label** (600, 0.8125rem, letter-spacing 0.08em, uppercase, Inter): the eyebrow tag preceding every section heading, always paired with a small lime square dot.

### Named Rules
**The Display/Body Split Rule.** Bricolage Grotesque is reserved for headings, large numerals, and the wordmark. Inter handles everything else — nav, buttons, labels, body copy. The two are never used interchangeably.

## Layout

Single-column and mobile-first, opening into 2–3 column grids at the 720–960px breakpoints. Content is capped at a 1280px container with a fluid gutter (`clamp(1.25rem, 4vw, 3rem)`). Section rhythm is generous — `clamp(4rem, 9vw, 7.5rem)` vertical padding on desktop, tightening to `clamp(3rem, 12vw, 4.5rem)` on mobile — with a `section--tight` variant (`clamp(2.5rem, 5vw, 4rem)`) for CTA-adjacent sections that shouldn't breathe as much.

Full-bleed `[data-dark]` bands (ink background, paper text) alternate with the default paper sections down the page — Pricing, the enquiry form, Final CTA, and the Footer are dark; everything else is paper. This banding is a deliberate rhythm device, not incidental theming.

## Elevation & Depth

Mostly flat. Surfaces sit at rest on paper or white with a 1px hairline border and no ambient shadow. Soft, large "product-shot" shadows are reserved specifically for things presented as floating proof or momentary feedback — never as generic card styling at rest.

### Shadow Vocabulary
- **Mockup float (desktop)** (`box-shadow: 0 40px 80px -30px rgb(17 17 17 / 0.25)`): the browser-window portfolio mockups.
- **Mockup float (mobile)** (`box-shadow: 0 30px 60px -25px rgb(17 17 17 / 0.4)`): the phone-frame portfolio mockups.
- **Card hover lift** (`box-shadow: 0 30px 50px -30px rgb(17 17 17 / 0.25)`): work/portfolio cards on hover, paired with a `-4px` translateY lift.
- **Primary button hover** (`box-shadow: 0 10px 30px -12px rgb(17 17 17 / 0.45)`): ink buttons on hover.
- **Lime button hover** (`box-shadow: 0 10px 30px -10px rgb(200 245 96 / 0.55)`): lime buttons on hover — a tinted glow rather than a neutral shadow.

### Named Rules
**The Floating-Proof Rule.** Shadow appears only on things literally presented as floating above the page (the device mockups) or as a direct response to interaction (hover, press). A resting card, section, or form panel never carries a shadow — a hairline border is enough.

## Shapes

Two radius families, no sharp corners anywhere. **Pill / full-round** (`999px`) marks anything actionable or tappable: every button, the nav's lime CTA, the browser-mockup URL chip, form radio chips, and the pricing "factors" tags. **Soft large rectangles** (`24px`, `--radius-lg`) contain content: work cards, the mockup frames, the enquiry-form panel. A smaller radius (`8px`, `--radius-sm`) is reserved for text inputs and the skip-link. Borders are consistently thin (1px) warm-grey hairlines on light surfaces, and translucent cream-on-ink hairlines on dark surfaces — the border does the separating work that a shadow would do in a heavier system.

## Components

### Buttons
- **Shape:** pill, always (`border-radius: 999px`).
- **Primary:** ink background, paper text, `0.95rem 1.75rem` padding. Hover darkens to pure black and adds the primary hover shadow; every button lifts `-2px` on hover and resets to `0` on press.
- **Lime (signature CTA):** lime background, deep-lime-ink text. This is the highest-commitment action on the page — every primary CTA ("Request a free homepage preview", "Get a free quote") uses it. Hover adds the tinted lime glow shadow, never a background-color change.
- **Outline:** transparent background, hairline border, ink text — the secondary action next to a lime or primary button. Hover darkens the border to ink.
- **Ghost-light:** the outline variant's dark-section counterpart — transparent with a translucent cream border, for use only inside `[data-dark]` sections.
- **Small (`btn--sm`):** reduced padding/font-size, used in the nav bar CTA only.

### Link-arrow
A lower-commitment secondary link style: text with a hairline underline and a trailing arrow icon. Hover darkens the underline to ink and widens the gap before the arrow, so the arrow visibly "reaches" forward.

### Chips / Tags
Pill, hairline-bordered, unfilled at rest — used for the pricing "factors" list and the form's radio-style contact-method picker. Same rounded-full + hairline language as buttons, but never filled, which keeps them legible as informational rather than actionable.

### Cards / Containers
- **Corner style:** 24px radius (`--radius-lg`).
- **Background:** white, on the paper page background, so cards read as lifted content.
- **Border:** 1px hairline, no shadow at rest (see Elevation & Depth).
- **Hover:** `-4px` translateY lift, the card-hover shadow, and a subtle `1.015×` scale on the inner screenshot — a "product catalog" feel that invites a closer look.
- **Internal padding:** `1.5rem`–`3rem` depending on content density.

### Inputs / Fields
White background, hairline border, `8px` radius, `0.75rem 0.9rem` padding. Labels are small (`0.85rem`), bold, and sit above the field rather than inline or floating. Focus state is a plain 2px ink outline with 1px offset — no glow, no color shift, consistent with the system's flat-by-default elevation stance.

### Navigation
Sticky header, fully transparent at the top of the page. Once scrolled (`[data-scrolled]`), it gains a blurred glass background, a hairline bottom border, and a soft shadow. Nav links get a lime underline that sweeps in from the left on hover/focus (`scaleX` transform, not a color change). Below 860px, links and the desktop CTA disappear behind a hamburger toggle that opens a full-screen, ink-on-paper slide-down panel with oversized display-font links.

### Wordmark (signature component)
A small stapler-bracket SVG icon paired with "Stapled" set in the display font. The trailing full stop always renders in signal lime — stated in the source as "the one fixed rule of the brand mark," and it should be treated as an absolute invariant across every placement, light or dark background.

### Portfolio mockups (signature component)
Faux device chrome built entirely from HTML/CSS, not screenshots of real browser chrome: a browser window with three traffic-light dots and a pill-shaped URL bar (lock icon + the project's real-looking URL), and a phone frame with an ink bezel and notch at a 9:19.5 aspect ratio. Both float above the page in the mockup shadow (see Elevation & Depth) and display a real client or concept screenshot when one exists. When no screenshot file exists yet, a graceful, on-brand text fallback ("Screenshot coming soon") renders in its place instead of a broken image — this fallback behavior is a deliberate, durable pattern, not a placeholder to design away.

### Numbering devices
Two distinct numbering styles for two different densities: the Services list uses a small filled circular badge (deep-lime-ink digits on a lime disc) for a compact repeating list; the Process steps use a large ghost/outline display-font numeral in border-grey for a spaced-out 4-step sequence. Don't mix the two within one list.

## Do's and Don'ts

### Do:
- **Do** keep lime as a single deliberate mark per view — a dot, an underline, one CTA, a numeral badge — never a large fill or background wash (The One Staple Rule).
- **Do** pair every section heading with an eyebrow label (uppercase, small lime-dot prefix) — the consistent section-intro device used across the entire page.
- **Do** use pill radius (999px) for anything actionable or tappable, and 24px soft rectangles for content containers; never introduce a sharp 0px corner.
- **Do** reserve soft box-shadows for floating device mockups and interactive hover/press states; keep resting surfaces flat with a hairline border instead.
- **Do** keep the wordmark's trailing dot lime in every placement, on light or dark backgrounds.
- **Do** write copy in first person, founder-voiced ("I", "Matt"), matching the warm, direct, unpretentious tone — never a corporate "we".
- **Do** show the styled text fallback (never a broken image or empty box) whenever a portfolio screenshot file doesn't exist yet.

### Don't:
- **Don't** reach for a generic template/stock-agency look — no default corporate blue, no stock-photo hero banners, no cookie-cutter DIY-website-builder polish. This is the site's whole pitch against "look-the-same" competitors.
- **Don't** add whimsical or cartoonish elements — mascots, novelty display fonts, playful illustration — anywhere in the system; credibility with tradespeople and professional clients depends on staying grounded.
- **Don't** add dashboard-like density or enterprise-software chrome anywhere, including in utility sections like the enquiry form — keep the pacing spacious and marketing-page-like throughout.
- **Don't** add an ad hoc `[data-dark]` section outside Pricing, the enquiry form, Final CTA, and the Footer without a real reason — the light/dark banding is a deliberate page-level rhythm, not a per-section styling choice.
- **Don't** fill a lime numeral badge, chip, or tag with anything other than deep-lime-ink text — it's the one pairing tuned for contrast on the accent.
