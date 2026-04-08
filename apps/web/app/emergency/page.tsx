'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { AlertTriangle, Phone, MapPin, Heart, Clock, CheckCircle } from 'lucide-react';

export default function Emergency() {
  const [activated, setActivated] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleSOS = () => {
    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setActivated(true);
          return null;
        }
        return (prev ?? 3) - 1;
      });
    }, 1000);
  };

  return (
    <AppLayout>
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-6 text-white relative overflow-hidden transition-colors duration-700 ${
          activated ? 'bg-red-700' : 'bg-gray-900'
        }`}
      >
        {/* Animated background pulse */}
        {activated && (
          <div className="absolute inset-0 bg-red-500 opacity-20 animate-ping rounded-full scale-150" />
        )}

        <div className="z-10 text-center max-w-md w-full space-y-6">
          {/* Back link */}
          <Link
            href="/dashboard"
            className="absolute top-6 left-6 text-white/60 hover:text-white text-sm flex items-center space-x-1 transition-colors"
          >
            ← Back to Dashboard
          </Link>

          <div className="flex justify-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-wider">Emergency SOS</h1>
          <p className="text-xl opacity-80">
            {activated
              ? 'Emergency services have been notified. Help is on the way.'
              : 'Press and hold the SOS button to activate emergency response'}
          </p>

          {/* SOS Button */}
          {!activated ? (
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={handleSOS}
                disabled={countdown !== null}
                className={`w-48 h-48 rounded-full font-black text-4xl uppercase tracking-widest shadow-2xl transition-all duration-300 flex flex-col items-center justify-center border-4 ${
                  countdown !== null
                    ? 'bg-orange-400 text-white border-orange-300 scale-95'
                    : 'bg-white text-danger border-white hover:scale-105 hover:shadow-danger/40'
                }`}
              >
                {countdown !== null ? (
                  <>
                    <span className="text-5xl font-black">{countdown}</span>
                    <span className="text-sm font-medium opacity-80">Activating...</span>
                  </>
                ) : (
                  'SOS'
                )}
              </button>
              {countdown === null && (
                <p className="text-white/50 text-sm">Tap once to begin 3-second countdown</p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle className="h-12 w-12 text-secondary" />
              </div>
              <div className="bg-white/10 rounded-2xl p-4 space-y-2 backdrop-blur-sm text-left">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-white/70 flex-shrink-0" />
                  <span className="text-sm">Live location shared with emergency services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-white/70 flex-shrink-0" />
                  <span className="text-sm">Nearest hospital: Apollo Hospitals (2.5 km)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-white/70 flex-shrink-0" />
                  <span className="text-sm">Estimated ambulance arrival: 8 minutes</span>
                </div>
              </div>
            </div>
          )}

          {/* Emergency contacts */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href="tel:108"
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 rounded-2xl px-4 py-3 transition-all backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              <span className="font-bold">Call 108</span>
            </a>
            <Link
              href="/hospitals"
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 rounded-2xl px-4 py-3 transition-all backdrop-blur-sm"
            >
              <MapPin className="h-5 w-5" />
              <span className="font-bold">Find Hospital</span>
            </Link>
          </div>

          {activated && (
            <button
              onClick={() => { setActivated(false); setCountdown(null); }}
              className="text-white/50 text-sm hover:text-white/80 transition-colors underline"
            >
              Cancel Emergency (false alarm)
            </button>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
