'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { toast } from 'sonner';

interface BusinessLeaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BusinessLeaderModal({ isOpen, onClose }: BusinessLeaderModalProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, phone, event: 'business-forum' }),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success('Registration confirmed! Check your email for your QR code.', { duration: 4000 });
      setName(''); setEmail(''); setCompany(''); setPhone('');
      setTimeout(onClose, 1500);
    } catch {
      toast.error('Registration failed. Please try again.', { duration: 4000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 mt-4 flex flex-col gap-4">
          <div className="relative w-48 h-16 bg-[#055090] mx-auto rounded-lg">
            <Image src="/assets/d8/logo/d8-logo-v2.png" alt="D8-CCI Business Leaders Forum 2026" fill className="object-cover" sizes="192px" />
          </div>
          <h2 className="text-lg font-bold text-[#055090] text-center">
            Registration for D8‑CCI Business Leaders Forum 2026
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="bl-name">Full Name *</Label>
            <Input id="bl-name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Enter your full name" disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="bl-company">Company / Organization</Label>
            <Input id="bl-company" type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="PT / Company name" disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="bl-email">Email Address *</Label>
            <Input id="bl-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your.email@example.com" disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="bl-phone">Phone Number</Label>
            <Input id="bl-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+62 8xx xxxx xxxx" disabled={isSubmitting} />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-9 cursor-pointer bg-[#055090] text-sm text-white hover:opacity-90">
            {isSubmitting ? 'Registering…' : 'Register Now'}
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-600 space-y-1">
          <p><span className="font-semibold">Event:</span> D8‑CCI Business Leaders Forum 2026</p>
          <p><span className="font-semibold">Location:</span> Fairmont Hotel, Jakarta</p>
          <p><span className="font-semibold">Date &amp; Time:</span> 14 April 2026, 13.00 Jakarta Time</p>
          <p><span className="font-semibold">Theme:</span> Achieving Sustainable Growth Through D8 Business Cooperation</p>
        </div>
      </div>
    </div>
  );
}
