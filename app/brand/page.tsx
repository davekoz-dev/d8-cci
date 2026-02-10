import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { d8Colors } from '@/lib/design-system/tokens';
import { Download, Palette, Type, Image as ImageIcon, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Brand & Visual Identity | D-8 Indonesia Chairmanship',
  description: 'D-8 brand guidelines, logos, colors, and visual identity resources.',
};

export default function BrandPage() {
  const brandColors = [
    { name: 'Primary Blue', hex: d8Colors.primaryBlue, usage: 'Main brand color' },
    { name: 'Primary Turquoise', hex: d8Colors.primaryTurquoise, usage: 'Secondary brand' },
    { name: 'Midnight Blue', hex: d8Colors.midnightBlue, usage: 'Deep accent' },
    { name: 'Blue Aqua', hex: d8Colors.blueAqua, usage: 'Bright accent' },
    { name: 'Blue Sky', hex: d8Colors.blueSky, usage: 'Light accent' },
    { name: 'Dark Grey', hex: d8Colors.darkGrey, usage: 'Text and borders' },
    { name: 'Soft White', hex: d8Colors.softWhite, usage: 'Backgrounds' },
  ];

  return (
    <>
      {/* Hero */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="display" color="onDark" as="h1">
              Brand & Visual Identity
            </Typography>
            <Typography variant="h3" color="onDark" className="font-normal max-w-3xl mx-auto">
              Official brand guidelines and resources for D-8 Indonesia Chairmanship
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Download Guidelines */}
      <Section variant="default" padding="md">
        <Container size="lg">
          <Card className="bg-[#F7F8F9] border-2 border-[#055090]">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#055090]">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Typography variant="h3" className="text-[#055090] mb-2">
                      Brand Guidelines
                    </Typography>
                    <Typography variant="body" className="text-[#414042]">
                      Complete visual identity manual with logo usage, colors, and typography
                    </Typography>
                  </div>
                </div>
                <Button size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Logo Usage */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Logo Usage
          </Typography>

          <Grid cols={2} gap="lg" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Main Logo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#F7F8F9] p-8 rounded-lg mb-4 flex items-center justify-center min-h-[200px]">
                  <Typography variant="body" className="text-[#414042]">
                    [Main Logo Configuration]
                  </Typography>
                </div>
                <Typography variant="bodySmall" className="text-[#414042]">
                  Primary use throughout the website and all materials
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Logo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#F7F8F9] p-8 rounded-lg mb-4 flex items-center justify-center min-h-[200px]">
                  <Typography variant="body" className="text-[#414042]">
                    [Secondary Logo Configuration]
                  </Typography>
                </div>
                <Typography variant="bodySmall" className="text-[#414042]">
                  For co-branding contexts with partner logos
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Logo Guidelines */}
          <Card className="bg-[#FFF8F0] border-2 border-[#FF9800]">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-[#FF9800] flex-shrink-0" />
                <div>
                  <Typography variant="h4" className="text-[#414042] mb-3">
                    Logo Usage Guidelines
                  </Typography>
                  <ul className="space-y-2 text-sm text-[#414042]">
                    <li>• Maintain minimum clear space of 2x logo height on all sides</li>
                    <li>• Do not rotate, outline, or add effects to the logo</li>
                    <li>• Do not place on complex or similar-color backgrounds</li>
                    <li>• Do not recolor or modify the logo colors</li>
                    <li>• Use appropriate configuration for context (main vs. secondary)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Color Palette */}
      <Section variant="muted" padding="lg">
        <Container size="xl">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Color Palette
          </Typography>

          <Grid cols={4} gap="md">
            {brandColors.map((color, index) => (
              <Card key={index} className="overflow-hidden">
                <div
                  className="h-32"
                  style={{ backgroundColor: color.hex }}
                />
                <CardContent className="p-4">
                  <Typography variant="h4" className="text-[#282561] mb-1">
                    {color.name}
                  </Typography>
                  <Typography variant="bodySmall" className="text-[#414042] font-mono mb-2">
                    {color.hex}
                  </Typography>
                  <Typography variant="caption" className="text-[#414042]">
                    {color.usage}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Typography */}
      <Section variant="default" padding="lg">
        <Container size="lg">
          <Typography variant="h2" className="text-[#055090] mb-8">
            Typography
          </Typography>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Typography variant="caption" className="text-[#414042] mb-2 block">
                    BRAND FONT
                  </Typography>
                  <Typography variant="display" className="text-[#055090]">
                    Fira Sans
                  </Typography>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t">
                  <div>
                    <Typography variant="bodySmall" className="text-[#414042] mb-2 uppercase tracking-wide">
                      Bold (700)
                    </Typography>
                    <Typography variant="h3" className="text-[#282561]">
                      Headings
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="bodySmall" className="text-[#414042] mb-2 uppercase tracking-wide">
                      Medium (500)
                    </Typography>
                    <Typography variant="h4" className="text-[#282561]">
                      Sub-headings
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="bodySmall" className="text-[#414042] mb-2 uppercase tracking-wide">
                      Regular (400)
                    </Typography>
                    <Typography variant="body" className="text-[#414042]">
                      Body & Captions
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Download Resources */}
      <Section variant="secondary" padding="lg">
        <Container size="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" color="onDark" className="mb-4">
              Download Resources
            </Typography>
            <Typography variant="bodyLarge" color="onDark" className="max-w-2xl mx-auto">
              Access official logos, templates, and brand assets
            </Typography>
          </div>

          <Grid cols={3} gap="md">
            {[
              { title: 'Logo Package', description: 'All logo configurations (SVG, PNG)' },
              { title: 'Color Palette', description: 'Color codes and swatches' },
              { title: 'Typography Kit', description: 'Fira Sans font files' },
              { title: 'Presentation Template', description: 'PowerPoint template' },
              { title: 'Document Template', description: 'Word document template' },
              { title: 'Social Media Kit', description: 'Social media graphics' },
            ].map((resource, index) => (
              <Card key={index} className="bg-white/10 hover:bg-white/20 transition-colors">
                <CardHeader>
                  <Download className="h-8 w-8 text-white mb-3" />
                  <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                  <Typography variant="bodySmall" color="onDark">
                    {resource.description}
                  </Typography>
                </CardHeader>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Contact */}
      <Section variant="default" padding="md">
        <Container size="lg">
          <div className="text-center">
            <Typography variant="h3" className="text-[#055090] mb-4">
              Need Help with Brand Guidelines?
            </Typography>
            <Typography variant="body" className="text-[#414042] mb-6">
              For questions about brand usage or custom requirements
            </Typography>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Brand Team</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
