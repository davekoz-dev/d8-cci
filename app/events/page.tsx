/**
 * D-8 CCI Events Directory
 * Central hub linking to detailed event pages
 */

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { EventCard } from '@/components/shared/EventCard';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import { upcomingEvents } from '@/lib/constants/d8-cci-data';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Events Directory | D-8 Indonesia Chairmanship 2026-2027',
  description:
    'Browse upcoming D-8 events including the 12th D-8 Summit, Business Forums, Trade Fairs, and Halal Expo.',
};

export default function EventsPage() {
  // Map events to their detail pages
  const getEventDetailUrl = (eventId: string): string | undefined => {
    switch (eventId) {
      case 'summit-2026':
        return '/summit-events';
      case 'business-forum-2026':
      case 'halal-expo-2026':
        return '/business-halal';
      default:
        return undefined;
    }
  };

  // Separate featured event (Summit)
  const summitEvent = upcomingEvents.find((e) => e.id === 'summit-2026');
  const otherEvents = upcomingEvents.filter((e) => e.id !== 'summit-2026');

  return (
    <>
      {/* Hero Section */}
      <SupergraphicSection colorWay="whiteOnBlue" variant="solid" className="py-20">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6 text-white">
              <Calendar className="w-12 h-12" />
              <Typography variant="display" className="text-white">
                Events Directory
              </Typography>
            </div>
            <Typography variant="bodyLarge" className="text-white">
              Explore upcoming D-8 events during Indonesia's Chairmanship. Click on any event for
              full details, agenda, and registration information.
            </Typography>
          </div>
        </Container>
      </SupergraphicSection>

      {/* Featured Event - 12th Summit */}
      {summitEvent && (
        <Section id={summitEvent.id}>
          <Container size="md">
            <div className="text-center mb-8" data-aos="fade-in">
              <Typography variant="h2" className="text-[#055090] mb-4">
                Featured Event
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                The premier event of Indonesia's D-8 Chairmanship 2026-2027
              </Typography>
            </div>
            <EventCard
              event={summitEvent}
              variant="featured"
              detailsUrl={getEventDetailUrl(summitEvent.id)}
            />
          </Container>
        </Section>
      )}

      {/* Upcoming Events */}
      <Section className="bg-[#F7F8F9]">
        <Container size="lg">
          <div className="text-center mb-12" data-aos="fade-in">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Upcoming Events 2026
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              Mark your calendar for these important D-8 events during Indonesia's chairmanship.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                detailsUrl={getEventDetailUrl(event.id)}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Event Types & Categories */}
      <Section>
        <Container size="lg">
          <div className="text-center mb-12" data-aos="fade-in">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Types of D-8 Events
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              D-8 organizes various types of events to facilitate cooperation and economic
              development among member countries.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#055090] rounded-lg p-6 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="0">
              <h3 className="font-bold text-lg text-[#055090] mb-3">High-Level Summits</h3>
              <p className="text-sm text-[#414042]">
                Gatherings of Heads of State and Government to set strategic direction and adopt
                joint declarations.
              </p>
            </div>

            <div className="bg-white border-2 border-[#00B3AA] rounded-lg p-6 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-bold text-lg text-[#00B3AA] mb-3">Business Forums</h3>
              <p className="text-sm text-[#414042]">
                Platforms for private sector leaders to explore partnerships, investments, and B2B
                matchmaking opportunities.
              </p>
            </div>

            <div className="bg-white border-2 border-[#2BB5E9] rounded-lg p-6 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-bold text-lg text-[#2BB5E9] mb-3">Trade Fairs & Exhibitions</h3>
              <p className="text-sm text-[#414042]">
                Showcasing products, services, and innovations from D-8 member countries to
                facilitate trade.
              </p>
            </div>

            <div className="bg-white border-2 border-[#00B9F0] rounded-lg p-6 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-bold text-lg text-[#00B9F0] mb-3">
                Ministerial & SOM Meetings
              </h3>
              <p className="text-sm text-[#414042]">
                Senior Officials and Ministerial meetings to advance policy coordination and
                strategic initiatives.
              </p>
            </div>

            <div className="bg-white border-2 border-[#282561] rounded-lg p-6 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="400">
              <h3 className="font-bold text-lg text-[#282561] mb-3">Specialized Expos</h3>
              <p className="text-sm text-[#414042]">
                Sector-specific exhibitions including Halal Expo, SME forums, and industry
                showcases.
              </p>
            </div>

            <div className="bg-white border-2 border-[#055090] rounded-lg p-6 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="500">
              <h3 className="font-bold text-lg text-[#055090] mb-3">Special Sessions</h3>
              <p className="text-sm text-[#414042]">
                Dedicated sessions addressing specific topics of importance to D-8 member
                countries.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#F7F8F9]">
        <Container size="md">
          <div className="text-center bg-white rounded-lg p-12 shadow-md">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Stay Updated on Events
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] mb-8">
              For event registration, media inquiries, or partnership opportunities, contact us for
              more information.
            </Typography>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#055090] text-white font-medium rounded-lg hover:bg-[#055090]/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
