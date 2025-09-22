import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Code2, X, Github } from 'lucide-react';

export default function SignUpLoginPage({ onClose }) {
const [isLogin, setIsLogin] = useState(true);
const [showPassword, setShowPassword] = useState(false);
const [role, setRole] = useState('user');
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
if (isLogin) {
console.log('Login attempt:', { email: formData.email, password: formData.password, role });
alert(`Login as ${role.toUpperCase()} functionality will be implemented!`);
} else {
console.log('Signup attempt:', { ...formData, role });
alert(`Signup as ${role.toUpperCase()} functionality will be implemented!`);
}
};

const toggleForm = () => {
setIsLogin(!isLogin);
setFormData({ name: '', email: '', password: '', confirmPassword: '' });
setShowPassword(false);
};

const isModal = onClose !== undefined;

const formContent = (
<div className="w-full">
{/_ Logo Section _/}
<div className="text-center mb-8">
<div className="flex items-center justify-center space-x-3 mb-4">
<Code2 className="text-cyan-400 w-12 h-12" />
<h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
Codeyaan
</h1>
</div>
<p className="text-gray-400">
{isLogin ? 'Welcome back! Please sign in to your account.' : 'Create your account to get started.'}
</p>
</div>

      {/* Main Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>

        {/* Close Button for Modal */}
        {isModal && (
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-slate-700 rounded-full z-10"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="relative z-10">
          {/* Toggle Buttons */}
          <div className="flex rounded-xl bg-slate-700/50 p-1.5 mb-6 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-slate-600/50'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-slate-600/50'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Role Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">Select Role</label>
            <div className="flex gap-2">
              {['user', 'staff', 'admin'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    role === r
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 transform scale-105'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name Field (Only for Signup) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-cyan-400 transition-colors duration-200" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-cyan-400 transition-colors duration-200" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-cyan-400 transition-colors duration-200" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Only for Signup) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Confirm Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-cyan-400 transition-colors duration-200" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm hover:bg-slate-700/70"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Forgot Password Link (Only for Login) */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 mt-6 transform active:scale-95"
            >
              {isLogin ? `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}` : `Create ${role.charAt(0).toUpperCase() + role.slice(1)} Account`}
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-slate-600/50"></div>
            <span className="px-6 text-sm text-gray-400 bg-slate-800/50 rounded-full py-1">or continue with</span>
            <div className="flex-1 border-t border-slate-600/50"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-3 bg-slate-700/50 hover:bg-slate-600/50 text-white py-3 px-4 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-slate-500 hover:scale-105 backdrop-blur-sm group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Continue with Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center space-x-3 bg-slate-700/50 hover:bg-slate-600/50 text-white py-3 px-4 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-slate-500 hover:scale-105 backdrop-blur-sm group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Continue with GitHub</span>
            </button>
          </div>

          {/* Toggle Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </form>

      {/* ✅ Footer */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        © 2025 Codeyaan. All rights reserved.
      </div>
    </div>

);

if (isModal) {
return (
<div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4">
<div className="w-full max-w-lg h-screen flex items-center justify-center">
{formContent}
</div>
</div>
);
}
return (

  <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
    <div className="w-full max-w-lg h-full flex items-center justify-center">
      {formContent}
    </div>
  </div>
);
}
