import React, { useState } from 'react';
import { login } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { data } = await login({ email, password });
      setMessage(`✅ Welcome back, ${data.name}!`);
      // You can store user info in context/state, redirect, etc.
      console.log('Logged in:', data);
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.message || 'Login failed'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h2>
      <p className="text-gray-600 mb-8">Sign in to your account</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition duration-200 outline-none bg-white/50 backdrop-blur-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition duration-200 outline-none bg-white/50 backdrop-blur-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        {message && (
          <div className="text-sm text-center mt-4 font-medium text-gray-700">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;