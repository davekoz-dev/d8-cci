/**
 * News Card Component
 * Displays news items, press releases, and media coverage
 */

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';
import type { NewsItem } from '@/lib/types/d8-cci';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  news: NewsItem;
  variant?: 'default' | 'compact' | 'featured';
}

const newsTypeColors = {
  'news': 'bg-[#055090] text-white',
  'press-release': 'bg-[#00B3AA] text-white',
  'media-coverage': 'bg-[#2BB5E9] text-white',
};

const newsTypeLabels = {
  'news': 'News',
  'press-release': 'Press Release',
  'media-coverage': 'Media Coverage',
};

export function NewsCard({ news, variant = 'default' }: NewsCardProps) {
  if (variant === 'compact') {
    return (
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <Badge className={cn('mb-2', newsTypeColors[news.type])}>
          {newsTypeLabels[news.type]}
        </Badge>
        <h3 className="font-bold text-base text-[#055090] mb-2 leading-tight line-clamp-2">
          {news.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-[#414042] mb-2">
          <Calendar className="w-3 h-3" />
          <span>{news.date}</span>
        </div>
        <p className="text-sm text-[#414042] line-clamp-2">
          {news.excerpt}
        </p>
      </Card>
    );
  }

  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden hover:shadow-xl transition-shadow">
        {news.imageUrl && (
          <div className="relative w-full h-64">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-8">
          <Badge className={cn('mb-4', newsTypeColors[news.type])}>
            {newsTypeLabels[news.type]}
          </Badge>
          <h2 className="font-bold text-2xl text-[#055090] mb-3">
            {news.title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-[#414042] mb-4">
            <Calendar className="w-4 h-4" />
            <span>{news.date}</span>
            {news.source && (
              <>
                <span className="text-[#F7F8F9]">•</span>
                <span>{news.source}</span>
              </>
            )}
          </div>
          <p className="text-[#414042] leading-relaxed mb-6">
            {news.excerpt}
          </p>
          {news.externalUrl && (
            <Link
              href={news.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00B3AA] hover:underline font-medium"
            >
              Read Full Article
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {news.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge className={cn(newsTypeColors[news.type])}>
            {newsTypeLabels[news.type]}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-[#414042]">
            <Calendar className="w-3 h-3" />
            <span>{news.date}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg text-[#055090] mb-2 leading-tight line-clamp-2">
          {news.title}
        </h3>
        {news.source && (
          <p className="text-xs text-[#414042] mb-2">Source: {news.source}</p>
        )}
        <p className="text-sm text-[#414042] mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        {news.externalUrl && (
          <Link
            href={news.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[#00B3AA] hover:underline"
          >
            Read More
            <ExternalLink className="w-3 h-3" />
          </Link>
        )}
      </div>
    </Card>
  );
}
