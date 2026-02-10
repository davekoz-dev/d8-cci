/**
 * D-8 Indonesia Chairmanship 2026-2027 Typography System
 *
 * Brand Font: Fira Sans family ONLY
 * - Fira Sans Bold → Headings
 * - Fira Sans Medium → Sub-headings
 * - Fira Sans Regular → Body & Captions
 */

/**
 * Type scale definition
 * Sizes are in rem units for better accessibility and responsive scaling
 */
export const typeScale = {
  // Display (for hero sections, major titles)
  display: {
    size: '2.5rem',      // 40px at base 16px
    lineHeight: '1.2',
    fontWeight: '700',   // Bold
    letterSpacing: '-0.02em',
  },

  // H1 - Main page headings
  h1: {
    size: '2.25rem',     // 36px
    lineHeight: '1.25',
    fontWeight: '700',   // Bold
    letterSpacing: '-0.01em',
  },

  // H2 - Section headings
  h2: {
    size: '2rem',        // 32px
    lineHeight: '1.3',
    fontWeight: '700',   // Bold
    letterSpacing: '0',
  },

  // H3 - Sub-section headings
  h3: {
    size: '1.5rem',      // 24px
    lineHeight: '1.4',
    fontWeight: '500',   // Medium
    letterSpacing: '0',
  },

  // H4 - Card titles, smaller headings
  h4: {
    size: '1.25rem',     // 20px
    lineHeight: '1.4',
    fontWeight: '500',   // Medium
    letterSpacing: '0',
  },

  // Body Large - Lead paragraphs, intro text
  bodyLarge: {
    size: '1.125rem',    // 18px
    lineHeight: '1.6',
    fontWeight: '400',   // Regular
    letterSpacing: '0',
  },

  // Body - Default body text
  body: {
    size: '1rem',        // 16px
    lineHeight: '1.6',
    fontWeight: '400',   // Regular
    letterSpacing: '0',
  },

  // Body Small - Secondary text
  bodySmall: {
    size: '0.875rem',    // 14px
    lineHeight: '1.5',
    fontWeight: '400',   // Regular
    letterSpacing: '0',
  },

  // Caption - Labels, small text
  caption: {
    size: '0.8125rem',   // 13px
    lineHeight: '1.4',
    fontWeight: '400',   // Regular
    letterSpacing: '0.01em',
  },

  // Button text
  button: {
    size: '1rem',        // 16px
    lineHeight: '1.2',
    fontWeight: '500',   // Medium
    letterSpacing: '0.02em',
    textTransform: 'none' as const,
  },
} as const;

/**
 * Font family tokens
 * These will be used in CSS variables
 */
export const fontFamilies = {
  primary: 'var(--font-fira-sans)',
  fallback: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

/**
 * Font weight tokens
 * Map to Fira Sans available weights
 */
export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

/**
 * Responsive type scale breakpoints
 * Adjust font sizes for different screen sizes
 */
export const responsiveTypeScale = {
  mobile: {
    display: '2rem',     // 32px on mobile
    h1: '1.75rem',       // 28px on mobile
    h2: '1.5rem',        // 24px on mobile
    h3: '1.25rem',       // 20px on mobile
  },
  tablet: {
    display: '2.25rem',  // 36px on tablet
    h1: '2rem',          // 32px on tablet
    h2: '1.75rem',       // 28px on tablet
    h3: '1.375rem',      // 22px on tablet
  },
  desktop: {
    display: '2.5rem',   // 40px on desktop
    h1: '2.25rem',       // 36px on desktop
    h2: '2rem',          // 32px on desktop
    h3: '1.5rem',        // 24px on desktop
  },
} as const;

export type TypeScaleKey = keyof typeof typeScale;
