import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Image as ImageIcon, Video, Newspaper } from 'lucide-react';

export const metadata = {
  title: 'Documents & Media | D-8 Indonesia Chairmanship',
  description: 'Official documents, press releases, and media resources.',
};

export default function DocumentsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="display" color="onDark" as="h1">
              Documents & Media
            </Typography>
            <Typography variant="h3" color="onDark" className="font-normal max-w-3xl mx-auto">
              Official documents, press releases, and media resources
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Official Documents */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Official Documents
          </Typography>

          <Grid cols={2} gap="md">
            {[
              {
                title: 'Jakarta Declaration',
                description: '11th D-8 Summit joint declaration and commitments',
                date: 'April 2026',
                status: 'upcoming',
              },
              {
                title: 'Chairmanship Priorities',
                description: 'Indonesia\'s five priority areas for 2026-2027',
                date: 'January 2026',
                status: 'available',
              },
              {
                title: 'D-8 Charter',
                description: 'Founding charter and organizational framework',
                date: '1997',
                status: 'available',
              },
              {
                title: 'Action Plan 2026-2027',
                description: 'Detailed action plan for Indonesia\'s Chairmanship period',
                date: 'February 2026',
                status: 'available',
              },
            ].map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <FileText className="h-10 w-10 text-[#055090]" />
                    <Badge variant={doc.status === 'available' ? 'default' : 'secondary'}>
                      {doc.status === 'available' ? 'Available' : 'Coming Soon'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                  <CardDescription className="text-sm mb-3">
                    {doc.description}
                  </CardDescription>
                  <Typography variant="caption" className="text-[#414042]">
                    {doc.date}
                  </Typography>
                </CardHeader>
                <CardContent>
                  {doc.status === 'available' && (
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Press Releases */}
      <Section variant="muted" padding="lg" id="press">
        <Container size="xl">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Press Releases
          </Typography>

          <div className="space-y-4">
            {[
              {
                title: 'Indonesia Assumes D-8 Chairmanship for 2026-2027',
                date: 'January 15, 2026',
                excerpt:
                  'Indonesia officially assumes the Chairmanship of the Developing-8 Organization for Economic Cooperation, outlining ambitious priorities for strengthening economic cooperation.',
              },
              {
                title: 'D-8 Summit 2026 to Focus on Global Economic Shifts',
                date: 'February 1, 2026',
                excerpt:
                  'The 11th D-8 Summit scheduled for April 15, 2026, will address navigating global economic shifts with emphasis on equality, solidarity, and shared prosperity.',
              },
              {
                title: 'Business Forum and Halal Expo Announced',
                date: 'February 10, 2026',
                excerpt:
                  'Major business and halal economy events will complement the D-8 Summit, creating unprecedented opportunities for trade and investment.',
              },
            ].map((press, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-[#055090]/10">
                        <Newspaper className="h-6 w-6 text-[#055090]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Typography variant="h4" className="text-[#282561]">
                          {press.title}
                        </Typography>
                        <Typography variant="bodySmall" className="text-[#414042] flex-shrink-0 ml-4">
                          {press.date}
                        </Typography>
                      </div>
                      <Typography variant="body" className="text-[#414042] mb-4">
                        {press.excerpt}
                      </Typography>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        Read full release →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Media Resources */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Media Resources
          </Typography>

          <Grid cols={3} gap="lg">
            <Card className="border-t-4 border-t-[#055090]">
              <CardHeader>
                <ImageIcon className="h-12 w-12 text-[#055090] mb-4" />
                <CardTitle>Photo Gallery</CardTitle>
                <CardDescription>
                  High-resolution photos from D-8 events and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#00B3AA]">
              <CardHeader>
                <Video className="h-12 w-12 text-[#00B3AA] mb-4" />
                <CardTitle>Video Resources</CardTitle>
                <CardDescription>
                  Videos, interviews, and event coverage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#2BB5E9]">
              <CardHeader>
                <FileText className="h-12 w-12 text-[#2BB5E9] mb-4" />
                <CardTitle>Fact Sheets</CardTitle>
                <CardDescription>
                  Quick facts and statistics about D-8 and Indonesia's Chairmanship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Media Contact */}
      <Section variant="secondary" padding="md">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="h2" color="onDark">
              Media Inquiries
            </Typography>
            <Typography variant="bodyLarge" color="onDark" className="max-w-2xl mx-auto">
              For media inquiries, interview requests, or press credentials
            </Typography>
            <Button asChild size="lg" variant="outline" className="bg-white text-[#00B3AA]">
              <a href="/contact">Contact Media Team</a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
