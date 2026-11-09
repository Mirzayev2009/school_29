---
name: 29-maktab
description: A warm, photographic Uzbek school prospectus.
colors:
  paper: "#f5f3eb"
  paper-deep: "#eae9df"
  white: "#fcfbf7"
  forest: "#193e2e"
  forest-deep: "#123323"
  ink: "#233d2e"
  muted: "#3f5042"
  on-green: "#f5f3eb"
  on-green-muted: "#c5d3c4"
  straw: "#dec790"
  rule: "#cdd2c6"
  green-rule: "#52705c"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(66px, 6.65vw, 96px)"
    fontWeight: 400
    lineHeight: 0.99
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(40px, 4.4vw, 64px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  control:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
  link:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  tab:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 400
rounded:
  control: "4px"
spacing:
  gutter: "clamp(24px, 5.5vw, 80px)"
  section: "clamp(80px, 8vw, 128px)"
  compact: "12px"
  small: "16px"
  medium: "24px"
  large: "32px"
  wide: "40px"
  divider: "48px"
  heading: "56px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-green}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
  button-small:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-green}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.forest}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-light-hover:
    backgroundColor: "{colors.white}"
  text-link:
    typography: "{typography.link}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  learning-tab:
    textColor: "{colors.on-green-muted}"
    typography: "{typography.tab}"
    padding: "24px 0"
  learning-tab-selected:
    textColor: "{colors.white}"
  icon-button:
    rounded: "{rounded.control}"
---

# Design System: 29-maktab

## Overview

**Creative North Star: "A welcoming school prospectus"**

Warm paper, forest-green ink, expressive serif headings, and substantial school-life photography create an approachable editorial identity. The page feels open and human: photographs carry the atmosphere, while clear Uzbek copy and restrained controls help visitors explore.

The implementation is flat and spacious. Alternating paper and forest surfaces establish rhythm without floating panels or decorative effects. The identity follows the user's approved ivory, green, serif, and photography direction. The page uses the Samarqand location, 2,100+ student count, social links, and school photos supplied by the user. Do not add unsupplied school-specific claims.

**Key Characteristics:**

- Warm ivory and forest-green surface pairing.
- Bodoni Moda headings with Manrope reading and control text.
- Rectangular photography and open editorial articles.
- Fine dividing rules and lightly rounded controls.
- One coordinated introduction, followed by useful interaction feedback.

## Colors

The palette combines warm paper with deep botanical greens; straw is a small supporting accent.

### Primary

- **Forest:** Primary actions, the learning surface, and the contact surface.
- **Deep Forest:** Primary-action hover state and selection text.
- **Forest Ink:** Reading text on the paper surfaces.

### Secondary

- **Muted Straw:** Text selection and the small subject-list dots within the green learning area.

### Neutral

- **Warm Paper:** Main page ground, light buttons, and the modal surface.
- **Deep Paper:** Alternating school-life and gallery grounds; unloaded photo frames and icon-button hover state.
- **Soft White:** Light-button hover and selected learning tabs.
- **Muted Green Ink:** Secondary copy on paper. Keep the shipped higher-contrast value from the frontmatter.
- **On Green / Muted On Green:** Main and secondary text on forest surfaces.
- **Paper Rule / Green Rule:** Fine separators on the corresponding light and dark surfaces.

**The Paired Surface Rule.** A forest surface uses the on-green text roles and green rules; a paper surface uses ink, muted ink, and paper rules.

## Typography

**Display Font:** Bodoni Moda, with Georgia and serif fallbacks.

**Body Font:** Manrope, with a sans-serif fallback. Both families are loaded through `next/font/google` with swap behavior.

**Character:** Bodoni Moda supplies the expressive, high-contrast school-prospectus voice. Manrope keeps body copy, names, navigation, and controls direct and legible.

### Hierarchy

