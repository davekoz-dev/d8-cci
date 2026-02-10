/**
 * D-8 CCI Events Page
 * Displays upcoming and past D-8 CCI events
 */

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { EventCard } from '@/components/shared/EventCard';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import { upcomingEvents, d8CCIMilestones } from '@/lib/constants/d8-cci-data';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Events & Forums | D-8 CCI',
  description:
    'Explore upcoming D-8 CCI events including the 12th D-8 Summit, Business Forums, Trade Fairs, and Halal Expo.',
};

export default function EventsPage() {
  // Separate featured event (Summit)
  const summitEvent = upcomingEvents.find((e) => e.id === 'summit-2026');
  const otherEvents = upcomingEvents.filter((e) => e.id !== 'summit-2026');

  return (
    <>
      {/* Hero Section */}
      <SupergraphicSection variant="whiteOnBlue" className="py-20">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-12 h-12 " />
              <Typography variant="display" className="">
                Events & Forums
              </Typography>
            </div>
            <Typography variant="bodyLarge">
              Join us for upcoming D-8 CCI events, business forums, trade fairs, and
              exhibitions that facilitate cooperation among member countries.
            </Typography>
          </div>
        </Container>
      </SupergraphicSection>

      {/* Featured Event - 12th Summit */}
      {summitEvent && (
        <Section id={summitEvent.id}>
          <Container size="md">
            <div className="text-center mb-8">
              <Typography variant="h2" className="text-[#055090] mb-4">
                Featured Event
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                The premier event of Indonesia's D-8 Chairmanship 2026-2027
              </Typography>
            </div>
            <EventCard event={summitEvent} variant="featured" />
          </Container>
        </Section>
      )}

      {/* Upcoming Events */}
      <Section className="bg-[#F7F8F9]">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Upcoming Events 2026
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              Mark your calendar for these important D-8 CCI events during Indonesia's chairmanship.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Event Types & Categories */}
      <Section>
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Types of D-8 CCI Events
            </Typography>
            <Typography variant="body" className="text-[#414042] max-w-2xl mx-auto">
              D-8 CCI organizes various types of events to facilitate business cooperation
              and economic development.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#055090] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#055090] mb-3">
                Business Forums
              </h3>
              <p className="text-sm text-[#414042]">
                Regular forums bringing together private sector leaders to discuss trade,
                investment, and collaboration opportunities.
              </p>
            </div>

            <div className="bg-white border-2 border-[#00B3AA] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#00B3AA] mb-3">
                Trade Fairs & Exhibitions
              </h3>
              <p className="text-sm text-[#414042]">
                Showcasing products, services, and innovations from D-8 member countries to
                facilitate trade and partnerships.
              </p>
            </div>

            <div className="bg-white border-2 border-[#2BB5E9] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#2BB5E9] mb-3">
                Ministerial & SOM Meetings
              </h3>
              <p className="text-sm text-[#414042]">
                Senior Officials and Ministerial meetings to advance policy coordination
                and strategic initiatives.
              </p>
            </div>

            <div className="bg-white border-2 border-[#00B9F0] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#00B9F0] mb-3">
                Specialized Expos
              </h3>
              <p className="text-sm text-[#414042]">
                Sector-specific exhibitions including Halal Expo, SME forums, and industry
                showcases.
              </p>
            </div>

            <div className="bg-white border-2 border-[#282561] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#282561] mb-3">
                Seminars & Conferences
              </h3>
              <p className="text-sm text-[#414042]">
                Knowledge-sharing events featuring experts, researchers, and practitioners
                on key economic topics.
              </p>
            </div>

            <div className="bg-white border-2 border-[#055090] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#055090] mb-3">
                Joint Display Centers
              </h3>
              <p className="text-sm text-[#414042]">
                Permanent and temporary centers displaying products and services from D-8
                member countries.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Historical Events Timeline */}
      <Section className="bg-gradient-to-br from-[#055090] to-[#00B3AA]">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-white mb-4">
              D-8 CCI Historical Milestones
            </Typography>
            <Typography variant="bodyLarge" className="text-[#F7F8F9] max-w-2xl mx-auto">
              Key events and milestones in the history of D-8 CCI
            </Typography>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" />

            {/* Timeline items */}
            <div className="space-y-8">
              {d8CCIMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-xl">
                      <p className="text-sm font-bold text-[#00B3AA] mb-2">
                        {milestone.date}
                      </p>
                      <h4 className="font-bold text-[#055090] mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-sm text-[#414042] mb-2">
                        {milestone.location}
                      </p>
                      <p className="text-sm text-[#414042]">
                        {milestone.significance}
                      </p>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-white relative z-10 flex-shrink-0" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container size="md">
          <div className="text-center bg-[#F7F8F9] rounded-lg p-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Stay Updated on Events
            </Typography>
            <Typography variant="bodyLarge" className="text-[#414042] mb-8">
              Subscribe to our newsletter or contact us to receive updates on upcoming
              D-8 CCI events and registration information.
            </Typography>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#055090] text-white font-medium rounded-lg hover:bg-[#055090]/90 transition-colors"
            >
              Contact Us for More Information
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
