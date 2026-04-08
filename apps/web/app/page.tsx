import Link from 'next/link';
import { Heart, Shield, Zap, Users, ArrowRight, Activity, Brain, Wifi } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/30">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-black text-xl text-gray-900 tracking-tight">HOMEDI</span>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl shadow-md shadow-primary/25 hover:bg-primary/90 transition-all"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 pt-20">
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Activity className="h-3.5 w-3.5" />
            <span>Your health, intelligently managed</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-none mb-6">
            Healthcare,{' '}
            <span className="text-primary">reimagined</span>{' '}
            for everyone.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            HOMEDI connects patients, hospitals, and doctors in one secure, intelligent ecosystem — from booking to emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl shadow-xl shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transition-all text-lg"
            >
              Start for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-2xl hover:bg-gray-200 transition-all text-lg"
            >
              Sign in to dashboard
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Hospitals Connected' },
              { value: '50K+', label: 'Patients Served' },
              { value: '1200+', label: 'Verified Doctors' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-primary">{stat.value}</p>
                <p className="text-gray-500 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16 tracking-tight">
            Everything you need in one platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                color: 'bg-blue-100 text-primary',
                title: 'AI Health Assistant',
                desc: 'Get AI-driven health insights, symptom analysis, and medication reminders powered by advanced LLMs.',
              },
              {
                icon: Shield,
                color: 'bg-green-100 text-secondary',
                title: 'Secure Medical Records',
                desc: 'AES-256 encrypted health records with QR-based consent workflows and immutable storage.',
              },
              {
                icon: Zap,
                color: 'bg-red-100 text-danger',
                title: 'Emergency Response',
                desc: 'One-tap SOS with auto-ambulance dispatch, live location sharing, and hospital routing.',
              },
              {
                icon: Users,
                color: 'bg-purple-100 text-purple-600',
                title: 'Family Care',
                desc: 'Manage health profiles for your entire family with caregiver access and role-based controls.',
              },
              {
                icon: Wifi,
                color: 'bg-orange-100 text-orange-600',
                title: 'Wearable Integration',
                desc: 'Sync with Apple Watch, Fitbit, and more for real-time health monitoring and alerts.',
              },
              {
                icon: Activity,
                color: 'bg-teal-100 text-teal-600',
                title: 'Telemedicine',
                desc: 'HD video consultations with digital prescription generation and live session transcription.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-24 text-center text-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-black tracking-tight mb-4">Ready to take control of your health?</h2>
            <p className="text-white/70 text-lg mb-8">Join thousands already benefiting from the HOMEDI ecosystem.</p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-bold rounded-2xl shadow-2xl hover:bg-gray-50 transition-all text-lg"
            >
              Create free account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
          <p>© 2026 HOMEDI Healthcare Ecosystem. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
