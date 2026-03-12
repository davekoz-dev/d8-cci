'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { d8CCIMembers } from '@/lib/constants/d8-cci-data';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function CountrySelect({ value, onChange, disabled, className }: CountrySelectProps) {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Select your country" />
      </SelectTrigger>
      <SelectContent>
        {d8CCIMembers.map((m) => (
          <SelectItem key={m.country} value={m.country} className="focus:bg-[#055090] focus:text-white">
            <span className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.flag} alt={m.country} className="w-5 h-3.5 object-cover rounded-sm" />
              <span>{m.country}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