- **Display:** The large welcome uses the frontmatter display role. At widths of 1100px and below it becomes `clamp(60px, 7vw, 80px)`; at 900px, `clamp(54px, 7.6vw, 70px)`; at 650px, `clamp(47px, 14vw, 75px)`; at 370px, 46px. The line-height stays compact.
- **Headline:** Section headings use the frontmatter headline role. At 650px and below they use `clamp(36px, 9vw, 46px)` with a 1.13 line-height. The contact heading is intentionally larger: `clamp(52px, 6vw, 88px)`, changing to `clamp(48px, 13vw, 64px)` on mobile.
- **Title:** Manrope article titles use the title role; highlights use 25px. Mobile article types have individual 20–24px sizes.
- **Body:** Reading copy uses 16px. Supporting paragraphs usually have a 1.8–1.85 line-height; the about lead uses 22px, reducing to 19px at 900px and becoming 20px on mobile. Copy widths are constrained by context, commonly 320–460px.
- **Control / Label:** Actions use 14px, with 13px mobile variants. Navigation, photo captions, and footer text use 13px; informational notes use regular weight. There is no separate mono face or uppercase label convention.
- **School figure:** The supplied 2,100+ student count uses Bodoni Moda at 56px, then 38px at 650px and 34px at 370px. Its label uses Manrope.

**The Editorial Pairing Rule.** Serif type belongs to major headings, school figures, and the footer motto; reading text and interactive labels use Manrope.

## Layout

The shared content container is `min(1280px, calc(100% - gutter * 2))`, centered with a fluid gutter. Section spacing is fluid; a compact header remains sticky above anchor navigation. The default header height is 88px, reducing to 76px at 650px. Anchor scroll padding includes the header plus 16px.

Section introductions use an asymmetric two-column composition with the supporting copy aligned to the lower right. The full-viewport hero uses the supplied building photograph from edge to edge, including behind the opening navigation. A dark green-tinted scrim supports light headings, copy, and a paper-colored action. Its height is at least 100svh and may grow to fit content. The about, learning, and contact sections each retain their own editorial proportions rather than one repeated grid. Activities use three columns; highlights use two; gallery uses three with tighter gaps. Repeated spacing comes from the frontmatter scale. Photo edges align with surrounding content, and article text sits directly on the section ground.

- **At 1600px and above:** Hero content has more top space; the background photograph continues to cover the complete hero.
- **At 1100px and below:** Header spacing and display size tighten; three-column article gaps become 24px.
- **At 900px and below:** Desktop navigation yields to a menu button and an in-flow mobile link list. Two-column sections remain; their gaps tighten. Learning-tab grade ranges move to a second row. The footer motto hides.
- **At 650px and below:** Section introductions, hero, about, learning, highlights, activities, and contact stack into one column. The student count remains a single column. Gallery uses two columns, with its first and sixth photos spanning the width. Section spacing becomes 80px; the about section starts at 72px.
- **At 370px and below:** Gutters become 20px, the book mark hides, and learning subjects become one column.

## Elevation & Depth

There are no box shadows. Tonal surfaces, photography, and one-pixel rules establish hierarchy. The sticky header starts transparent with light text over the hero photograph. An IntersectionObserver restores its opaque paper ground and forest text after the hero. Opening the mobile menu also uses the opaque paper treatment. Fine rules inherit the appropriate light or dark context. The native gallery dialog is separated by a dark translucent backdrop (`rgb(8 23 15 / 85%)`), without a custom shadow.

**The Flat Surface Rule.** Preserve the flat article and section treatment; depth comes from tonal separation and the modal backdrop.

## Shapes

Photographs and editorial containers are rectangular with square corners. Buttons, menu controls, gallery launch controls, and icon buttons share the small control radius from the frontmatter. Subject-list markers are the only dots. Borders are fine rules rather than thick outlines. Icons are inline SVG line drawings.

The hero title has a temporary animation mask; it returns to visible overflow after the introductory sequence so the serif letterforms remain intact. Photo frames keep their overflow clipped for image cropping and hover scale.

## Components

### Buttons and text links

Confident, compact actions with clear text and a small SVG arrow.

- **Primary:** Forest with on-green text, the shared control radius, a 52px minimum height, 13px by 24px padding, and a 24px icon gap. The header variant has a 46px minimum height and 11px by 18px padding. Mobile header controls remain at least 44px tall.
- **Light:** Paper with forest text on the contact section; soft white on hover.
- **Hover / active:** Background changes and a one-pixel vertical shift over 0.2s with the shared ease; active state shifts down one pixel.
- **Text link:** Underlined text with an offset rule and a 44px minimum height. The underline darkens on hover. Text color inherits the section context.
- **Focus:** The shared visible outline is 2px in the current text color, offset by 6px. Disabled buttons have half opacity and a default cursor.

