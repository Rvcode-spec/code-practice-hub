"use client";
     
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change background after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            lobxcode
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Projects', 'Contact'].map((item, idx) => (
              <a key={idx} href={`#${item.toLowerCase()}`} className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                {item}
              </a>
            ))}
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-900/95 backdrop-blur-lg`}>
          <div className="px-6 py-4 space-y-4">
            {['Home', 'Services', 'Projects', 'Contact'].map((item, idx) => (
              <a key={idx} href={`#${item.toLowerCase()}`} className="block text-white hover:text-cyan-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}