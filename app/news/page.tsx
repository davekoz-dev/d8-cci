/**
 * D-8 CCI News & Media Page
 * Displays news, press releases, and media coverage
 */

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { NewsCard } from '@/components/shared/NewsCard';
import { SupergraphicSection } from '@/components/brand/SupergraphicSection';
import { Newspaper, Radio, FileText } from 'lucide-react';
import type { NewsItem } from '@/lib/types/d8-cci';

export const metadata = {
  title: 'News & Media | D-8 CCI',
  description:
    'Latest news, press releases, and media coverage about D-8 CCI activities and events.',
};

// Sample news data
const sampleNews: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Indonesia Announces Theme for D-8 Chairmanship 2026-2027',
    excerpt:
      'Indonesia has officially announced "Navigating Global Shifts: Strengthening Equality, Solidarity, and Cooperation for Shared Prosperity" as the theme for its D-8 Chairmanship 2026-2027.',
    date: '15 January 2026',
    type: 'news',
    imageUrl: '/assets/d8/photos/chairmanship-announcement.jpg',
  },
  {
    id: 'news-2',
    title: '12th D-8 Summit Scheduled for April 2026 in Jakarta',
    excerpt:
      'The 12th Summit of the Developing-8 Organization for Economic Cooperation will be held on April 15, 2026, at the Jakarta International Convention Center, bringing together leaders from all member countries.',
    date: '10 January 2026',
    type: 'press-release',
  },
  {
    id: 'news-3',
    title: 'D-8 Halal Expo Indonesia Set to Showcase Regional Products',
    excerpt:
      'The upcoming D-8 Halal Expo Indonesia (April 14-18, 2026) will feature halal products and services from all member countries, promoting halal economy development across the region.',
    date: '5 January 2026',
    type: 'news',
  },
  {
    id: 'news-4',
    title: 'Business Forum to Address Trade Integration Among D-8 Countries',
    excerpt:
      'The Business & Investment Forum during Indonesia\'s chairmanship will focus on enhancing economic and trade integration among D-8 member countries, with participation from chambers of commerce and industry.',
    date: '28 December 2025',
    type: 'press-release',
  },
  {
    id: 'news-5',
    title: "Egypt FEDCOC Continues Leadership as D-8 CCI President",
    excerpt:
      'The Federation of Egyptian Chambers of Commerce (FEDCOC) continues its role as President of D-8 CCI, coordinating private sector engagement across member countries.',
    date: '20 December 2025',
    type: 'news',
  },
  {
    id: 'news-6',
    title: 'Special Session on Palestine Solidarity Planned for Summit',
    excerpt:
      'A special session dedicated to Palestine and Gaza solidarity will be held during the summit period, highlighting D-8\'s commitment to humanitarian causes and South-South cooperation.',
    date: '15 December 2025',
    type: 'media-coverage',
    source: 'International Media',
  },
];

export default function NewsPage() {
  const latestNews = sampleNews.filter((n) => n.type === 'news');
  const pressReleases = sampleNews.filter((n) => n.type === 'press-release');
  const mediaCoverage = sampleNews.filter((n) => n.type === 'media-coverage');

  return (
    <>
      {/* Hero Section */}
      <SupergraphicSection colorWay="whiteOnBlue" variant="geometric-1" className="py-20">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Newspaper className="w-12 h-12 text-black" />
              <Typography variant="display" className="text-black">
                News & Media
              </Typography>
            </div>
            <Typography variant="bodyLarge" className="">
              Stay updated with the latest news, announcements, and media coverage about
              D-8 CCI activities and events.
            </Typography>
          </div>
        </Container>
      </SupergraphicSection>

      {/* Featured News */}
      {sampleNews[0] && (
        <Section>
          <Container size="md">
            <div className="text-center mb-8">
              <Typography variant="h2" className="text-[#055090] mb-4">
                Featured Story
              </Typography>
            </div>
            <NewsCard news={sampleNews[0]} variant="featured" />
          </Container>
        </Section>
      )}

      {/* Latest News */}
      <Section className="bg-[#F7F8F9]">
        <Container size="lg">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-8 h-8 text-[#055090]" />
            <Typography variant="h2" className="text-[#055090]">
              Latest News
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Press Releases */}
      {pressReleases.length > 0 && (
        <Section>
          <Container size="lg">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-[#00B3AA]" />
              <Typography variant="h2" className="text-[#055090]">
                Press Releases
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressReleases.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Media Coverage */}
      {mediaCoverage.length > 0 && (
        <Section className="bg-[#F7F8F9]">
          <Container size="lg">
            <div className="flex items-center gap-3 mb-8">
              <Radio className="w-8 h-8 text-[#2BB5E9]" />
              <Typography variant="h2" className="text-[#055090]">
                Media Coverage
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaCoverage.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Media Resources */}
      <Section>
        <Container size="lg">
          <div className="bg-gradient-to-br from-[#055090] to-[#00B3AA] rounded-lg p-12 text-white text-center">
            <Typography variant="h2" className="mb-4">
              Media Resources
            </Typography>
            <Typography variant="bodyLarge" className="mb-8 text-[#F7F8F9] max-w-2xl mx-auto">
              Access brand guidelines, logos, photos, and other media resources for
              coverage of D-8 CCI events and activities.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/brand"
                className="inline-block px-8 py-3 bg-white text-[#055090] font-medium rounded-lg hover:bg-[#F7F8F9] transition-colors"
              >
                Brand Guidelines
              </a>
              <a
                href="/documents"
                className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Media Kit
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter Subscription */}
      <Section className="bg-[#F7F8F9]">
        <Container size="md">
          <div className="text-center">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Subscribe to Updates
            </Typography>
            <Typography variant="body" className="text-[#414042] mb-8 max-w-xl mx-auto">
              Stay informed about D-8 CCI news, events, and business opportunities by
              subscribing to our newsletter.
            </Typography>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-[#F7F8F9] focus:border-[#055090] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#055090] text-white font-medium rounded-lg hover:bg-[#055090]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
