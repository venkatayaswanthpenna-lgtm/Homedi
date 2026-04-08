import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Activity, ArrowLeft, Heart, Wifi, Battery } from 'lucide-react';

const DEVICE_DATA = [
  { metric: 'Heart Rate', value: '74', unit: 'bpm', icon: Heart, color: 'text-danger', bg: 'bg-red-100', status: 'Normal' },
  { metric: 'SpO2', value: '98', unit: '%', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-100', status: 'Normal' },
  { metric: 'Steps Today', value: '6,421', unit: 'steps', icon: Activity, color: 'text-secondary', bg: 'bg-green-100', status: 'Goal: 10,000' },
  { metric: 'Sleep', value: '7.2', unit: 'hrs', icon: Battery, color: 'text-purple-500', bg: 'bg-purple-100', status: 'Recommended' },
];

export default function WearablesPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-10 flex items-center space-x-3">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
            <Wifi className="h-5 w-5 text-secondary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Wearables</h1>
            <p className="text-sm text-secondary font-semibold flex items-center">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-1.5 animate-pulse" />
              Apple Watch Ultra · Syncing
            </p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {DEVICE_DATA.map((d) => (
              <div key={d.metric} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div className={`w-10 h-10 ${d.bg} rounded-xl flex items-center justify-center`}>
                    <d.icon className={`h-5 w-5 ${d.color}`} />
                  </div>
                  <span className="text-xs font-bold text-secondary bg-green-50 px-2 py-1 rounded-lg">{d.status}</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">{d.metric}</p>
                <div className="flex items-baseline space-x-1 mt-1">
                  <span className="text-3xl font-black text-gray-900">{d.value}</span>
                  <span className="text-sm text-gray-400">{d.unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-base font-bold text-gray-900 mb-4">Connected Devices</h2>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Apple Watch Ultra</p>
                  <p className="text-xs text-secondary">Connected · Battery 84%</p>
                </div>
              </div>
              <button className="text-sm text-danger hover:underline font-medium">Disconnect</button>
            </div>
            <button className="mt-4 w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-sm font-medium text-gray-400 hover:border-primary hover:text-primary transition-all">
              + Add New Device
            </button>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
