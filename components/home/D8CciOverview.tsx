import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { d8CCIMembers, d8CCIObjectives } from '@/lib/constants/d8-cci-data';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

/**
 * D-8 CCI Introduction Section
 *
 * Immediately follows the hero to establish D-8 CCI as the site's primary subject.
 * Shows: mission statement, select objectives, and member chambers.
 */

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    TrendingUp: Icons.TrendingUp,
    Factory: Icons.Factory,
    Network: Icons.Network,
    Handshake: Icons.Handshake,
    CalendarDays: Icons.CalendarDays,
    BookOpen: Icons.BookOpen,
    BarChart: Icons.BarChart,
    Ship: Icons.Ship,
    Globe: Icons.Globe,
    Scale: Icons.Scale,
    Users: Icons.Users,
};

/* Show the first 4 objectives as a preview */
const featuredObjectives = d8CCIObjectives.slice(0, 4);

export function D8CciOverview() {
    return (
        <Section variant="default" padding="lg">
            <Container size="xl">
                {/* ── Header ─────────────────────────────────────── */}
                <div className="text-center mb-14 max-w-3xl mx-auto" data-aos="fade-up">
                    <Typography variant="h2" className="text-[#055090] mb-4">
                        About D-8 CCI
                    </Typography>
                    <Typography variant="bodyLarge" className="text-[#414042]">
                        The D-8 Chamber of Commerce &amp; Industry is the private-sector arm of the
                        D-8 Organization for Economic Cooperation. We unite nine national chambers
                        to promote trade, investment, and business collaboration across a combined
                        market of over 1.2 billion people and $4.7 trillion in GDP.
                    </Typography>
                </div>

                {/* ── Objectives grid (preview of 4) ─────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
                    {featuredObjectives.map((obj) => {
                        const Icon = iconMap[obj.icon] ?? Icons.Briefcase;
                        return (
                            <div
                                key={obj.id}
                                className="
                  group relative rounded-xl border border-gray-100 bg-white
                  p-6 shadow-sm hover:shadow-md hover:-translate-y-1
                  transition-all duration-300
                "
                            >
                                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#055090]/10 p-2.5">
                                    <Icon className="h-5 w-5 text-[#055090]" />
                                </div>
                                <Typography variant="h4" className="text-[#282561] text-base font-semibold mb-2">
                                    {obj.title}
                                </Typography>
                                <Typography variant="bodySmall" className="text-[#414042]/70 leading-relaxed line-clamp-3">
                                    {obj.description}
                                </Typography>
                            </div>
                        );
                    })}
                </div>

                {/* ── Member Chambers ─────────────────────────────── */}
                <div data-aos="fade-up">
                    <Typography variant="h3" className="text-[#282561] text-center mb-8">
                        Our Member Chambers
                    </Typography>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {d8CCIMembers.map((member) => (
                            <div
                                key={member.acronym}
                                className="
                  flex items-center gap-4 rounded-xl border border-gray-100
                  bg-white p-4 hover:border-[#055090]/30 hover:shadow-sm
                  transition-all duration-200
                "
                            >
                                <div className="h-10 w-10 flex-shrink-0 rounded-full overflow-hidden border border-gray-200">
                                    <Image
                                        src={member.flag}
                                        alt={member.country}
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <Typography variant="bodySmall" className="font-semibold text-[#282561] truncate">
                                        {member.acronym}
                                    </Typography>
                                    <Typography variant="caption" className="text-[#414042]/60 truncate block">
                                        {member.country}
                                    </Typography>
                                </div>
                                {member.isPresident && (
                                    <span className="ml-auto flex-shrink-0 rounded-full bg-[#00B3AA]/10 px-2 py-0.5 text-[10px] font-semibold text-[#00B3AA] uppercase tracking-wider">
                                        President
                                    </span>
                                )}
                                {member.hasSecretariat && (
                                    <span className="ml-auto flex-shrink-0 rounded-full bg-[#055090]/10 px-2 py-0.5 text-[10px] font-semibold text-[#055090] uppercase tracking-wider">
                                        Secretariat
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ─────────────────────────────────────────── */}
                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="outline" className="group">
                        <Link href="/#about-d8">
                            Learn More About D-8 CCI
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
