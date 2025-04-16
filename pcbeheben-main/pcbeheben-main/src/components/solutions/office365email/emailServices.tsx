'use client';
import { useState, useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Database } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Smartphone } from 'lucide-react';

const EmailServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }, // Adjust this for sensitivity
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
    <div className="flex flex-col items-center justify-center gap-20 p-6 md:p-20">
      {' '}
      {/*main div starts */}
      {/* header starts */}
      <div
        className={`flex flex-col gap-8 text-center ${isVisible ? 'duration-1000 animate-in fade-in' : ''} md:w-2/4`}
        ref={ref}
      >
        <h1 className="text-[1.4rem] font-bold text-gray-700 md:text-[2rem] lg:text-[3rem]">
          Office 365 Email Services for Small Businesses
        </h1>
        <p className="text-[1.1rem] text-gray-600 md:text-[1.1rem] lg:text-[1.5rem]">
          Die PC Beheben Office 365 Small Business E-Mail-Services bieten mehrere wichtige
          Funktionen, die speziell auf die Bedürfnisse kleiner Unternehmen zugeschnitten sind.
        </p>
      </div>
      {/* header ends */}
      {/* icon starts */}
      <div
        className={`grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:place-content-between md:gap-10 md:p-14 ${isVisible ? 'duration-1000 animate-in slide-in-from-bottom' : ''} `}
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          <Database size={50} className="flex-none text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Postfachspeicher
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Speichern und verwalten Sie problemlos Tausende von E-Mails, sodass Sie sich auf das
              Wesentliche konzentrieren können.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          <CalendarCheck size={50} className="flex-none text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Kalender und Kontakte
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Planen Sie Meetings, verfolgen Sie Zusagen und greifen Sie mühelos auf die
              Kontaktinformationen Ihres Teams zu.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5 md:text-left">
          <Smartphone size={50} className="flex-none text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Mobiler Zugriff
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Bleiben Sie unterwegs mit Ihrem Geschäft in Verbindung, indem Sie von jedem Gerät mit
              Internetzugang auf Ihre Office 365 E-Mails.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          <ShieldCheck size={50} className="flex-none text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Sicherheitsfunktionen
            </p>

            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Schützen Sie Ihre sensiblen Daten und schützen Sie Ihr Unternehmen mit erweiterten
              Sicherheitsfunktionen vor Cyber-Bedrohungen.
            </p>
          </div>
        </div>
      </div>
      {/* icon ends */}
      {/* main div ends */}
    </div>
  );
};

export default EmailServices;
