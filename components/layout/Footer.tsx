import * as React from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/components/brand/Logo';
import { Container } from '@/components/ui/Container';
import { Separator } from '@/components/ui/separator';
import { Typography } from '@/components/ui/Typography';
import { footerNavigation } from '@/lib/constants';

/**
 * D-8 Indonesia Chairmanship Footer Component
 *
 * Features:
 * - D-8 logo and branding
 * - Quick links navigation
 * - Legal and copyright information
 * - Brand guidelines download link
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-[#F7F8F9]">
      <Container size="xl" className="py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <LogoIcon size="sm" className="p-0" />
            </Link>
            <Typography variant="bodySmall" className="text-[#414042] max-w-xs">
              Indonesia&apos;s Chairmanship of the Developing-8 Countries
              Organization for Economic Cooperation 2026–2027
            </Typography>
          </div>

          {/* Navigation Links */}
          <div>
            <Typography
              variant="h4"
              className="text-[#282561] mb-4 text-base font-bold"
            >
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {footerNavigation.services.map((item: { name: string; href: string }) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#414042] hover:text-[#055090] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <Typography
              variant="h4"
              className="text-[#282561] mb-4 text-base font-bold"
            >
              Resources
            </Typography>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#414042] hover:text-[#055090] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About D-8 */}
          <div>
            <Typography
              variant="h4"
              className="text-[#282561] mb-4 text-base font-bold"
            >
              About D-8
            </Typography>
            <ul className="space-y-2">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#414042] hover:text-[#055090] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Typography variant="caption" className="text-[#414042]">
            © {currentYear} D-8 Indonesia Chairmanship. All rights reserved.
          </Typography>

          <div className="flex items-center gap-6">
            <Link
              href="/brand"
              className="text-xs text-[#414042] hover:text-[#055090] transition-colors"
            >
              Download Brand Guidelines
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
