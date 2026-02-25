/**
 * D-8 CCI (Chamber of Commerce & Industry) Data
 * Based on requirements document section 2.2
 */

import type { D8CCIObjective, D8CCIMember, D8CCIEvent, D8CCIMilestone } from '@/lib/types/d8-cci';

/**
 * D-8 CCI 11 Core Objectives and Means
 * From requirements section 2.1
 */
export const d8CCIObjectives: D8CCIObjective[] = [
  {
    id: 'economic-integration',
    title: 'Economic Integration & Product Diversification',
    description:
      'Support cooperation among business sectors in D-8 countries through diversifying commercial products to exchange among themselves to achieve economic integration and socio-economic development.',
    icon: 'TrendingUp',
  },
  {
    id: 'industrial-agricultural',
    title: 'Industrial & Agricultural Development',
    description:
      'Development of industrial and agricultural products in D-8 countries and promotion of quality and competitiveness concepts.',
    icon: 'Factory',
  },
  {
    id: 'multi-sector',
    title: 'Multi-Sector Enhancement',
    description:
      'Encourage enhancement of Trade, Service, Industry, SMEs, Entrepreneurship, Agriculture, Intra-Regional Tourism, and Handicrafts; promote collective self-reliance based on harnessing complementarities and establishing value/supply chains; propose mutually advantageous economic policies.',
    icon: 'Network',
  },
  {
    id: 'investment',
    title: 'Investment & Joint Ventures',
    description:
      'Make recommendations to safeguard economic and business interests of D-8 countries, promote investment opportunities and joint ventures among member countries.',
    icon: 'Handshake',
  },
  {
    id: 'events',
    title: 'Events & Forums Organization',
    description:
      'Assist, contribute and encourage organization of and participation in Business Forums, Trade Fairs, Joint Display Centers, Exhibitions, Seminars, Conferences, Lectures, and Publicity Campaigns.',
    icon: 'CalendarDays',
  },
  {
    id: 'knowledge',
    title: 'Knowledge Exchange',
    description:
      'Promote exchange of commercial, technical, industrial management, and scientific information, education, and know-how among members.',
    icon: 'BookOpen',
  },
  {
    id: 'research',
    title: 'Joint Research & Data',
    description:
      'Promote joint research and development among D-8 member countries; collate, collect and disseminate statistical data.',
    icon: 'BarChart',
  },
  {
    id: 'trade-facilitation',
    title: 'Trade Facilitation',
    description:
      'Act for trade facilitation to remove barriers hindering exchange of goods and services among member states; identify and propose measures to increase trade volume and economic cooperation.',
    icon: 'Ship',
  },
  {
    id: 'investment-climate',
    title: 'Investment Climate Improvement',
    description:
      'Contribute to improvement of investment climate in D-8 countries to enhance foreign investment.',
    icon: 'Globe',
  },
  {
    id: 'dispute-settlement',
    title: 'Dispute Settlement',
    description:
      'Provide means for settling commercial disputes that might arise among companies of D-8 CCI members.',
    icon: 'Scale',
  },
  {
    id: 'international-relations',
    title: 'International Relations',
    description:
      'Strengthen relations with international trade organizations, bodies, unions, and similar chambers to promote private sector\'s role in socio-economic development.',
    icon: 'Users',
  },
];

/**
 * D-8 CCI Member Chambers
 * From requirements section 2.2
 */
