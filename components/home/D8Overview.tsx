import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { organizationInfo } from '@/lib/constants';
import { Globe, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

/**
 * About the D-8 Organization — Contextual Section
 *
 * Merged from the former standalone /about-d8 page.
 * Provides organisation overview, key objectives, and a brief history timeline.
 */

const objectives = [
  {
    icon: TrendingUp,
    title: 'Economic Development',
    description:
      'Improve member states\' position in the global economy and enhance economic cooperation.',
  },
  {
    icon: Globe,
    title: 'Trade Relations',
    description:
      'Diversify and create new opportunities in trade relations among member countries.',
  },
  {
    icon: Users,
    title: 'Global Participation',
    description:
      'Enhance participation in decision-making at the international level.',
  },
  {
    icon: Calendar,
    title: 'Quality of Life',
    description:
      'Improve the standard of living and quality of life for people in member nations.',
  },
];

const history = [
  {
    year: '1997',
    title: 'Foundation',
    description:
      'D-8 was established on June 15, 1997, in Istanbul, Türkiye, with the Istanbul Declaration, bringing together eight developing nations with large Muslim populations for economic cooperation.',
    color: '#00B3AA',
  },
  {
    year: '2001',
    title: 'Expansion of Cooperation',
    description:
      'Member countries expanded cooperation areas to include trade, agriculture, industry, and tourism, establishing working groups for each sector.',
    color: '#055090',
  },
  {
    year: '2026',
    title: 'Indonesia\'s Chairmanship',
    description:
      'Indonesia assumes the D-8 Chairmanship with a focus on navigating global shifts and strengthening cooperation for shared prosperity.',
    color: '#2BB5E9',
  },
];

export function D8Overview() {
  return (
    <Section variant="default" padding="lg" id="about-d8">
      <Container size="lg">
        {/* ── Intro ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6" data-aos="fade-up">
            <Badge variant="outline" className="text-sm px-4 py-1 border-[#055090] text-[#055090]">
              Est. {organizationInfo.established}
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
          </div>

          {/* Quick Stats */}
          <div data-aos="fade-up" data-aos-delay="150">
            <div className="p-6 rounded-lg bg-gradient-to-br from-[#055090] to-[#00B3AA] text-white">
              <Typography variant="h4" textColor="onDark" className="mb-4">
                D-8 At a Glance
              </Typography>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Typography variant="h3" textColor="onDark">1.2B</Typography>
                  <Typography variant="caption" textColor="onDark">Population</Typography>
                </div>
                <div>
                  <Typography variant="h3" textColor="onDark">$4.7T</Typography>
                  <Typography variant="caption" textColor="onDark">Combined GDP</Typography>
                </div>
                <div>
                  <Typography variant="h3" textColor="onDark">27</Typography>
                  <Typography variant="caption" textColor="onDark">Years</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Objectives (from former /about-d8 page) ─────── */}
        <div className="mt-16">
          <Typography variant="h3" className="text-[#282561] text-center mb-8" data-aos="fade-in">
            D-8 Objectives
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.title}
                  className="flex gap-4 p-5 rounded-xl bg-[#F7F8F9] border border-gray-100 hover:shadow-sm transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-[#055090]/10 h-fit">
                    <Icon className="h-5 w-5 text-[#055090]" />
                  </div>
                  <div>
                    <Typography variant="h4" className="text-[#282561] text-base font-semibold mb-1">
                      {obj.title}
                    </Typography>
                    <Typography variant="bodySmall" className="text-[#414042]/70 leading-relaxed">
                      {obj.description}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── History Timeline (from former /about-d8 page) ─ */}
        <div className="mt-16">
          <Typography variant="h3" className="text-[#282561] text-center mb-8" data-aos="fade-in">
            Key Milestones
          </Typography>
          <div className="space-y-4 max-w-3xl mx-auto">
            {history.map((item, i) => (
              <div
                key={item.year}
                className="border-l-4 pl-6 py-4"
                style={{ borderLeftColor: item.color }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <Typography variant="h4" className="text-[#282561] mb-1">
                  {item.year}: {item.title}
                </Typography>
                <Typography variant="body" className="text-[#414042]">
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
