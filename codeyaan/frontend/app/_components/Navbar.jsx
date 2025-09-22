'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Code2, User } from "lucide-react";
import SignupForm from "./SignupForm"; // ✅ spelling check

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 pr-4 ${
        isScrolled
          ? "bg-slate-700/100 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center px-4 space-x-2">
          <Code2 className="text-white w-10 h-10 md:w-12 md:h-12" />
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            Codeyaan
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-xl font-semibold ml-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white hover:text-cyan-400 transition-colors duration-300 hover:scale-105 ${
                pathname === link.href ? "text-cyan-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Sign Up / Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-slate-900/95 backdrop-blur-lg`}
      >
        <div className="px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-white text-2xl font-semibold hover:text-cyan-400 transition-colors duration-300 hover:scale-105 ${
                pathname === link.href ? "text-cyan-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 mt-4"
          >
            <User className="w-5 h-5" />
            <span>Sign Up / Login</span>
          </button>
        </div>
      </div>

      {isModalOpen && <SignupForm onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
}