export const d8CCIMembers: D8CCIMember[] = [
  {
    country: 'Bangladesh',
    chamberName: 'The Federation of Bangladesh Chambers of Commerce and Industry',
    acronym: 'FBCCI',
    flag: 'https://flagcdn.com/bd.svg',
    website: 'https://www.fbcci.org.bd',
    email: 'info@fbcci.org',
    keySectors: ['Textiles & Garments', 'Agriculture', 'Pharmaceuticals', 'IT Services', 'Leather'],
    description: 'The apex trade organization of Bangladesh, representing the private sector and promoting trade and commerce.',
  },
  {
    country: 'Egypt',
    chamberName: 'Federation of Egyptian Chambers of Commerce',
    acronym: 'FEDCOC',
    flag: 'https://flagcdn.com/eg.svg',
    website: 'https://www.fedcoc.org.eg',
    email: 'info@fedcoc.org.eg',
    keySectors: ['Tourism', 'Agriculture', 'Textiles', 'Petroleum', 'Manufacturing'],
    description: 'Current President of D-8 CCI, leading the federation of chambers across Egypt.',
    isPresident: true,
  },
  {
    country: 'Indonesia',
    chamberName: 'Indonesian Chamber of Commerce and Industry',
    acronym: 'KADIN',
    flag: 'https://flagcdn.com/id.svg',
    website: 'https://www.kadin.id',
    email: 'info@kadin.id',
    keySectors: ['Manufacturing', 'Agriculture', 'Mining', 'Services', 'Halal Industry'],
    description: 'Indonesia\'s leading business association supporting economic development and private sector growth.',
  },
  {
    country: 'Iran',
    chamberName: 'Iran Chamber of Commerce, Industries, Mine and Agriculture',
    acronym: 'ICCIMA',
    flag: 'https://flagcdn.com/ir.svg',
    website: 'https://www.iccima.ir',
    email: 'info@iccima.ir',
    keySectors: ['Oil & Gas', 'Agriculture', 'Manufacturing', 'Mining', 'Petrochemicals'],
    description: 'Manages D-8 CCI Secretariat with Secretary-General initially appointed in 2004.',
    hasSecretariat: true,
  },
  {
    country: 'Malaysia',
    chamberName: 'National Chamber of Commerce and Industry of Malaysia',
    acronym: 'NCCIM',
    flag: 'https://flagcdn.com/my.svg',
    website: 'https://www.nccim.org.my',
    email: 'info@nccim.org.my',
    keySectors: ['Electronics', 'Palm Oil', 'Halal Products', 'Services', 'Manufacturing'],
    description: 'Representing Malaysian business interests and promoting trade and investment opportunities.',
  },
  {
    country: 'Nigeria',
    chamberName: 'Nigeria Association of Chambers of Commerce, Industry, Mines and Agriculture',
    acronym: 'NACCIMA',
    flag: 'https://flagcdn.com/ng.svg',
    website: 'https://www.naccima.com',
    email: 'info@naccima.com',
    keySectors: ['Oil & Gas', 'Agriculture', 'Mining', 'Telecommunications', 'Manufacturing'],
    description: 'The foremost private sector organization representing Nigerian business community.',
  },
  {
    country: 'Pakistan',
    chamberName: 'The Federation of Pakistan Chambers of Commerce and Industry',
    acronym: 'FPCCI',
    flag: 'https://flagcdn.com/pk.svg',
    website: 'https://www.fpcci.org.pk',
    email: 'info@fpcci.org.pk',
    keySectors: ['Textiles', 'Agriculture', 'Sports Goods', 'Surgical Instruments', 'IT Services'],
    description: 'Pakistan\'s apex trade body representing the country\'s business, trade and industry.',
  },
  {
    country: 'Turkey',
    chamberName: 'The Union of Chambers and Commodity Exchanges of Turkey',
    acronym: 'TOBB',
    flag: 'https://flagcdn.com/tr.svg',
    website: 'https://www.tobb.org.tr',
    email: 'info@tobb.org.tr',
    keySectors: ['Manufacturing', 'Construction', 'Tourism', 'Agriculture', 'Services'],
    description: 'The umbrella organization of chambers in Turkey, supporting private sector development.',
  },
  {
    country: 'Azerbaijan',
    chamberName: 'Chamber of Commerce and Industry of the Republic of Azerbaijan',
    acronym: 'AzCCI',
    flag: 'https://flagcdn.com/az.svg',
    website: 'https://www.chamber.az',
    email: 'info@chamber.az',
    keySectors: ['Oil & Gas', 'Agriculture', 'Tourism', 'ICT', 'Manufacturing'],
    description: 'The leading business organization of Azerbaijan, promoting trade, investment, and economic cooperation.',
  },
];

/**
 * D-8 CCI History & Key Milestones
 * From requirements section 2.3
 */
