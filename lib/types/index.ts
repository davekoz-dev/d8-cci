/**
 * Shared TypeScript types and interfaces for D-8 Indonesia website
 */

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

export interface Priority {
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
  color: string;
}

export interface MemberCountry {
  name: string;
  code: string; // ISO 2-letter country code
  iso3?: string; // ISO 3-letter country code (for Mapbox)
  flag?: string; // Optional flag emoji or URL
  coordinates?: [number, number]; // [longitude, latitude]
  capital?: string; // Capital city name
  color?: string; // Country's brand/flag color for map display
}

export interface EventDetails {
  title: string;
  date: string;
  venue: string;
  description: string;
  type: 'summit' | 'ministerial' | 'som' | 'business' | 'expo' | 'other';
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'address';
  value: string;
  label: string;
}

export interface Document {
  title: string;
  description: string;
  url: string;
  type: 'pdf' | 'doc' | 'image' | 'other';
  date?: string;
  size?: string;
}
