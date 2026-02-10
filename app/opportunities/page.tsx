/**
 * D-8 CCI Business Opportunities Page
 * Showcases business opportunities, investment proposals, and trade opportunities
 */

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { OpportunityCard } from '@/components/shared/OpportunityCard';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import { Button } from '@/components/ui/button';
import { TrendingUp, Handshake, Ship, Users } from 'lucide-react';
import type { BusinessOpportunity } from '@/lib/types/d8-cci';

export const metadata = {
  title: 'Business Opportunities | D-8 CCI',
  description:
    'Explore investment opportunities, joint ventures, and trade partnerships across D-8 member countries.',
};

// Sample opportunities data
const sampleOpportunities: BusinessOpportunity[] = [
  {
    id: 'halal-food-1',
    title: 'Halal Food Processing Joint Venture',
    country: 'Malaysia',
    sector: 'Halal Industry',
    type: 'joint-venture',
    description:
      'Seeking partners for establishing halal-certified food processing facility with export capabilities to D-8 markets. Focus on packaged foods, ready-to-eat meals, and beverages.',
    investmentSize: '$5M - $10M',
    contactEmail: 'opportunities@nccim.org.my',
    deadline: '30 June 2026',
    status: 'open',
  },
  {
    id: 'textile-1',
    title: 'Textile Manufacturing Investment Opportunity',
    country: 'Bangladesh',
    sector: 'Textiles & Garments',
    type: 'investment',
    description:
      'Investment opportunity in state-of-the-art textile manufacturing facility. Access to skilled workforce, competitive costs, and preferential trade agreements with D-8 countries.',
    investmentSize: '$10M+',
    contactEmail: 'invest@fbcci.org',
    status: 'open',
  },
  {
    id: 'agri-tech-1',
    title: 'Agricultural Technology Partnership',
    country: 'Indonesia',
    sector: 'Agriculture',
    type: 'partnership',
    description:
      'Partnership opportunity for agricultural technology transfer and implementation. Focus on sustainable farming practices, irrigation systems, and post-harvest processing.',
    contactEmail: 'partnerships@kadin.id',
    status: 'open',
  },
  {
    id: 'renewable-1',
    title: 'Renewable Energy Trade Agreement',
    country: 'Turkey',
    sector: 'Renewable Energy',
    type: 'trade',
    description:
      'Trade opportunity for solar panel components and wind turbine parts. Seeking long-term supply agreements with D-8 member countries for clean energy transition.',
    investmentSize: 'Trade Agreement',
    contactEmail: 'trade@tobb.org.tr',
    status: 'open',
  },
  {
    id: 'pharma-1',
    title: 'Pharmaceutical Manufacturing Joint Venture',
    country: 'Pakistan',
    sector: 'Pharmaceuticals',
    type: 'joint-venture',
    description:
      'Opportunity to establish pharmaceutical manufacturing facility with distribution network across D-8 countries. Focus on generic medicines and healthcare products.',
    investmentSize: '$8M - $15M',
    contactEmail: 'business@fpcci.org.pk',
    deadline: '31 August 2026',
    status: 'under-review',
  },
  {
    id: 'tourism-1',
    title: 'Tourism & Hospitality Investment',
    country: 'Egypt',
    sector: 'Tourism',
    type: 'investment',
    description:
      'Investment in eco-tourism and heritage tourism infrastructure. Access to growing tourism market with support from Egyptian government incentives.',
    investmentSize: '$15M+',
    contactEmail: 'tourism@fedcoc.org.eg',
    status: 'open',
  },
];

export default function OpportunitiesPage() {
  const openOpportunities = sampleOpportunities.filter((o) => o.status === 'open');
  const underReview = sampleOpportunities.filter((o) => o.status === 'under-review');

  return (
    <>
      {/* Hero Section */}
      <SupergraphicSection variant="whiteOnTurquoise" className="py-20">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="display" className="mb-6">
              Business Opportunities
            </Typography>
            <Typography variant="bodyLarge">
              Explore investment opportunities, joint ventures, trade partnerships, and
              business collaborations across D-8 member countries.
            </Typography>
          </div>
        </Container>
      </SupergraphicSection>

      {/* Opportunity Categories */}
      <Section>
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Types of Opportunities
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              D-8 CCI facilitates various types of business opportunities to promote
              economic cooperation among member countries.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#055090] to-[#055090]/80 text-white rounded-lg p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Investment Opportunities</h3>
              <p className="text-sm text-white/90">
                Foreign direct investment and capital investment projects
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#00B3AA] to-[#00B3AA]/80 text-white rounded-lg p-6 text-center">
              <Handshake className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Joint Ventures</h3>
              <p className="text-sm text-white/90">
                Collaborative business ventures and partnerships
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2BB5E9] to-[#2BB5E9]/80 text-white rounded-lg p-6 text-center">
              <Ship className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Trade Opportunities</h3>
              <p className="text-sm text-white/90">
                Import/export and supply chain partnerships
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#282561] to-[#282561]/80 text-white rounded-lg p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Strategic Partnerships</h3>
              <p className="text-sm text-white/90">
                Technology transfer and knowledge collaborations
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Open Opportunities */}
      <Section className="bg-[#F7F8F9]">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Current Opportunities
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              Browse current business opportunities available across D-8 member countries.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Sector Focus */}
      <Section>
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Priority Sectors
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              D-8 CCI focuses on high-potential sectors for cooperation and investment
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Halal Industry',
              'Biotechnology',
              'Renewable Energy',
              'Agriculture',
              'Manufacturing',
              'Tourism',
              'SME Development',
              'Digital Services',
              'Healthcare',
              'Infrastructure',
              'Financial Services',
              'Education',
            ].map((sector) => (
              <div
                key={sector}
                className="bg-white border-2 border-[#F7F8F9] hover:border-[#00B3AA] rounded-lg p-4 text-center transition-colors"
              >
                <p className="font-medium text-[#414042]">{sector}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Submit Opportunity CTA */}
      <Section className="bg-gradient-to-br from-[#055090] to-[#00B3AA] text-white">
        <Container size="md">
          <div className="text-center">
            <Typography variant="h2" className="mb-4">
              Submit Your Business Opportunity
            </Typography>
            <Typography variant="bodyLarge" className="mb-8 text-[#F7F8F9]">
              Are you a business from a D-8 member country looking for partners,
              investors, or trade opportunities? Submit your proposal through your
              national chamber.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#055090] hover:bg-[#F7F8F9]"
              >
                <a href="/members">Contact Your Chamber</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <a href="/contact">Contact D-8 CCI</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Investment Climate Info */}
      <Section>
        <Container size="lg">
          <div className="bg-[#F7F8F9] rounded-lg p-8 md:p-12">
            <Typography variant="h2" className="text-[#055090] mb-6 text-center">
              Investment Climate Support
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Typography variant="h4" className="text-[#00B3AA] mb-3">
                  Our Commitment
                </Typography>
                <Typography variant="body" className="text-[#414042]">
                  D-8 CCI is committed to improving the investment climate across member
                  countries by facilitating dialogue, providing market intelligence, and
                  supporting policy reforms that enhance foreign investment.
                </Typography>
              </div>
              <div>
                <Typography variant="h4" className="text-[#00B3AA] mb-3">
                  Support Services
                </Typography>
                <ul className="space-y-2 text-[#414042]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B3AA]">•</span>
                    <span>Market research and data services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B3AA]">•</span>
                    <span>Business matching and facilitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B3AA]">•</span>
                    <span>Regulatory guidance and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B3AA]">•</span>
                    <span>Dispute resolution mechanisms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
