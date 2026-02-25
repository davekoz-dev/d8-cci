import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { CalendarDays, Building2, Users, ClipboardList } from 'lucide-react';

const eventCategories = [
  {
    icon: CalendarDays,
    label: 'Event D-8',
    description:
      'High-level summits and intergovernmental meetings bringing together D-8 member nations to advance shared priorities.',
    href: '/events',
    color: '#055090',
    bgColor: 'bg-[#055090]',
    borderColor: 'border-[#055090]',
    textColor: 'text-[#055090]',
  },
  {
    icon: Building2,
    label: 'CCI',
    description:
      'D-8 Chamber of Commerce & Industry events connecting business communities, trade bodies, and chambers across member countries.',
    href: '/events',
    color: '#00B3AA',
    bgColor: 'bg-[#00B3AA]',
    borderColor: 'border-[#00B3AA]',
    textColor: 'text-[#00B3AA]',
  },
  {
    icon: Users,
    label: 'Business Leader Forum',
    description:
      'Executive forums and investment roundtables for private sector leaders, CEOs, and investors from the 8 member nations.',
    href: '/business-halal',
    color: '#282561',
    bgColor: 'bg-[#282561]',
    borderColor: 'border-[#282561]',
    textColor: 'text-[#282561]',
  },
  {
    icon: ClipboardList,
    label: 'Pendaftaran Event',
    description:
      'Register now for upcoming D-8 events. Secure your spot at summits, forums, and expos during Indonesia\'s chairmanship.',
    href: '/contact',
    color: '#2BB5E9',
    bgColor: 'bg-[#2BB5E9]',
    borderColor: 'border-[#2BB5E9]',
    textColor: 'text-[#2BB5E9]',
    isRegistration: true,
  },
];

export function EventCategoriesTeaser() {
  return (
    <Section className="bg-[#F7F8F9]">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-in">
          <Typography variant="h2" className="text-[#055090] mb-3">
            Kegiatan & Acara
          </Typography>
          <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
            Jelajahi berbagai kegiatan dalam rangka Keketuaan Indonesia di D-8 tahun 2026–2027.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.label}
                href={cat.href}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div
                  className={`bg-white rounded-xl border-2 ${cat.borderColor} p-6 h-full flex flex-col gap-4 hover:shadow-lg transition-all duration-200 group-hover:-translate-y-1`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg ${cat.bgColor} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Label */}
                  <Typography
                    variant="h3"
                    className={`${cat.textColor} text-lg font-bold leading-tight`}
                  >
                    {cat.label}
                  </Typography>

                  {/* Description */}
                  <Typography variant="bodySmall" className="text-[#414042] flex-1">
                    {cat.description}
                  </Typography>

                  {/* CTA */}
                  <span
                    className={`text-sm font-semibold ${cat.textColor} group-hover:underline mt-auto`}
                  >
                    {cat.isRegistration ? 'Daftar Sekarang →' : 'Lihat Lebih Lanjut →'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10" data-aos="fade-up">
          <Button asChild size="lg" variant="default">
            <Link href="/events">Lihat Semua Acara</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
