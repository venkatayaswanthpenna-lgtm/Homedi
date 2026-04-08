export default function Physiotherapy() {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Physiotherapy Tracking</h1>
        <p className="text-secondary">Your designated recovery exercises</p>
      </header>

      <div className="bg-primary text-white p-6 rounded-2xl shadow-lg mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Today's Goal</h2>
          <p className="opacity-90">2 exercises remaining</p>
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-white border-dashed flex items-center justify-center font-bold text-xl">
           33%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-md transition">
          <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            ▶️ Video Thumbnail
          </div>
          <h3 className="font-bold">Knee Extension</h3>
          <p className="text-sm text-gray-500">3 sets of 10 reps</p>
        </div>
      </div>
    </div>
  );
}
