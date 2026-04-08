export default function Login() {
  return (
    <div className="flex bg-background min-h-screen items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-primary mb-2">Welcome Back</h1>
        <p className="text-secondary text-center mb-8">Sign in to your Homedi account</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="patient@homedi.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" placeholder="••••••••" />
          </div>
          
          <button className="w-full bg-primary text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
