import * as React from 'react';
import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { D8Map } from '@/components/ui/D8Map';
import { theme, summit2026 } from '@/lib/constants';
import Link from 'next/link';

/**
 * Enhanced Hero Section with Interactive Map
 *
 * Features:
 * - D-8 logo with proper clear space
 * - Theme tagline
 * - Interactive Mapbox map showing all member countries
 * - Summit date badge
 * - 2 primary CTAs
 */

export function HeroSectionWithMap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F8F9] to-white">
      <Container size="xl" className="py-12 md:py-20">
        {/* Top Section: Logo and Theme */}
        <div className="text-center mb-12 space-y-6">
          {/* D-8 Logo */}
          <div className="flex justify-center">
            <Logo variant="main" size="lg" priority />
          </div>

          {/* Theme Tagline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <Typography variant="display" className="text-[#055090]" as="h1">
              {theme.title}
            </Typography>
            <Typography variant="h3" className="text-[#282561] font-medium">
              {theme.subtitle}
            </Typography>
          </div>

          {/* Intro Paragraph */}
          <Typography variant="body" className="text-[#414042] max-w-3xl mx-auto">
            {theme.shortDescription}
          </Typography>
        </div>

        {/* Interactive Map Section */}
        {/* <div className="mb-12">
          <div className="mb-6 text-center">
            <Typography variant="h3" className="text-[#055090] mb-2">
              8 Member Countries United
            </Typography>
            <Typography variant="body" className="text-[#414042]">
              Click on country markers to explore D-8 member nations
            </Typography>
          </div>

          <D8Map height="500px" className="mx-auto max-w-6xl" />
        </div> */}

        {/* Summit Badge and CTAs */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Summit Date Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00B3AA] bg-white px-6 py-3 shadow-md">
            <div className="h-2 w-2 rounded-full bg-[#00B3AA] animate-pulse" />
            <Typography variant="bodySmall" className="font-medium text-[#282561]">
              {summit2026.title} • {summit2026.date} • Jakarta
            </Typography>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="default">
              <Link href="/events">View Summit 2026</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about-d8">About D-8</Link>
            </Button>
          </div>
        </div>
      </Container>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#055090]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00B3AA]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
