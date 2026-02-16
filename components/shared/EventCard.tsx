/**
 * Event Card Component
 * Displays D-8 CCI event information
 */

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import type { D8CCIEvent } from '@/lib/types/d8-cci';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: D8CCIEvent;
  variant?: 'default' | 'compact' | 'featured';
  detailsUrl?: string;
}

const eventTypeColors = {
  'summit': 'bg-[#055090] text-white',
  'business-forum': 'bg-[#00B3AA] text-white',
  'expo': 'bg-[#2BB5E9] text-white',
  'meeting': 'bg-[#282561] text-white',
  'special-session': 'bg-[#00B9F0] text-white',
  'trade-fair': 'bg-[#00B3AA] text-white',
};

const eventTypeLabels = {
  'summit': 'Summit',
  'business-forum': 'Business Forum',
  'expo': 'Expo',
  'meeting': 'Meeting',
  'special-session': 'Special Session',
  'trade-fair': 'Trade Fair',
};

export function EventCard({ event, variant = 'default', detailsUrl }: EventCardProps) {
  if (variant === 'compact') {
    return (
      <Card className="p-4 hover:shadow-lg transition-shadow" data-aos="fade-up">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <Badge className={cn('mb-2', eventTypeColors[event.type])}>
              {eventTypeLabels[event.type]}
            </Badge>
            <h3 className="font-bold text-base text-[#055090] mb-2 leading-tight">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-[#414042] mb-1">
              <Calendar className="w-3 h-3" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#414042]">
              <MapPin className="w-3 h-3" />
              <span>{event.city}, {event.country}</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'featured') {
    return (
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-[#055090]" data-aos="fade-up">
        <Badge className={cn('mb-4', eventTypeColors[event.type])}>
          {eventTypeLabels[event.type]}
        </Badge>

        <h2 className="font-bold text-2xl text-[#055090] mb-4">
          {event.title}
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-[#414042]">
            <Calendar className="w-5 h-5 mt-0.5 text-[#00B3AA]" />
            <div>
              <p className="font-medium">Date</p>
              <p className="text-sm">
                {event.date}
                {event.dateEnd && event.dateEnd !== event.date && ` - ${event.dateEnd}`}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-[#414042]">
            <MapPin className="w-5 h-5 mt-0.5 text-[#00B3AA]" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm">{event.location}</p>
              <p className="text-sm">{event.city}, {event.country}</p>
            </div>
          </div>
        </div>

        <p className="text-[#414042] mb-6 leading-relaxed">
          {event.description}
        </p>

        {detailsUrl ? (
          <Button asChild className="w-full bg-[#055090] hover:bg-[#055090]/90">
            <Link href={detailsUrl}>
              View Full Details
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        ) : event.registrationOpen ? (
          <Button className="w-full bg-[#00B3AA] hover:bg-[#00B3AA]/90">
            Register Interest
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        ) : null}
      </Card>
    );
  }

  return (
    <Card className="p-6 hover:shadow-xl transition-shadow" data-aos="fade-up">
      <div className="flex items-start justify-between gap-3 mb-4">
        <Badge className={cn(eventTypeColors[event.type])}>
          {eventTypeLabels[event.type]}
        </Badge>
        {event.registrationOpen && (
          <Badge variant="outline" className="border-[#00B3AA] text-[#00B3AA]">
            Registration Open
          </Badge>
        )}
      </div>

      <h3 className="font-bold text-xl text-[#055090] mb-3">
        {event.title}
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-[#414042]">
          <Calendar className="w-4 h-4 text-[#00B3AA]" />
          <span>
            {event.date}
            {event.dateEnd && event.dateEnd !== event.date && ` - ${event.dateEnd}`}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#414042]">
          <MapPin className="w-4 h-4 text-[#00B3AA]" />
          <span>{event.location}, {event.city}</span>
        </div>
      </div>

      <p className="text-sm text-[#414042] mb-4 leading-relaxed">
        {event.description}
      </p>

      {detailsUrl ? (
        <Button asChild variant="default" className="w-full bg-[#055090] hover:bg-[#055090]/90">
          <Link href={detailsUrl}>
            View Details
          </Link>
        </Button>
      ) : event.registrationOpen ? (
        <Button
          variant="outline"
          className="w-full border-[#00B3AA] text-[#00B3AA] hover:bg-[#00B3AA] hover:text-white"
        >
          Register Interest
        </Button>
      ) : null}
    </Card>
  );
}
