import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, HandHeart, Globe } from 'lucide-react';

export const metadata = {
  title: 'Palestine & Solidarity | D-8 Indonesia Chairmanship',
  description: 'D-8 special session on Palestine and commitment to solidarity.',
};

export default function PalestinePage() {
  return (
    <>
      {/* Hero */}
      <Section variant="secondary" padding="lg">
        <Container size="lg">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-white/20 backdrop-blur">
                <Heart className="h-16 w-16 text-white" fill="white" />
              </div>
            </div>
            <Typography variant="display" textColor="onDark" as="h1">
              Palestine & Solidarity
            </Typography>
            <Typography variant="h3" textColor="onDark" className="font-normal max-w-4xl mx-auto">
              Standing Together for Justice, Peace, and Humanitarian Support
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Statement */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <div className="prose prose-lg max-w-none">
            <Typography variant="h2" className="text-[#055090] mb-6">
              Statement of Solidarity
            </Typography>

            <Typography variant="bodyLarge" className="text-[#414042] mb-6">
              The Developing-8 Organization for Economic Cooperation, during Indonesia's
              Chairmanship 2026-2027, reaffirms its unwavering commitment to supporting
              the Palestinian people in their legitimate quest for self-determination,
              statehood, and a just and lasting peace.
            </Typography>

            <Typography variant="body" className="text-[#414042] mb-6">
              D-8 member countries stand united in their support for the inalienable rights
              of the Palestinian people, including their right to establish an independent
              and sovereign state with East Jerusalem as its capital, in accordance with
              relevant United Nations resolutions and international law.
            </Typography>

            <Typography variant="body" className="text-[#414042] mb-6">
              We express deep concern over the ongoing humanitarian situation in Palestine
              and call upon the international community to take concrete steps to alleviate
              the suffering of the Palestinian people and work towards a comprehensive and
              just solution to the Palestinian-Israeli conflict.
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Special Session */}
      <Section variant="muted" padding="lg">
        <Container size="lg">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Special Session at D-8 Summit 2026
          </Typography>

          <Card className="bg-white border-l-4 border-l-[#00B3AA]">
            <CardContent className="p-8">
              <Typography variant="body" className="text-[#414042] mb-6">
                The 11th D-8 Summit will feature a dedicated special session on Palestine,
                where heads of state and government will:
              </Typography>

              <ul className="space-y-4">
                {[
                  'Reaffirm collective support for Palestinian rights and statehood',
                  'Address humanitarian concerns and explore avenues for assistance',
                  'Discuss diplomatic initiatives to advance peace negotiations',
                  'Coordinate D-8 positions on Palestine in international forums',
                  'Explore economic support and development cooperation opportunities',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00B3AA] text-white flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <Typography variant="body" className="text-[#414042]">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* D-8 Commitment */}
      <Section variant="primary" padding="lg">
        <Container size="xl">
          <div className="text-center mb-12">
            <Typography variant="h2" textColor="onDark" className="mb-4">
              D-8 Commitment
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Political Support',
                description:
                  'Continued advocacy for Palestinian rights in international forums and organizations',
              },
              {
                icon: HandHeart,
                title: 'Humanitarian Aid',
                description:
                  'Coordinated humanitarian assistance and development support for Palestinian people',
              },
              {
                icon: Globe,
                title: 'Diplomatic Efforts',
                description:
                  'Collective diplomatic initiatives to advance peace negotiations and justice',
              },
              {
                icon: Heart,
                title: 'Solidarity Actions',
                description:
                  'Joint actions and statements demonstrating D-8 unity on Palestine issue',
              },
            ].map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <Typography variant="h4" textColor="onDark" className="mb-3">
                    {commitment.title}
                  </Typography>
                  <Typography variant="body" textColor="onDark" className="text-sm">
                    {commitment.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Historical Context */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <Typography variant="h2" className="text-[#055090] mb-8">
            D-8 and Palestine: A History of Solidarity
          </Typography>

          <div className="space-y-6">
            <div className="border-l-4 border-[#00B3AA] pl-6 py-4">
              <Typography variant="h4" className="text-[#282561] mb-2">
                1997: Founding Principle
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                Support for Palestinian rights was enshrined as a core principle in the
                D-8 founding documents, reflecting the shared commitment of all member
                states.
              </Typography>
            </div>

            <div className="border-l-4 border-[#055090] pl-6 py-4">
              <Typography variant="h4" className="text-[#282561] mb-2">
                Consistent Advocacy
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                Throughout its history, D-8 has consistently advocated for Palestinian
                rights in international forums, including the United Nations, Organization
                of Islamic Cooperation, and Non-Aligned Movement.
              </Typography>
            </div>

            <div className="border-l-4 border-[#2BB5E9] pl-6 py-4">
              <Typography variant="h4" className="text-[#282561] mb-2">
                Humanitarian Support
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                D-8 member countries have collectively provided significant humanitarian
                assistance, development aid, and capacity-building support to the
                Palestinian people.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section variant="secondary" padding="md">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="h2" textColor="onDark">
              United for Justice
            </Typography>
            <Typography variant="bodyLarge" textColor="onDark" className="max-w-3xl mx-auto">
              D-8 member countries remain committed to working together and with the
              international community to achieve a just, comprehensive, and lasting
              solution that guarantees the rights and dignity of the Palestinian people.
            </Typography>
          </div>
        </Container>
      </Section>
    </>
  );
}
