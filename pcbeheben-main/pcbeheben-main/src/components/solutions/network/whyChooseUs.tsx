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
    <div className="flex flex-col items-center justify-center gap-20 p-6 md:px-20">
      {' '}
      {/*main div starts */}
      {/* header starts */}
      <div
        className={`flex flex-col gap-8 text-center ${isVisible ? 'duration-1000 animate-in fade-in' : ''} md:w-2/4`}
        ref={ref}
      >
        <h1 className="text-[1.4rem] font-bold text-gray-700 md:text-[2rem] lg:text-[2.5rem]">
          Warum sollten Sie sich für PC Beheben für Netzwerksicherheit entscheiden?
        </h1>
        <p className="text-[1.1rem] text-gray-600 md:text-[1.1rem] lg:text-[1.5rem]">
          Robuste Firewall- und Einbruchspräventionssysteme, sichere Fernzugriffslösungen und
          umfassende Endpunktsicherheit gewährleisten den bestmöglichen Schutz für Ihr
          Unternehmensnetzwerk.
        </p>
      </div>
      {/* header ends */}
      {/* icon starts */}
      <div
        className={`grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:place-content-between md:gap-10 md:p-14 ${isVisible ? 'duration-1000 animate-in slide-in-from-bottom' : ''} `}
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          <img src="/images/Firewall.png" alt="/images/Firewall.png" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Firewall
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
              Unsere robusten Firewall- und Einbruchspräventionssysteme helfen, Ihr Netzwerk zu
              schützen, indem sie den Datenverkehr überwachen und unbefugten Zugriff blockieren, um
              Cyberbedrohungen zu verhindern.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          <img src="/images/Secure remote access.png" alt="/images/Secure remote access.png" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Sicherer Fernzugriff
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
              Unsere Lösungen für sicheren Fernzugriff stellen sicher, dass Ihre Daten geschützt
              bleiben, selbst bei Zugriff aus externen Standorten.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5 md:text-left">
          <ShieldCheck size={50} className="flex-none text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Endpunktsicherheit
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
              Schützen Sie alle Geräte, die mit Ihrem Netzwerk verbunden sind, mit unseren
              umfassenden Lösungen für Endpunktsicherheit, einschließlich Antivirus, Antimalware und
              Geräteverwaltungstools.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
          <CalendarCheck size={50} className="flex-none text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              24/7 Betriebszeit
            </p>

            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
              Betriebszeit rund um die Uhr Gewährleistet die kontinuierliche Verfügbarkeit von
              Netzwerkdiensten und Sicherheit.
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
