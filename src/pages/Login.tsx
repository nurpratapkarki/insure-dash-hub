
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, AlertCircle } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (!username || !password) {
      setFormError('Username and password are required');
      return;
    }
    
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled in AuthContext
    }
  };

  // Demo login details for convenience
  const demoLogins = [
    { username: 'admin', password: 'password', type: 'Super Admin' },
    { username: 'kohalpurBranch', password: 'password', type: 'Branch Manager' }
  ];

  const handleDemoLogin = async (username: string, password: string) => {
    setUsername(username);
    setPassword(password);
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled in AuthContext
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-insurance-blue flex items-center justify-center">
            <Shield size={32} className="text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Easy Life Insurance</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-insurance-blue focus:border-insurance-blue focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-insurance-blue focus:border-insurance-blue focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {(error || formError) && (
            <div className="rounded-md bg-red-50 p-3 flex items-center">
              <AlertCircle size={16} className="text-red-500 mr-2" />
              <p className="text-sm text-red-500">{formError || error}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-insurance-blue hover:bg-insurance-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-insurance-blue disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-500">Demo Accounts</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-3">
            {demoLogins.map((demoLogin, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDemoLogin(demoLogin.username, demoLogin.password)}
                disabled={loading}
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-insurance-blue/30"
              >
                Login as {demoLogin.type} ({demoLogin.username})
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
