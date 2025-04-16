'use client';
import { useState, useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Database } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Smartphone } from 'lucide-react';

const PCFixFirewall = () => {
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
        className={`flex flex-col gap-8 text-center ${isVisible ? 'duration-1000 animate-in fade-in' : ''} lg:w-3/4`}
        ref={ref}
      >
        <h1 className="text-[1.4rem] font-bold text-gray-700 md:text-lg lg:text-4xl">
          Hauptmerkmale des PC Beheben Firewall-Schutzes für Unternehmen!
        </h1>
        <p className="text-[1.1rem] text-gray-600 md:text-[1.1rem] lg:text-xl">
          Die Firewall-Schutzdienste von PC FIX bieten eine grundlegende Reihe von Funktionen, die
          entwickelt wurden, um Ihre wertvollen Unternehmensdaten zu schützen und deren Integrität,
          Vertraulichkeit und Verfügbarkeit sicherzustellen.
        </p>
      </div>
      {/* header ends */}
      {/* icon starts */}
      <div
        className={`grid w-lvw grid-cols-1 gap-10 md:w-full md:grid-cols-2 md:place-content-between md:gap-10 md:p-14 ${isVisible ? 'duration-1000 animate-in slide-in-from-bottom' : ''} `}
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 lg:items-center">
          <img
            src="/images/pcbehebenicon/Comprehensive security.png"
            className="w-14 md:w-fit"
            alt="/images/Firewall.png"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-lg lg:text-[1.5rem]">
              Umfassende Sicherheit
            </p>
            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Umfassende Sicherheit für die Netzwerkinfrastruktur Ihres Unternehmens, einschließlich
              Perimeterschutz, Intrusion Prevention und sicherem Fernzugriff.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 lg:items-center">
          <img
            src="/images/pcbehebenicon/Scalable solutions.png"
            className="w-14 md:w-fit"
            alt="/images/pcbehebenicon/Scalable solutions.png"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-lg lg:text-[1.5rem]">
              Skalierbare Lösungen
            </p>
            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Unsere Firewall-Schutzlösungen sind darauf ausgelegt, mit dem Wachstum Ihres
              Unternehmens zu skalieren und so eine kontinuierliche Sicherheit für Ihr sich
              erweiterndes Netzwerk zu gewährleisten
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 md:text-left lg:items-center">
          <img
            src="/images/pcbehebenicon/Centralized administration.png"
            className="w-14 md:w-fit"
            alt="/images/pcbehebenicon/Scalable solutions.png"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-lg lg:text-[1.5rem]">
              Zentralisierte Verwaltung
            </p>
            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Verwalten und überwachen Sie den Firewall-Schutz Ihres Unternehmens über eine einzige,
              zentrale Plattform und erhalten Sie so eine bessere Kontrolle und Transparenz über die
              Sicherheit Ihres Netzwerks.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 lg:items-center">
          <img
            src="/images/pcbehebenicon/Multi-layered defense.png"
            className="w-14 md:w-fit"
            alt="/images/pcbehebenicon/Scalable solutions.png"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Mehrschichtige Abwehr
            </p>

            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Der Firewall-Schutz von PC Beheben verwendet einen mehrschichtigen Sicherheitsansatz,
              der eine starke Abwehr gegen eine Vielzahl von Cyberbedrohungen bietet.
            </p>
          </div>
        </div>
      </div>
      {/* icon ends */}
      {/* main div ends */}
    </div>
  );
};

export default PCFixFirewall;
