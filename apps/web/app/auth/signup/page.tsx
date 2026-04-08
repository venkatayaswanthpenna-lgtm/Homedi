export default function Signup() {
  return (
    <div className="flex bg-background min-h-screen items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-primary mb-2">Create Account</h1>
        <p className="text-secondary text-center mb-8">Join the Homedi ecosystem</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="patient@homedi.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="hospital">Hospital Admin</option>
              <option value="caregiver">Caregiver</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="••••••••" />
          </div>
          
          <button className="w-full bg-primary text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition mt-6">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
