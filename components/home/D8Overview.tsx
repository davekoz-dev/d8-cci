import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { memberCountries, organizationInfo } from '@/lib/constants';

/**
 * About D-8 Overview Component
 *
 * Features:
 * - Short paragraph about D-8 organization
 * - Member countries
 * - Key statistics
 * - Link to full About D-8 page
 */

export function D8Overview() {
  return (
    <Section variant="default" padding="lg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6" data-aos="fade-up">
            <Badge variant="outline" className="text-sm px-4 py-1 border-[#055090] text-[#055090]">
              Est. 1997
            </Badge>

            <div className="space-y-4">
              <Typography variant="h2" className="text-[#055090]">
                About the Developing-8
              </Typography>
              <Typography variant="bodyLarge" className="text-[#414042]">
                {organizationInfo.description}
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                {organizationInfo.extendedDescription}
              </Typography>
            </div>

            <Button asChild size="lg" variant="outline">
              <Link href="/about-d8">Learn More About D-8</Link>
            </Button>
          </div>

          {/* Member Countries */}
          <div data-aos="fade-up" data-aos-delay="150">
            <Typography variant="h3" className="text-[#282561] mb-6">
              8 Member Countries
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              {memberCountries.map((country) => (
                <div
                  key={country.code}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#F7F8F9] border border-[#E5E7EB] hover:border-[#055090] transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-[#00B3AA]" />
                  <Typography variant="body" className="font-medium text-[#414042]">
                    {country.name}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-[#055090] to-[#00B3AA] text-white">
              <Typography variant="h4" textColor="onDark" className="mb-4">
                D-8 At a Glance
              </Typography>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Typography variant="h3" textColor="onDark">
                    1.2B
                  </Typography>
                  <Typography variant="caption" textColor="onDark">
                    Population
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" textColor="onDark">
                    $4.7T
                  </Typography>
                  <Typography variant="caption" textColor="onDark">
                    Combined GDP
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" textColor="onDark">
                    27
                  </Typography>
                  <Typography variant="caption" textColor="onDark">
                    Years
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
