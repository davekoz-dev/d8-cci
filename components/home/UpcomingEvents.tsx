import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
    {
        title: 'D-8 Business Leaders Forum',
        date: '14 April 2026',
        location: 'Fairmont Hotel, Jakarta',
        href: '/business-leaders-forum',
    },
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

function EventCard({ title, date, location, href }: (typeof events)[0]) {
    return (
        <Link href={href} className="block group">
            <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-[#00B3AA]/30 transition-all h-full">
                <Typography variant="h4" className="text-[#282561] text-sm md:text-base font-bold mb-3 group-hover:text-[#055090] transition-colors">
                    {title}
                </Typography>
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-[#00B3AA]" />
                        <span className="text-[#414042] text-xs">{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[#00B3AA]" />
                        <span className="text-[#414042] text-xs">{location}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export function UpcomingEvents() {
    return (
        <Section variant="muted" padding="lg" id="events">
            <Container size="xl">
                <div className="text-center mb-10">
                    <Typography variant="h2" className="text-[#055090] mb-3">
                        Upcoming Events
                    </Typography>
                    <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
                        Key events during Indonesia&apos;s D-8 Chairmanship 2026–2027
                    </Typography>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {events.map((event) => (
                        <EventCard key={event.title} {...event} />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Button asChild variant="outline" className="rounded-full px-6">
                        <Link href="/events" className="flex items-center">
                            View All Events <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
