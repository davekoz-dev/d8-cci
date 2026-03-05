'use client';

import * as React from 'react';
import mapboxgl from 'mapbox-gl';
import { memberCountries } from '@/lib/constants';
import 'mapbox-gl/dist/mapbox-gl.css';

interface D8MapProps {
  className?: string;
  height?: string;
}

// Geographic centroids (better than capital coords for labelling)
const CENTROIDS: Record<string, [number, number]> = {
  BGD: [90.35, 23.68],
  EGY: [29.50, 26.50],
  IDN: [118.00, -2.50],
  IRN: [54.00, 32.00],
  MYS: [109.50, 3.50],
  NGA: [8.68, 9.08],
  PAK: [68.00, 30.00],
  TUR: [35.00, 39.00],
  AZE: [47.58, 40.14],
};

const d8Codes = memberCountries.filter(c => c.iso3).map(c => c.iso3 as string);
const colorEntries = memberCountries.flatMap(c => c.iso3 && c.color ? [c.iso3, c.color] : []);

// GeoJSON for colored country name labels
const labelGeoJSON: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: memberCountries
    .filter(c => c.iso3 && CENTROIDS[c.iso3])
    .map(c => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: CENTROIDS[c.iso3!] },
      properties: { name: c.name, color: c.color ?? '#055090' },
    })),
};

export function D8Map({ className = '', height = '500px' }: D8MapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<mapboxgl.Map | null>(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  React.useEffect(() => {
    if (!token || !containerRef.current || mapRef.current) return;

    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [60, 20],
      zoom: 2.2,
      interactive: false,
      attributionControl: false,
      projection: 'mercator',
    });
    mapRef.current = map;

    map.on('load', () => {
      // Subtle fill to hint at country shape (inserted BELOW country-label)
      map.addLayer({
        id: 'd8-fills',
        type: 'fill',
        source: { type: 'vector', url: 'mapbox://mapbox.country-boundaries-v1' },
        'source-layer': 'country_boundaries',
        filter: ['in', 'iso_3166_1_alpha_3', ...d8Codes],
        paint: {
          'fill-color': ['match', ['get', 'iso_3166_1_alpha_3'], ...colorEntries, '#055090'],
          'fill-opacity': 0.15,
        },
      }, 'country-label'); // ← placed BELOW existing country name labels

      // Colored D-8 country name labels
      map.addSource('d8-labels', { type: 'geojson', data: labelGeoJSON });
      map.addLayer({
        id: 'd8-label-text',
        type: 'symbol',
        source: 'd8-labels',
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'],
          'text-size': 13,
          'text-anchor': 'center',
          'text-allow-overlap': true,
          'text-ignore-placement': true,
        },
        paint: {
          'text-color': ['get', 'color'],
          'text-halo-color': '#ffffff',
          'text-halo-width': 2,
        },
      });
    });

    return () => { map.remove(); mapRef.current = null; };
  }, [token]);

  if (!token) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-xl ${className}`} style={{ height }}>
        <p className="text-gray-400 text-sm">Map token missing</p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`} style={{ height }}>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}

export function D8MapCompact({ className }: { className?: string }) {
  return <D8Map className={className} height="350px" />;
}

D8MapCompact.displayName = 'D8MapCompact';
