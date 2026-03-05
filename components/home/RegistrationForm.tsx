'use client';

import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegistrationEventSelect } from '@/components/home/RegistrationEventSelect';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [event, setEvent] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || !event) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, phone, event }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setName(''); setEmail(''); setCompany(''); setPhone(''); setEvent('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="py-6 text-center space-y-2">
        <div className="text-2xl">✓</div>
        <p className="text-sm font-semibold text-[#055090]">Registration Submitted!</p>
        <p className="text-xs text-dark-grey/70">Check your email for confirmation and QR code.</p>
        <button onClick={() => setStatus('idle')} className="text-xs text-[#00B3AA] underline mt-2">
          Register another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 pt-3">
      <div className="space-y-1.5">
        <Label htmlFor="reg-name" className="text-xs">Full Name *</Label>
        <Input id="reg-name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" className="h-8 text-xs" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="reg-company" className="text-xs">Company / Organization</Label>
        <Input id="reg-company" type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="PT / Company name" className="h-8 text-xs" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="reg-email" className="text-xs">Email Address *</Label>
        <Input id="reg-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your.email@example.com" className="h-8 text-xs" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="reg-phone" className="text-xs">Phone Number</Label>
        <Input id="reg-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+62 8xx xxxx xxxx" className="h-8 text-xs" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="event" className="text-xs">Select Event *</Label>
        <Suspense fallback={<div className="w-full h-8 rounded-md bg-gray-100 animate-pulse" />}>
          <RegistrationEventSelect value={event} onChange={setEvent} />
        </Suspense>
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
      )}

      <Button type="submit" size="sm" disabled={status === 'loading'} className="w-full bg-[#055090] text-white hover:bg-[#055090]/90 text-xs font-semibold disabled:opacity-60">
        {status === 'loading' ? 'Submitting…' : 'Register Now'}
      </Button>
    </form>
  );
}