export const d8CCIMilestones: D8CCIMilestone[] = [
  {
    date: '22-25 Feb 2001',
    location: 'Cairo, Egypt',
    event: '3rd Cairo Summit',
    significance:
      '1st Business Forum of D-8 CCI held. Article 29 of Cairo Declaration approved establishment of business forum recognizing vital role of private sector. Initial proposal step.',
    type: 'founding',
  },
  {
    date: '14 Feb 2004',
    location: 'Tehran, Iran',
    event: '4th Tehran Summit',
    significance:
      '2nd Business Forum. D-8 FCCI officially established. Iran appointed to manage Secretariat; Mr. A.R. Hanjani appointed as Secretary-General. Official founding date.',
    type: 'founding',
  },
  {
    date: '11 May 2006',
    location: 'Bali, Indonesia',
    event: '5th Bali Summit',
    significance:
      '3rd Business Forum. Emphasized visa facilitation, shipping/logistics, and Preferential Trade Agreement (PTA) to expand intra-D-8 trade volume.',
    type: 'milestone',
  },
  {
    date: '3 July 2006',
    location: 'Kuala Lumpur, Malaysia',
    event: '6th Summit',
    significance:
      '4th Business Forum. Focused on 3 potential sectors: Biotechnology, Halal Industry, Renewable Energy. Proposed meetings of senior economic officials and Economics Ministers.',
    type: 'milestone',
  },
  {
    date: '5 July 2010',
    location: 'Abuja, Nigeria',
    event: '7th Abuja Summit',
    significance:
      '5th Business Forum. Recommended governments provide financial resources and banking credits to business communities. Established USD 50,000 annual membership fee for D-8 Secretariat activities.',
    type: 'milestone',
  },
  {
    date: '5 April 2021',
    location: 'Virtual Event',
    event: '10th D-8 Summit Business Forum',
    significance: 'D-8 Business Forum organized virtually as sideline of 10th D-8 Summit.',
    type: 'event',
  },
  {
    date: '25-27 July 2022',
    location: 'Dhaka, Bangladesh',
    event: 'Business Forum and Expo',
    significance: 'Business Forum and Expo held.',
    type: 'event',
  },
  {
    date: '26-27 Oct 2022',
    location: 'Abuja, Nigeria',
    event: 'First D-8 Forum on SMEs and Health Market',
    significance: 'First D-8 Forum on SMEs and Health Market held.',
    type: 'event',
  },
  {
    date: '15 June 2022',
    location: 'Various locations',
    event: 'D-8 Silver Jubilee Celebration',
    significance: 'Year-long D-8 Silver Jubilee Celebration completed.',
    type: 'anniversary',
  },
];

/**
 * Upcoming D-8 CCI Events 2026
 * From requirements section 3.2
 */
export const upcomingEvents: D8CCIEvent[] = [
  {
    id: 'summit-2026',
    title: '12th D-8 Summit',
    date: '14 April 2026',
    dateEnd: '14 April 2026',
    location: 'Jakarta International Convention Center (JICC)',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'summit',
    description:
      'The 12th Summit of D-8 Organization for Economic Cooperation under Indonesia\'s chairmanship 2026-2027.',
    registrationOpen: true,
  },
  {
    id: 'som-ministerial-2026',
    title: 'Senior Officials Meeting & Ministerial Meeting',
    date: '12 April 2026',
    dateEnd: '14 April 2026',
    location: 'Fairmont Hotel Jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'meeting',
    description:
      'Senior Officials Meeting (SOM) and Ministerial Meeting ahead of the 12th D-8 Summit.',
    registrationOpen: false,
  },
  {
    id: 'business-forum-2026',
    title: 'D-8 Business & Investment Forum',
    date: 'April 2026',
    dateEnd: 'April 2026',
    location: 'Jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'business-forum',
    description:
      'Business and Investment Forum bringing together private sector leaders, chambers of commerce, and investors from D-8 member countries.',
    registrationOpen: true,
  },
  {
    id: 'halal-expo-2026',
    title: 'D-8 Halal Expo Indonesia',
    date: '14 April 2026',
    dateEnd: '18 April 2026',
    location: 'Jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'expo',
    description:
      'D-8 Halal Expo showcasing halal products, services, and investment opportunities across member countries.',
    registrationOpen: true,
  },
  {
    id: 'palestine-session-2026',
    title: 'Special Session on Palestine/Gaza',
    date: 'April 2026',
    dateEnd: 'April 2026',
    location: 'Jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'special-session',
    description:
      'Special session dedicated to solidarity with Palestine and addressing humanitarian concerns in Gaza.',
    registrationOpen: false,
  },
];