### Editorial articles and photography

Open photo-and-caption groups sit directly on the page ground, without card borders, shadows, or surrounding panel padding. Activities use 4:3; highlights use 1.75. Mobile crops change to fit the reading flow. Images use cover cropping. The modal image uses contain sizing so the complete photo is visible.

### Navigation

The sticky masthead uses a book SVG, the provisional school wordmark, 13px links, and a compact contact action. Over the hero it uses light text and a light contact button, with the photograph visible behind it; after the hero and while the mobile menu is open it uses the paper-and-forest treatment. Desktop links reveal a one-pixel underline over 0.25s. Mobile links are at least 56px tall. The menu button's two lines rotate into a close mark; choosing a link closes the menu. Escape closes it and returns focus to its button. Footer links repeat the same anchor destinations.

### Learning tabs

Vertical, ruled text rows on a forest ground. The selected row becomes soft white, gains an underline, and shows its arrow; unselected rows use muted on-green text. The tab panel has reserved vertical space to reduce layout movement. Arrow keys cycle through tabs; Home and End select the first and last, with a roving tab stop and a labeled focusable panel. Changing the panel uses a short 8px translation and opacity settle (0.32s, `power2.out`).

### Gallery and lightbox

Rectangular photo buttons use a paper arrow control at the lower right. Hover and keyboard focus scale the photo to 1.035 over 0.65s. A native modal dialog presents the full photo, label, count, close action, and previous/next controls. Escape, the close action, or clicking the dialog's outside area closes it; left/right keys change photos and wrap around. Background scrolling locks while open, and focus returns to the launching photo button. Icon controls are at least 44px square.

### Motion and reduced motion

The introductory GSAP timeline uses `expo.out`: title lines rise into place (1.15s with 0.09s staggering), supporting copy settles from 18px and low opacity (0.85s), and the main photo settles from scale 1.045 (1.5s). After that, GSAP moves action arrows 3px on pointer hover or focus (0.2s, `power2.out`). There are no repeated scroll entrances or scroll-driven scenes in the implementation.

The shared CSS ease is `cubic-bezier(0.2, 0.8, 0.2, 1)`. With reduced motion enabled, GSAP intro, arrow, and panel movement are skipped; smooth anchor scrolling becomes immediate, and CSS animation/transition durations reduce to 0.01ms.

### Supplied school material

Replaceable content lives in `src/lib/school-data.ts`; cropped user-provided photographs live in `public/images/school`. The supplied facts are Samarqand city, Buyuk Ipak Yo‘li 44, more than 2,100 students, Telegram `@samarkand29maktab`, and Instagram `@29maktab_official`. The contact area shows the address and links to those social profiles; the map searches the supplied address. The footer shows the school name and region. No phone number, opening hours, admissions process, staff identities, school history, or achievements have been supplied, so the page does not invent them. Search indexing is enabled.

## Do's and Don'ts

### Do:

- **Do** pair each surface with its matching text and rule roles.
- **Do** use Bodoni Moda for major headings and Manrope for reading and controls.
- **Do** preserve open photo-and-caption groups, aligned edges, and generous section space.
- **Do** preserve keyboard access, visible focus, dialog focus return, and reduced-motion support.
- **Do** use the supplied address, student count, social links, and photos as the source of school-specific content.

### Don't:

- **Don't** replace rectangular photography with a repeated grid of rounded floating panels.
- **Don't** add decorative shadows to the flat section and article system.
- **Don't** invent school-specific dates, staff identities, phone numbers, programs, or achievements.
- **Don't** leave the hero's temporary animation mask clipping the completed heading.

## Full-background hero

The user specified the third attached photo, showing the school building, as the hero background. Its preloaded Next.js image is an absolute cover layer, with responsive focal cropping and a static contrast scrim. The masthead overlaps the top of the image; desktop copy keeps its asymmetric two-column composition, while phone copy stacks. The existing GSAP scale settle never hides the photograph, and reduced motion leaves the final scene visible. Keep this full-image treatment for future hero refinements.

### Contact details

The contact section keeps its two-column forest layout: a clearly formatted street address and map action on the left, and ruled Telegram and Instagram links on the right. Each link pairs a 13px field label with a 20px value and the shared arrow. On phones the groups stack. Contact values wrap naturally, keep a visible focus state, and open the supplied social profiles in a new tab.
