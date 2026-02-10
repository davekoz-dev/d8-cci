'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoIcon } from '@/components/brand/Logo';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { mainNavigation } from '@/lib/constants';

/**
 * D-8 Indonesia Chairmanship Header Component
 *
 * Features:
 * - Top navigation with logo
 * - Main menu links
 * - Language switcher (bilingual EN/ID)
 * - Mobile-responsive hamburger menu
 */

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<'en' | 'id'>('en');
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
    // TODO: Implement i18n language switching
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container size="xl">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <LogoIcon size="sm" className="p-0" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-2">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-[#055090] text-white'
                    : 'text-[#414042] hover:bg-[#F7F8F9] hover:text-[#055090]'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden rounded-md p-2 text-[#414042] hover:bg-[#F7F8F9]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <div className="flex flex-col space-y-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2 text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-[#055090] text-white'
                      : 'text-[#414042] hover:bg-[#F7F8F9] hover:text-[#055090]'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
