'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Calendar, Video, Clock, ArrowLeft, Plus, CheckCircle, X } from 'lucide-react';

const APPOINTMENTS = [
  {
    id: '1',
    doctor: 'Dr. Ramesh Kumar',
    specialty: 'Cardiologist',
    date: 'Today',
    time: '3:00 PM (IST)',
    type: 'Telemedicine',
    status: 'upcoming',
    initials: 'RK',
  },
  {
    id: '2',
    doctor: 'Dr. Sarah Jenkins',
    specialty: 'General Physician',
    date: 'Thu, Oct 26',
    time: '10:30 AM (IST)',
    type: 'In-person',
    status: 'upcoming',
    initials: 'SJ',
  },
  {
    id: '3',
    doctor: 'Dr. Anita Sharma',
    specialty: 'Dermatologist',
    date: 'Mon, Oct 16',
    time: '2:00 PM (IST)',
    type: 'Telemedicine',
    status: 'completed',
    initials: 'AS',
  },
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(APPOINTMENTS);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState('');

  const cancelAppt = (id: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'cancelled' } : a))
    );
    showToast('Appointment cancelled successfully.');
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-gray-900">Appointments</h1>
              <p className="text-sm text-gray-500">Manage your upcoming schedules</p>
            </div>
          </div>
          <Button onClick={() => setShowModal(true)} className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Booking</span>
          </Button>
        </header>

        <main className="p-8">
          {/* Tabs visual */}
          <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1 w-fit mb-6">
            {['Upcoming', 'Completed', 'All'].map((tab) => (
              <button key={tab} className="px-5 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 first:bg-white first:shadow-sm first:text-gray-900 transition-all">
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {appointments.map((appt) => (
              <div
                key={appt.id}
                className={`bg-white rounded-2xl p-6 border shadow-sm transition-all ${
                  appt.status === 'cancelled'
                    ? 'border-gray-100 opacity-50'
                    : appt.status === 'completed'
                    ? 'border-gray-100'
                    : 'border-gray-100 hover:border-primary/30 hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-lg">
                      {appt.initials}
                    </div>
                    <div>
                      <h2 className="font-bold text-xl text-gray-900">{appt.doctor}</h2>
                      <p className="text-primary text-sm font-semibold">{appt.specialty}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" /> {appt.date}
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" /> {appt.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {appt.status === 'upcoming' && (
                      <span className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full">Upcoming</span>
                    )}
                    {appt.status === 'completed' && (
                      <span className="bg-green-50 text-secondary text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" /> Completed
                      </span>
                    )}
                    {appt.status === 'cancelled' && (
                      <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">Cancelled</span>
                    )}
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-lg ${appt.type === 'Telemedicine' ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'}`}>
                      {appt.type}
                    </span>
                  </div>
                </div>

                {appt.status === 'upcoming' && (
                  <div className="flex space-x-3 mt-5 pt-4 border-t border-gray-100">
                    {appt.type === 'Telemedicine' ? (
                      <Button asChild className="flex-1">
                        <Link href="/telemedicine">
                          <Video className="h-4 w-4 mr-2" /> Join Video Call
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild className="flex-1">
                        <Link href="/hospitals">View Hospital</Link>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => showToast('Reschedule feature coming soon!')}
                    >
                      Reschedule
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => cancelAppt(appt.id)}
                      className="text-danger hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>

        {/* New Booking Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">New Appointment</h2>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-xl">
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Doctor / Specialty</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm">
                    <option>Dr. Ramesh Kumar — Cardiology</option>
                    <option>Dr. Sarah Jenkins — General Physician</option>
                    <option>Dr. Anita Sharma — Dermatology</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-colors">
                      <input type="radio" name="type" defaultChecked className="text-primary" />
                      <span className="text-sm font-medium">Telemedicine</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-colors">
                      <input type="radio" name="type" className="text-primary" />
                      <span className="text-sm font-medium">In-Person</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <Button variant="outline" className="flex-1" onClick={() => setShowModal(false)}>Cancel</Button>
                <Button
                  className="flex-1"
                  onClick={() => {
                    setShowModal(false);
                    showToast('Appointment booked successfully! ✓');
                  }}
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 z-50 animate-in slide-in-from-bottom-4">
            <CheckCircle className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">{toast}</span>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
