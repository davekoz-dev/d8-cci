'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { theme, summit2026, memberCountries } from '@/lib/constants';
import Link from 'next/link';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { RegistrationForm } from '@/components/home/RegistrationForm';
import { BusinessLeaderModal } from '@/components/home/BusinessLeaderModal';
import { MapPin, Users, ChevronDown } from 'lucide-react';

// ── Upcoming Events (d8.org style) ───────────────────────────────────
const upcomingEvents = [
  { day: '12–14', month: 'APR', name: 'Senior Officials & Ministerial Meeting', location: 'Jakarta, Indonesia', href: '/events' },
  { day: '14', month: 'APR', name: 'D-8 Business Leaders Forum', location: 'Fairmont Hotel, Jakarta', href: '/business-halal' },
  { day: '14', month: 'APR', name: '11th D-8 Summit', location: 'JICC, Jakarta', href: '/events' },
  { day: '14–18', month: 'APR', name: 'D-8 Halal Expo Indonesia', location: 'Jakarta, Indonesia', href: '/events' },
];

// ── Leader data ──────────────────────────────────────────────────────
// objectPosition: where to anchor the crop (e.g. 'center 10%' = near top-center)
// scale: zoom multiplier — 1 = no zoom, 1.5 = 50% zoom in, 2 = 100% zoom in
type Leader = { name: string; role: string; photo: string; objectPosition: string; scale?: number };

const featuredLeaders: Leader[] = [
  { name: 'Prabowo Subianto*', role: 'President of Indonesia', photo: '/assets/d8/leader/prabowo-subianto.png', objectPosition: 'center 10%' },
  { name: 'Recep Tayyip Erdoğan*', role: 'President of the Republic of Türkiye', photo: '/assets/d8/leader/erdogan.jpg', objectPosition: 'center 15%' },
  { name: 'Anwar Ibrahim*', role: 'Prime Minister of Malaysia', photo: '/assets/d8/leader/anwar-ibrahim.jpeg', objectPosition: 'center 10%' },
];

const supportingLeaders: Leader[] = [
  { name: 'Rosan Roeslani', role: 'Minister of Investment & Head of BKPM', photo: '/assets/d8/leader/rosan-roeslani.png', objectPosition: '10% 0%', scale: 1.2 },
  { name: 'Dyah Roro Esti Widya Putri', role: 'Deputy Minister of Trade', photo: '/assets/d8/leader/dyah-roro-esti-widya-putri.jpeg', objectPosition: 'center 10%', scale: 1.2 },
  { name: 'Anindya Bakrie', role: 'President of D-8 CCI', photo: '/assets/d8/leader/anindya-bakrie-2.png', objectPosition: 'center 15%', scale: 1.2 },
  { name: 'Ambassador Sohail Mahmood', role: 'Secretary General of D-8 CCI', photo: '/assets/d8/leader/ambassador-sohail-mahmood-2.png', objectPosition: '75% 20%', scale: 1.2 },
  { name: 'James T. Riyadi', role: 'Vice Chairman, Foreign Affairs, KADIN Indonesia', photo: '/assets/d8/leader/james-t-riyadi.png', objectPosition: 'center 10%', scale: 1.2 },
  { name: 'Andi Anzhar Wijaya', role: 'Vice Chairman for Multilateral Diplomacy', photo: '/assets/business-leader/andi-anzhar-2.png', objectPosition: 'center 10%', scale: 1.5 },
  { name: 'Rifat Hisarciklioglu', role: 'Chairman of TOBB Republic of Türkiye', photo: '/assets/d8/leader/rifat-hisarciklioglu.jpg', objectPosition: 'center 10%' },
  { name: 'Dato Seri N Gobalakrishnan', role: 'Chairman, National Chamber Malaysia', photo: '/assets/d8/leader/dato seri-n-gobalakrishnan.jpg', objectPosition: 'center 30%' },
  { name: 'Atif Ikram', role: 'Chairman of FPCCI Pakistan', photo: '/assets/d8/leader/atif-ikram.jpeg', objectPosition: 'center 10%', scale: 1.2 },
  { name: 'Jani Ibrahim', role: 'Chairman, NACCIMA Nigeria', photo: '/assets/d8/leader/jani-ibrahim.jpeg', objectPosition: 'center 10%', scale: 1.2 },
  { name: 'Ahmed El', role: 'Chairman of FEDCOC', photo: '/assets/d8/leader/ahmed-el.jpeg', objectPosition: 'center 10%', scale: 1.2 },
  { name: 'Mohamad Bawazeer', role: 'Chairman, Standing Committee D-8 KADIN', photo: '/assets/business-leader/mohammad-bawazeer.png', objectPosition: 'center 10%', scale: 1.2 },
  { name: 'Nita Yudi', role: 'Chairwoman of IWAPI', photo: '/assets/d8/leader/nita-yudi-2.png', objectPosition: 'center 10%', scale: 1.5 },
  { name: 'Irawati Hermawan', role: 'CEO of Hermawan Juniarto & Partners', photo: '/assets/business-leader/irawati-hermawan-2.jpg', objectPosition: '70% 10%', scale: 1.2 },
  { name: 'Samad Hasanzadeh', role: 'Vice Chairman of Iran Chambers', photo: '/assets/d8/leader/samad-hasanzadeh.jpg', objectPosition: 'center 40%', scale: 1.2 },
  { name: 'Abdur Karim', role: 'Administrator of Bangladesh Chambers', photo: '/assets/d8/leader/abdur-karim.jpg', objectPosition: 'center 10%', },
];

