'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RegistrationForm } from '@/components/home/RegistrationForm';
import { BusinessLeaderModal } from '@/components/home/BusinessLeaderModal';
import {
    ArrowRight,
    Calendar,
    MapPin,
    Users,
    ChevronDown,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────
   Data — Forum details
   ───────────────────────────────────────────────────────────────────── */
const forum = {
    badge: 'DBLF 2026 · 14 April 2026 · Fairmont Hotel, Jakarta',
    title: 'D8‑CCI Business Leaders Forum 2026',
    theme: 'Achieving Sustainable Growth Through D8 Business Cooperation',
    description:
        'The D8‑CCI Business Leaders Forum 2026 convenes 300 CEOs and business leaders ' +
        'from D‑8 member countries to strengthen economic collaboration, address regulatory ' +
        'and market-access barriers, and produce practical, actionable solutions that will ' +
        'be formally brought to D‑8 Heads of State at the 11th Summit.',
};

/* ─────────────────────────────────────────────────────────────────────
   Data — Highlights
   ───────────────────────────────────────────────────────────────────── */
const highlights = [
    'Cross-border business cooperation and B2B / B2G engagement',
    'Identifying solutions to regulatory barriers and market-access issues',
    'Supporting D‑8 chairmanship priorities including sustainability and food security',
    'Launch of the D‑8 Women Business Leaders initiative & D‑8 Women Alliance',
];

/* ─────────────────────────────────────────────────────────────────────
   Data — Stats
   ───────────────────────────────────────────────────────────────────── */
const stats = [
    { value: '300', label: 'CEOs & Business Leaders' },
    { value: '9', label: 'D-8 Member Countries' },
    { value: '7', label: 'Key Business Priorities' },
    { value: '1', label: 'Women Alliance Launch' },
];

/* ─────────────────────────────────────────────────────────────────────
   Data — Leaders (from HeroSectionWithMap)
   ───────────────────────────────────────────────────────────────────── */
type Leader = {
    name: string;
    role: string;
    photo: string;
    objectPosition: string;
    scale?: number;
};

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
    { name: 'Abdur Karim', role: 'Administrator of Bangladesh Chambers', photo: '/assets/d8/leader/abdur-karim.jpg', objectPosition: 'center 10%' },
];

/* ─────────────────────────────────────────────────────────────────────
   Data — Organizing Committee
   ───────────────────────────────────────────────────────────────────── */
const committee = [
    { name: 'Andi Anzhar Wijaya', role: 'Head of Steering Committee', photo: '/assets/business-leader/andi-anzhar.png' },
    { name: 'Mohamad Bawazeer', role: 'Deputy Head of Steering Committee', photo: '/assets/business-leader/mohammad-bawazeer.png' },
    { name: 'Irawati Hermawan', role: 'Head of Organizing Committee', photo: '/assets/business-leader/irawati-hermawan.jpg' },
];

/* ─────────────────────────────────────────────────────────────────────
   Data — Related Events
   ───────────────────────────────────────────────────────────────────── */
const relatedEvents = [
    { title: 'Senior Officials & Ministerial Meeting', date: '12–14 April 2026', location: 'Jakarta, Indonesia', href: '/events' },
    { title: '11th D-8 Summit', date: '14 April 2026', location: 'JICC, Jakarta', href: '/events' },
    { title: 'D-8 Halal Expo Indonesia', date: '14–18 April 2026', location: 'Jakarta, Indonesia', href: '/events' },
];

/* ─────────────────────────────────────────────────────────────────────
   Sub-Components
   ───────────────────────────────────────────────────────────────────── */

function LeaderCard({
    name, role, photo, size = 'sm', objectPosition, scale,
}: Leader & { size?: 'lg' | 'sm' }) {
    const dim = size === 'lg' ? 'w-28 h-28 md:w-36 md:h-36' : 'w-20 h-20';
    const imgPx = size === 'lg' ? 144 : 80;
    const nameCls = size === 'lg' ? 'text-sm md:text-base font-bold' : 'text-xs font-semibold';
    const roleCls = size === 'lg' ? 'text-xs md:text-sm' : 'text-[11px]';

    return (
        <div className="flex flex-col items-center gap-2.5 text-center" style={{ maxWidth: size === 'lg' ? 160 : 120 }}>
            <div className={`${dim} rounded-full overflow-hidden shadow-xl border-2 border-white/40 bg-white/10`}>
                <Image
                    src={photo}
                    alt={name}
                    width={imgPx}
                    height={imgPx}
                    sizes={size === 'lg' ? '(max-width: 768px) 112px, 144px' : '80px'}
                    quality={90}
                    className="w-full h-full object-cover"
                    style={{ objectPosition, transform: `scale(${scale ?? 1})`, transformOrigin: 'center top' }}
                    loading="lazy"
                />
            </div>
            <div className="px-1">
                <p className={`${nameCls} text-white leading-tight`}>{name}</p>
                <p className={`${roleCls} text-white/80 leading-tight mt-0.5`}>{role}</p>
            </div>
        </div>
    );
}

function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 text-center hover:bg-white/10 transition-all">
            <p className="text-white text-2xl md:text-3xl font-bold mb-1">{value}</p>
            <p className="text-white/80 text-xs md:text-sm">{label}</p>
        </div>
    );
}

