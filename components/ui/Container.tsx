import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Container Component
 * Max-width container with responsive padding for content
 */

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max width variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Remove horizontal padding */
  noPadding?: boolean;
}

const containerSizes = {
  sm: 'max-w-3xl',   // 768px
  md: 'max-w-5xl',   // 1024px
  lg: 'max-w-6xl',   // 1152px
  xl: 'max-w-7xl',   // 1280px
  full: 'max-w-full',
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'xl', noPadding = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          containerSizes[size],
          !noPadding && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container };
