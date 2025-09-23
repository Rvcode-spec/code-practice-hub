'use client';
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Code2, X } from 'lucide-react';

export default function SignupForm({ onClose }) {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (isLogin) {
      console.log('Login:', { email, password });
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log('Signup:', { name, email, password });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center px-4 z-[9999]"
      onClick={onClose} // click outside modal closes it
    >
      <div
        className="w-full max-w-md bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 relative overflow-visible"
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-purple-600 hover:text-white transition-colors duration-200 hover:bg-slate-700 rounded-full z-50"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="relative z-10 p-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Code2 className="text-cyan-400 w-10 h-10" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Codeyaan
              </h1>
            </div>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Welcome back! Sign in.' : 'Create your account to get started.'}
            </p>
          </div>

          {/* Toggle Login / Signup */}
          <div className="flex rounded-xl bg-slate-700/50 p-1 mb-4 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-slate-600/50'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-slate-600/50'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-300">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Email</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-300">Confirm Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    placeholder="Confirm password"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