function RelatedEventCard({ title, date, location, href }: (typeof relatedEvents)[0]) {
    return (
        <Link href={href} className="block group">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-5 hover:bg-white/10 hover:border-white/20 transition-all h-full">
                <p className="text-white text-sm md:text-base font-bold mb-2 group-hover:text-white transition-colors">{title}</p>
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-white/70" />
                        <span className="text-white/80 text-xs">{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-white/70" />
                        <span className="text-white/80 text-xs">{location}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

/* ─────────────────────────────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────────────────────────────── */

export default function BusinessLeadersForumPage() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <>
            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative w-full overflow-hidden">
                <Image
                    src="/assets/hero/labuanbajo.jpg"
                    alt="D-8 Business Leaders Forum"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#055090]/85 via-[#282561]/80 to-[#00B3AA]/60" />

                <Container size="xl" className="relative z-10 py-20 md:py-28 lg:py-32">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <Image
                            src="/assets/d8/logo/d8-logo-v2.png"
                            alt="D-8 CCI"
                            width={1200}
                            height={850}
                            priority
                            className="-my-4 md:-my-8 lg:-my-14 w-44 sm:w-60 md:w-72 lg:w-[420px] h-auto mx-auto drop-shadow-2xl"
                        />
                        <Badge variant="secondary" className="text-sm md:text-base px-6 py-2">
                            {forum.badge}
                        </Badge>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                            {forum.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto">
                            &ldquo;{forum.theme}&rdquo;
                        </p>
                        <p className="text-white/75 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                            {forum.description}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                size="lg"
                                className="bg-[#00B3AA] hover:bg-[#00a09a] text-white rounded-full px-8 shadow-lg shadow-[#00B3AA]/25 cursor-pointer"
                            >
                                Register Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                            >
                                <a href="#speakers">View Speakers</a>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Stats ────────────────────────────────────────────────── */}
            <Section variant="primary" padding="md">
                <Container size="xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat) => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Key Highlights ───────────────────────────────────────── */}
            <Section variant="default" padding="lg">
                <Container size="lg">
                    <div className="max-w-3xl mx-auto">
                        <Typography variant="h2" className="text-[#055090] text-center mb-8">
                            Key Highlights
                        </Typography>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F9] border border-gray-100">
                                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#00B3AA] flex-shrink-0" />
                                    <span className="text-[#414042] text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </Section>

            {/* ── Keynote Speakers ─────────────────────────────────────── */}
            <section id="speakers" className="relative w-full overflow-hidden">
                <Image
                    src="/assets/hero/labuanbajo.jpg"
                    alt="Speakers background"
                    fill
                    className="object-cover object-center opacity-100"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-[#055094]/70" />

                <Container size="xl" className="relative z-10 py-16 md:py-20">
                    <div className="text-center space-y-12">
                        {/* Featured / Keynote */}
                        <div className="space-y-8">
                            <Typography variant="h2" textColor="onDark" className="uppercase tracking-wider">
                                High-Level Keynotes
                            </Typography>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                                {featuredLeaders.map((leader) => (
                                    <LeaderCard key={leader.name} {...leader} size="lg" />
                                ))}
                            </div>
                        </div>

                        {/* Supporting / Speakers */}
                        <div className="space-y-8 pt-6">
                            <Typography variant="h2" textColor="onDark" className="uppercase tracking-wider">
                                Speakers &amp; Panellists
                            </Typography>
                            <div className="flex flex-wrap justify-center gap-5 md:gap-6">
                                {supportingLeaders.map((leader) => (
                                    <LeaderCard key={leader.name} {...leader} size="sm" />
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Organizing Committee ──────────────────────────────────── */}
            <Section variant="default" padding="lg">
                <Container size="lg">
                    <Typography variant="h2" className="text-[#055090] text-center mb-10">
                        Organizing Committee
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {committee.map((member) => (
                            <div key={member.name} className="flex flex-col items-center gap-3 text-center">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#055090]/20 shadow-lg ring-4 ring-[#00B3AA]/20">
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        width={112}
                                        height={112}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#282561] font-bold text-base">{member.name}</p>
                                    <p className="text-[#414042] text-xs">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Registration ─────────────────────────────────────────── */}
            <Section variant="muted" padding="lg" id="register">
                <Container size="sm">
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
                        <div className="text-center mb-6 space-y-2">
                            <Typography variant="h2" className="text-[#055090]">
                                Register for the Forum
                            </Typography>
                            <p className="text-[#414042] text-sm">
                                Secure your seat at the D8‑CCI Business Leaders Forum 2026.
                                You&apos;ll receive confirmation and a QR code via email.
                            </p>
                        </div>
                        <RegistrationForm />
                    </div>
                </Container>
            </Section>

            {/* ── Related Events ───────────────────────────────────────── */}
            <Section variant="primary" padding="lg">
                <Container size="xl">
                    <Typography variant="h2" textColor="onDark" className="text-center mb-8">
                        Related D-8 CCI Events
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {relatedEvents.map((event) => (
                            <RelatedEventCard key={event.title} {...event} />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild size="lg" className="bg-white text-[#055090] hover:bg-white/90 rounded-full px-8">
                            <Link href="/events">View All Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Registration Modal */}
            <BusinessLeaderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
