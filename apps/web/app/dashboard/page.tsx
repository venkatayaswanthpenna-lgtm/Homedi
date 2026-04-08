import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import {
  Heart, Droplets, Weight, Calendar, AlertTriangle,
  FileText, Video, Activity, Bell, ArrowRight, TrendingUp, Shield,
} from 'lucide-react';

const healthMetrics = [
  {
    label: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    status: 'Normal',
    statusColor: 'text-secondary bg-green-50',
    icon: Heart,
    iconBg: 'bg-red-100',
    iconColor: 'text-danger',
    trend: '+1.2%',
    trendUp: false,
  },
  {
    label: 'Blood Sugar',
    value: '90',
    unit: 'mg/dL',
    status: 'Normal',
    statusColor: 'text-secondary bg-green-50',
    icon: Droplets,
    iconBg: 'bg-blue-100',
    iconColor: 'text-primary',
    trend: '-0.8%',
    trendUp: false,
  },
  {
    label: 'Weight',
    value: '72',
    unit: 'kg',
    status: 'Healthy',
    statusColor: 'text-secondary bg-green-50',
    icon: Weight,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    trend: '+0.5%',
    trendUp: true,
  },
  {
    label: 'Heart Rate',
    value: '74',
    unit: 'bpm',
    status: 'Normal',
    statusColor: 'text-secondary bg-green-50',
    icon: Activity,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    trend: 'Stable',
    trendUp: false,
  },
];

const quickActions = [
  {
    label: 'Book Appointment',
    href: '/appointments',
    bg: 'bg-blue-50 hover:bg-blue-100',
    text: 'text-primary',
    border: 'border-blue-100',
    icon: Calendar,
  },
  {
    label: 'Emergency SOS',
    href: '/emergency',
    bg: 'bg-red-50 hover:bg-red-100',
    text: 'text-danger',
    border: 'border-red-100',
    icon: AlertTriangle,
  },
  {
    label: 'Upload Record',
    href: '/records',
    bg: 'bg-green-50 hover:bg-green-100',
    text: 'text-secondary',
    border: 'border-green-100',
    icon: FileText,
  },
  {
    label: 'Telemedicine',
    href: '/telemedicine',
    bg: 'bg-purple-50 hover:bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-100',
    icon: Video,
  },
];

const upcomingAppointments = [
  {
    doctor: 'Dr. Ramesh Kumar',
    specialty: 'Cardiologist',
    date: 'Today, 3:00 PM',
    type: 'Telemedicine',
    color: 'bg-blue-100 text-primary',
  },
  {
    doctor: 'Dr. Sarah Jenkins',
    specialty: 'General Physician',
    date: 'Thu, Oct 26 · 10:30 AM',
    type: 'In-person',
    color: 'bg-green-100 text-secondary',
  },
];

export default function Dashboard() {
  return (
    <AppLayout>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Good evening, John 👋</h1>
          <p className="text-gray-500 text-sm mt-0.5">Your health summary for today</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/notifications"
            className="relative p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
          </Link>
          <Link
            href="/assistant"
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl shadow-md shadow-primary/25 hover:bg-primary/90 transition-all"
          >
            <Shield className="h-4 w-4" />
            <span>AI Assistant</span>
          </Link>
        </div>
      </header>

      <main className="p-8 space-y-8">
        {/* Health Metrics */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Health Metrics</h2>
            <Link href="/analytics" className="text-sm text-primary font-medium flex items-center hover:underline">
              View all <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {healthMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className={`w-10 h-10 ${metric.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <metric.icon className={`h-5 w-5 ${metric.iconColor}`} />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg ${metric.statusColor}`}>
                    {metric.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-medium">{metric.label}</p>
                <div className="flex items-baseline space-x-1 mt-1">
                  <span className="text-3xl font-black text-gray-900">{metric.value}</span>
                  <span className="text-sm text-gray-400 font-medium">{metric.unit}</span>
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className={`h-3.5 w-3.5 mr-1 ${metric.trendUp ? 'text-danger' : 'text-secondary'}`} />
                  <span className={`text-xs font-medium ${metric.trendUp ? 'text-danger' : 'text-secondary'}`}>
                    {metric.trend} from last week
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`flex flex-col items-center justify-center p-5 ${action.bg} ${action.text} rounded-2xl font-semibold text-sm border ${action.border} transition-all hover:scale-105 hover:shadow-md space-y-2`}
              >
                <action.icon className="h-6 w-6" />
                <span>{action.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Appointments */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Upcoming Appointments</h2>
            <Link href="/appointments" className="text-sm text-primary font-medium flex items-center hover:underline">
              View all <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingAppointments.map((appt) => (
              <div key={appt.doctor} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex justify-between items-center hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-lg">
                    {appt.doctor.slice(3, 5)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{appt.doctor}</p>
                    <p className="text-sm text-gray-500">{appt.specialty}</p>
                    <p className="text-xs text-gray-400 mt-1">📅 {appt.date}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${appt.color}`}>{appt.type}</span>
                  <Link href="/appointments" className="text-xs text-primary font-semibold hover:underline">
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
