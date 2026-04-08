import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { FileText, UploadCloud, Calendar, Lock, Shield, ArrowLeft } from 'lucide-react';

const MOCK_RECORDS = [
  { id: '1', title: 'Complete Blood Count', type: 'Lab Report', date: 'Oct 12, 2023', hospital: 'Apollo Hospitals', status: 'VERIFIED' },
  { id: '2', title: 'Cardiac MRI Scan', type: 'Scan', date: 'Sep 28, 2023', hospital: 'KIMS Hospital', status: 'VERIFIED' },
  { id: '3', title: 'General Prescription', type: 'Prescription', date: 'Aug 05, 2023', doctor: 'Dr. Ramesh Kumar', status: 'VERIFIED' },
];

const typeColors: Record<string, string> = {
  'Lab Report': 'bg-blue-50 text-primary',
  'Scan': 'bg-purple-50 text-purple-600',
  'Prescription': 'bg-orange-50 text-orange-600',
};

export default function RecordsPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-10 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center shadow-md shadow-secondary/30">
                <FileText className="text-white h-4 w-4" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Health Records</h1>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 flex items-center space-x-2">
            <UploadCloud className="h-4 w-4" />
            <span>Upload Document</span>
          </Button>
        </header>

        <main className="flex-1 max-w-4xl w-full mx-auto p-8">
          {/* Security notice */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 flex items-start space-x-4">
            <div className="p-2.5 bg-blue-100 rounded-xl text-primary flex-shrink-0">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-blue-900 flex items-center space-x-1">
                <Shield className="h-4 w-4 mr-1" />Your Data is Secure
              </h3>
              <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                All medical records are encrypted via AES-256. Only verified hospitals and assigned caregivers can view records based on your explicit consent.
              </p>
            </div>
          </div>

          {/* Filter controls */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-gray-900">Timeline</h2>
            <select className="bg-white border border-gray-200 text-sm rounded-xl px-3 py-2 outline-none focus:border-primary transition-all">
              <option>All Types</option>
              <option>Prescriptions</option>
              <option>Scans</option>
              <option>Lab Reports</option>
            </select>
          </div>

          <div className="space-y-4">
            {MOCK_RECORDS.map((record) => (
              <div
                key={record.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all flex justify-between items-center group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-50 h-12 w-12 rounded-xl flex items-center justify-center border border-gray-100 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{record.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-3 mt-1">
                      <span className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" /> {record.date}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${typeColors[record.type] ?? 'bg-gray-100 text-gray-600'}`}>
                        {record.type}
                      </span>
                      <span className="text-gray-400">{record.hospital ?? record.doctor}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-secondary bg-green-50 px-2 py-1 rounded-lg">{record.status}</span>
                  <Button variant="outline" size="sm">View PDF</Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
