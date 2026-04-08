'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Video, Mic, MicOff, PhoneOff, MessageSquare, VideoOff, ArrowLeft } from 'lucide-react';

export default function TelemedicinePage() {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [ended, setEnded] = useState(false);

  if (ended) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
          <div className="text-center space-y-6 max-w-sm">
            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <PhoneOff className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="text-3xl font-black">Call Ended</h2>
            <p className="text-gray-400">Your consultation with Dr. Ramesh Kumar has ended. Duration: 04:32</p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/appointments">View Appointments</Link>
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800" onClick={() => setEnded(false)}>
                Rejoin Call
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="h-screen bg-gray-900 flex flex-col font-sans">
        <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-3">
            <Link href="/appointments" className="p-2 hover:bg-gray-800 rounded-xl transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-400" />
            </Link>
            <div className="bg-primary px-3 py-1 rounded-lg">
              <span className="font-bold text-sm tracking-widest uppercase text-white">● Live</span>
            </div>
            <h1 className="text-lg font-bold">Consultation with Dr. Ramesh Kumar</h1>
          </div>
          <div className="text-gray-400 text-sm font-mono">04:32 elapsed</div>
        </header>

        <main className="flex-1 flex overflow-hidden p-4 space-x-4">
          {/* Main Video Area */}
          <div className="flex-1 bg-gray-800 rounded-3xl overflow-hidden relative border border-gray-700 shadow-2xl">
            {/* Remote feed placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Video className="h-16 w-16 mx-auto mb-2 opacity-30" />
                <p className="text-sm opacity-50">Dr. Ramesh Kumar — Camera Feed</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-medium text-sm">
              Dr. Ramesh Kumar · Cardiologist
            </div>

            {/* Local pip */}
            <div className="absolute top-4 right-4 w-40 h-52 bg-gray-700 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl z-10 flex items-center justify-center">
              {camOn ? (
                <div className="text-center text-gray-500">
                  <Video className="h-8 w-8 mx-auto opacity-40" />
                  <p className="text-xs opacity-40 mt-1">You</p>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <VideoOff className="h-8 w-8 mx-auto opacity-40" />
                  <p className="text-xs opacity-40 mt-1">Camera Off</p>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-gray-900/80 backdrop-blur-xl px-8 py-4 rounded-full border border-gray-700">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${micOn ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-danger text-white'}`}
              >
                {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setCamOn(!camOn)}
                className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${camOn ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-danger text-white'}`}
              >
                {camOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setEnded(true)}
                className="h-14 w-20 bg-danger rounded-full flex items-center justify-center shadow-lg shadow-danger/40 hover:bg-danger/90 transition-all"
              >
                <PhoneOff className="h-6 w-6 text-white" />
              </button>
              <button className="h-12 w-12 rounded-full bg-gray-700 text-white hover:bg-gray-600 flex items-center justify-center transition-all">
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-72 bg-gray-800 rounded-3xl border border-gray-700 flex flex-col overflow-hidden text-white shadow-xl">
            <div className="p-5 border-b border-gray-700">
              <h2 className="text-base font-bold">Session Insights</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="bg-blue-900/40 border border-blue-800 rounded-xl p-4">
                <h3 className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">Live Transcription</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  "Your blood pressure readings from yesterday look much better. Keep following the current dosage..."
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">E-Prescription Draft</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span>Lisinopril 10mg (1× daily)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span>Aspirin 81mg (1× daily)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-gray-900/50 border-t border-gray-700">
              <Button className="w-full" onClick={() => setEnded(true)}>
                Sign &amp; Complete Consultation
              </Button>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
