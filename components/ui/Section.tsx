import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Section Component
 * Standard section wrapper with consistent spacing and layout
 */

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background color variant */
  variant?: 'default' | 'muted' | 'primary' | 'secondary';
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether section should span full width without container */
  fullWidth?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const sectionVariants = {
  default: 'bg-background text-foreground',
  muted: 'bg-muted text-foreground',
  primary: 'bg-[#055090] text-white',
  secondary: 'bg-[#00B3AA] text-white',
};

const paddingVariants = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-28 md:py-36',
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'lg',
      fullWidth = false,
      as: Component = 'section',
      children,
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          'relative',
          sectionVariants[variant],
          paddingVariants[padding],
          className
        ),
        ...props,
      },
      children
    );
  }
);

Section.displayName = 'Section';

export { Section };
