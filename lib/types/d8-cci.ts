/**
 * Type definitions for D-8 CCI (Chamber of Commerce & Industry)
 */

export interface D8CCIObjective {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface D8CCIMember {
  country: string;
  chamberName: string;
  acronym: string;
  flag: string;
  website: string;
  email: string;
  phone?: string;
  address?: string;
  keySectors: string[];
  description: string;
  logo?: string;
  isPresident?: boolean;
  hasSecretariat?: boolean;
}

export interface D8CCIMilestone {
  date: string;
  location: string;
  event: string;
  significance: string;
  type: 'founding' | 'milestone' | 'event' | 'anniversary';
}

export interface D8CCIEvent {
  id: string;
  title: string;
  date: string;
  dateEnd?: string;
  location: string;
  city: string;
  country: string;
  type: 'summit' | 'business-forum' | 'expo' | 'meeting' | 'special-session' | 'trade-fair';
  description: string;
  registrationOpen: boolean;
  registrationUrl?: string;
  imageUrl?: string;
}

export interface BusinessOpportunity {
  id: string;
  title: string;
  country: string;
  sector: string;
  type: 'investment' | 'joint-venture' | 'trade' | 'partnership';
  description: string;
  investmentSize?: string;
  contactEmail?: string;
  deadline?: string;
  status: 'open' | 'closed' | 'under-review';
}

export interface Document {
  id: string;
  title: string;
  type: 'report' | 'communique' | 'guideline' | 'research' | 'annual-report';
  date: string;
  description?: string;
  fileUrl: string;
  fileSize?: string;
  language?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  type: 'news' | 'press-release' | 'media-coverage';
  imageUrl?: string;
  source?: string;
  externalUrl?: string;
}
