'use client';

import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Bell, ArrowLeft, CheckCheck } from 'lucide-react';
import { useState } from 'react';

const INITIAL_NOTIFS = [
  { id: '1', title: 'Appointment Reminder', body: 'Your consultation with Dr. Ramesh Kumar is today at 3:00 PM.', time: '10 min ago', read: false, type: 'appointment' },
  { id: '2', title: 'Medication Alert', body: 'Time to take your Lisinopril 10mg. Stay on schedule!', time: '1 hr ago', read: false, type: 'medication' },
  { id: '3', title: 'Record Uploaded', body: 'Your Cardiac MRI scan has been verified by Apollo Hospitals.', time: '3 hrs ago', read: true, type: 'record' },
  { id: '4', title: 'AI Health Insight', body: 'Your weekly health score improved by 5% compared to last week.', time: 'Yesterday', read: true, type: 'insight' },
];

const typeColors: Record<string, string> = {
  appointment: 'bg-blue-100 text-primary',
  medication: 'bg-orange-100 text-orange-600',
  record: 'bg-green-100 text-secondary',
  insight: 'bg-purple-100 text-purple-600',
};

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState(INITIAL_NOTIFS);

  const markAllRead = () => setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-10 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
          </div>
          <button onClick={markAllRead} className="flex items-center space-x-1.5 text-sm text-primary font-semibold hover:underline">
            <CheckCheck className="h-4 w-4" />
            <span>Mark all read</span>
          </button>
        </header>

        <main className="max-w-2xl mx-auto p-8 space-y-3">
          {notifs.map((n) => (
            <div
              key={n.id}
              onClick={() => setNotifs((prev) => prev.map((x) => x.id === n.id ? { ...x, read: true } : x))}
              className={`bg-white rounded-2xl p-5 border shadow-sm transition-all cursor-pointer hover:border-primary/30 hover:shadow-md ${n.read ? 'border-gray-100 opacity-70' : 'border-primary/20'}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${typeColors[n.type]}`}>
                  <Bell className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-bold text-gray-900 ${!n.read ? 'text-base' : 'text-sm'}`}>{n.title}</h3>
                    <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{n.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{n.body}</p>
                </div>
                {!n.read && <span className="w-2.5 h-2.5 bg-primary rounded-full flex-shrink-0 mt-1" />}
              </div>
            </div>
          ))}
        </main>
      </div>
    </AppLayout>
  );
}
