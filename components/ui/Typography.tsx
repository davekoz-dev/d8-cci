import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Typography Component
 * Based on D-8 brand typography system using Fira Sans
 */

const typographyVariants = cva('', {
  variants: {
    variant: {
      display:
        'text-4xl md:text-5xl font-bold leading-tight tracking-tight',
      h1: 'text-3xl md:text-4xl font-bold leading-tight tracking-tight',
      h2: 'text-2xl md:text-3xl font-bold leading-snug',
      h3: 'text-xl md:text-2xl font-medium leading-snug',
      h4: 'text-lg md:text-xl font-medium leading-snug',
      bodyLarge: 'text-lg leading-relaxed',
      body: 'text-base leading-relaxed',
      bodySmall: 'text-sm leading-normal',
      caption: 'text-xs leading-tight tracking-wide',
    },
    color: {
      primary: 'text-[#414042]', // Dark Grey
      secondary: 'text-[#282561]', // Midnight Blue
      onDark: 'text-[#F7F8F9]', // Soft White
      onLight: 'text-[#414042]', // Dark Grey
      accent: 'text-[#055090]', // Primary Blue
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'primary',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, as, ...props }, ref) => {
    const Component = as || getDefaultElement(variant);

    return React.createElement(Component, {
      ref,
      className: cn(typographyVariants({ variant, color }), className),
      ...props,
    });
  }
);

function getDefaultElement(
  variant: TypographyProps['variant']
): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'display':
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'caption':
      return 'span';
    default:
      return 'p';
  }
}

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
