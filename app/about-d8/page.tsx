import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { memberCountries, organizationInfo, d8Statistics } from '@/lib/constants';
import { Globe, Users, TrendingUp, Calendar } from 'lucide-react';
import { d8CCIMembers } from '@/lib/constants/d8-cci-data';
import Image from 'next/image';
export const metadata = {
  title: 'About D-8 | D-8 Indonesia Chairmanship 2026-2027',
  description: 'Learn about the Developing-8 Organization for Economic Cooperation, its member countries, objectives, and achievements.',
};

export default function AboutD8Page() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Est. {organizationInfo.established}
            </Badge>
            <Typography variant="display" textColor="onDark" as="h1">
              About D-8
            </Typography>
            <Typography variant="h3" textColor="onDark" className="font-normal max-w-3xl mx-auto">
              {organizationInfo.fullName}
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <div className="prose prose-lg max-w-none">
            <Typography variant="bodyLarge" className="text-[#414042] mb-6">
              {organizationInfo.description}
            </Typography>
            <Typography variant="body" className="text-[#414042]">
              {organizationInfo.extendedDescription}
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Statistics */}
      <Section variant="muted" padding="md">
        <Container size="xl">
          <Grid cols={4} gap="lg">
            {d8Statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Typography variant="display" className="text-[#055090]">
                    {stat.value}
                  </Typography>
                  <Typography variant="h4" className="text-[#282561]">
                    {stat.label}
                  </Typography>
                </CardHeader>
                {stat.description && (
                  <CardContent>
                    <Typography variant="bodySmall" className="text-[#414042]">
                      {stat.description}
                    </Typography>
                  </CardContent>
                )}
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Member Countries */}
      <Section variant="default" padding="lg" id="members">
        <Container size="xl">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Member Countries
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] max-w-3xl mx-auto">
              D-8 brings together eight developing nations committed to economic
              cooperation and South-South solidarity.
            </Typography>
          </div>

          <Grid cols={4} gap="md">
            {d8CCIMembers?.map((country) => (
              <Card
                key={country.flag}
                className="hover:shadow-lg transition-shadow border-t-4 border-t-[#00B3AA] bg-[#F7F8F9]"
              >
                <CardHeader className="text-center flex items-center">
                  <div className="relative w-16 h-12 flex-shrink-0">
                    <Image
                      src={country.flag}
                      alt={`${country.country} flag`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <CardTitle className="text-lg">{country.country}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Objectives */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" textColor="onDark" className="mb-4">
              Objectives
            </Typography>
          </div>

          <Grid cols={2} gap="lg">
            {[
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
            ].map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-white/10 backdrop-blur"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-[#00B3AA]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Typography variant="h4" textColor="onDark" className="mb-2">
                      {objective.title}
                    </Typography>
                    <Typography variant="body" textColor="onDark">
                      {objective.description}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* History */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <Typography variant="h2" className="text-[#055090] mb-8">
            History
          </Typography>
          <div className="space-y-6">
            <div className="border-l-4 border-[#00B3AA] pl-6 py-4">
              <Typography variant="h4" className="text-[#282561] mb-2">
                1997: Foundation
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                D-8 was established on June 15, 1997, in Istanbul, Turkey, with the
                Istanbul Declaration, bringing together eight developing nations
                with large Muslim populations for economic cooperation.
              </Typography>
            </div>
            <div className="border-l-4 border-[#055090] pl-6 py-4">
              <Typography variant="h4" className="text-[#282561] mb-2">
                2001: Expansion of Cooperation
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                Member countries expanded cooperation areas to include trade,
                agriculture, industry, and tourism, establishing working groups
                for each sector.
              </Typography>
            </div>
            <div className="border-l-4 border-[#2BB5E9] pl-6 py-4">
              <Typography variant="h4" className="text-[#282561] mb-2">
                2026-2027: Indonesia's Chairmanship
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                Indonesia assumes the D-8 Chairmanship with a focus on navigating
                global shifts and strengthening cooperation for shared prosperity.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
