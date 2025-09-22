'use client';
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Code2, X, Github } from 'lucide-react';
import React from 'react';

export default function SignupForm({ onClose }) {
  const [isLogin, setIsLogin] = useState(false); // Start with signup
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

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <>
      {/* Background Page */}
      <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <Code2 className="text-cyan-400 w-8 h-8" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Codeyaan
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Courses</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
            Sign Up / Login
          </button>
        </nav>

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Welcome to Codeyaan
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create your account to get started with your coding journey
            </p>
            <div className="space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay with Blurred Background */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center px-4 z-50">
        {/* Modal Content */}
        <div className="w-full max-w-md bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>

          {/* Close Button */}
          <button
              onClick={onClose} 
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-slate-700 rounded-full z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 p-8">
            {/* Logo Section */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Code2 className="text-cyan-400 w-10 h-10" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Codeyaan
                </h1>
              </div>
              <p className="text-gray-400 text-sm">
                {isLogin ? 'Welcome back! Please sign in to your account.' : 'Create your account to get started.'}
              </p>
            </div>

            {/* Main Form */}
            <div className="space-y-4">
              {/* Toggle Buttons */}
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

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Name Field (Only Signup) */}
                {!isLogin && (
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-300">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-cyan-400 transition-colors duration-200" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70 text-sm"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-300">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-cyan-400 transition-colors duration-200" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70 text-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-300">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-cyan-400 transition-colors duration-200" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70 text-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (Signup Only) */}
                {!isLogin && (
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-300">Confirm Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-cyan-400 transition-colors duration-200" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70 text-sm"
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Forgot Password (Login Only) */}
                {isLogin && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 mt-4 transform active:scale-95 text-sm"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </div>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-slate-600/50"></div>
                <span className="px-4 text-xs text-gray-400 bg-slate-800/50 rounded-full py-1">or continue with</span>
                <div className="flex-1 border-t border-slate-600/50"></div>
              </div>

              {/* Social Buttons */}
              <div className="space-y-2">
                <button type="button" className="w-full flex items-center justify-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 text-white py-2.5 px-4 rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-slate-500 backdrop-blur-sm group text-sm">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-medium">Continue with Google</span>
                </button>
                <button type="button" className="w-full flex items-center justify-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 text-white py-2.5 px-4 rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-slate-500 backdrop-blur-sm group text-sm">
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">Continue with GitHub</span>
                </button>
              </div>

              {/* Toggle Link */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button type="button" onClick={toggleForm} className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 hover:underline">
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}