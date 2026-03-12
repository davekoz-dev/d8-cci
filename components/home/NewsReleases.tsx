'use client';

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NewsCard } from '@/components/shared/NewsCard';
import { Newspaper, ArrowRight } from 'lucide-react';
import type { NewsItem } from '@/lib/types/d8-cci';

export function NewsReleases() {
    const [news, setNews] = React.useState<NewsItem[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('/api/news')
            .then(async (r) => {
                if (!r.ok) {
                    throw new Error('API returned ' + r.status);
                }
                return r.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setNews(data);
                } else {
                    setNews([]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch news:', error);
                setNews([]);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Section variant="muted" padding="lg">
                <Container size="xl">
                    <div className="flex items-center gap-3 mb-8">
                        <Newspaper className="w-8 h-8 text-[#055090]" />
                        <Typography variant="h2" className="text-[#055090]">
                            News Releases
                        </Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-64 bg-gray-200 rounded-xl" />
                        ))}
                    </div>
                </Container>
            </Section>
        );
    }

    if (news.length === 0) return null;

    return (
        <Section variant="muted" padding="lg">
            <Container size="xl">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Newspaper className="w-8 h-8 text-[#055090]" />
                        <Typography variant="h2" className="text-[#055090]">
                            News Releases
                        </Typography>
                    </div>
                    <Button asChild variant="outline" className="hidden sm:flex text-[#055090] border-[#055090] hover:bg-[#055090]/5">
                        <Link href="/news" className='flex items-center'>
                            View All News <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.slice(0, 3).map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Button asChild variant="outline" className="w-full text-[#055090] border-[#055090] hover:bg-[#055090]/5">
                        <Link href="/news" className='flex items-center'>
                            View All News <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
