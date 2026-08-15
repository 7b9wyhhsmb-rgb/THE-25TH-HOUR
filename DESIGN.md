---
name: THE 25TH HOUR
description: An editable editorial fragrance storefront derived from the supplied Aesop reference.
colors:
  ink: "#252525"
  ink-soft: "#4a4844"
  paper: "#f1efe7"
  paper-deep: "#e5dfd4"
  paper-light: "#f7f5ef"
  forest-grey: "#4A564C"
  campaign-clay: "#b8845f"
  white: "#fffef8"
typography:
  display:
    fontFamily: "Suisse, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 4vw, 66px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Suisse, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(38px, 3.2vw, 54px)"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Suisse, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  quote:
    fontFamily: "Zapf Humanist, Georgia, serif"
    fontSize: "clamp(32px, 3.25vw, 52px)"
    fontWeight: 400
    lineHeight: 1.22
rounded:
  square: "0px"
  circular: "50%"
spacing:
  hairline: "1px"
  control: "16px"
  section: "120px"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "0 26px"
    height: "50px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0 26px"
    height: "52px"
---

# Design System: THE 25TH HOUR / 第二十五小时

## Overview

**Creative North Star: "The Fragrance Reading Room"**

An editorial catalogue built from full-bleed photography, compact Swiss typography, aligned product still life and long horizontal rhythms. Commerce and brand narrative occupy one continuous page without being broken into rounded beauty cards. The signature interaction is a three-panel story sequence in which the next fragrance chapter physically covers the previous one.

**Key Characteristics:**

- Full-width campaign photography with lower-third actions.
- Warm paper surfaces and charcoal text.
- Square, hairline controls with restrained state changes.
- Alternating editorial fields, product rails and sticky story panels.

## Colors

The palette is restrained: paper neutrals carry most of the surface, charcoal supplies typography and controls, and blue or clay owns an entire campaign field when color is needed.

**The Field Color Rule.** Accent colors own whole sections; they are not scattered as decorative highlights.

## Typography

**Display Font:** Suisse with Helvetica Neue and Arial fallback  
**Body Font:** Suisse with Helvetica Neue and Arial fallback  
**Editorial Quote Font:** Zapf Humanist with Georgia fallback

The sans family keeps navigation, product information and large headlines precise. The humanist face appears only for long-form quotation, never as a generic luxury heading.

### Hierarchy

- **Display** (400, fluid 40–66px, 1.04): Hero statements.
- **Headline** (400, fluid 38–54px, 1.1): Major section headings.
- **Title** (400, 20–28px): Products and journal cards.
- **Body** (400, 15–17px, 1.5–1.65): Descriptions with a maximum measure near 40–56 characters.
- **Navigation** (500, 13–14px): Utility and category links.

**The One Sans Voice Rule.** Interface and commerce use one sans family; typographic contrast comes from scale and spacing.

## Layout

The desktop layout uses fluid edge padding from 32px to 58px and a two-row 124px header. The hero fills the first viewport below the 54px notice. Editorial sections alternate 50/50 image-and-copy fields with full-width horizontal rails. Product cards reveal part of the next item. At 900px, navigation simplifies and two-column regions stack.

## Elevation & Depth

The system is flat by default. Photography, tonal fields and overlap establish depth. The only wide shadow belongs to incoming sticky panels and temporary overlays.

**The Flat-Until-Overlap Rule.** Static content uses no card shadow; depth appears only when one page layer must pass over another.

## Shapes

Controls, drawers, media and content fields use square corners. Circles are reserved for radio selection marks. Hairline borders describe state without enclosing every piece of content.

## Components

### Buttons

- Solid actions use charcoal with warm-white text and square corners.
- Outline actions use a 1px current-color border; hover swaps foreground and background.
- Arrow icons are authored inline SVGs and move only a few pixels on hover.

### Cards / Containers

- Product and category items do not have an outer card shell.
- Media fields use a tonal background and consistent bottom alignment.
- Journal items may use a 1px grid border but no radius or resting shadow.

### Inputs / Fields

- Search and subscription inputs keep a transparent background and one bottom rule.
- Focus remains visible through a current-color outline or strengthened rule.

### Navigation

- The initial header is transparent over the campaign image and becomes a fixed paper field after the hero.
- Mega navigation is full-width with text columns and one rectangular image.
- Search and cart use right-side drawers with a page scrim and Escape close.

### Guided Scent Finder

The editorial introduction, three-step scent finder and layering section follow normal document flow without covering one another. The finder keeps one question in a stable reading area, advances by explicit selection, and provides progress, back and restart controls.

## Do's and Don'ts

### Do:

- **Do** keep imagery full-width and crop it decisively.
- **Do** centralize editable content in `src/data/site.ts`.
- **Do** use section-scale color fields and long editorial pacing.
- **Do** retain visible keyboard focus and reduced-motion fallbacks.

### Don't:

- **Don't** introduce rounded beauty cards, glass panels or gradient text.
- **Don't** scatter accent colors across otherwise neutral sections.
- **Don't** use shadows on static product or editorial cards.
- **Don't** present demonstration prices or copy as verified commercial claims.
