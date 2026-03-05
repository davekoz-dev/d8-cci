'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { d8CCIMembers } from '@/lib/constants/d8-cci-data';
import { CalendarDays, MapPin, ArrowRight, ChevronDown } from 'lucide-react';

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
          text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums leading-none
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
    <section id="hero" className="relative w-full overflow-hidden">
      {/* ── Background layers ─────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero/jakarta-city-landscape.jpg"
          alt="Jakarta cityscape"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#055090]/85 via-[#282561]/80 to-[#00B3AA]/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              rgba(255,255,255,1) 30px,
              rgba(255,255,255,1) 31px
            )`,
          }}
        />
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <Container size="xl" className="relative z-10 pt-20 pb-32 md:pt-28 md:pb-40 lg:pt-32 lg:pb-44">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Logo */}
          <div
            className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
              }`}
          >
            <Image
              src="/assets/d8/logo/d8-logo-v2.png"
              alt="D-8 CCI"
              width={1200}
              height={850}
              priority
              className="-my-4 md:-my-8 lg:-my-16 w-48 sm:w-64 md:w-80 lg:w-[480px] h-auto drop-shadow-2xl"
            />
          </div>

          <div
            className={`space-y-4 max-w-4xl transition-all duration-700 delay-150 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              9 countries. 1.2 billion people. <br className="hidden md:block" /> One shared future.
            </h1>
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
            <div className="inline-flex items-center gap-1 rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md px-6 sm:px-8 py-4 shadow-xl">
              <div className="flex items-center gap-1 mr-3 sm:mr-5">
                <CalendarDays className="h-4 w-4 text-[#00B3AA]" />
                <span className="text-xs sm:text-sm text-white/80 font-medium whitespace-nowrap">
                  Business Leaders Forum
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-5">
                <CountdownCell value={countdown.days} label="Days" />
                <span className="text-2xl text-white/30 font-light -mt-3">:</span>
                <CountdownCell value={countdown.hours} label="Hrs" />
                <span className="text-2xl text-white/30 font-light -mt-3">:</span>
                <CountdownCell value={countdown.minutes} label="Min" />
                <span className="text-2xl text-white/30 font-light -mt-3">:</span>
                <CountdownCell value={countdown.seconds} label="Sec" />
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <Button
              asChild
              size="lg"
              className="
                bg-[#00B3AA] hover:bg-[#00a09a] text-white
                rounded-full px-8 shadow-lg shadow-[#00B3AA]/25
                hover:shadow-xl hover:shadow-[#00B3AA]/30
                transition-all duration-300 group
              "
            >
              <Link href="/business-leaders-forum">
                Business Leaders Forum
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                border-white/30 text-white hover:bg-white/10 hover:border-white/50
                rounded-full px-8 backdrop-blur-sm
                transition-all duration-300
              "
            >
              <Link href="/#about-d8">About D-8 CCI</Link>
            </Button>
          </div>

          {/* Forum location badge */}
          <div
            className={`flex items-center gap-2 text-white/60 text-sm transition-all duration-700 delay-[600ms] ease-out ${mounted ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Fairmont Hotel, Jakarta, Indonesia · 14 April 2026</span>
          </div>

          {/* Member chamber flags */}
          <div
            className={`pt-4 transition-all duration-700 delay-[700ms] ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <p className="text-white/50 text-xs uppercase tracking-[0.25em] font-medium mb-4">
              Member Chambers
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {d8CCIMembers.map((member, i) => (
                <div
                  key={member.acronym}
                  className="group flex flex-col items-center gap-1.5"
                  style={{ animationDelay: `${800 + i * 80}ms` }}
                >
                  <div
                    className="
                      w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden
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
