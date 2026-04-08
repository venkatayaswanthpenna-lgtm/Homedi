'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard, Calendar, Hospital, FileText,
  Video, Bot, AlertTriangle, BarChart2, Pill,
  Settings, LogOut, Bell, Heart, Users, Activity,
  Stethoscope,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/appointments', label: 'Appointments', icon: Calendar },
  { href: '/hospitals', label: 'Find Hospitals', icon: Hospital },
  { href: '/records', label: 'Health Records', icon: FileText },
  { href: '/telemedicine', label: 'Telemedicine', icon: Video },
  { href: '/assistant', label: 'AI Assistant', icon: Bot },
  { href: '/pharmacy', label: 'Pharmacy', icon: Pill },
  { href: '/wearables', label: 'Wearables', icon: Activity },
  { href: '/family', label: 'Family Care', icon: Users },
  { href: '/analytics', label: 'Analytics', icon: BarChart2 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col z-50 shadow-sm">
      {/* Logo */}
      <div className="p-5 border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="font-black text-lg text-gray-900 tracking-tight">HOMEDI</span>
            <p className="text-xs text-gray-400 font-medium -mt-0.5">Healthcare Ecosystem</p>
          </div>
        </Link>
      </div>

      {/* User Badge */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-3 py-2.5">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Stethoscope className="h-4 w-4 text-primary" />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-gray-800 truncate">John Doe</p>
            <p className="text-xs text-gray-400 truncate">Patient Account</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">Main Menu</p>
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span>{item.label}</span>
                {item.href === '/emergency' && (
                  <span className="ml-auto w-2 h-2 bg-danger rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 mb-2">
          <Link
            href="/emergency"
            className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-bold text-danger bg-red-50 hover:bg-red-100 transition-all border border-red-100"
          >
            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            <span>Emergency SOS</span>
            <span className="ml-auto w-2 h-2 bg-danger rounded-full animate-pulse" />
          </Link>
        </div>
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-gray-100 space-y-0.5">
        <Link
          href="/notifications"
          className={cn(
            'flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
            pathname === '/notifications'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          )}
        >
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
          <span className="ml-auto bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
        </Link>
        <Link
          href="/settings"
          className={cn(
            'flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
            pathname === '/settings'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          )}
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Link>
        <button
          onClick={() => router.push('/login')}
          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-danger hover:bg-red-50 transition-all"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
