'use client';

import { useState, FormEvent, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { RegistrationEventSelect } from '@/components/home/RegistrationEventSelect';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'loading' | 'success' | 'error';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_ouu6epp';
const EMAILJS_TEMPLATE_ID = 'template_dyjwufw'; // You'll need to create this template
const EMAILJS_PUBLIC_KEY = 'vs0_DoGlm_qI8olLI';

export function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !event) return;

    setStatus('loading');
    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: 'D-8 Admin',
          from_name: name,
          from_email: email,
          event_name: event,
          reply_to: email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setName('');
      setEmail('');
      setEvent('');
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="py-6 text-center space-y-2">
        <div className="text-2xl">✓</div>
        <p className="text-sm font-semibold text-[#055090]">Registration Submitted!</p>
        <p className="text-xs text-[#414042]/70">We&apos;ll confirm your registration via email.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs text-[#00B3AA] underline mt-2"
        >
          Register another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 pt-3">
      <div>
        <label htmlFor="reg-name" className="text-xs font-medium text-[#414042] block mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="reg-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3AA] focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="reg-email" className="text-xs font-medium text-[#414042] block mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="reg-email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3AA] focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label htmlFor="event" className="text-xs font-medium text-[#414042] block mb-1">
          Select Event
        </label>
        <Suspense fallback={<div className="w-full h-8 rounded-md bg-gray-100 animate-pulse" />}>
          <RegistrationEventSelect value={event} onChange={setEvent} />
        </Suspense>
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
      )}

      <Button
        type="submit"
        size="sm"
        disabled={status === 'loading'}
        className="w-full bg-[#055090] text-white hover:bg-[#055090]/90 text-xs font-semibold disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting…' : 'Register Now'}
      </Button>
    </form>
  );
}
