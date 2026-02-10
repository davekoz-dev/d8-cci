# Mapbox Setup Guide

## Interactive Map with D-8 Member Countries

The D-8 Indonesia website features an interactive map powered by Mapbox that displays all 8 member countries with clickable markers.

## Setup Instructions

### 1. Get a Mapbox Access Token

1. Go to [https://account.mapbox.com/](https://account.mapbox.com/)
2. Sign up for a free account (or log in if you have one)
3. Navigate to **Access Tokens** section
4. Create a new token or copy your default public token
5. The free tier includes:
   - 50,000 free map loads per month
   - No credit card required for getting started

### 2. Add Token to Your Project

1. Create a `.env.local` file in the root of your project:

```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and add your token:

```env
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGV1ZXJhbGxhY2M1M25vMnMzYzRrNnNkIn0.example
```

**Important:**
- Never commit `.env.local` to git (it's already in `.gitignore`)
- For production, add this token to your deployment platform's environment variables

### 3. Test the Map

```bash
# With token configured
bun run dev
```

Visit `http://localhost:3000` and you should see:
- Interactive map showing all 8 D-8 member countries
- Clickable markers with country flags
- Popup information on marker click
- Smooth zoom and pan controls

### 4. Map Features

#### Country Markers
- 🇧🇩 Bangladesh (Dhaka)
- 🇪🇬 Egypt (Cairo)
- 🇮🇩 Indonesia (Jakarta)
- 🇮🇷 Iran (Tehran)
- 🇲🇾 Malaysia (Kuala Lumpur)
- 🇳🇬 Nigeria (Abuja)
- 🇵🇰 Pakistan (Islamabad)
- 🇹🇷 Türkiye (Ankara)

#### Interactive Features
- ✅ Click markers to see country info
- ✅ Zoom and pan the map
- ✅ Animated pulse effect on markers
- ✅ Popups with country name and capital
- ✅ Legend showing all member countries
- ✅ Navigation controls

## Component Usage

### Full Map (Hero Section)
```tsx
import { D8Map } from '@/components/ui/D8Map';

<D8Map
  height="500px"
  showControls={true}
  interactive={true}
/>
```

### Compact Map (Smaller Sections)
```tsx
import { D8MapCompact } from '@/components/ui/D8Map';

<D8MapCompact />
```

## Customization

### Map Style
Edit the `mapStyle` prop in [`D8Map.tsx`](components/ui/D8Map.tsx):

```tsx
mapStyle="mapbox://styles/mapbox/light-v11"  // Light theme (current)
// OR
mapStyle="mapbox://styles/mapbox/dark-v11"   // Dark theme
mapStyle="mapbox://styles/mapbox/streets-v12" // Streets
```

### Initial View
Adjust in `D8Map.tsx`:

```tsx
const [viewState, setViewState] = React.useState({
  longitude: 60,    // Center longitude
  latitude: 20,     // Center latitude
  zoom: 2.5,        // Zoom level (0-22)
});
```

### Marker Colors
Update marker styles in `D8Map.tsx`:

```tsx
<div className="w-10 h-10 bg-[#055090] ...">  // Primary Blue
```

## Fallback Without Token

If no Mapbox token is provided, the component shows a helpful message:
- Explains where to get a token
- Link to mapbox.com
- Instructions for .env.local setup

## Performance

- Map loads on client-side only (`'use client'`)
- Markers are rendered for all 8 countries
- Smooth interactions with hardware acceleration
- Minimal bundle size with tree-shaking

## Alternative: Static Map Image

If you don't want to use Mapbox, you can replace with a static image:

```tsx
<Image
  src="/assets/d8/d8-map.png"
  alt="D-8 Member Countries Map"
  width={1200}
  height={600}
/>
```

## Troubleshooting

### Map Not Showing
1. Check `.env.local` exists with correct token
2. Restart dev server: `bun run dev`
3. Check browser console for errors
4. Verify token is public (starts with `pk.`)

### Token Issues
- Token must be public (`pk.` prefix)
- Check token hasn't expired
- Verify token has proper scopes enabled

### Styling Issues
- Ensure `mapbox-gl/dist/mapbox-gl.css` is imported
- Check Tailwind CSS is processing styles
- Verify z-index layers aren't conflicting

## Production Deployment

### Vercel
```bash
vercel env add NEXT_PUBLIC_MAPBOX_TOKEN
```

### Netlify
Add to **Site Settings > Environment Variables**

### Other Platforms
Add `NEXT_PUBLIC_MAPBOX_TOKEN` to environment variables in your platform's dashboard.

## Map Data Sources

Country coordinates are defined in [`lib/constants/data.ts`](lib/constants/data.ts):

```typescript
export const memberCountries: MemberCountry[] = [
  {
    name: 'Bangladesh',
    code: 'BD',
    flag: '🇧🇩',
    coordinates: [90.3563, 23.6850], // [longitude, latitude]
    capital: 'Dhaka',
  },
  // ... other countries
];
```

To update coordinates, edit this file.

## Technical Implementation

The map uses **native mapbox-gl-js** (not react-map-gl) with:
- `useRef` for map container and instance management
- `useMemo` for performance optimization
- `React.memo` for component memoization
- Proper cleanup in `useEffect` return
- No unnecessary re-renders

## Resources

- [Mapbox GL JS Documentation](https://docs.mapbox.com/mapbox-gl-js/api/)
- [Mapbox Styles](https://docs.mapbox.com/api/maps/styles/)
- [Mapbox Pricing](https://www.mapbox.com/pricing)

---

**Note:** The free tier (50K loads/month) is usually sufficient for most websites. Monitor usage in your Mapbox dashboard.
