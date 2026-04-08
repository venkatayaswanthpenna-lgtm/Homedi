import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Users, ArrowLeft, Plus, Heart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAMILY = [
  { name: 'Priya Doe', relation: 'Spouse', age: 34, lastCheck: '2 days ago', status: 'All normal', color: 'bg-pink-100 text-pink-600' },
  { name: 'Raj Doe', relation: 'Father', age: 67, lastCheck: '5 days ago', status: 'BP slightly high', color: 'bg-orange-100 text-orange-600' },
  { name: 'Sunita Doe', relation: 'Mother', age: 63, lastCheck: '1 week ago', status: 'All normal', color: 'bg-green-100 text-secondary' },
];

export default function FamilyPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-10 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Family Care</h1>
              <p className="text-sm text-gray-500">Monitor your family&apos;s health</p>
            </div>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Member</span>
          </Button>
        </header>

        <main className="max-w-3xl mx-auto p-8 space-y-4">
          {FAMILY.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex justify-between items-center hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${member.color}`}>
                  {member.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.relation} · Age {member.age}</p>
                  <div className="flex items-center mt-1.5 space-x-2">
                    <Heart className="h-3.5 w-3.5 text-gray-400" />
                    <span className={`text-xs font-semibold ${member.status === 'All normal' ? 'text-secondary' : 'text-orange-500'}`}>
                      {member.status}
                    </span>
                    <span className="text-xs text-gray-400">· Last check {member.lastCheck}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 items-end">
                <Button variant="outline" size="sm">View Profile</Button>
                <button className="flex items-center text-xs text-primary hover:underline font-medium">
                  <Phone className="h-3 w-3 mr-1" /> Emergency Contact
                </button>
              </div>
            </div>
          ))}

          <button className="w-full py-5 border-2 border-dashed border-gray-200 rounded-2xl text-sm font-medium text-gray-400 hover:border-primary hover:text-primary transition-all flex items-center justify-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Family Member</span>
          </button>
        </main>
      </div>
    </AppLayout>
  );
}
