import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

/**
 * Palestine & Solidarity Teaser Component
 *
 * Features:
 * - Short solidarity statement
 * - Link to dedicated Palestine page
 * - Special session focus
 */

export function PalestineTeaser() {
  return (
    <Section variant="secondary" padding="md">
      <Container size="lg">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className="p-4 rounded-full bg-white/20 backdrop-blur" data-aos="fade-in">
            <Heart className="h-12 w-12 text-white" fill="white" />
          </div>

          {/* Content */}
          <div className="space-y-4 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="h2" textColor="onDark">
              Palestine & Solidarity
            </Typography>
            <Typography variant="bodyLarge" textColor="onDark">
              The D-8 Summit 2026 will feature a special session dedicated to
              expressing solidarity with the Palestinian people and addressing
              the humanitarian situation in Palestine.
            </Typography>
            <Typography variant="body" textColor="onDark">
              D-8 member countries reaffirm their commitment to supporting
              Palestine&apos;s right to self-determination and working towards a
              just and lasting peace in the region.
            </Typography>
          </div>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white hover:text-[#00B3AA]"
          >
            <Link href="/palestine">Read Full Statement</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
