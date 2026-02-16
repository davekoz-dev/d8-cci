'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * AOS (Animate On Scroll) Initialization Component
 *
 * Initializes AOS with restrained, accessible settings
 * - Respects prefers-reduced-motion for accessibility
 * - Disabled on mobile devices for performance
 */
export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true, // Animation happens only once
      offset: 50, // Trigger animations 50px before element enters viewport
      delay: 0,
      // Disable animations if:
      // 1. User prefers reduced motion (accessibility)
      // 2. Mobile device (performance)
      disable: function() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768;
        return prefersReducedMotion || isMobile;
      }
    });

    // Refresh AOS on window resize to handle responsive disable
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
}
