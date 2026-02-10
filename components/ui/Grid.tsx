import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Grid Component
 * Responsive grid system for cards, priorities, and content layouts
 */

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns on desktop */
  cols?: 2 | 3 | 4 | 5 | 6;
  /** Gap size between grid items */
  gap?: 'sm' | 'md' | 'lg';
  /** Custom responsive column configuration */
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
}

const colsClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
};

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = 'md', responsive, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          !responsive && colsClasses[cols],
          gapClasses[gap],
          className
        )}
        style={
          responsive
            ? {
                gridTemplateColumns: `repeat(${responsive.sm || 1}, minmax(0, 1fr))`,
              }
            : undefined
        }
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

export { Grid };
