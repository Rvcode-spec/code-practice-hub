'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const InstoreRegister: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="mx-auto rounded-full bg-indigo-50 p-4 md:w-96 md:p-5">
        <p className="text-[0.9rem] text-gray-500 md:text-[1.1rem]">
          Haben Sie Fragen?
          <Link href="/get-in-touch" className="border-primary text-primary underline">
            In Kontakt kommen
          </Link>
        </p>
      </div>
      <div
        className={`flex min-h-screen flex-col items-center justify-center gap-10 bg-white px-4 sm:px-6 lg:px-8`}
        id="pos-register"
        ref={ref}
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between overflow-hidden rounded-lg bg-[url('/images/bg-05.jpg')] bg-cover bg-center p-6 sm:p-8 md:flex-row">
          <div className="z-10 text-white md:w-1/2">
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Sichern Sie Ihre Unternehmensdaten mit Antivirus
            </h1>
            <p className="mb-6 text-sm font-medium sm:text-base md:text-lg">
              Die Antivirensoftware von PC Beheben ist Ihr zuverlässiger Schutz vor digitalen
              Bedrohungen.
            </p>

            <Link href="/get-in-touch">
              <button className="rounded-lg border-2 bg-purple-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-purple-700 sm:text-base lg:mt-6">
                jetzt registrieren
              </button>
            </Link>
          </div>

          <div className="relative mt-6 md:mt-0 md:w-1/2">
            <img
              src="images/firewall-security-cta-min.png"
              alt="Screenshot of antivirus system"
              className="translate-x-4 translate-y-4 -rotate-6 transform rounded-lg shadow-lg sm:translate-x-6 sm:translate-y-6 lg:translate-x-10 lg:translate-y-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InstoreRegister;
