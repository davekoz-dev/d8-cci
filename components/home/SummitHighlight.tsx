import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

/**
 * Summit 2026 Highlight Component
 *
 * Features:
 * - Date: 15 April 2026
 * - Venue: Jakarta International Convention Center
 * - Short description
 * - Link to Summit detail page
 */

export function SummitHighlight() {
  return (
    <Section variant="primary" padding="lg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              11th D-8 Summit
            </Badge>

            <div className="space-y-4">
              <Typography variant="h1" color="onDark" as="h2">
                D-8 Summit 2026
              </Typography>
              <Typography variant="bodyLarge" color="onDark">
                The 11th Summit of the Developing-8 Organization for Economic
                Cooperation brings together leaders from member countries to
                advance shared priorities and strengthen multilateral
                cooperation.
              </Typography>
            </div>

            {/* Event Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <Calendar className="h-5 w-5 text-[#00B3AA]" />
                <Typography variant="body" color="onDark">
                  15 April 2026
                </Typography>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MapPin className="h-5 w-5 text-[#00B3AA]" />
                <Typography variant="body" color="onDark">
                  Jakarta International Convention Center, Indonesia
                </Typography>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Users className="h-5 w-5 text-[#00B3AA]" />
                <Typography variant="body" color="onDark">
                  Leaders from 8 Member Countries
                </Typography>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-[#055090] hover:bg-white/90"
              >
                <Link href="/summit-events">
                  Learn More About the Summit
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element / Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '8', label: 'Member Countries' },
              { number: '1.2B', label: 'Combined Population' },
              { number: '$4.7T', label: 'Combined GDP' },
              { number: '11th', label: 'Summit Edition' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-lg p-6 text-center border border-white/20"
              >
                <Typography
                  variant="display"
                  color="onDark"
                  className="text-4xl mb-2"
                >
                  {stat.number}
                </Typography>
                <Typography variant="bodySmall" color="onDark">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
