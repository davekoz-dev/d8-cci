/**
 * D-8 CCI Members Page
 * Displays all member chambers with their information
 */

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { MemberCard } from '@/components/shared/MemberCard';
import { D8Map } from '@/components/ui/D8Map';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import { d8CCIMembers } from '@/lib/constants/d8-cci-data';
import { d8Colors } from '@/lib/design-system/tokens/colors';

export const metadata = {
  title: 'Member Chambers | D-8 CCI',
  description:
    'D-8 CCI member chambers representing the national chambers of commerce and industry from eight developing countries.',
};

export default function MembersPage() {
  return (
    <>
      {/* Hero Section */}
      <SupergraphicSection
        colorWay="whiteOnBlue"
        variant="solid"
        className="py-20"
      >
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="display" className="mb-6 text-white">
              D-8 CCI Member Chambers
            </Typography>
            <Typography variant="bodyLarge" className='text-white'>
              Eight national chambers of commerce and industry working together to promote
              private sector engagement, business cooperation, and trade among D-8 member countries.
            </Typography>
          </div>
        </Container>
      </SupergraphicSection>

      {/* Interactive Map Section */}
      <Section className="bg-[#F7F8F9]">
        <Container size="lg">
          <div className="text-center mb-12" data-aos="fade-in">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Member Countries
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              D-8 CCI brings together chambers from Bangladesh, Egypt, Indonesia, Iran,
              Malaysia, Nigeria, Pakistan, and Turkey.
            </Typography>
          </div>
          <div className="bg-white rounded-lg">
            <D8Map />
          </div>
        </Container>
      </Section>

      {/* Member Chambers Grid */}
      <Section>
        <Container size="lg">
          <div className="text-center mb-12" data-aos="fade-in">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Our Member Chambers
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              Each member chamber represents the business community of their respective countries,
              facilitating trade, investment, and economic cooperation.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d8CCIMembers.map((member) => (
              <MemberCard key={member.country} member={member} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact CTA Section */}
      <Section className="bg-gradient-to-br from-[#055090] to-[#00B3AA] text-white">
        <Container size="md">
          <div className="text-center">
            <Typography variant="h2" className="mb-4">
              Connect with Member Chambers
            </Typography>
            <Typography variant="bodyLarge" className="mb-8 text-[#F7F8F9]">
              Interested in partnering with our member chambers? Reach out to explore
              business opportunities and collaboration possibilities.
            </Typography>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-[#055090] font-medium rounded-lg hover:bg-[#F7F8F9] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
