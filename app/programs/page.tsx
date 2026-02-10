/**
 * D-8 CCI Programs & Services Page
 * Showcases the programs and services offered by D-8 CCI
 */

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/card';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import {
  Handshake,
  TrendingUp,
  Users,
  BookOpen,
  Ship,
  BarChart,
  CalendarDays,
  Scale,
  Globe,
} from 'lucide-react';

export const metadata = {
  title: 'Programs & Services | D-8 CCI',
  description:
    'Explore D-8 CCI programs and services including business forums, trade facilitation, investment promotion, and knowledge exchange.',
};

const programs = [
  {
    icon: CalendarDays,
    title: 'Business Forums & Events',
    description:
      'Organization and facilitation of Business Forums, Trade Fairs, Joint Display Centers, Exhibitions, Seminars, Conferences, and Publicity Campaigns to enhance business cooperation.',
    color: '#055090',
  },
  {
    icon: Ship,
    title: 'Trade Facilitation',
    description:
      'Removing barriers hindering exchange of goods and services among member states. Identifying and proposing measures to increase trade volume and economic cooperation.',
    color: '#00B3AA',
  },
  {
    icon: Handshake,
    title: 'Investment Promotion',
    description:
      'Promoting investment opportunities and joint ventures among member countries. Making recommendations to safeguard economic and business interests of D-8 countries.',
    color: '#2BB5E9',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Exchange',
    description:
      'Promoting exchange of commercial, technical, industrial management, and scientific information, education, and know-how among member chambers.',
    color: '#00B9F0',
  },
  {
    icon: BarChart,
    title: 'Research & Data Services',
    description:
      'Promoting joint research and development among D-8 member countries. Collecting, collating, and disseminating statistical data for informed decision-making.',
    color: '#282561',
  },
  {
    icon: TrendingUp,
    title: 'Investment Climate Improvement',
    description:
      'Contributing to improvement of investment climate in D-8 countries to enhance foreign investment and create favorable business environments.',
    color: '#055090',
  },
  {
    icon: Scale,
    title: 'Dispute Settlement',
    description:
      'Providing means for settling commercial disputes that might arise among companies of D-8 CCI member chambers through mediation and arbitration services.',
    color: '#00B3AA',
  },
  {
    icon: Globe,
    title: 'International Relations',
    description:
      'Strengthening relations with international trade organizations, bodies, unions, and similar chambers to promote private sector\'s role in socio-economic development.',
    color: '#2BB5E9',
  },
  {
    icon: Users,
    title: 'Business Matching Services',
    description:
      'Facilitating connections between businesses across D-8 member countries to explore trade opportunities, partnerships, and collaborative ventures.',
    color: '#00B9F0',
  },
];

function ProgramCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <Card className="p-6 hover:shadow-xl transition-shadow h-full">
      <div className="flex flex-col h-full">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: color }}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <Typography variant="h4" className="text-[#055090] mb-3">
          {title}
        </Typography>
        <Typography variant="body" className="text-[#414042] flex-1">
          {description}
        </Typography>
      </div>
    </Card>
  );
}

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <SupergraphicSection colorWay="whiteOnTurquoise" variant="geometric-1" className="py-20">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="display" className="mb-6">
              Programs & Services
            </Typography>
            <Typography variant="bodyLarge" className="">
              D-8 CCI provides comprehensive programs and services to facilitate business
              cooperation, trade, investment, and economic development among member countries.
            </Typography>
          </div>
        </Container>
      </SupergraphicSection>

      {/* Programs Grid */}
      <Section>
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Our Core Programs
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              Comprehensive services designed to support private sector engagement and
              facilitate economic cooperation among D-8 member countries.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Multi-Sector Enhancement Section */}
      <Section className="bg-[#F7F8F9]" id="trade">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h2" className="text-[#055090] mb-6">
                Multi-Sector Enhancement
              </Typography>
              <Typography variant="body" className="text-[#414042] mb-4">
                D-8 CCI encourages enhancement across multiple sectors including:
              </Typography>
              <ul className="space-y-3 text-[#414042]">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00B3AA] mt-2 flex-shrink-0" />
                  <span><strong>Trade & Services:</strong> Facilitating cross-border trade and service exchange</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00B3AA] mt-2 flex-shrink-0" />
                  <span><strong>Industry & Manufacturing:</strong> Promoting industrial cooperation and value chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00B3AA] mt-2 flex-shrink-0" />
                  <span><strong>SMEs & Entrepreneurship:</strong> Supporting small and medium enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00B3AA] mt-2 flex-shrink-0" />
                  <span><strong>Agriculture:</strong> Enhancing agricultural productivity and trade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00B3AA] mt-2 flex-shrink-0" />
                  <span><strong>Intra-Regional Tourism:</strong> Promoting tourism among member countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00B3AA] mt-2 flex-shrink-0" />
                  <span><strong>Handicrafts:</strong> Supporting traditional crafts and artisans</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#055090] to-[#00B3AA] rounded-lg p-8 text-white">
              <Typography variant="h3" className="mb-4">
                Collective Self-Reliance
              </Typography>
              <Typography variant="body" className="mb-6">
                Our programs promote collective self-reliance by harnessing complementarities
                and establishing value and supply chains among member countries.
              </Typography>
              <Typography variant="body">
                We propose mutually advantageous economic policies that benefit all D-8
                member nations and their private sectors.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container size="md">
          <div className="text-center bg-[#F7F8F9] rounded-lg p-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Access Our Services
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] mb-8 max-w-xl mx-auto">
              Interested in leveraging D-8 CCI programs and services for your business?
              Get in touch with us or your national chamber.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-[#055090] text-white font-medium rounded-lg hover:bg-[#055090]/90 transition-colors"
              >
                Contact D-8 CCI
              </a>
              <a
                href="/members"
                className="inline-block px-8 py-3 border-2 border-[#055090] text-[#055090] font-medium rounded-lg hover:bg-[#055090] hover:text-white transition-colors"
              >
                View Member Chambers
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
