/**
 * Animated Wrapper Components
 *
 * DRY components for common AOS animation patterns
 * These wrap common elements to avoid repetitive data-aos attributes
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'fade-down' | 'zoom-in';
}

/**
 * AnimatedDiv - Generic animated container
 * Use for any div that needs animation
 */
export function AnimatedDiv({
  children,
  className,
  delay = 0,
  animation = 'fade-up'
}: AnimatedProps) {
  return (
    <div
      className={cn(className)}
      data-aos={animation}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
}

/**
 * AnimatedSection - For section headers
 * Default: fade-in animation
 */
export function AnimatedSection({
  children,
  className,
  delay = 0
}: Omit<AnimatedProps, 'animation'>) {
  return (
    <div
      className={cn(className)}
      data-aos="fade-in"
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
}

/**
 * AnimatedCard - For card components
 * Default: fade-up animation
 */
export function AnimatedCard({
  children,
  className,
  delay = 0,
  animation = 'fade-up'
}: AnimatedProps) {
  return (
    <div
      className={cn(className)}
      data-aos={animation}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
}

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number; // Delay between each item (ms)
  animation?: 'fade-up' | 'fade-in' | 'fade-down' | 'zoom-in';
}

/**
 * AnimatedGrid - For grid items with staggered animation
 * Automatically applies staggered delays to children
 */
export function AnimatedGrid({
  children,
  className,
  stagger = 100,
  animation = 'fade-up'
}: AnimatedGridProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cn(className)}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          data-aos={animation}
          data-aos-delay={index * stagger}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/**
 * AnimatedList - For list items with staggered animation
 * Similar to AnimatedGrid but for lists
 */
export function AnimatedList({
  children,
  className,
  stagger = 50,
  animation = 'fade-up'
}: AnimatedGridProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cn('space-y-6', className)}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          data-aos={animation}
          data-aos-delay={index * stagger}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/**
 * withAnimation - HOC to add animation to any component
 *
 * Usage:
 * const AnimatedMyComponent = withAnimation(MyComponent);
 * <AnimatedMyComponent delay={100} />
 */
export function withAnimation<P extends object>(
  Component: React.ComponentType<P>,
  defaultAnimation: 'fade-up' | 'fade-in' | 'fade-down' | 'zoom-in' = 'fade-up'
) {
  return function AnimatedComponent({
    delay = 0,
    animation = defaultAnimation,
    ...props
  }: P & { delay?: number; animation?: string }) {
    return (
      <div data-aos={animation} data-aos-delay={delay}>
        <Component {...(props as P)} />
      </div>
    );
  };
}
