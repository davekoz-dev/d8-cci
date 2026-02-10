import * as React from 'react';
import { Logo } from '@/components/brand/Logo';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

/**
 * Hero Section for D-8 Indonesia Chairmanship Home Page
 *
 * Features:
 * - D-8 logo with proper clear space
 * - Theme tagline
 * - Short intro paragraph
 * - 2 primary CTAs
 * - Optional supergraphic background
 */

export function HeroSection() {
  return (
    <SupergraphicSection
      variant="gradient"
      colorWay="blueOnWhite"
      className="pt-12 pb-20 md:pt-20 md:pb-28"
    >
      <Container size="lg">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* D-8 Logo */}
          <Logo variant="main" size="lg" priority />

          {/* Theme Tagline */}
          <div className="space-y-4 max-w-4xl">
            <Typography
              variant="display"
              className="text-[#055090]"
              as="h1"
            >
              Navigating Global Shifts
            </Typography>
            <Typography
              variant="h2"
              className="text-[#282561] font-medium"
              as="h2"
            >
              Strengthening Equality, Solidarity, and Cooperation for Shared
              Prosperity
            </Typography>
          </div>

          {/* Intro Paragraph */}
          <Typography
            variant="bodyLarge"
            className="text-[#414042] max-w-3xl"
          >
            Indonesia proudly serves as Chair of the Developing-8 Countries
            Organization for Economic Cooperation (D-8) for 2026–2027,
            advancing multilateral cooperation among member nations for
            sustainable development and shared prosperity.
          </Typography>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" variant="default">
              <Link href="/summit-events">View Summit 2026</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about-d8">About D-8</Link>
            </Button>
          </div>

          {/* Summit Date Badge */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00B3AA] bg-white px-6 py-3">
              <div className="h-2 w-2 rounded-full bg-[#00B3AA] animate-pulse" />
              <Typography variant="bodySmall" className="font-medium text-[#282561]">
                11th D-8 Summit • 15 April 2026 • Jakarta
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </SupergraphicSection>
  );
}
