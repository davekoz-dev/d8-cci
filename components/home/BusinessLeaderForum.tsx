import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

// ── Hero / Header ─────────────────────────────────────────────────
const forum = {
  badge: 'DBLF 2026 · 14 April 2026 · Fairmont Hotel, Jakarta',
  title: 'D8‑CCI Business Leaders Forum 2026',
  theme: 'Achieving Sustainable Growth Through D8 Business Cooperation',
  description:
    'The D8‑CCI Business Leaders Forum 2026 convenes 300 CEOs and business leaders ' +
    'from D‑8 member countries to strengthen economic collaboration, address regulatory ' +
    'and market-access barriers, and produce practical, actionable solutions that will ' +
    'be formally brought to D‑8 Heads of State at the 11th Summit.',
  sectionId: 'business-leader-forum',
};

// ── Key Highlights ────────────────────────────────────────────────
const highlights = [
  'Cross-border business cooperation and B2B / B2G engagement',
  'Identifying solutions to regulatory barriers and market-access issues',
  'Supporting D‑8 chairmanship priorities including sustainability and food security',
  'Launch of the D‑8 Women Business Leaders initiative & D‑8 Women Alliance',
];

// ── Stats ─────────────────────────────────────────────────────────
const stats = [
  { value: '300', label: 'CEOs & Business Leaders' },
  { value: '9',   label: 'D-8 Member Countries' },
  { value: '7',   label: 'Key Business Priorities' },
  { value: '1',   label: 'Women Alliance Launch' },
];

// ── Organizing Committee ──────────────────────────────────────────
const committee = [
  {
    name: 'Andi Anzhar Wijaya',
    role: 'Head of Steering Committee',
    photo: '/assets/business-leader/andi-anzhar.png',
  },
  {
    name: 'Mohamad Bawazeer',
    role: 'Deputy Head of Steering Committee',
    photo: '/assets/business-leader/mohammad-bawazeer.png',
  },
  {
    name: 'Irawati Hermawan',
    role: 'Head of Organizing Committee',
    photo: '/assets/business-leader/irawati-hermawan.jpg',
  },
];

// ── Related Events ────────────────────────────────────────────────
const relatedEvents = [
  {
    title: 'Senior Officials & Ministerial Meeting',
    date: '12–14 April 2026',
    location: 'Jakarta, Indonesia',
    href: '/events',
  },
  {
    title: '11th D-8 Summit',
    date: '14 April 2026',
    location: 'JICC, Jakarta',
    href: '/events',
  },
  {
    title: 'D-8 Halal Expo Indonesia',
    date: '14–18 April 2026',
    location: 'Jakarta, Indonesia',
    href: '/events',
  },
];

// ── CTAs ──────────────────────────────────────────────────────────
const ctas = {
  learnMore: { label: 'Learn More', href: '/business-halal' },
  register:  { label: 'Register Now', href: '/?event=business-forum#event-registration' },
};

// ── Section labels ────────────────────────────────────────────────
const labels = {
  highlights:    'Key Highlights',
  committee:     'Organizing Committee',
  relatedEvents: 'Related D8 CCI Events',
};

// ── Sub-Components ────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 text-center hover:bg-white/10 transition-all">
      <Typography variant="display" className="text-white text-2xl md:text-3xl font-bold mb-1">
        {value}
      </Typography>
      <Typography variant="bodySmall" className="text-white/70 text-xs md:text-sm">
        {label}
      </Typography>
    </div>
  );
}

function RelatedEventCard({ title, date, location, href }: typeof relatedEvents[0]) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-5 hover:bg-white/10 hover:border-white/20 transition-all h-full">
        <Typography variant="h3" className="text-white text-sm md:text-base font-bold mb-2 group-hover:text-[#00B3AA] transition-colors">
          {title}
        </Typography>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3 text-[#00B3AA]" />
            <Typography variant="bodySmall" className="text-white/70 text-xs">{date}</Typography>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-[#00B3AA]" />
            <Typography variant="bodySmall" className="text-white/70 text-xs">{location}</Typography>
          </div>
        </div>
      </div>
    </Link>
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

          {/* Key Highlights */}
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <Typography variant="h3" className="text-white font-bold mb-6 text-center">
              {labels.highlights}
            </Typography>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#00B3AA] flex-shrink-0" />
                  <Typography variant="body" className="text-white/90 text-sm">{item}</Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Committee */}
          <div className="space-y-8" data-aos="fade-up">
            <Typography variant="h3" className="text-white font-bold tracking-wide uppercase text-center">
              {labels.committee}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {committee.map((member, index) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center gap-3 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-[#00B3AA]/30">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <Typography variant="h3" className="text-white font-bold text-base">
                      {member.name}
                    </Typography>
                    <Typography variant="bodySmall" className="text-[#00B3AA] font-medium text-xs">
                      {member.role}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Events */}
          <div className="space-y-6" data-aos="fade-up">
            <Typography variant="h3" className="text-white font-bold text-center">
              {labels.relatedEvents}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedEvents.map((event) => (
                <RelatedEventCard key={event.title} {...event} />
              ))}
            </div>
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
