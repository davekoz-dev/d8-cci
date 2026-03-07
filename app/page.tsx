"use client"
import { Hero } from '@/components/home/Hero';
import { D8CciOverview } from '@/components/home/D8CciOverview';
import { BusinessLeaderForum } from '@/components/home/BusinessLeaderForum';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { PrioritiesGrid } from '@/components/home/PrioritiesGrid';
import { BusinessHalalTeaser } from '@/components/home/BusinessHalalTeaser';
import { SummitHighlight } from '@/components/home/SummitHighlight';
import { NewsReleases } from '@/components/home/NewsReleases';
import { D8Overview } from '@/components/home/D8Overview';
import { PalestineTeaser } from '@/components/home/PalestineTeaser';

/**
 * D-8 CCI Portal — Home Page
 *
 * Information Hierarchy:
 *   PRIMARY   — D-8 CCI (Hero + CCI Overview)
 *   SECONDARY — Business Leaders Forum 2026
 *   TERTIARY  — Events, Business priorities, Halal Expo, D-8 Summit, Organization overview, Palestine
 */

export default function Home() {
  return (
    <>
      {/* ── PRIMARY: D-8 CCI ─────────────────────────────── */}
      <Hero />
      <D8CciOverview />

      {/* ── SECONDARY: Flagship Event ────────────────────── */}
      <BusinessLeaderForum />

      {/* ── TERTIARY: Supporting Content ─────────────────── */}
      <UpcomingEvents />
      <PrioritiesGrid />
      <BusinessHalalTeaser />
      <SummitHighlight />
      <NewsReleases />
      <D8Overview />
      <PalestineTeaser />
    </>
  );
}
