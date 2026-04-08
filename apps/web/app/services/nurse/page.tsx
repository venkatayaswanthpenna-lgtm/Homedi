export default function HomeNurseServices() {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Home Nurse Services</h1>
        <p className="text-secondary">Book certified caregivers to your home</p>
      </header>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Select Service Type</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 border-2 border-primary text-primary rounded-full font-medium bg-blue-50">Post-Surgery Care</button>
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50">IV/Injections</button>
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50">Elder Assistance</button>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-4">Available Nurses Nearby</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
           <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
           <h3 className="text-lg font-bold">Nurse Mary A.</h3>
           <p className="text-sm text-gray-500 mb-2">12 yrs experience • 4.9 ⭐️</p>
           <button className="w-full bg-primary text-white py-2 rounded-lg font-bold mt-4">Book Now</button>
        </div>
      </div>
    </div>
  );
}
