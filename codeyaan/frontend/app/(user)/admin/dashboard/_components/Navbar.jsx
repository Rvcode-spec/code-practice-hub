'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";

export default function AdminNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-orange-400 z-50 transition-all duration-300 pr-4 ${
        isScrolled
          ? "bg-slate-700/100 backdrop-blur-lg shadow-md"
          : "bg-transparent"
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

        {/* Only Dashboard Link */}
        <div className="hidden md:flex items-center space-x-8 text-xl font-semibold ml-auto">
          <Link
            href="/dashboard"
            className={`text-white hover:text-cyan-400 transition-colors duration-300 hover:scale-105 ${
              pathname === "/dashboard" ? "text-cyan-400" : ""
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
