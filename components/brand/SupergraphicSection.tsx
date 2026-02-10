import React from 'react';
import { cn } from '@/lib/utils';

/**
 * D-8 Supergraphic Section Component
 *
 * Brand Guidelines:
 * - Use approved supergraphic types only (geometric patterns)
 * - Background color ways: white as primary; blue or green as secondary
 * - Correct contrast: supergraphic in green/white on blue, etc.
 * - NEVER place main body text directly on busy supergraphic
 * - Content area must remain clean and readable
 */

export type SupergraphicVariant = 'geometric-1' | 'geometric-2' | 'waves' | 'gradient';
export type SupergraphicColorWay =
  | 'whiteOnBlue'
  | 'whiteOnTurquoise'
  | 'blueOnWhite'
  | 'turquoiseOnWhite';

interface SupergraphicSectionProps {
  variant?: SupergraphicVariant;
  colorWay?: SupergraphicColorWay;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const colorWayStyles: Record<SupergraphicColorWay, string> = {
  whiteOnBlue: 'bg-[#055090] text-black', // Primary Blue background
  whiteOnTurquoise: 'bg-[#00B3AA] text-black', // Turquoise background
  blueOnWhite: 'bg-[#F7F8F9] text-[#414042]', // Soft White background
  turquoiseOnWhite: 'bg-white text-[#414042]', // White background
};

const supergraphicPatterns: Record<SupergraphicVariant, string> = {
  'geometric-1': `
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.05) 10px,
      rgba(255, 255, 255, 0.05) 20px
    )
  `,
  'geometric-2': `
    radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 50%
    )
  `,
  waves: `
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.05) 75%,
      transparent 75%,
      transparent
    )
  `,
  gradient: `
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    )
  `,
};

export function SupergraphicSection({
  variant = 'geometric-1',
  colorWay = 'blueOnWhite',
  children,
  className,
  contentClassName,
}: SupergraphicSectionProps) {
  const backgroundStyle =
    colorWay.includes('Blue') || colorWay.includes('Turquoise')
      ? supergraphicPatterns[variant]
      : undefined;

  return (
    <section
      className={cn('relative overflow-hidden', colorWayStyles[colorWay], className)}
      style={{
        backgroundImage: backgroundStyle,
        backgroundSize: variant === 'waves' ? '40px 40px' : 'auto',
      }}
    >
      {/* Content area - kept clean for readability */}
      <div className={cn('relative z-10', contentClassName)}>{children}</div>

      {/* Optional: Additional decorative layer */}
      {variant === 'gradient' && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: supergraphicPatterns[variant],
          }}
        />
      )}
    </section>
  );
}

/**
 * Supergraphic Background (for use as background image)
 */
interface SupergraphicBackgroundProps {
  variant?: SupergraphicVariant;
  opacity?: number;
  className?: string;
}

export function SupergraphicBackground({
  variant = 'geometric-1',
  opacity = 0.3,
  className,
}: SupergraphicBackgroundProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: supergraphicPatterns[variant],
        backgroundSize: variant === 'waves' ? '40px 40px' : 'auto',
        opacity,
      }}
    />
  );
}
