import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * D-8 Indonesia Chairmanship Logo Component
 *
 * Brand Guidelines:
 * - Main configuration for primary use
 * - Secondary configuration for co-branding contexts
 * - Minimum clear space of 2x around logo
 * - No rotation, recoloring, or effects
 * - Do not place on complex or similar-color backgrounds
 */

export type LogoVariant = 'main' | 'secondary';
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

const sizeMap: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 120, height: 60 },
  md: { width: 180, height: 90 },
  lg: { width: 240, height: 120 },
  xl: { width: 320, height: 160 },
};

export function Logo({
  variant = 'main',
  size = 'lg',
  className,
  priority = false,
}: LogoProps) {
  const dimensions = sizeMap[size];

  const logoPath =
    variant === 'main'
      ? '/assets/d8/logo/d8logo.png'
      : '/assets/d8/logo/d8logo.png';

  return (
    <div
      className={cn(
        'relative inline-block',
        // Minimum clear space (2x) enforced via padding
        'p-8',
        className
      )}
      style={{
        // Prevent logo from being resized or distorted
        minWidth: dimensions.width + 64, // Add clear space
        minHeight: dimensions.height + 64,
      }}
    >
      <Image
        src={logoPath}
        alt="D-8 Indonesia Chairmanship 2026-2027 Logo"
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        className="object-cover"
        style={{
          // Prevent any transformations
          transform: 'none',
          filter: 'none',
        }}
      />
    </div>
  );
}

/**
 * Logo Icon (smaller version without clear space for nav/footer)
 */
interface LogoIconProps {
  size?: LogoSize;
  className?: string;
}

export function LogoIcon({ size = 'sm', className }: LogoIconProps) {
  const dimensions = sizeMap[size];

  return (
    <Image
      src="/assets/d8/logo/d8logo.png"
      alt="D-8 Indonesia Logo"
      width={dimensions.width}
      height={dimensions.height}
      className={cn('object-cover', className)}
      style={{
        transform: 'none',
        filter: 'none',
      }}
    />
  );
}
