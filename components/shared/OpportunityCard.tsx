/**
 * Business Opportunity Card Component
 * Displays business opportunities and investment proposals
 */

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, DollarSign, Mail, Calendar } from 'lucide-react';
import type { BusinessOpportunity } from '@/lib/types/d8-cci';
import { cn } from '@/lib/utils';

interface OpportunityCardProps {
  opportunity: BusinessOpportunity;
}

const opportunityTypeColors = {
  'investment': 'bg-[#055090] text-white',
  'joint-venture': 'bg-[#00B3AA] text-white',
  'trade': 'bg-[#2BB5E9] text-white',
  'partnership': 'bg-[#282561] text-white',
};

const opportunityTypeLabels = {
  'investment': 'Investment',
  'joint-venture': 'Joint Venture',
  'trade': 'Trade Opportunity',
  'partnership': 'Partnership',
};

const statusColors = {
  'open': 'bg-green-100 text-green-800 border-green-200',
  'closed': 'bg-gray-100 text-gray-800 border-gray-200',
  'under-review': 'bg-yellow-100 text-yellow-800 border-yellow-200',
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <Card className="p-6 hover:shadow-xl transition-shadow" data-aos="fade-up">
      {/* Header with Type and Status */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <Badge className={cn(opportunityTypeColors[opportunity.type])}>
          {opportunityTypeLabels[opportunity.type]}
        </Badge>
        <Badge
          variant="outline"
          className={cn(statusColors[opportunity.status])}
        >
          {opportunity.status === 'open' && 'Open'}
          {opportunity.status === 'closed' && 'Closed'}
          {opportunity.status === 'under-review' && 'Under Review'}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="font-bold text-xl text-[#055090] mb-3">
        {opportunity.title}
      </h3>

      {/* Metadata */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-[#414042]">
          <Building2 className="w-4 h-4 text-[#00B3AA]" />
          <span className="font-medium">{opportunity.country}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#414042]">
          <DollarSign className="w-4 h-4 text-[#00B3AA]" />
          <span>Sector: {opportunity.sector}</span>
        </div>
        {opportunity.investmentSize && (
          <div className="flex items-center gap-2 text-sm text-[#414042]">
            <DollarSign className="w-4 h-4 text-[#00B3AA]" />
            <span>Investment Size: {opportunity.investmentSize}</span>
          </div>
        )}
        {opportunity.deadline && (
          <div className="flex items-center gap-2 text-sm text-[#414042]">
            <Calendar className="w-4 h-4 text-[#00B3AA]" />
            <span>Deadline: {opportunity.deadline}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[#414042] mb-4 leading-relaxed line-clamp-3">
        {opportunity.description}
      </p>

      {/* Action Button */}
      {opportunity.status === 'open' && (
        <a
          href={opportunity.contactEmail ? `mailto:${opportunity.contactEmail}` : '#'}
          className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium border border-[#00B3AA] text-[#00B3AA] hover:bg-[#00B3AA] hover:text-white rounded-md transition-colors"
        >
          <Mail className="w-4 h-4 mr-2" />
          Express Interest
        </a>
      )}
    </Card>
  );
}
