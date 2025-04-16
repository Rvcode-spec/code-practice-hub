'use client';
import { useState, useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { SquareStack } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { History } from 'lucide-react';

const EnterpriseNetworkInfrastructure = () => {
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
          Unternehmensnetzwerk Infrastruktur: Die Basis für Ihren Erfolg
        </h1>
        <p className="text-[1.1rem] text-gray-600 md:text-[1.1rem] lg:text-[1.5rem]">
          Die PC-BEHEBEN Unternehmensnetzwerk Infrastruktur-Lösungen bieten eine Vielzahl wichtiger
          Funktionen, die speziell auf die Bedürfnisse von Unternehmen zugeschnitten sind.
        </p>
      </div>
      {/* header ends */}
      {/* icon starts */}
      <div
        className={`grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:place-content-between md:gap-10 ${isVisible ? 'duration-1000 animate-in slide-in-from-bottom' : ''} `}
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <ShieldCheck size={80} className="text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Sicheres Netzwerk
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Schützt Daten vor Cyberbedrohungen mit robusten Sicherheitsmaßnahmen.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <CalendarCheck size={80} className="text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              24/7 Betriebszeit
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Gewährleistet eine kontinuierliche Verfügbarkeit von Netzwerkdiensten.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <SquareStack size={80} className="text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Backup
            </p>
            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Sichert Daten regelmäßig zur Wiederherstellung im Falle eines Verlusts.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <History size={80} className="text-primary" />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:gap-2">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Kundenorientierte
            </p>

            <p className="text-[1.1rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
              Wir stehen Ihnen rund um die Uhr zur Verfügung.
            </p>
          </div>
        </div>
      </div>
      {/* icon ends */}
      {/* main div ends */}
    </div>
  );
};

export default EnterpriseNetworkInfrastructure;
