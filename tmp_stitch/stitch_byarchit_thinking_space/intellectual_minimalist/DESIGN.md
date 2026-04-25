---
name: Intellectual Minimalist
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#506354'
  on-secondary: '#ffffff'
  secondary-container: '#d0e5d2'
  on-secondary-container: '#546758'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d3e8d5'
  secondary-fixed-dim: '#b7ccb9'
  on-secondary-fixed: '#0e1f13'
  on-secondary-fixed-variant: '#394b3d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  h2:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  h3:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  gutter: 24px
  margin: 40px
---

## Brand & Style

This design system is rooted in the philosophy of "quiet confidence." It targets an intellectual audience that values clarity of thought and the luxury of focus. The personality is introspective, academic, and premium, avoiding the loud trends of modern SaaS in favor of a timeless, editorial aesthetic.

The design style is **Minimalism** with a focus on high-quality typography and intentional whitespace. It leverages a rigorous grid and clear information hierarchy to create an atmosphere of order and calm. The "slightly colorful" twist is executed through a single, sophisticated accent used with surgical precision to guide the eye without breaking the monochrome serenity.

## Colors

The palette is dominated by a monochrome range that establishes an "ink on paper" feel. 

- **Primary:** A deep, off-black (#1A1A1A) used for text and structural elements to avoid the harshness of pure hex black.
- **Secondary (Accent):** A muted Deep Forest Green (#4A5D4E). This sophisticated, organic hue is used sparingly for active states, links, and subtle indicators.
- **Backgrounds:** A soft off-white (#F9F9F9) reduces eye strain compared to pure white, maintaining a gallery-like backdrop.
- **Neutrals:** Soft greys are used for secondary text and decorative dividers to maintain a low-contrast, harmonious environment.

## Typography

This design system employs a sophisticated pairing of a classic serif and a functional sans-serif to create an editorial rhythm.

- **Newsreader** (Serif) is used for all headlines and display text. Its literary character evokes authority and introspection.
- **Inter** (Sans-serif) is used for body copy, labels, and UI elements. Its neutrality ensures that the interface remains functional and does not compete with the content.

The hierarchy relies on significant shifts in scale and generous line heights to ensure readability. "Label-caps" should be used for small metadata or section headers to provide a structural contrast to the fluid serif headlines.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model with an emphasis on "negative space as a feature." 

Content should be centered within a maximum container width of 1120px to maintain line lengths optimal for reading. Use a 12-column grid for complex layouts, but prefer single-column or asymmetrical 2-column layouts to reinforce the minimalist aesthetic. Spacing is intentional and large; use the `lg` (64px) and `xl` (128px) tokens to separate major content sections, creating a "breathable" user experience.

## Elevation & Depth

This design system avoids heavy shadows and skeuomorphism. Depth is achieved through **Tonal Layers** and **Low-contrast Outlines**.

- **Surface Levels:** Use the primary background color for the base. Elevated elements like cards or menus should use a subtle shift to white or a 1px border in a very light grey (#E5E5E5).
- **Shadows:** When necessary for functional overlays (like dropdowns), use a single, highly diffused "Ambient Shadow": `0px 4px 20px rgba(0, 0, 0, 0.03)`.
- **Dividers:** Use hairline dividers (1px) in light grey to separate content without creating visual noise.

## Shapes

The shape language is conservative and architectural. A **Soft (0.25rem)** corner radius is applied to buttons and input fields to take the "edge" off the minimalism without appearing playful or tech-heavy. Larger containers or cards may use `rounded-lg` (0.5rem) to maintain a sense of structured elegance. Geometric precision is preferred over organic or fluid shapes.

## Components

- **Buttons:** Primary buttons are solid off-black with white text. Secondary buttons are outlined with a 1px border. The accent color (Deep Forest Green) is reserved for the hover state or a "success" action, used sparingly.
- **Links:** Use the accent color for text links. Links should have a subtle underline that disappears on hover to prioritize clean typography.
- **Inputs:** Minimalist bottom-border only or a very light 4-sided stroke. Focus states use a 1px solid accent color border.
- **Chips/Tags:** Use a light grey background with "label-caps" typography. No heavy colors; the accent color is only used for an "active" tag.
- **Cards:** Borderless with a very subtle 1px light grey stroke. No shadows unless the card is interactive.
- **Lists:** Clean, generous vertical padding (spacing.sm) between items, separated by hairline dividers.
- **Navigation:** Text-only where possible. The "Active" page indicator should be a small, 4px dot in the accent color below the menu item.