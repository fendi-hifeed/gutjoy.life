---
name: Vital Bloom
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#5b403f'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#5b5c59'
  on-tertiary: '#ffffff'
  tertiary-container: '#747572'
  on-tertiary-container: '#fdfcf8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

This design system embodies the "Happy Gut, Happy Day" philosophy by blending a bright, energetic wellness aesthetic with high-end professional SaaS clarity. The brand personality is optimistic, nurturing, and scientifically credible. 

The visual style is **Corporate / Modern** with a **Tactile** twist. We use expansive white space and a "milky" UI base to evoke the purity of yogurt, while using the bold primary colors to drive action and highlight health benefits. The interface should feel as smooth and refreshing as the product itself, utilizing soft transitions and organic shapes to maintain a friendly, approachable atmosphere for health-conscious consumers.

## Colors

The palette is rooted in the brand's signature "Gut" Red and "Joy" Blue, balanced by a creamy, off-white foundation that prevents the high-contrast primaries from feeling clinical.

- **Primary (Gut Red):** Used for urgent health insights, primary call-to-actions, and key brand markers. It represents vitality and strength.
- **Secondary (Joy Blue):** Used for trust-building elements, professional data visualizations, and secondary navigation.
- **Tertiary (Yogurt Cream):** The primary background surface. It is a warm, soft white (#FDFCF8) that feels more natural and organic than pure digital white.
- **Neutrals:** A slate-leaning grey scale is used for typography to ensure high readability while maintaining a modern, softened edge.

## Typography

The typography strategy pairs the friendly, rounded terminals of **Plus Jakarta Sans** for headlines with the functional, highly legible **Work Sans** for body and data-heavy content.

Headlines should use tight letter-spacing to feel impactful and "bouncy." Body text maintains a generous line height to support the airy, clean brand feel. Use "Gut Red" sparingly in typography for emphasis; otherwise, stick to the Slate Neutral for maximum professional credibility.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with a strong emphasis on vertical rhythm. 

- **Desktop:** 12-column grid with a maximum content width of 1280px. Gutters are fixed at 24px to ensure breathing room between product cards and info blocks.
- **Mobile:** 4-column grid with 16px side margins.
- **Rhythm:** All spacing (padding, margins, gaps) must be multiples of the 8px base unit. 

Large "Section Gaps" (80px+) are encouraged between different content themes to maintain the "Airy" brand promise, preventing the user from feeling overwhelmed by information.

## Elevation & Depth

To reflect the smooth texture of yogurt, we avoid harsh, dark shadows. Instead, we use **Tonal Layers** and **Ambient Shadows**.

- **Surface Levels:** The base background is Tertiary Cream. Cards and containers use pure White (#FFFFFF) to subtly lift off the page.
- **Shadows:** Use a "Cloud Shadow" style—very large blur radii (32px+) with extremely low opacity (4-6%) using a Blue-tinted neutral. This creates a soft, organic lift rather than a digital drop-shadow.
- **Depth:** Interactive elements like buttons use a subtle 2px inner-glow on hover to simulate a "squishy" or tactile physical response.

## Shapes

The shape language is consistently **Rounded**. Sharp corners are strictly prohibited as they conflict with the "nurturing" and "friendly" brand pillars.

- **Standard Components:** 0.5rem (8px) radius for buttons and input fields.
- **Cards & Containers:** 1.5rem (24px) radius to create a soft, friendly framing for images and text.
- **Iconography:** Use thick-stroke, rounded-cap icons. Avoid thin, jagged, or overly technical icon sets.

## Components

### Buttons
- **Primary:** High-gloss Red background with White text. Rounded (0.5rem). On hover, the Red deepens slightly, and a soft ambient shadow appears.
- **Secondary:** Blue outline with 2px weight. Clear, professional, and trustworthy.

### Cards
- Use white backgrounds on the cream page surface.
- Top-heavy image placement for yogurt flavors or fruit photography.
- Large 24px internal padding to maintain the "clean and airy" feel.

### Input Fields
- Soft Grey borders (1px) that turn Blue on focus.
- Backgrounds should be slightly off-white to distinguish from the card surface.
- Labels use **label-md** in the Slate Neutral.

### Chips & Badges
- Used for probiotic strains (e.g., "L. Acidophilus") or dietary tags ("Gluten Free").
- Pill-shaped with a light Blue or Red tint background and darker text of the same hue.

### Progress Bars (Gut Health Trackers)
- Thicker, rounded tracks (8px height) using a soft Blue track and a vibrant Red indicator to show progress or health scores.