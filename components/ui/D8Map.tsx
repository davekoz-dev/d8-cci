'use client';

import * as React from 'react';
import mapboxgl from 'mapbox-gl';
import { memberCountries } from '@/lib/constants';
import { Typography } from './Typography';
import 'mapbox-gl/dist/mapbox-gl.css';

/**
 * D-8 Interactive Map Component
 *
 * Displays D-8 member countries as colored regions on an interactive map
 * Requires NEXT_PUBLIC_MAPBOX_TOKEN in environment variables
 */

interface D8MapProps {
  className?: string;
  height?: string;
  showControls?: boolean;
  interactive?: boolean;
}

// Constants
const MAP_CONFIG = {
  style: 'mapbox://styles/mapbox/light-v11',
  center: [60, 20] as [number, number],
  zoom: 2.2,
} as const;

const LAYER_IDS = {
  countryFills: 'd8-country-fills',
  countryBorders: 'd8-country-borders',
  countryHighlight: 'd8-country-highlight',
} as const;

// Helper: Create color mapping for D-8 countries
const getCountryColorMap = (): Record<string, string> => {
  const colorMap: Record<string, string> = {};
  memberCountries.forEach((country) => {
    if (country.iso3 && country.color) {
      colorMap[country.iso3] = country.color;
    }
  });
  return colorMap;
};

// Helper: Get list of D-8 ISO3 codes
const getD8CountryCodes = (): string[] => {
  return memberCountries
    .filter((c) => c.iso3)
    .map((c) => c.iso3 as string);
};

// Helper: Create popup HTML
const createPopupHTML = (
  name: string,
  capital: string = '',
  flag: string = ''
): string => `
  <div style="padding: 16px; min-width: 220px;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      ${flag ? `<img src="${flag}" alt="${name} flag" style="width: 48px; height: 32px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />` : ''}
      <div>
        <div style="font-size: 20px; font-weight: 700; color: #055090; margin-bottom: 4px;">
          ${name}
        </div>
        ${capital ? `<div style="font-size: 14px; color: #414042;">Capital: ${capital}</div>` : ''}
      </div>
    </div>
    <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #E5E7EB;">
      <div style="font-size: 12px; color: #414042;">D-8 Member Country</div>
    </div>
  </div>
`;

// No Token Fallback Component
const NoTokenFallback: React.FC<{ className: string; height: string }> = ({
  className,
  height,
}) => (
  <div
    className={`flex items-center justify-center bg-[#F7F8F9] rounded-lg border-2 border-dashed border-[#E5E7EB] ${className}`}
    style={{ height }}
  >
    <div className="text-center p-8 max-w-md">
      <Typography variant="h4" className="text-[#414042] mb-3">
        Mapbox Token Required
      </Typography>
      <Typography variant="bodySmall" className="text-[#414042]">
        Please add{' '}
        <code className="bg-[#E5E7EB] px-2 py-1 rounded">
          NEXT_PUBLIC_MAPBOX_TOKEN
        </code>{' '}
        to your{' '}
        <code className="bg-[#E5E7EB] px-2 py-1 rounded">.env.local</code> file
      </Typography>
      <Typography variant="caption" className="text-[#414042] mt-3 block">
        Get your free token at{' '}
        <a
          href="https://mapbox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#055090] underline"
        >
          mapbox.com
        </a>
      </Typography>
    </div>
  </div>
);

// Map Legend Component
const MapLegend: React.FC = React.memo(() => (
  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 max-w-[280px]">
    <Typography variant="bodySmall" className="text-[#282561] font-bold mb-3">
      D-8 Member Countries
    </Typography>
    <div className="space-y-2.5">
      {memberCountries.map((country) => (
        <div key={country.code} className="flex items-center gap-3">
          {country.flag && (
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-8 h-6 object-cover rounded shadow-sm flex-shrink-0"
            />
          )}
          <div className="flex-1">
            <Typography variant="bodySmall" className="text-[#282561] font-medium">
              {country.name}
            </Typography>
          </div>

        </div>
      ))}
    </div>
  </div>
));

MapLegend.displayName = 'MapLegend';

