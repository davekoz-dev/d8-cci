import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import { priorities, theme } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { Target, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Indonesia\'s Chairmanship 2026-2027 | D-8 Indonesia',
  description: 'Indonesia\'s vision and priorities as Chair of D-8 Organization for Economic Cooperation 2026-2027.',
};

const iconMap: Record<string, React.ComponentType<any>> = {
  TrendingUp: Icons.TrendingUp,
  ShoppingBag: Icons.ShoppingBag,
  Waves: Icons.Waves,
  Network: Icons.Network,
  Building2: Icons.Building2,
};

export default function ChairmanshipPage() {
  return (
    <>
      {/* Hero Section */}
      <SupergraphicSection variant="gradient" colorWay="blueOnWhite" className="pt-20 pb-28">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="display" className="text-[#055090]" as="h1">
              Indonesia's Chairmanship
            </Typography>
            <Typography variant="h2" className="text-[#282561] font-medium max-w-4xl mx-auto">
              2026-2027
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] max-w-3xl mx-auto">
              Leading D-8 with vision, commitment, and a focus on shared prosperity
              for all member nations.
            </Typography>
          </div>
        </Container>
      </SupergraphicSection>

      {/* Theme */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="h2" textColor="onDark" className="mb-4">
              Theme
            </Typography>
            <Typography variant="display" textColor="onDark" className="text-3xl mb-4">
              {theme.title}
            </Typography>
            <Typography variant="h3" textColor="onDark" className="font-normal max-w-4xl mx-auto">
              {theme.subtitle}
            </Typography>
            <Typography variant="bodyLarge" textColor="onDark" className="max-w-3xl mx-auto pt-6">
              {theme.shortDescription}
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <Grid cols={2} gap="lg">
            <Card className="border-t-4 border-t-[#055090]">
              <CardHeader>
                <div className="mb-4">
                  <Target className="h-12 w-12 text-[#055090]" />
                </div>
                <CardTitle className="text-2xl mb-4">Vision</CardTitle>
                <CardDescription className="text-base leading-relaxed text-[#414042]">
                  To strengthen D-8 as a dynamic platform for South-South cooperation,
                  advancing economic development, trade integration, and shared
                  prosperity among member nations while navigating global challenges
                  with solidarity and collective action.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-t-4 border-t-[#00B3AA]">
              <CardHeader>
                <div className="mb-4">
                  <CheckCircle2 className="h-12 w-12 text-[#00B3AA]" />
                </div>
                <CardTitle className="text-2xl mb-4">Mission</CardTitle>
                <CardDescription className="text-base leading-relaxed text-[#414042]">
                  To advance the five priority areas, enhance multilateral cooperation,
                  modernize D-8's institutional framework, and create tangible benefits
                  for the 1.2 billion people across member countries through concrete
                  initiatives and partnerships.
                </CardDescription>
              </CardHeader>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Five Priorities */}
      <Section variant="muted" padding="lg">
        <Container size="xl">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Five Priority Areas
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] max-w-3xl mx-auto">
              Indonesia's Chairmanship focuses on five strategic areas to drive
              meaningful cooperation and development.
            </Typography>
          </div>

          <Grid cols={3} gap="lg">
            {priorities.map((priority, index) => {
              const Icon = iconMap[priority.icon];
              return (
                <Card
                  key={index}
                  className="border-t-4 hover:shadow-lg transition-shadow"
                  style={{ borderTopColor: priority.color }}
                >
                  <CardHeader>
                    <div
                      className="mb-4 p-3 rounded-lg w-fit"
                      style={{ backgroundColor: `${priority.color}15` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: priority.color }} />
                    </div>
                    <CardTitle className="text-lg mb-3">{priority.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {priority.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Key Initiatives */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Key Initiatives 2026-2027
          </Typography>

          <div className="space-y-6">
            {[
              {
                title: '11th D-8 Summit',
                date: 'April 15, 2026',
                description:
                  'Host the landmark summit in Jakarta, bringing together heads of state to set the strategic direction for D-8.',
              },
              {
                title: 'Business & Investment Forum',
                date: 'April 2026',
                description:
                  'Facilitate private sector engagement and investment opportunities across member countries.',
              },
              {
                title: 'D-8 Halal Expo',
                date: 'April 2026',
                description:
                  'Showcase halal economy potential and advance certification standards across the network.',
              },
              {
                title: 'Ministerial Meetings',
                date: 'Throughout 2026-2027',
                description:
                  'Convene sector-specific ministerial meetings to advance cooperation in key areas.',
              },
              {
                title: 'Digital Transformation Initiative',
                date: '2026-2027',
                description:
                  'Launch programs to enhance digital infrastructure and cross-border connectivity.',
              },
              {
                title: 'Green Economy Transition',
                date: '2026-2027',
                description:
                  'Implement sustainable development projects focusing on blue economy and climate action.',
              },
            ].map((initiative, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-lg bg-[#F7F8F9] hover:bg-white border border-transparent hover:border-[#055090] transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-[#055090] text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <Typography variant="h4" className="text-[#282561]">
                      {initiative.title}
                    </Typography>
                    <Typography variant="bodySmall" className="text-[#414042] font-medium">
                      {initiative.date}
                    </Typography>
                  </div>
                  <Typography variant="body" className="text-[#414042]">
                    {initiative.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Expected Outcomes */}
      <Section variant="secondary" padding="lg">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" textColor="onDark" className="mb-4">
              Expected Outcomes
            </Typography>
          </div>

          <Grid cols={3} gap="lg">
            {[
              'Enhanced trade and economic integration among member countries',
              'Strengthened halal economy ecosystem and certification standards',
              'Concrete projects in blue economy and green transition',
              'Improved digital connectivity and technology transfer',
              'Modernized D-8 institutional framework',
              'Increased private sector engagement and investment flows',
            ].map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <Typography variant="body" textColor="onDark">
                  {outcome}
                </Typography>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
