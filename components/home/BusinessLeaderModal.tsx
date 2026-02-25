'use client';

import * as React from 'react';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { toast } from 'sonner';

interface BusinessLeaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BusinessLeaderModal({ isOpen, onClose }: BusinessLeaderModalProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_ouu6epp';
  const EMAILJS_TEMPLATE_ID = 'template_dyjwufw';
  const EMAILJS_PUBLIC_KEY = 'vs0_DoGlm_qI8olLI';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: 'D-8 Admin',
          from_name: name,
          from_email: email,
          event_name: 'D-8 Business Leaders Forum',
          reply_to: email,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success('Thank you for registering. Our event administration team will contact you with further details.', {
        duration: 4000,
      });

      setName('');
      setEmail('');

      // Close modal after showing toast
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.', {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 mt-4 flex flex-col gap-4">
          <div className="relative w-48 h-16 bg-[#055090] mx-auto rounded-lg">
            <Image
              src="/assets/d8/logo/d8-logo-v2.png"
              alt="D8-CCI Business Leaders Forum 2026"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
          <h2 className="text-lg font-bold text-[#055090] text-center">
            Registration for D8‑CCI Business Leaders Forum 2026
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#055090] focus:border-transparent"
              placeholder="Enter your name"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#055090] focus:border-transparent"
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-9 cursor-pointer bg-[#055090] text-sm text-white hover:opacity-90"
          >
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </Button>
        </form>

        {/* Event Details */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-600 space-y-1">
            <p>
              <span className="font-semibold">Event:</span> D8‑CCI Business Leaders Forum 2026
            </p>
            <p>
              <span className="font-semibold">Location:</span> Fairmont Hotel, Jakarta
            </p>
            <p>
              <span className="font-semibold">Date &amp; Time:</span> 14 April 2026, 13.00 Jakarta Time
            </p>
            <p>
              <span className="font-semibold">Theme:</span> Achieving Sustainable Growth Through D8 Business Cooperation
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
