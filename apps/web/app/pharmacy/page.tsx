import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Pill, ArrowLeft, Search, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MEDICATIONS = [
  { name: 'Lisinopril 10mg', schedule: 'Every morning', remaining: 12, refillIn: 3, color: 'bg-blue-100 text-primary' },
  { name: 'Aspirin 81mg', schedule: 'After breakfast', remaining: 25, refillIn: 8, color: 'bg-orange-100 text-orange-600' },
  { name: 'Metformin 500mg', schedule: 'After dinner', remaining: 8, refillIn: 2, color: 'bg-purple-100 text-purple-600' },
];

export default function PharmacyPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-10 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
              <Pill className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Pharmacy</h1>
              <p className="text-sm text-gray-500">Manage medications & refills</p>
            </div>
          </div>
          <Button>Order Medicines</Button>
        </header>

        <main className="max-w-3xl mx-auto p-8 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search medications..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
            />
          </div>

          <h2 className="text-lg font-bold text-gray-900">Current Medications</h2>

          <div className="space-y-4">
            {MEDICATIONS.map((med) => (
              <div key={med.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex justify-between items-center hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${med.color}`}>
                    <Pill className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{med.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-0.5 space-x-3">
                      <span className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1" />{med.schedule}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${med.remaining <= 10 ? 'bg-red-50 text-danger' : 'bg-green-50 text-secondary'}`}>
                        {med.remaining} left
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex items-center space-x-1.5">
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Refill in {med.refillIn}d</span>
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
