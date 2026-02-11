import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Award, TrendingUp, Users, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Business & Halal Economy | D-8 Indonesia Chairmanship',
  description: 'Business & Investment Forum and Halal Expo during D-8 Summit 2026.',
};

export default function BusinessHalalPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="display" textColor="onDark" as="h1">
              Business & Halal Economy
            </Typography>
            <Typography variant="h3" textColor="onDark" className="font-normal max-w-4xl mx-auto">
              Unlocking Economic Opportunities Across D-8 Member Countries
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Two Main Events */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <Grid cols={2} gap="lg">
            {/* Business Forum */}
            <Card className="border-t-4 border-t-[#055090]">
              <CardHeader>
                <div className="mb-4 p-4 rounded-lg bg-[#055090]/10 w-fit">
                  <Briefcase className="h-12 w-12 text-[#055090]" />
                </div>
                <CardTitle className="text-2xl mb-3">
                  Business & Investment Forum
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  A premier platform connecting private sector leaders, investors, and
                  entrepreneurs from D-8 countries to explore partnerships and
                  investment opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#055090]" />
                    <Typography variant="bodySmall">B2B matchmaking sessions</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#055090]" />
                    <Typography variant="bodySmall">Investment showcases</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#055090]" />
                    <Typography variant="bodySmall">Trade facilitation workshops</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#055090]" />
                    <Typography variant="bodySmall">Sector-specific roundtables</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Halal Expo */}
            <Card className="border-t-4 border-t-[#00B3AA]">
              <CardHeader>
                <div className="mb-4 p-4 rounded-lg bg-[#00B3AA]/10 w-fit">
                  <Award className="h-12 w-12 text-[#00B3AA]" />
                </div>
                <CardTitle className="text-2xl mb-3">D-8 Halal Expo</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Showcasing the vibrant halal economy ecosystem across D-8 member
                  countries, featuring products, services, and certification standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00B3AA]" />
                    <Typography variant="bodySmall">Halal product exhibitions</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00B3AA]" />
                    <Typography variant="bodySmall">
                      Certification standards forum
                    </Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00B3AA]" />
                    <Typography variant="bodySmall">Market access opportunities</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00B3AA]" />
                    <Typography variant="bodySmall">Innovation showcase</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Halal Economy Potential */}
      <Section variant="muted" padding="lg">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Halal Economy Potential
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] max-w-3xl mx-auto">
              The global halal market represents a $2.3 trillion opportunity,
              with D-8 countries positioned as key players.
            </Typography>
          </div>

          <Grid cols={3} gap="lg">
            {[
              { value: '$2.3T', label: 'Global Halal Market', color: '#00B3AA' },
              { value: '1.8B', label: 'Muslim Consumers', color: '#055090' },
              { value: '35%', label: 'Annual Growth Rate', color: '#2BB5E9' },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Typography
                    variant="display"
                    className="mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </Typography>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Investment Opportunities */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Investment Opportunities
          </Typography>

          <Grid cols={3} gap="lg">
            {[
              {
                icon: TrendingUp,
                title: 'Infrastructure Development',
                description:
                  'Transportation, energy, and digital infrastructure projects across D-8 countries.',
              },
              {
                icon: Globe,
                title: 'Technology & Innovation',
                description:
                  'Fintech, e-commerce, and digital solutions targeting D-8 markets.',
              },
              {
                icon: Award,
                title: 'Manufacturing & Industry',
                description:
                  'Halal food processing, pharmaceuticals, and consumer goods production.',
              },
              {
                icon: Users,
                title: 'Services Sector',
                description:
                  'Tourism, education, healthcare, and professional services.',
              },
              {
                icon: Briefcase,
                title: 'Agriculture & Food',
                description:
                  'Sustainable agriculture, food security, and halal supply chains.',
              },
              {
                icon: CheckCircle2,
                title: 'Green Economy',
                description:
                  'Renewable energy, carbon markets, and sustainable development projects.',
              },
            ].map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-[#055090] mb-3" />
                    <CardTitle className="text-lg mb-2">{opportunity.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Participation Benefits */}
      <Section variant="secondary" padding="lg">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" textColor="onDark" className="mb-4">
              Why Participate?
            </Typography>
          </div>

          <Grid cols={2} gap="lg">
            {[
              {
                title: 'Market Access',
                description:
                  'Direct access to 1.2 billion consumers across eight dynamic economies.',
              },
              {
                title: 'Strategic Partnerships',
                description:
                  'Connect with government officials, industry leaders, and investors.',
              },
              {
                title: 'Knowledge Exchange',
                description:
                  'Learn best practices, regulatory frameworks, and market insights.',
              },
              {
                title: 'Networking Opportunities',
                description:
                  'Build relationships through structured B2B sessions and social events.',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg bg-white/10">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <Typography variant="h4" textColor="onDark" className="mb-2">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body" textColor="onDark">
                    {benefit.description}
                  </Typography>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="default" padding="md">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="h2" className="text-[#055090]">
              Get Involved
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] max-w-2xl mx-auto">
              Register for the Business & Investment Forum and Halal Expo.
            </Typography>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Register Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/documents">Download Prospectus</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
