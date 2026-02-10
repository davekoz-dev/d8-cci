/**
 * Member Chamber Card Component
 * Displays D-8 CCI member chamber information
 */

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Mail, Globe } from 'lucide-react';
import type { D8CCIMember } from '@/lib/types/d8-cci';

interface MemberCardProps {
  member: D8CCIMember;
  variant?: 'default' | 'compact';
}

export function MemberCard({ member, variant = 'default' }: MemberCardProps) {
  if (variant === 'compact') {
    return (
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-12 flex-shrink-0">
            <Image
              src={member.flag}
              alt={`${member.country} flag`}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-[#055090] mb-1">
              {member.acronym}
            </h3>
            <p className="text-sm text-[#414042] mb-2 truncate">
              {member.country}
            </p>
            <Link
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#00B3AA] hover:underline inline-flex items-center gap-1"
            >
              Visit Website
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300">
      {/* Header with Flag and Chamber Name */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-20 h-14 flex-shrink-0">
          <Image
            src={member.flag}
            alt={`${member.country} flag`}
            fill
            className="object-cover rounded shadow-sm"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-xl text-[#055090] leading-tight">
              {member.acronym}
            </h3>
            {member.isPresident && (
              <Badge variant="default" className="bg-[#00B3AA] text-white shrink-0">
                President
              </Badge>
            )}
            {member.hasSecretariat && (
              <Badge variant="outline" className="border-[#055090] text-[#055090] shrink-0">
                Secretariat
              </Badge>
            )}
          </div>
          <p className="text-sm font-medium text-[#414042]">{member.country}</p>
        </div>
      </div>

      {/* Full Chamber Name */}
      <p className="text-sm font-medium text-[#282561] mb-3">
        {member.chamberName}
      </p>

      {/* Description */}
      <p className="text-sm text-[#414042] mb-4 leading-relaxed">
        {member.description}
      </p>

      {/* Key Sectors */}
      <div className="mb-4">
        <p className="text-xs font-medium text-[#414042] mb-2 uppercase tracking-wide">
          Key Sectors
        </p>
        <div className="flex flex-wrap gap-2">
          {member.keySectors.map((sector) => (
            <Badge
              key={sector}
              variant="secondary"
              className="bg-[#F7F8F9] text-[#414042] text-xs"
            >
              {sector}
            </Badge>
          ))}
        </div>
      </div>

      {/* Contact Actions */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F7F8F9]">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 min-w-[120px]"
        >
          <Link
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="w-4 h-4 mr-2" />
            Website
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 min-w-[120px]"
        >
          <a href={`mailto:${member.email}`}>
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </a>
        </Button>
      </div>
    </Card>
  );
}
