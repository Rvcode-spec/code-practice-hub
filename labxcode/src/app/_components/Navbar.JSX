
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

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
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-700/100 backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
        <div className="w-full mx-auto py-4 flex items-center justify-between pl-[5px] pr-4 md:px-8 lg:px-16">
          <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            LabXCode
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8 text-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white hover:text-cyan-400 transition-colors duration-300 ${pathname === link.href ? "text-cyan-400 underline" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-slate-900/95 backdrop-blur-lg`}>
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // close on click
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* spacer so content doesn't hide behind fixed navbar */}
      <div className="h-24" />
    </>
  );
}
