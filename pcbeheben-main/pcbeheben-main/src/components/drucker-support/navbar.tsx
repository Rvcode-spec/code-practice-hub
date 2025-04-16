"use client";
import React from "react";
import Link from "@/components/layout/custom-link";
import { usePathname } from "next/navigation";
import Routes from "@/lib/routes";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <nav className="bg-black p-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button" 
                  onClick={toggleMenu}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={menuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {menuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-10 w-full">
                <div className="flex shrink-0 items-center">
                  <Link href={Routes.druckerSupport + '#Hero'}>
                    <img
                      className="h-8 w-auto"
                      src="/images/logo-pcb.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ml-12">
                    <Link
                      href={Routes.druckerSupport}
                      className="relative rounded-md hover:text-orange-400 hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white group "
                    >
                      Über uns
                      {/* Hover menu */}
                      <div className="absolute left-0 hidden mt-2 space-y-2 bg-gray-800 text-white group-hover:block w-40">
                        <Link
                          href={Routes.druckerSupport+"#Was-Wir-tin"}
                          className="block px-4 py-2 text-sm hover:text-orange-400  hover:bg-gray-700"
                        >
                          Was Wir tun
                        </Link>
                        <Link
                          href={Routes.druckerSupport+"#Marken-Die-Wir-reparieren"}
                          className="block px-4 py-2 text-sm hover:text-orange-400  hover:bg-gray-700"
                        >
                          Marken , die wir Reparieren
                        </Link>
                        <Link
                          href={Routes.druckerSupport+"#Beste-Losungen"}
                          className="block px-4 py-2 text-sm hover:text-orange-400  hover:bg-gray-700"
                        >
                          Beste Lösungen
                        </Link>
                      </div>
                    </Link>
                    <Link
                      href={Routes.druckerSupport+"#MyService"}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-orange-400 "
                    >
                      Dienstleistungen
                    </Link>
                    <Link
                      href={Routes.druckerSupport+"#reviews"}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-orange-400 "
                    >
                      Rezensionen
                    </Link>
                    <Link
                      href={Routes.blog}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-orange-400 "
                    >
                      Blog lesen
                    </Link>
                    <Link
                      href={Routes.druckerSupport+"#Faq"}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-orange-400 "
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}
              id="mobile-menu"
            >
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link
                  href={Routes.druckerSupport}
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  Über uns
                </Link>
                <Link
                  href={Routes.druckerSupport+"#MyService"}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Dienstleistungen
                </Link>
                <Link
                  href={Routes.druckerSupport+'#reviews'}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Rezensionen
                </Link>
                <Link
                  href={Routes.blog}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Blog lesen
                </Link>
                <Link
                  href={Routes.druckerSupport+'#Faq'}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar