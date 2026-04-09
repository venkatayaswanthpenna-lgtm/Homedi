import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Settings, ArrowLeft, User, Bell, Shield, Moon, Globe } from 'lucide-react';

interface SettingItem {
  label: string;
  value: string;
  toggle?: boolean;
}

interface SettingSection {
  title: string;
  icon: any;
  items: SettingItem[];
}

const sections: SettingSection[] = [
  {
    title: 'Account',
    icon: User,
    items: [
      { label: 'Full Name', value: 'John Doe', toggle: false },
      { label: 'Email', value: 'john.doe@example.com', toggle: false },
      { label: 'Phone', value: '+91 98765 43210', toggle: false },
      { label: 'Date of Birth', value: 'Jan 15, 1992', toggle: false },
    ],
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: [
      { label: 'Appointment Reminders', value: 'Enabled', toggle: true },
      { label: 'Medication Alerts', value: 'Enabled', toggle: true },
      { label: 'Health Insights', value: 'Enabled', toggle: true },
    ],
  },
  {
    title: 'Privacy & Security',
    icon: Shield,
    items: [
      { label: 'Two-Factor Authentication', value: 'Enabled', toggle: true },
      { label: 'Data Sharing with Hospitals', value: 'Consent-based', toggle: false },
      { label: 'AI Data Usage', value: 'Anonymized Only', toggle: false },
    ],
  },
];

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-10 flex items-center space-x-3">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center">
            <Settings className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Settings</h1>
            <p className="text-sm text-gray-500">Manage your account and preferences</p>
          </div>
        </header>

        <main className="max-w-2xl mx-auto p-8 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center space-x-3 p-5 border-b border-gray-100">
                <section.icon className="h-5 w-5 text-primary" />
                <h2 className="text-base font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {section.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-center px-5 py-4">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    {item.toggle ? (
                      <div className="w-11 h-6 bg-primary rounded-full flex items-center justify-end pr-1 cursor-pointer hover:bg-primary/80 transition-colors">
                        <div className="w-4 h-4 bg-white rounded-full shadow" />
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:border-primary/30 hover:shadow-md transition-all text-sm font-medium text-gray-600">
              <Moon className="h-4 w-4" />
              <span>Dark Mode</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:border-primary/30 hover:shadow-md transition-all text-sm font-medium text-gray-600">
              <Globe className="h-4 w-4" />
              <span>Language: English</span>
            </button>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
