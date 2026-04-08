import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { BarChart2, TrendingUp, TrendingDown, Activity, ArrowLeft } from 'lucide-react';

const metrics = [
  { label: 'Blood Pressure', current: '120/80', prev: '128/84', trend: 'down', color: 'text-secondary', bar: 65 },
  { label: 'Blood Sugar', current: '90 mg/dL', prev: '102 mg/dL', trend: 'down', color: 'text-secondary', bar: 55 },
  { label: 'Heart Rate', current: '74 bpm', prev: '78 bpm', trend: 'down', color: 'text-secondary', bar: 72 },
  { label: 'Weight', current: '72 kg', prev: '71.5 kg', trend: 'up', color: 'text-orange-500', bar: 80 },
];

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-10 flex items-center space-x-3">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
            <BarChart2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Health Analytics</h1>
            <p className="text-sm text-gray-500">Track your health trends over time</p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-8 space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['30 Days', '90 Days', '6 Months', '1 Year'].map((period) => (
              <button key={period} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all text-center">
                <p className="text-sm font-semibold text-gray-600">{period}</p>
              </button>
            ))}
          </div>

          {/* Metrics Progress */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-gray-900">Health Trends (Last 30 Days)</h2>
            </div>
            <div className="space-y-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">{m.label}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-400">Prev: {m.prev}</span>
                      <div className={`flex items-center space-x-1 text-xs font-bold ${m.color}`}>
                        {m.trend === 'down'
                          ? <TrendingDown className="h-3.5 w-3.5" />
                          : <TrendingUp className="h-3.5 w-3.5" />}
                        <span>{m.current}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${m.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder chart area */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Weekly Health Score</h2>
            <div className="h-48 flex items-end justify-between space-x-2 px-4">
              {[68, 72, 75, 71, 78, 82, 80].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                  <div
                    className="w-full bg-primary/20 rounded-t-lg hover:bg-primary/40 transition-colors relative group"
                    style={{ height: `${val}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">{val}</span>
                  </div>
                  <span className="text-xs text-gray-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
