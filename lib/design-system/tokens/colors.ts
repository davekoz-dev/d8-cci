/**
 * D-8 Indonesia Chairmanship 2026-2027 Brand Color Palette
 *
 * These are the official brand colors from the D-8 visual identity guidelines.
 * Use ONLY these colors throughout the website - no custom or off-brand colors.
 */

export const d8Colors = {
  // Primary Colors
  primaryBlue: '#055090',      // Blue Azure - Main brand color
  primaryTurquoise: '#00B3AA', // Turquoise - Secondary brand color

  // Supporting Blues
  midnightBlue: '#282561',     // Midnight Blue - Deep accent
  blueAqua: '#00B9F0',         // Blue Aqua - Bright accent
  blueSky: '#2BB5E9',          // Blue Sky - Light accent

  // Neutrals
  darkGrey: '#414042',         // Dark Grey - Text and borders
  softWhite: '#F7F8F9',        // Soft White - Backgrounds

  // Utility colors (derived from palette for UI needs)
  white: '#FFFFFF',
  black: '#000000',
} as const;

/**
 * Semantic color tokens for consistent usage across components
 */
export const semanticColors = {
  // Text colors
  textPrimary: d8Colors.darkGrey,
  textSecondary: d8Colors.midnightBlue,
  textOnDark: d8Colors.softWhite,
  textOnLight: d8Colors.darkGrey,

  // Background colors
  bgPrimary: d8Colors.white,
  bgSecondary: d8Colors.softWhite,
  bgAccent: d8Colors.primaryBlue,
  bgAccentSecondary: d8Colors.primaryTurquoise,

  // Border colors
  borderLight: d8Colors.softWhite,
  borderDefault: d8Colors.darkGrey,
  borderAccent: d8Colors.primaryBlue,

  // Interactive states (using brand colors only)
  interactive: d8Colors.primaryBlue,
  interactiveHover: d8Colors.midnightBlue,
  interactiveActive: d8Colors.primaryTurquoise,
} as const;

/**
 * Color combinations for supergraphic backgrounds
 * According to brand guidelines: white as primary, blue or green as secondary
 */
export const supergraphicColorWays = {
  whiteOnBlue: {
    background: d8Colors.primaryBlue,
    pattern: d8Colors.softWhite,
  },
  whiteOnTurquoise: {
    background: d8Colors.primaryTurquoise,
    pattern: d8Colors.softWhite,
  },
  blueOnWhite: {
    background: d8Colors.softWhite,
    pattern: d8Colors.primaryBlue,
  },
  turquoiseOnWhite: {
    background: d8Colors.softWhite,
    pattern: d8Colors.primaryTurquoise,
  },
} as const;

export type D8Color = keyof typeof d8Colors;
export type SemanticColor = keyof typeof semanticColors;
export type SupergraphicColorWay = keyof typeof supergraphicColorWays;
