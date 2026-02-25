'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const eventOptions = [
  { value: 'ministerial', label: 'Senior Officials & Ministerial Meeting' },
  { value: 'business-forum', label: 'D-8 Business Leaders Forum' },
  { value: 'summit', label: '11th D-8 Summit' },
  { value: 'halal-expo', label: 'D-8 Halal Expo Indonesia' },
];

export function RegistrationEventSelect() {
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('event') ?? '');

  useEffect(() => {
    const event = searchParams.get('event');
    if (event) setValue(event);
  }, [searchParams]);

  return (
    <select
      id="event"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3AA] focus:border-transparent"
    >
      <option value="">Choose an event...</option>
      {eventOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
