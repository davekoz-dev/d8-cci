import { HeroSectionWithMap } from '@/components/home/HeroSectionWithMap';
import { PrioritiesGrid } from '@/components/home/PrioritiesGrid';
import { SummitHighlight } from '@/components/home/SummitHighlight';
import { BusinessHalalTeaser } from '@/components/home/BusinessHalalTeaser';
import { D8Overview } from '@/components/home/D8Overview';
import { PalestineTeaser } from '@/components/home/PalestineTeaser';

/**
 * D-8 Indonesia Chairmanship 2026-2027
 * Home Page
 *
 * Structure:
 * 1. Hero Section with Interactive Map - Logo, theme, D-8 member countries map, CTAs
 * 2. Five Priorities Grid - Key focus areas
 * 3. Summit Highlight - Summit 2026 details
 * 4. Business & Halal Expo - Economic cooperation
 * 5. D-8 Overview - About the organization
 * 6. Palestine & Solidarity - Special session focus
 */

export default function Home() {
  return (
    <>
      <HeroSectionWithMap />
      <PrioritiesGrid />
      <SummitHighlight />
      <BusinessHalalTeaser />
      <D8Overview />
      <PalestineTeaser />
    </>
  );
}
