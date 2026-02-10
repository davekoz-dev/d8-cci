import React from 'react';
import { cn } from '@/lib/utils';
import { d8Colors } from '@/lib/design-system/tokens';

/**
 * D-8 Pattern Edge Component
 *
 * Brand Guidelines:
 * - 40% opacity of brand colors only
 * - Only at the edges of the layout (top, bottom, left, right)
 * - Keep center clear for content
 * - Never full-screen, never solid color, never huge scale
 */

export type PatternPosition = 'top' | 'bottom' | 'left' | 'right';
export type PatternColor = keyof typeof d8Colors;

interface PatternEdgeProps {
  position?: PatternPosition;
  color?: PatternColor;
  className?: string;
}

const positionStyles: Record<PatternPosition, string> = {
  top: 'top-0 left-0 right-0 h-24',
  bottom: 'bottom-0 left-0 right-0 h-24',
  left: 'left-0 top-0 bottom-0 w-24',
  right: 'right-0 top-0 bottom-0 w-24',
};

export function PatternEdge({
  position = 'top',
  color = 'primaryBlue',
  className,
}: PatternEdgeProps) {
  const patternColor = d8Colors[color];

  // Convert hex to RGB for opacity
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const rgb = hexToRgb(patternColor);
  const colorWithOpacity = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`;

  // Simple geometric pattern for edges
  const patternStyle = {
    backgroundImage: `
      repeating-linear-gradient(
        ${position === 'top' || position === 'bottom' ? '90deg' : '0deg'},
        transparent,
        transparent 20px,
        ${colorWithOpacity} 20px,
        ${colorWithOpacity} 22px
      ),
      repeating-linear-gradient(
        ${position === 'top' || position === 'bottom' ? '0deg' : '90deg'},
        transparent,
        transparent 40px,
        ${colorWithOpacity} 40px,
        ${colorWithOpacity} 42px
      )
    `,
  };

  return (
    <div
      className={cn(
        'absolute pointer-events-none',
        positionStyles[position],
        className
      )}
      style={patternStyle}
      aria-hidden="true"
    />
  );
}

/**
 * Pattern Corner (decorative corner element)
 */
interface PatternCornerProps {
  corner: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  color?: PatternColor;
  size?: number;
  className?: string;
}

const cornerStyles: Record<string, string> = {
  topLeft: 'top-0 left-0',
  topRight: 'top-0 right-0',
  bottomLeft: 'bottom-0 left-0',
  bottomRight: 'bottom-0 right-0',
};

export function PatternCorner({
  corner,
  color = 'primaryBlue',
  size = 96,
  className,
}: PatternCornerProps) {
  const patternColor = d8Colors[color];

  return (
    <div
      className={cn('absolute pointer-events-none', cornerStyles[corner], className)}
      style={{
        width: size,
        height: size,
        opacity: 0.4,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simple geometric pattern - circles */}
        <circle cx="8" cy="8" r="2" fill={patternColor} />
        <circle cx="24" cy="8" r="2" fill={patternColor} />
        <circle cx="40" cy="8" r="2" fill={patternColor} />
        <circle cx="8" cy="24" r="2" fill={patternColor} />
        <circle cx="24" cy="24" r="2" fill={patternColor} />
        <circle cx="40" cy="24" r="2" fill={patternColor} />
        <circle cx="8" cy="40" r="2" fill={patternColor} />
        <circle cx="24" cy="40" r="2" fill={patternColor} />
      </svg>
    </div>
  );
}
