"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Sparkles, Code, Settings } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 pr-4 transition-all duration-300 shadow-md
         ${isScrolled
        ?"bg-blue-950/70 backdrop-blur-sm text-white shadow-lg transform -translate-y-0"
          : "bg-transparent  bg-white text-black"
        }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-green-800 rounded-xl flex items-center justify-center shadow-lg">
              <div className="relative">
                <Code className="w-7 h-7 text-white" strokeWidth={2} />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-700 rounded-full flex items-center justify-center">
                  <Settings className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            LabXCode
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold ml-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-orange-500 font-bold text-xl transition-colors duration-300 hover:scale-105 ${pathname === link.href ? "text-orange-500" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-slate-900/95 backdrop-blur-lg`}
      >
        <div className="px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-white text-xl font-semibold hover:text-cyan-400 transition-colors duration-300 ${pathname === link.href ? "text-cyan-400" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
