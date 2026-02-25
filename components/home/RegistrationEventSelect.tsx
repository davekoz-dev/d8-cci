'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const eventOptions = [
  { value: 'ministerial', label: 'Senior Officials & Ministerial Meeting' },
  { value: 'business-forum', label: 'D-8 Business Leaders Forum' },
  { value: 'summit', label: '11th D-8 Summit' },
  { value: 'halal-expo', label: 'D-8 Halal Expo Indonesia' },
];

interface Props {
  value?: string;
  onChange?: (value: string) => void;
}

export function RegistrationEventSelect({ value: controlledValue, onChange }: Props) {
  const searchParams = useSearchParams();
  const [internalValue, setInternalValue] = useState(searchParams.get('event') ?? '');

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  useEffect(() => {
    if (!isControlled) {
      const event = searchParams.get('event');
      if (event) setInternalValue(event);
    }
  }, [searchParams, isControlled]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <select
      id="event"
      value={value}
      onChange={handleChange}
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
