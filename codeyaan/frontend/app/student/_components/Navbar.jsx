'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function StaffNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 pr-4 ${
        isScrolled
          ? "bg-slate-700/100 backdrop-blur-lg shadow-md"
          : "bg-violet-500"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center px-4 space-x-2">
          <Code2 className="text-white w-10 h-10 md:w-12 md:h-12" />
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            Codeyaan
          </div>
        </div>

        {/* Spacer (pushes right section to the end) */}
        <div className="flex-grow" />

        {/* Right Section: Notifications + Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-white">
                Admin
              </span>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@codeyaan.com</p>
                </div>

                <Link
                  href="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </Link>

                <Link
                  href="/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Link>

                <hr className="my-2 border-gray-100" />

                <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
