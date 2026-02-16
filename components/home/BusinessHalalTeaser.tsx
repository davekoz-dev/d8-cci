import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { AnimatedCard } from '@/components/ui/Animated';
import { Briefcase, Award } from 'lucide-react';

/**
 * Business & Halal Economy Teaser Component
 *
 * Features:
 * - Business & Investment Forum teaser
 * - Halal Expo teaser
 * - CTA to dedicated page
 */

export function BusinessHalalTeaser() {
  return (
    <Section variant="muted" padding="lg">
      <Container size="xl">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-[#055090] mb-4">
            Business & Economic Cooperation
          </Typography>
          <Typography variant="bodyLarge" className="text-[#414042] max-w-3xl mx-auto">
            Strengthening economic ties through business collaboration and
            halal economy development.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Business & Investment Forum */}
          <AnimatedCard delay={0}>
            <Card className="border-l-4 border-l-[#055090]">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-[#055090]/10 w-fit">
                <Briefcase className="h-8 w-8 text-[#055090]" />
              </div>
              <CardTitle className="text-2xl mb-2">
                Business & Investment Forum
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                A platform for private sector leaders, investors, and
                entrepreneurs from D-8 countries to explore partnerships,
                investment opportunities, and trade collaboration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[#414042]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00B3AA] mt-1">•</span>
                  <span>B2B matchmaking sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00B3AA] mt-1">•</span>
                  <span>Investment showcases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00B3AA] mt-1">•</span>
                  <span>Trade facilitation workshops</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </AnimatedCard>

          {/* Halal Expo */}
          <AnimatedCard delay={150}>
            <Card className="border-l-4 border-l-[#00B3AA]">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-[#00B3AA]/10 w-fit">
                <Award className="h-8 w-8 text-[#00B3AA]" />
              </div>
              <CardTitle className="text-2xl mb-2">D-8 Halal Expo</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Showcasing the vibrant halal economy ecosystem across D-8
                member countries, featuring halal products, services, and
                certification standards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[#414042]">
                <li className="flex items-start gap-2">
                  <span className="text-[#055090] mt-1">•</span>
                  <span>Halal product exhibitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#055090] mt-1">•</span>
                  <span>Certification and standards forum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#055090] mt-1">•</span>
                  <span>Market access opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </AnimatedCard>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="default">
            <Link href="/business-halal">
              Learn More About These Events
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