// Main Map Component
export function D8Map({
  className = '',
  height = '600px',
  showControls = true,
  interactive = true,
}: D8MapProps) {
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<mapboxgl.Map | null>(null);
  const popup = React.useRef<mapboxgl.Popup | null>(null);
  const initialized = React.useRef(false);

  // Memoize values
  const MAPBOX_TOKEN = React.useMemo(
    () => process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '',
    []
  );
  const d8CountryCodes = React.useMemo(() => getD8CountryCodes(), []);
  const colorMap = React.useMemo(() => getCountryColorMap(), []);

  React.useEffect(() => {
    if (!MAPBOX_TOKEN || !mapContainer.current || initialized.current) return;

    initialized.current = true;
    mapboxgl.accessToken = MAPBOX_TOKEN;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAP_CONFIG.style,
      center: MAP_CONFIG.center,
      zoom: MAP_CONFIG.zoom,
      interactive,
    });

    // Add navigation controls
    if (showControls) {
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    // Initialize popup
    popup.current = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: false,
      maxWidth: '300px',
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Create fill layer for D-8 countries
      map.current.addLayer({
        id: LAYER_IDS.countryFills,
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1',
        },
        'source-layer': 'country_boundaries',
        filter: ['in', 'iso_3166_1_alpha_3', ...d8CountryCodes],
        paint: {
          'fill-color': [
            'match',
            ['get', 'iso_3166_1_alpha_3'],
            ...Object.entries(colorMap).flat(),
            '#055090', // Default fallback
          ],
          'fill-opacity': 0.85,
        },
      });

      // Create border layer for D-8 countries
      map.current.addLayer({
        id: LAYER_IDS.countryBorders,
        type: 'line',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1',
        },
        'source-layer': 'country_boundaries',
        filter: ['in', 'iso_3166_1_alpha_3', ...d8CountryCodes],
        paint: {
          'line-color': '#FFFFFF',
          'line-width': 2.5,
          'line-opacity': 1,
        },
      });

      // Add hover effect
      map.current.on('mousemove', LAYER_IDS.countryFills, () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = 'pointer';
        }
      });

      map.current.on('mouseleave', LAYER_IDS.countryFills, () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = '';
        }
      });

      // Add click handler to show popup
      map.current.on('click', LAYER_IDS.countryFills, (e) => {
        if (!e.features || !e.features[0] || !popup.current || !map.current)
          return;

        const feature = e.features[0];
        const iso3 = feature.properties?.iso_3166_1_alpha_3;
        const country = memberCountries.find((c) => c.iso3 === iso3);

        if (country && e.lngLat) {
          popup.current
            .setLngLat(e.lngLat)
            .setHTML(
              createPopupHTML(
                country.name,
                country.capital || '',
                country.flag || ''
              )
            )
            .addTo(map.current);
        }
      });
    });

    // Cleanup
    return () => {
      popup.current?.remove();
      popup.current = null;
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      initialized.current = false;
    };
  }, [MAPBOX_TOKEN, interactive, showControls, d8CountryCodes, colorMap]);

  if (!MAPBOX_TOKEN) {
    return <NoTokenFallback className={className} height={height} />;
  }

  return (
    <div
      className={`relative rounded-lg overflow-hidden ${className}`}
      style={{ height }}
    >
      <div ref={mapContainer} className="w-full h-full" />
      <MapLegend />

      {/* Minimal Mapbox attribution styling */}
      <style jsx>{`
        :global(.mapboxgl-ctrl-logo) {
          display: none !important;
        }
        :global(.mapboxgl-ctrl-attrib) {
          background-color: transparent !important;
          font-size: 8px !important;
          padding: 1px 3px !important;
          margin: 0 2px 2px 0 !important;
          opacity: 0.3 !important;
          display: none !important;
        }
        :global(.mapboxgl-ctrl-attrib-inner) {
          font-size: 8px !important;
          color: #999 !important;
          display: none !important;
        }
        :global(.mapboxgl-ctrl-attrib a) {
          color: #999 !important;
          font-size: 8px !important;
          text-decoration: none !important;
          display: none !important;
        }
        :global(.mapboxgl-ctrl-attrib):hover {
          opacity: 0.6 !important;
          display: none !important;
        }
      `}</style>
    </div>
  );
}

/**
 * Compact Map for smaller displays
 */
export const D8MapCompact = React.memo<{ className?: string }>(
  ({ className }) => (
    <D8Map
      className={className}
      height="400px"
      showControls={false}
      interactive={false}
    />
  )
);

D8MapCompact.displayName = 'D8MapCompact';
