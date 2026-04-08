export default function ElderCare() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      <header className="bg-orange-500 text-white p-8 rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-bold">Elder Care Dashboard</h1>
        <p className="text-xl mt-2 opacity-90">Simplified view for grandparents</p>
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Large button approach for elders */}
        <button className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform">
           <span className="text-6xl mb-4">💊</span>
           <h2 className="text-2xl font-bold text-gray-800">My Medicines</h2>
           <p className="text-gray-500 text-lg">2 upcoming</p>
        </button>
        
        <button className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center justify-center border-4 border-danger hover:scale-105 transition-transform">
           <span className="text-6xl mb-4">🚨</span>
           <h2 className="text-2xl font-bold text-danger">Call Family</h2>
           <p className="text-gray-500 text-lg">Instant Alert</p>
        </button>

        <button className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform">
           <span className="text-6xl mb-4">🏥</span>
           <h2 className="text-2xl font-bold text-gray-800">Nurse Visit</h2>
           <p className="text-gray-500 text-lg">Today at 4:00 PM</p>
        </button>
      </main>
    </div>
  );
}
