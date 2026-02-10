# D-8 Indonesia Chairmanship Website - Setup Guide

## ⚠️ Important Requirements

### Node.js Version

**Current Version:** v12.22.9 (detected)
**Required Version:** Node.js 18 or higher

Next.js 16 requires Node.js 18+. Please upgrade your Node.js installation:

```bash
# Using nvm (recommended)
nvm install 18
nvm use 18

# Or install directly from nodejs.org
# https://nodejs.org/en/download/
```

After upgrading Node.js, reinstall dependencies:

```bash
bun install
# or
npm install
```

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Run Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
bun run build
bun run start
```

## Project Structure

```
d8-indonesia/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Header & Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles with D-8 brand colors
│
├── components/
│   ├── brand/                    # D-8 brand components
│   │   ├── Logo.tsx              # D-8 logo with brand compliance
│   │   ├── SupergraphicSection.tsx  # Supergraphic backgrounds
│   │   └── PatternEdge.tsx       # Pattern edge decorations
│   │
│   ├── ui/                       # Base UI components
│   │   ├── Typography.tsx        # Typography system (Fira Sans)
│   │   ├── button.tsx            # Button component
│   │   ├── card.tsx              # Card components
│   │   ├── badge.tsx             # Badge component
│   │   ├── separator.tsx         # Separator component
│   │   ├── Section.tsx           # Section wrapper
│   │   ├── Container.tsx         # Container with max-width
│   │   └── Grid.tsx              # Responsive grid
│   │
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Site header with navigation
│   │   └── Footer.tsx            # Site footer
│   │
│   └── home/                     # Home page components
│       ├── HeroSection.tsx       # Hero section
│       ├── PrioritiesGrid.tsx    # 5 priority areas
│       ├── SummitHighlight.tsx   # Summit 2026 highlight
│       ├── BusinessHalalTeaser.tsx  # Business & Halal Expo
│       ├── D8Overview.tsx        # About D-8 overview
│       └── PalestineTeaser.tsx   # Palestine & Solidarity
│
├── lib/
│   ├── design-system/            # Design system tokens
│   │   └── tokens/
│   │       ├── colors.ts         # D-8 brand colors
│   │       ├── typography.ts     # Typography scale
│   │       ├── spacing.ts        # Spacing system
│   │       ├── shadows.ts        # Shadow tokens
│   │       └── index.ts          # Exports all tokens
│   │
│   └── utils.ts                  # Utility functions (cn)
│
├── public/
│   └── assets/
│       └── d8/                   # D-8 brand assets
│           ├── logo/             # Logo files (placeholders)
│           ├── supergraphics/    # Supergraphic SVGs
│           ├── patterns/         # Pattern SVGs
│           ├── photos/           # Photography
│           └── icons/            # Custom icons
│
└── package.json
```

## Brand Compliance

### Typography

**Fira Sans family ONLY:**
- Bold (700) - Headings
- Medium (500) - Sub-headings
- Regular (400) - Body & Captions

### Color Palette

```typescript
primaryBlue: '#055090'      // Blue Azure
primaryTurquoise: '#00B3AA' // Turquoise
midnightBlue: '#282561'     // Midnight Blue
blueAqua: '#00B9F0'         // Blue Aqua
blueSky: '#2BB5E9'          // Blue Sky
darkGrey: '#414042'         // Dark Grey
softWhite: '#F7F8F9'        // Soft White
```

### Logo Usage

- **Main configuration** for primary use
- **Secondary configuration** for co-branding
- **Minimum clear space:** 2x logo height on all sides
- **Never:** rotate, recolor, add effects, or place on complex backgrounds

### Supergraphics

- Decorative backgrounds following brand guidelines
- Approved color ways only
- Content area must remain clean and readable

### Pattern Edges

- 40% opacity
- Only at edges (top, bottom, left, right)
- Never full-screen

## Development Guidelines

### Adding New Pages

1. Create page file in `app/` directory:

```typescript
// app/about-d8/page.tsx
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';

export default function AboutD8Page() {
  return (
    <Section variant="default" padding="lg">
      <Container size="xl">
        <Typography variant="h1">About D-8</Typography>
        {/* Page content */}
      </Container>
    </Section>
  );
}
```

2. Add route to navigation in `components/layout/Header.tsx`

### Using Design Tokens

```typescript
import { d8Colors, typeScale, spacing } from '@/lib/design-system/tokens';

// Use in inline styles
style={{ color: d8Colors.primaryBlue }}

// Or in Tailwind classes
className="text-[#055090]"
```

### Creating Components

Follow the existing component patterns:

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary';
}

export function MyComponent({ variant = 'default', className, ...props }: MyComponentProps) {
  return (
    <div className={cn('base-classes', className)} {...props} />
  );
}
```

## Assets

### Replace Placeholder Assets

Current logo files in `public/assets/d8/logo/` are placeholders. Replace with official D-8 Indonesia Chairmanship logos:

1. **d8-indonesia-logo-main.svg** - Main logo
2. **d8-indonesia-logo-secondary.svg** - Secondary/co-branding logo

### Adding Images

1. Place images in `public/assets/d8/photos/`
2. Use Next.js Image component for optimization:

```typescript
import Image from 'next/image';

<Image
  src="/assets/d8/photos/summit-2026.jpg"
  alt="D-8 Summit 2026"
  width={1200}
  height={675}
  priority
/>
```

## Next Steps

### Remaining Pages to Create

1. **About D-8** (`app/about-d8/page.tsx`)
   - Organization overview
   - Member countries grid
   - History and objectives

2. **Indonesia's Chairmanship** (`app/chairmanship/page.tsx`)
   - Vision and priorities
   - 2026-2027 agenda

3. **Summit & Events** (`app/summit-events/page.tsx`)
   - Summit 2026 details
   - SOM, Ministerial meetings
   - Business Forum, Halal Expo

4. **Palestine & Solidarity** (`app/palestine/page.tsx`)
   - Solidarity statement
   - Special session details

5. **Brand & Visual Identity** (`app/brand/page.tsx`)
   - Logo downloads
   - Color palette display
   - Usage guidelines

6. **Documents & Media** (`app/documents/page.tsx`)
   - Document downloads
   - Press releases
   - Photo gallery

7. **Contact** (`app/contact/page.tsx`)
   - Contact form
   - Secretariat information

### Bilingual Support (Optional)

To add Indonesian language support:

1. Install i18n library:
```bash
bun add next-intl
```

2. Follow next-intl setup guide: https://next-intl-docs.vercel.app/

### Content Updates

Update content in components with official:
- Executive summary text
- Theme descriptions
- Official statements
- Event dates and venues
- Document downloads

## Accessibility

- All components follow WCAG AA guidelines
- Color contrast ratios meet requirements
- Keyboard navigation supported
- Screen reader compatible
- Alt text for all images

## Performance

- Next.js Image component auto-optimization
- Code splitting by route
- Lazy loading for non-critical components
- Optimized fonts with `next/font`

## Support

For technical issues or questions about the codebase:
1. Check existing component patterns
2. Review design system tokens
3. Refer to brand guidelines in `public/assets/d8/README.md`

For official D-8 brand assets and content:
Contact D-8 Indonesia Secretariat

---

**Built with:**
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Bun runtime
