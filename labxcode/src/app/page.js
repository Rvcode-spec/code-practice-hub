"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className=" bg-slate-950">
                {/* Navbar */}
                <nav
                    className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                        ? "bg-slate-700/100 backdrop-blur-lg shadow-md"
                        : "bg-transparent"
                        }`}
                >
                    {/* Background Animated Blobs */}
                    <div className="fixed inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    </div>

                    {/* Navbar Content */}
                    <div className="w-full mx-auto py-4 flex items-center justify-between pl-[5px] pr-4 md:px-8 lg:px-16">
                        {/* Logo */}
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
                            LabXCode
                        </div>


                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 text-2xl">
                            {["Home", "Services", "Projects", "Contact"].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    <div
                        className={`md:hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden bg-slate-900/95 backdrop-blur-lg`}
                    >
                        <div className="px-6 py-4 space-y-4">
                            {["Home", "Services", "Projects", "Contact"].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`#${item.toLowerCase()}`}
                                    className="block text-white hover:text-cyan-400 transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
            <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('project-1.jpg')" }}>
                {/* Overlay for darkening the image */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <p className="text-green-500 text-lg mb-2">Best IT Solutions</p>
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                        An Innovative IT Solutions Agency
                    </h1>
                    <p className="text-gray-200 max-w-2xl mb-6">
                        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.
                        Pellentesque aliquam dolor eget urna ultricies tincidunt.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                            Read More
                        </button>
                        <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>


        </>
    );
}
