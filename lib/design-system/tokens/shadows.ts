/**
 * D-8 Indonesia Chairmanship Shadow System
 *
 * Elevation and shadow tokens for depth and hierarchy
 */

/**
 * Shadow scale for elevation
 * Using subtle shadows to maintain professional, governmental aesthetic
 */
export const shadows = {
  none: 'none',

  // Subtle elevation
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',

  // Default card/component shadow
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  // Medium elevation (raised cards, dropdowns)
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',

  // Higher elevation (modals, popovers)
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

  // Maximum elevation (major overlays)
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',

  // Extra large shadow for hero sections
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Inner shadow for inset effects
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

/**
 * Semantic shadow tokens for specific use cases
 */
export const semanticShadows = {
  // Cards and surfaces
  card: shadows.base,
  cardHover: shadows.md,
  cardActive: shadows.sm,

  // Navigation and header
  header: shadows.sm,

  // Dropdowns and menus
  dropdown: shadows.lg,

  // Modals and overlays
  modal: shadows['2xl'],

  // Buttons
  buttonDefault: shadows.sm,
  buttonHover: shadows.md,
  buttonActive: shadows.none,

  // Forms
  input: shadows.inner,
  inputFocus: '0 0 0 3px rgb(5 80 144 / 0.1)', // Primary blue with transparency

  // Logo and brand elements (subtle to maintain clarity)
  logo: shadows.none,

  // Images
  image: shadows.base,
} as const;

export type ShadowKey = keyof typeof shadows;
export type SemanticShadowKey = keyof typeof semanticShadows;
