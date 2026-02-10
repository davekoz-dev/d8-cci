import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { priorities } from '@/lib/constants';
import * as Icons from 'lucide-react';

/**
 * Five Priority Areas Grid Component
 *
 * Displays the 5 priority areas of Indonesia's D-8 Chairmanship
 */

// Map icon names to actual components
const iconMap: Record<string, React.ComponentType<any>> = {
  TrendingUp: Icons.TrendingUp,
  ShoppingBag: Icons.ShoppingBag,
  Waves: Icons.Waves,
  Network: Icons.Network,
  Building2: Icons.Building2,
};

export function PrioritiesGrid() {
  return (
    <Section variant="default" padding="lg">
      <Container size="xl">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-[#055090] mb-4">
            Five Priority Areas
          </Typography>
          <Typography variant="bodyLarge" className="text-[#414042] max-w-3xl mx-auto">
            Indonesia&apos;s Chairmanship focuses on five key areas to advance
            cooperation and shared prosperity among D-8 member nations.
          </Typography>
        </div>

        <Grid cols={5} gap="lg" className="mt-12">
          {priorities.map((priority, index) => {
            const Icon = iconMap[priority.icon];
            return (
              <Card
                key={index}
                className="transition-all hover:shadow-lg border-t-4 hover:-translate-y-1"
                style={{ borderTopColor: priority.color }}
              >
                <CardHeader>
                  <div
                    className="mb-4 p-3 rounded-lg w-fit"
                    style={{ backgroundColor: `${priority.color}15` }}
                  >
                    <Icon
                      className="h-8 w-8"
                      style={{ color: priority.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-lg mb-2">
                    {priority.title}
                  </CardTitle>
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
  );
}
