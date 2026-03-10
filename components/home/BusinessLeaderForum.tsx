import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

// ── Forum data ───────────────────────────────────────────────────
const forum = {
  badge: 'DBLF 2026 · 14 April 2026 · Fairmont Hotel, Jakarta',
  title: 'D8‑CCI Business  Forum 2026',
  theme: 'Connecting D-8 Business for Sustainable and Resilient Growth',
  description:
    'The D8‑CCI Business  Forum 2026 convenes 300 CEOs and Business  ' +
    'from D‑8 member countries to strengthen economic collaboration, address regulatory ' +
    'and market-access barriers, and produce practical, actionable solutions that will ' +
    'be formally brought to D‑8 Heads of State at the 11th Summit.',
  sectionId: 'business-leader-forum',
};

// ── Stats ─────────────────────────────────────────────────────────
const stats = [
  { value: '300', label: 'CEOs & Business ' },
  { value: '9', label: 'D-8 Member Countries' },
  { value: '7', label: 'Key Business Priorities' },
  { value: '1', label: 'Women Alliance Launch' },
];

// ── CTAs ──────────────────────────────────────────────────────────
const ctas = {
  learnMore: { label: 'Learn More', href: '/business-leaders-forum' },
  register: { label: 'Register Now', href: '/business-leaders-forum#register' },
};

// ── Sub-Components ────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 text-center hover:bg-white/10 transition-all">
      <Typography variant="display" className="text-white text-2xl md:text-3xl font-bold mb-1">
        {value}
      </Typography>
      <Typography variant="bodySmall" className="text-white text-xs md:text-sm">
        {label}
      </Typography>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────

export function BusinessLeaderForum() {
  return (
    <Section variant="primary" padding="lg" id={forum.sectionId}>
      <Container size="xl">
        <div className="space-y-12">

          {/* Header */}
          <div className="text-center space-y-4" data-aos="fade-up">
            <Badge variant="secondary" className="text-sm md:text-base px-6 py-2">
              {forum.badge}
            </Badge>
            <Typography variant="h1" className="text-white text-3xl md:text-5xl font-bold">
              {forum.title}
            </Typography>
            <Typography variant="h3" className="text-white/90 text-lg md:text-xl font-normal italic">
              &ldquo;{forum.theme}&rdquo;
            </Typography>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center space-y-4" data-aos="fade-up">
            <Typography variant="bodyLarge" className="text-white/90">
              {forum.description}
            </Typography>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
            <Button asChild size="lg" className="bg-white text-[#055090] hover:bg-white/90">
              <Link href={ctas.learnMore.href} className="flex items-center">
                {ctas.learnMore.label} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href={ctas.register.href}>{ctas.register.label}</Link>
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}