// ── Reusable leader card ──────────────────────────────────────────────
function LeaderCard({ name, role, photo, size = 'sm', priority = false, objectPosition, scale }: { name: string; role: string; photo: string; size?: 'lg' | 'sm'; priority?: boolean; objectPosition: string; scale?: number }) {
  const dim = size === 'lg' ? 'w-32 h-32 md:w-32 md:h-32' : 'w-16 h-16 md:w-16 md:h-16';
  const imgPx = size === 'lg' ? 160 : 80;
  const nameCls = size === 'lg' ? 'text-sm md:text-base font-bold' : 'text-xs font-semibold';
  const roleCls = size === 'lg' ? 'text-xs md:text-sm' : 'text-xs';

  // Responsive sizes for Next.js Image optimization
  const sizes = size === 'lg'
    ? '(max-width: 768px) 128px, 160px'
    : '(max-width: 768px) 64px, 80px';

  return (
    <div className="flex flex-col items-center gap-2 text-center" style={{ maxWidth: size === 'lg' ? 150 : 110 }}>
      <div className={`${dim} rounded-full overflow-hidden shadow-xl flex-shrink-0 bg-white/20`}>
        <Image
          src={photo}
          alt={name}
          width={imgPx}
          height={imgPx}
          sizes={sizes}
          quality={90}
          className="w-full h-full object-cover"
          style={{ objectPosition, transform: `scale(${scale ?? 1})`, transformOrigin: 'center top' }}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      <div>
        <p className={`${nameCls} text-white leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]`}>{name}</p>
        <p className={`${roleCls} text-white leading-tight mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]`}>{role}</p>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────
export function HeroSectionWithMap() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F8F9] to-white">

      {/* ── LEADERS SECTION with hero background ── */}
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/assets/hero/jakarta-city-landscape.jpg"
          alt="D-8 Leaders Background"
          fill
          className="object-cover object-center opacity-100"
          priority
          quality={100}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#055094]/60" />

        {/* Leaders content — full width, no Container */}
        <div className="relative z-10 py-16 md:py-16 px-4 md:px-8 flex items-start justify-center gap-6">

          {/* Left spacer — mirrors sidebar width so leaders stay centered */}
          <div className="hidden xl:block w-56 flex-shrink-0" />

          {/* Centered leaders grid */}
          <div className="flex-1 min-w-0 max-w-4xl flex flex-col items-center text-center space-y-8">
            {/* Section Heading with Logo */}
            <div className="w-full text-center flex flex-col items-center gap-4">
              <div className='relative w-64 h-16'>
                <Image
                  src="/assets/d8/logo/d8-logo-v2.png"
                  alt='business-leader-2026'
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider drop-shadow-lg">
                High Level Keynotes & Speakers
              </h2>
            </div>

            {/* Featured: 2 top heads of state */}
            <div className="flex flex-wrap justify-center gap-10">
              {featuredLeaders.map((leader) => (
                <LeaderCard key={leader.name} {...leader} size="lg" priority={true} />
              ))}
            </div>

            {/* Supporting leaders */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-4">
              {supportingLeaders.map((leader) => (
                <LeaderCard key={leader.name} {...leader} size="sm" priority={false} />
              ))}
            </div>
            {/* Member Country Flags */}
            <div className="w-full">
              <Typography variant="bodySmall" className="text-white mb-4 uppercase tracking-widest font-medium">
                9 Member Countries
              </Typography>
              <div className="flex flex-wrap justify-center gap-4">
                {memberCountries.map((country) => (
                  <div key={country.code} className="flex flex-col items-center gap-1.5 group">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white ring-2 ring-[#055090]/10 group-hover:ring-[#055090]/40 transition-all bg-white/20">
                      <Image
                        src={country.flag ?? ''}
                        alt={`${country.name} flag`}
                        width={48}
                        height={48}
                        sizes="48px"
                        quality={85}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <Typography variant="bodySmall" className="text-white text-xs font-medium">
                      {country.name}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — right column, desktop only */}
          <aside className="hidden xl:flex flex-col w-72 flex-shrink-0 pt-2 space-y-6">

            {/* UPCOMING EVENTS */}
            <Collapsible className="border rounded-lg bg-white group/events overflow-hidden" defaultOpen>
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
                <p className="text-[#055090] font-bold text-sm uppercase tracking-widest">
                  Upcoming Events
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="/events"
                    className="text-[#055090] text-xs font-semibold hover:underline whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    More &rsaquo;
                  </Link>
                  <ChevronDown className="h-4 w-4 text-[#055090] transition-transform duration-200 group-data-[state=open]/events:rotate-180" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <div className="flex flex-col divide-y divide-gray-100 border-t border-gray-200">
                  {upcomingEvents.map((evt) => (
                    <Link
                      key={evt.name}
                      href={evt.href}
                      className="group flex items-start gap-3 py-3 px-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 text-center bg-white border border-[#055090] rounded-lg py-1.5">
                        <p className="text-[#055090] font-bold text-base leading-tight text-sm">{evt.day}</p>
                        <p className="text-[#414042] text-[10px] font-semibold uppercase tracking-wide">{evt.month}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#055090] font-semibold text-xs leading-snug group-hover:text-[#00B3AA] transition-colors">
                          {evt.name}
                        </p>
                        <p className="text-[#055090] text-[10px] mt-0.5 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                          {evt.location}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* BUSINESS LEADER FORUM HIGHLIGHT */}
            <Collapsible className="border rounded-lg bg-gradient-to-br from-[#055090] to-[#00B3AA] group/forum" defaultOpen>
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-white" />
                  <p className="text-white font-bold text-xs uppercase tracking-wider">
                    D8 BUSINESS LEADERS FORUM
                  </p>
                </div>
                <ChevronDown className="h-4 w-4 text-white transition-transform duration-200 group-data-[state=open]/forum:rotate-180" />
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <div className="px-4 pb-4 space-y-3 border-t border-white/20 pt-3">
                  <p className="text-white/95 text-sm font-semibold uppercase tracking-wide text-center">
                    Registration for D8‑CCI Business Leaders Forum 2026
                  </p>

                  <p className="text-white/90 text-xs leading-relaxed">
                    Join 300+ CEOs and business leaders from D‑8 member countries to
                    strengthen trade, investment, and industrial cooperation for sustainable growth.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      <span>Fairmont Hotel, Jakarta</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="font-semibold">Date &amp; Time:</span>
                      <span>14 April 2026, 13.00 Jakarta Time</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="font-semibold">Theme:</span>
                      <span>Achieving Sustainable Growth Through D8 Business Cooperation</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsModalOpen(true)}
                    size="sm"
                    className="w-full bg-white text-[#055090] hover:bg-white/90 text-xs font-semibold cursor-pointer"
                  >
                    Register Now
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>




            {/* EVENT REGISTRATION FORM */}
            <Collapsible id="event-registration" className="border rounded-lg bg-white group/reg">
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
                <h3 className="text-[#055090] font-bold text-sm uppercase tracking-wider">
                  Event Registration
                </h3>
                <ChevronDown className="h-4 w-4 text-[#055090] transition-transform duration-200 group-data-[state=open]/reg:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <div className="px-4 pb-4 space-y-3 border-t border-gray-200">
                  <RegistrationForm />
                  <p className="text-[10px] text-[#414042]/60 text-center mt-2">
                    You&apos;ll receive confirmation via email
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

          </aside>

        </div>
      </div >

      {/* ── BELOW HERO: tagline, flags, badge, CTAs — white bg, truly centered ── */}
      < Container size="lg" className="py-12 md:py-16" >
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Tagline */}
          <div className="space-y-3 max-w-3xl">
            <Typography variant="display" className="text-[#055090]" as="h1">
              {theme.title}
            </Typography>
            <Typography variant="h3" className="text-[#282561] font-medium">
              {theme.subtitle}
            </Typography>
          </div>

          {/* Intro */}
          <Typography variant="body" className="text-[#414042] max-w-2xl">
            {theme.shortDescription}
          </Typography>



          {/* Summit Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00B3AA] bg-white px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-[#00B3AA] animate-pulse" />
            <Typography variant="bodySmall" className="font-medium text-[#282561]">
              {summit2026.title} • {summit2026.date} • Jakarta
            </Typography>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="default">
              <Link href="/events">View Summit 2026</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about-d8">About D-8</Link>
            </Button>
          </div>

          {/* Upcoming Events — mobile/tablet, hidden on xl (shown in sidebar) */}
          <div className="xl:hidden w-full max-w-lg">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
              <p className="text-[#055090] font-bold text-sm uppercase tracking-widest">Upcoming Events</p>
              <Link href="/events" className="text-[#00B3AA] text-xs font-semibold hover:underline">More &rsaquo;</Link>
            </div>
            <div className="flex flex-col divide-y divide-gray-100">
              {upcomingEvents.map((evt) => (
                <Link
                  key={evt.name}
                  href={evt.href}
                  className="group flex items-start gap-3 py-3 hover:opacity-80 transition-opacity"
                >
                  <div className="flex-shrink-0 w-12 text-center border border-[#055090]/20 rounded-lg py-1.5 bg-[#055090]/5">
                    <p className="text-[#055090] font-extrabold text-base leading-tight">{evt.day}</p>
                    <p className="text-[#414042] text-[10px] font-semibold uppercase tracking-wide">{evt.month}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#282561] font-semibold text-sm leading-snug group-hover:text-[#055090] transition-colors">
                      {evt.name}
                    </p>
                    <p className="text-[#414042] text-xs mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      {evt.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </Container >
      <BusinessLeaderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section >
  );
}
