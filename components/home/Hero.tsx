'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { d8CCIMembers } from '@/lib/constants/d8-cci-data';
import { CalendarDays, MapPin, ChevronsRight, ChevronDown } from 'lucide-react';

/* ────────────────────────────────────────────────────────────
   Countdown hook — ticks every second until the forum date
   ──────────────────────────────────────────────────────────── */
function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const target = new Date(targetDate).getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

/* ────────────────────────────────────────────────────────────
   Animated number cell for the countdown
   ──────────────────────────────────────────────────────────── */
function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="
          text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums leading-none
          bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent
          drop-shadow-[0_2px_12px_rgba(0,179,170,0.35)]
          transition-all duration-300
        "
      >
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60 mt-1.5 font-medium">
        {label}
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Hero Component — Primary focus on D-8 CCI
   ──────────────────────────────────────────────────────────── */
export function Hero() {
  const countdown = useCountdown('2026-04-14T09:00:00+07:00');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-[#055090] overflow-hidden">
      {/* ── Background layers (Left side / Mobile hidden) ───────────────── */}
      <div className="absolute inset-0 lg:w-1/2">
        <style>{`
          @keyframes pan-bg {
            0% { background-position: 0% 0; }
            100% { background-position: 100% 0; }
          }
          .animate-pan-bg {
            animation: pan-bg 120s linear infinite;
          }
        `}</style>
        <div
          className="absolute inset-0 w-full h-full bg-repeat-x animate-pan-bg"
          style={{
            backgroundImage: 'url("/assets/hero/jakarta-city-5.jpg")',
            backgroundSize: 'auto 100%'
          }}
        />
        {/* Mobile translucent overlay just in case image is visible */}
        <div className="absolute inset-0 bg-[#055090]/80 lg:hidden" />

        {/* Location Badge (Bottom Left) */}
        <div className="hidden lg:flex absolute bottom-8 left-8 items-center gap-2 bg-black/40 backdrop-blur-md text-white/90 px-4 py-2 rounded-full text-sm font-medium border border-white/10 shadow-lg">
          <MapPin className="w-4 h-4 text-[#00B3AA]" />
          Jakarta, Indonesia
        </div>

        {/* Quotation Badge (Top Left) */}
        <div className="hidden lg:block absolute top-8 left-8 right-8 z-20">
          <p className="text-white text-md md:text-md font-small leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            "Jakarta, Indonesia, will host the D-8 Summit 2026 attended by 16 heads of state and D-8 CCI will concurrently host a Business Leaders Forum on 14 April."{' '}
          </p>
          <Button
            asChild
            variant="outline"
            className="
              border-white/30 text-white hover:bg-white/10 hover:border-white/50
              rounded-full px-6 backdrop-blur-sm
              transition-all duration-300
            "
          >
            <Link href="/business-leaders-forum">Register now</Link>
          </Button>
        </div>
      </div>

      {/* ── Content (Right side Opaque Block) ───────────────────────────── */}
      <Container size="xl" className="relative z-10 w-full pt-2 pb-16 md:pt-2 md:pb-20 lg:pt-6 lg:pb-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 lg:ml-auto lg:pl-16 space-y-8">

          {/* D-8 Indonesia Logo (Top Right) */}
          <div className="w-full flex justify-center lg:justify-end mb-0">
            <div className={`relative w-32 sm:w-40 md:w-48 lg:w-56 h-auto transition-all duration-700 delay-100 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <Image
                src="/assets/d8/logo/d8-logo-v2.png"
                alt="D-8 Indonesia 2026-2027"
                width={800}
                height={566}
                priority
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>

          <div
            className={`flex flex-col items-center lg:items-start space-y-3 max-w-4xl transition-all duration-700 delay-150 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
              9 countries<br />1.2 billion people<br />One shared future.
            </h1>
            <p
              className={`text-white max-w-2xl text-sm sm:text-base leading-relaxed transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              DEVELOPMENT-8 CHAMBERS OF COMMERCE AND INDUSTRY
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            D-8 CCI unites the chambers of commerce of nine member countries to
            foster trade, investment, and business collaboration — building bridges
            for sustainable economic growth across a combined market of 1.2 billion
            people.
          </p>

          {/* Countdown — Business Leaders Forum */}
          <div
            className={`transition-all duration-700 delay-[400ms] ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >
            <div className="inline-flex items-center gap-1 rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md px-5 sm:px-6 py-3 shadow-xl">
              <div className="flex items-center gap-1 mr-3 sm:mr-4">
                <CalendarDays className="h-4 w-4 text-[#00B3AA]" />
                <span className="text-xs sm:text-sm text-white/80 font-medium whitespace-nowrap">
                  D-8 Business Leaders Forum 2026
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <CountdownCell value={countdown.days} label="Days" />
                <span className="text-xl text-white/30 font-light -mt-3">:</span>
                <CountdownCell value={countdown.hours} label="Hrs" />
                <span className="text-xl text-white/30 font-light -mt-3">:</span>
                <CountdownCell value={countdown.minutes} label="Min" />
                <span className="text-xl text-white/30 font-light -mt-3">:</span>
                <CountdownCell value={countdown.seconds} label="Sec" />
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <Button
              asChild
              className="
                bg-[#00B3AA] hover:bg-[#00a09a] text-white
                rounded-full px-6 shadow-lg shadow-[#00B3AA]/25
                hover:shadow-xl hover:shadow-[#00B3AA]/30
                transition-all duration-300 group
              "
            >
              <Link href="/business-leaders-forum">
                D-8 Business Leaders Forum 2026
              </Link>
              <ChevronsRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="
                border-white/30 text-white hover:bg-white/10 hover:border-white/50
                rounded-full px-6 backdrop-blur-sm
                transition-all duration-300
              "
            >
              <Link href="/#about-d8">
                D-8 Women Business Alliance
              </Link>
              <ChevronsRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Member chamber flags */}
          <div
            className={`pt-2 w-full flex flex-col items-center lg:items-start transition-all duration-700 delay-[700ms] ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <p className="text-white/50 text-[10px] sm:text-xs w-full text-center lg:text-left uppercase tracking-[0.25em] font-medium mb-3">
              Member Chambers
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 max-w-[500px]">
              {[...d8CCIMembers].sort((a, b) => a.chamberName.localeCompare(b.chamberName)).map((member, i) => (
                <div
                  key={member.acronym}
                  className="group flex flex-col items-center gap-1.5"
                  style={{ animationDelay: `${800 + i * 80}ms` }}
                >
                  <div
                    className="
                      w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden
                      border-2 border-white/30
                      ring-2 ring-transparent
                      group-hover:ring-[#00B3AA]/50 group-hover:border-white/60
                      group-hover:scale-110
                      transition-all duration-300
                      shadow-lg shadow-black/20
                    "
                  >
                    <Image
                      src={member.flag}
                      alt={`${member.country} flag`}
                      width={48}
                      height={48}
                      sizes="48px"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white/90 font-medium transition-colors">
                    {member.acronym}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <ChevronDown className="h-6 w-6 text-[#055090]/40 animate-bounce" />
      </div>
    </section>
  );
}
