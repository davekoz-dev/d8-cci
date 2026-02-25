/**
 * Shared data constants for D-8 Indonesia website
 * Centralized data for better maintainability
 */

import type { Priority, MemberCountry, Statistic } from '@/lib/types';

/**
 * Five Priority Areas of Indonesia's D-8 Chairmanship
 */
export const priorities: Priority[] = [
  {
    title: 'Economic & Trade Integration',
    description:
      'Strengthening economic cooperation and facilitating trade among D-8 member countries to boost regional prosperity and market access.',
    icon: 'TrendingUp',
    color: '#055090', // Primary Blue
  },
  {
    title: 'Halal Economy',
    description:
      'Advancing the halal economy ecosystem through collaboration, certification standards, and market development for halal products and services.',
    icon: 'ShoppingBag',
    color: '#00B3AA', // Turquoise
  },
  {
    title: 'Blue Economy & Green Transition',
    description:
      'Promoting sustainable ocean-based economic activities and green initiatives to support climate action and environmental sustainability.',
    icon: 'Waves',
    color: '#2BB5E9', // Blue Sky
  },
  {
    title: 'Connectivity & Digital Transformation',
    description:
      'Enhancing digital infrastructure, cross-border connectivity, and technology adoption to drive innovation and economic growth.',
    icon: 'Network',
    color: '#00B9F0', // Blue Aqua
  },
  {
    title: 'Organizational Reform',
    description:
      'Modernizing D-8 institutional frameworks and governance to improve effectiveness and responsiveness to member countries\' needs.',
    icon: 'Building2',
    color: '#282561', // Midnight Blue
  },
];

/**
 * D-8 Member Countries with coordinates for map display
 */
export const memberCountries: MemberCountry[] = [
  {
    name: 'Bangladesh',
    code: 'BD',
    iso3: 'BGD',
    flag: 'https://flagcdn.com/bd.svg',
    coordinates: [90.3563, 23.6850], // Dhaka
    capital: 'Dhaka',
    color: '#00A859', // Bangladesh bright green (from flag)
  },
  {
    name: 'Egypt',
    code: 'EG',
    iso3: 'EGY',
    flag: 'https://flagcdn.com/eg.svg',
    coordinates: [31.2357, 30.0444], // Cairo
    capital: 'Cairo',
    color: '#FF0000', // Egypt bright red (from flag)
  },
  {
    name: 'Indonesia',
    code: 'ID',
    iso3: 'IDN',
    flag: 'https://flagcdn.com/id.svg',
    coordinates: [106.8456, -6.2088], // Jakarta
    capital: 'Jakarta',
    color: '#FF0000', // Indonesia bright red (from flag)
  },
  {
    name: 'Iran',
    code: 'IR',
    iso3: 'IRN',
    flag: 'https://flagcdn.com/ir.svg',
    coordinates: [51.3890, 35.6892], // Tehran
    capital: 'Tehran',
    color: '#28BD5C', // Iran bright green (from flag)
  },
  {
    name: 'Malaysia',
    code: 'MY',
    iso3: 'MYS',
    flag: 'https://flagcdn.com/my.svg',
    coordinates: [101.6869, 3.1390], // Kuala Lumpur
    capital: 'Kuala Lumpur',
    color: '#0066CC', // Malaysia blue (from flag)
  },
  {
    name: 'Nigeria',
    code: 'NG',
    iso3: 'NGA',
    flag: 'https://flagcdn.com/ng.svg',
    coordinates: [7.4951, 9.0765], // Abuja
    capital: 'Abuja',
    color: '#00A850', // Nigeria bright green (from flag)
  },
  {
    name: 'Pakistan',
    code: 'PK',
    iso3: 'PAK',
    flag: 'https://flagcdn.com/pk.svg',
    coordinates: [73.0479, 33.6844], // Islamabad
    capital: 'Islamabad',
    color: '#01954F', // Pakistan bright green (from flag)
  },
  {
    name: 'Türkiye',
    code: 'TR',
    iso3: 'TUR',
    flag: 'https://flagcdn.com/tr.svg',
    coordinates: [32.8597, 39.9334], // Ankara
    capital: 'Ankara',
    color: '#E30A17', // Turkey bright red (from flag)
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    iso3: 'AZE',
    flag: 'https://flagcdn.com/az.svg',
    coordinates: [49.8671, 40.4093], // Baku
    capital: 'Baku',
    color: '#0092BC', // Azerbaijan blue (from flag)
  },
];

/**
 * D-8 Key Statistics
 */
export const d8Statistics: Statistic[] = [
  {
    value: '1.2B',
    label: 'Population',
    description: 'Combined population of D-8 member countries',
  },
  {
    value: '$4.7T',
    label: 'Combined GDP',
    description: 'Total GDP of all member nations',
  },
  {
    value: '27',
    label: 'Years',
    description: 'Since establishment in 1997',
  },
  {
    value: '8',
    label: 'Member Countries',
    description: 'Developing nations with large Muslim populations',
  },
];

/**
 * Summit 2026 Statistics
 */
export const summitStatistics: Statistic[] = [
  { value: '8', label: 'Member Countries' },
  { value: '1.2B', label: 'Combined Population' },
  { value: '$4.7T', label: 'Combined GDP' },
  { value: '11th', label: 'Summit Edition' },
];

/**
 * Theme and Tagline
 */
export const theme = {
  title: 'Navigating Global Shifts',
  subtitle:
    'Strengthening Equality, Solidarity, and Cooperation for Shared Prosperity',
  shortDescription:
    'Indonesia proudly serves as Chair of the Developing-8 Countries Organization for Economic Cooperation (D-8) for 2026–2027, advancing multilateral cooperation among member nations for sustainable development and shared prosperity.',
};

/**
 * Summit 2026 Details
 */
export const summit2026 = {
  title: '11th D-8 Summit',
  date: '14 April 2026',
  venue: 'Jakarta International Convention Center',
  location: 'Jakarta, Indonesia',
  description:
    'The 11th Summit of the Developing-8 Organization for Economic Cooperation brings together leaders from member countries to advance shared priorities and strengthen multilateral cooperation.',
};

/**
 * Organization Details
 */
export const organizationInfo = {
  name: 'Developing-8 (D-8)',
  fullName: 'D-8 Organization for Economic Cooperation',
  established: '1997',
  description:
    'The D-8 Organization for Economic Cooperation is a forum of developing countries with large Muslim populations. Established in 1997, D-8 aims to improve member states\' position in the global economy, diversify and create new opportunities in trade relations, enhance participation in decision-making at the international level, and improve the standard of living of people.',
  extendedDescription:
    'With a combined population of over 1.2 billion people and a combined GDP of $4.7 trillion, D-8 member countries represent significant economic potential and are committed to advancing South-South cooperation.',
};
