'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Phone, ArrowLeft } from 'lucide-react';

const ALL_HOSPITALS = [
  { id: '1', name: 'Apollo Hospitals', city: 'Hyderabad', specialty: 'Cardiology', rating: 4.8, distance: '2.5 km', phone: '+91 40 2360 7777' },
  { id: '2', name: 'KIMS Hospital', city: 'Hyderabad', specialty: 'Neurology', rating: 4.7, distance: '4.1 km', phone: '+91 40 4488 5000' },
  { id: '3', name: 'Care Hospitals', city: 'Hyderabad', specialty: 'Orthopedics', rating: 4.6, distance: '5.2 km', phone: '+91 40 3041 8888' },
  { id: '4', name: 'NIMS Hospital', city: 'Hyderabad', specialty: 'Emergency Care', rating: 4.5, distance: '7.0 km', phone: '+91 40 2489 7000' },
  { id: '5', name: 'Yashoda Hospitals', city: 'Hyderabad', specialty: 'Oncology', rating: 4.7, distance: '8.3 km', phone: '+91 40 4567 4567' },
];

export default function HospitalsPage() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ALL_HOSPITALS.filter(
    (h) =>
      h.name.toLowerCase().includes(query.toLowerCase()) ||
      h.specialty.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-10 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Hospital Discovery</h1>
          </div>
          <Button asChild>
            <Link href="/appointments">My Appointments</Link>
          </Button>
        </header>

        <main className="flex-1 flex overflow-hidden" style={{ height: 'calc(100vh - 65px)' }}>
          {/* Sidebar */}
          <div className="w-96 bg-white border-r border-gray-100 flex flex-col h-full overflow-hidden shadow-xl z-10">
            <div className="p-6 border-b border-gray-100 space-y-3">
              <h2 className="text-xl font-bold text-gray-900">Find a Hospital</h2>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm"
                  placeholder="Search by name or specialty"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm"
                  placeholder="Location (e.g., Hyderabad)"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {filtered.length} results found
              </p>
              {filtered.map((hospital) => (
                <button
                  key={hospital.id}
                  onClick={() => setSelected(hospital.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    selected === hospital.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-gray-100 bg-white hover:border-primary/40 hover:shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1.5">
                    <h3 className="font-bold text-gray-900 text-base">{hospital.name}</h3>
                    <div className="flex items-center bg-green-50 px-2 py-0.5 rounded-lg ml-2 flex-shrink-0">
                      <Star className="h-3 w-3 text-secondary fill-secondary mr-1" />
                      <span className="text-secondary font-bold text-xs">{hospital.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-primary font-medium">{hospital.specialty}</p>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-400">
                      <MapPin className="h-3 w-3 mr-1" />
                      {hospital.city} · {hospital.distance}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Phone className="h-3 w-3 mr-1" />
                      {hospital.phone.substring(0, 10)}...
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
            {/* Decorative map grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {selected ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full mx-4 border border-gray-100">
                  {(() => {
                    const h = ALL_HOSPITALS.find((x) => x.id === selected)!;
                    return (
                      <>
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                          <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center">{h.name}</h3>
                        <p className="text-primary text-center font-medium text-sm mt-1">{h.specialty}</p>
                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Distance</span>
                            <span className="font-semibold">{h.distance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Rating</span>
                            <span className="font-semibold text-secondary">{h.rating} ★</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Phone</span>
                            <span className="font-semibold">{h.phone}</span>
                          </div>
                        </div>
                        <Button asChild className="w-full mt-5">
                          <Link href="/appointments">Book Appointment →</Link>
                        </Button>
                      </>
                    );
                  })()}
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex flex-col items-center space-y-3 text-center">
                  <MapPin className="h-8 w-8 text-primary animate-bounce" />
                  <p className="font-semibold text-gray-800">Select a hospital to view details</p>
                  <p className="text-sm text-gray-500">Map visualization available with Leaflet.js</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
