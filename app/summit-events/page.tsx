import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { summit2026, summitStatistics } from '@/lib/constants';
import { Calendar, MapPin, Users, Briefcase, Award, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Summit & Events | D-8 Indonesia Chairmanship 2026-2027',
  description: '11th D-8 Summit and related events during Indonesia\'s Chairmanship.',
};

export default function SummitEventsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                {summit2026.title}
              </Badge>
              <Typography variant="display" color="onDark" as="h1">
                D-8 Summit 2026
              </Typography>
              <Typography variant="bodyLarge" color="onDark">
                {summit2026.description}
              </Typography>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-white">
                  <Calendar className="h-5 w-5 text-[#00B3AA]" />
                  <Typography variant="body" color="onDark">
                    {summit2026.date}
                  </Typography>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="h-5 w-5 text-[#00B3AA]" />
                  <Typography variant="body" color="onDark">
                    {summit2026.venue}, {summit2026.location}
                  </Typography>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Users className="h-5 w-5 text-[#00B3AA]" />
                  <Typography variant="body" color="onDark">
                    Leaders from 8 Member Countries
                  </Typography>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {summitStatistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-lg p-6 text-center border border-white/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Typography variant="display" color="onDark" className="text-4xl mb-2">
                    {stat.value}
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

      {/* Summit Agenda */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <Typography variant="h2" className="text-[#055090] mb-8" data-aos="fade-in">
            Summit Agenda
          </Typography>

          <div className="space-y-6">
            {[
              {
                session: 'Opening Ceremony',
                description:
                  'Welcome addresses by Indonesian leadership and D-8 Secretary-General',
              },
              {
                session: 'Heads of State Session',
                description:
                  'Closed-door discussions on strategic priorities and cooperation frameworks',
              },
              {
                session: 'Palestine Special Session',
                description:
                  'Dedicated session on solidarity with Palestine and humanitarian support',
              },
              {
                session: 'Five Priorities Roundtable',
                description:
                  'Interactive discussions on economic integration, halal economy, blue economy, digital transformation, and organizational reform',
              },
              {
                session: 'Jakarta Declaration',
                description:
                  'Adoption of joint declaration outlining commitments and action plans',
              },
              {
                session: 'Closing Ceremony',
                description: 'Press conference and handover ceremony to next Chair',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-[#F7F8F9] border border-[#E5E7EB]"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#055090] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <Typography variant="h4" className="text-[#282561] mb-2">
                    {item.session}
                  </Typography>
                  <Typography variant="body" className="text-[#414042]">
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Events */}
      <Section variant="muted" padding="lg">
        <Container size="xl">
          <div className="text-center mb-12" data-aos="fade-in">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Related Events
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] max-w-3xl mx-auto">
              A series of high-level meetings and events complement the main summit.
            </Typography>
          </div>

          <Grid cols={2} gap="lg">
            {[
              {
                icon: Briefcase,
                title: 'Business & Investment Forum',
                date: 'April 13-14, 2026',
                description:
                  'Platform for private sector leaders to explore partnerships, investment opportunities, and B2B matchmaking across D-8 member countries.',
                color: '#055090',
              },
              {
                icon: Award,
                title: 'D-8 Halal Expo',
                date: 'April 13-15, 2026',
                description:
                  'Showcase of halal products, services, certification standards, and market opportunities from all member nations.',
                color: '#00B3AA',
              },
              {
                icon: FileText,
                title: 'Senior Officials Meeting (SOM)',
                date: 'April 10-11, 2026',
                description:
                  'Preparatory meeting to finalize summit agenda, review draft declarations, and coordinate logistics.',
                color: '#2BB5E9',
              },
              {
                icon: Globe,
                title: 'Ministerial Meetings',
                date: 'April 12, 2026',
                description:
                  'Sector-specific ministerial consultations on trade, finance, agriculture, and technology cooperation.',
                color: '#00B9F0',
              },
            ].map((event, index) => {
              const Icon = event.icon;
              return (
                <Card
                  key={index}
                  className="border-l-4 hover:shadow-lg transition-shadow"
                  style={{ borderLeftColor: event.color }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader>
                    <div
                      className="mb-4 p-3 rounded-lg w-fit"
                      style={{ backgroundColor: `${event.color}15` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: event.color }} />
                    </div>
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {event.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Venue Information */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <Grid cols={2} gap="lg" className="items-center">
            <div className="space-y-6">
              <Typography variant="h2" className="text-[#055090]">
                Venue
              </Typography>
              <Typography variant="h3" className="text-[#282561]">
                Jakarta International Convention Center
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                A world-class facility in the heart of Jakarta, equipped with modern
                conference halls, state-of-the-art technology, and capacity to host
                international summits and exhibitions.
              </Typography>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#055090]" />
                  <Typography variant="body" className="text-[#414042]">
                    Central Jakarta, Indonesia
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#055090]" />
                  <Typography variant="body" className="text-[#414042]">
                    Capacity: 5,000+ delegates
                  </Typography>
                </div>
              </div>
            </div>

            <Card className="bg-[#F7F8F9]">
              <CardContent className="p-8">
                <Typography variant="h4" className="text-[#282561] mb-4">
                  Getting There
                </Typography>
                <ul className="space-y-3 text-sm text-[#414042]">
                  <li>• 30 minutes from Soekarno-Hatta International Airport</li>
                  <li>• Connected to major hotels via shuttle services</li>
                  <li>• Accessible by public transportation</li>
                  <li>• Ample parking facilities available</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="secondary" padding="md">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="h2" color="onDark">
              Join Us
            </Typography>
            <Typography variant="bodyLarge" color="onDark" className="max-w-2xl mx-auto">
              For media inquiries, registration, or more information about summit events.
            </Typography>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white text-[#00B3AA]">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-[#00B3AA]">
                <Link href="/documents">Download Media Kit</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
