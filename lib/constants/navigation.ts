/**
 * Navigation configuration for D-8 Indonesia website
 * Centralized navigation data for consistency across Header, Footer, and Sitemap
 */

import type { NavigationItem } from '@/lib/types';

export const mainNavigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-d8' },
  { name: 'Members', href: '/members' },
  { name: 'Programs', href: '/programs' },
  { name: 'Updates', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  about: [
    { name: 'About D-8 CCI', href: '/about-d8' },
    { name: 'Member Chambers', href: '/members' },
  ],
  services: [
    { name: 'Programs & Services', href: '/programs' },
    { name: 'Business Opportunities', href: '/opportunities' },
    { name: 'Business  Forum', href: '/business-leaders-forum' },
    { name: 'Events & Forums', href: '/events' },
    { name: 'Trade Facilitation', href: '/programs#trade' },
  ],
  resources: [
    { name: 'Documents & Reports', href: '/documents' },
    { name: 'Brand Guidelines', href: '/brand' },
    { name: 'News & Media', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  indonesia: [
    { name: 'Chairmanship 2026-2027', href: '/chairmanship' },
    { name: '12th D-8 Summit', href: '/events#summit-2026' },
    { name: 'Palestine & Solidarity', href: '/palestine' },
    { name: 'Five Priorities', href: '/chairmanship#priorities' },
  ],
};
