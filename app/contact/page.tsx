'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Grid } from '@/components/ui/Grid';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';
import * as React from 'react';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <Section variant="primary" padding="lg">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Typography variant="display" color="onDark" as="h1">
              Contact Us
            </Typography>
            <Typography variant="h3" color="onDark" className="font-normal max-w-3xl mx-auto">
              Get in touch with the D-8 Indonesia Chairmanship team
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Contact Information */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <Grid cols={2} gap="lg" className="mb-12">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'info@d8indonesia.go.id',
                description: 'For general inquiries',
              },
              {
                icon: Phone,
                title: 'Phone',
                value: '+62 21 XXXX XXXX',
                description: 'Office hours: Mon-Fri, 9AM-5PM WIB',
              },
              {
                icon: MapPin,
                title: 'Address',
                value: 'Jakarta, Indonesia',
                description: 'D-8 Indonesia Secretariat',
              },
              {
                icon: Globe,
                title: 'Social Media',
                value: '@D8Indonesia',
                description: 'Follow us for updates',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[#055090]/10">
                        <Icon className="h-6 w-6 text-[#055090]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{contact.title}</CardTitle>
                        <Typography variant="body" className="text-[#282561] font-medium mb-1">
                          {contact.value}
                        </Typography>
                        <CardDescription className="text-sm">
                          {contact.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section variant="muted" padding="lg">
        <Container size="lg">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Typography variant="h2" className="text-[#055090] mb-4">
                Send Us a Message
              </Typography>
              <Typography variant="body" className="text-[#414042]">
                Fill out the form below and we'll get back to you as soon as possible
              </Typography>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#414042] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#055090] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#414042] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#055090] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-[#414042] mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#055090] focus:border-transparent"
                      placeholder="Your organization (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#414042] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#055090] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="media">Media Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="summit">Summit Registration</option>
                      <option value="business">Business Forum</option>
                      <option value="halal">Halal Expo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#414042] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#055090] focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Specific Contacts */}
      <Section variant="default" padding="lg">
        <Container size="xl">
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-[#055090] mb-4">
              Specialized Contacts
            </Typography>
            <Typography variant="body" className="text-[#414042]">
              For specific inquiries, please reach out to the relevant department
            </Typography>
          </div>

          <Grid cols={3} gap="md">
            {[
              {
                title: 'Media Relations',
                email: 'media@d8indonesia.go.id',
                description: 'Press inquiries, interview requests, media credentials',
              },
              {
                title: 'Business Forum',
                email: 'business@d8indonesia.go.id',
                description: 'Registration, partnerships, investment opportunities',
              },
              {
                title: 'Technical Support',
                email: 'tech@d8indonesia.go.id',
                description: 'Website issues, technical assistance',
              },
            ].map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{dept.title}</CardTitle>
                  <Typography variant="bodySmall" className="text-[#055090] font-medium mb-2">
                    {dept.email}
                  </Typography>
                  <CardDescription className="text-sm">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Map/Location */}
      <Section variant="muted" padding="md">
        <Container size="lg">
          <div className="text-center">
            <Typography variant="h3" className="text-[#055090] mb-4">
              Visit Us
            </Typography>
            <Typography variant="body" className="text-[#414042] mb-6">
              D-8 Indonesia Chairmanship Secretariat
              <br />
              Jakarta, Indonesia
            </Typography>
            <div className="bg-[#E5E7EB] h-64 rounded-lg flex items-center justify-center">
              <Typography variant="body" className="text-[#414042]">
                [Map Placeholder]
              </Typography>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
