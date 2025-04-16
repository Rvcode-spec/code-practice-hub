'use client';
import { useState, useEffect, useRef } from 'react';

const ComprehensiveITservices = () => {
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
    <div className="justify-cemter mt-[15%] flex w-full flex-col items-center p-3 md:flex-row lg:p-3">
      {' '}
      {/*main div starts */}
      {/* image div starts */}
      <div
        className={` ${isVisible ? 'duration-1000 animate-in slide-in-from-right-96' : ''} w-full md:ml-[9%] md:w-2/4 lg:ml-[11%] lg:w-2/4`}
        ref={ref}
      >
        <img src="/images/IT-services-min.png" alt="images/IT-services-min.png" />
      </div>
      {/* image div ends */}
      {/* text-content-starts */}
      <div
        className={` ${isVisible ? 'duration-1000 animate-in slide-in-from-left-72' : ''} flex flex-col gap-4 md:w-2/4 md:gap-2 lg:mt-0 lg:w-2/4`}
      >
        <p className="text-gray-600">Zuverlässige Expertise</p>

        <h1 className="text-[1.5rem] font-bold text-gray-700 md:text-[2rem] lg:text-[3.2rem]">
          Umfassende IT-Dienstleistungen
        </h1>

        <ul className="flex list-inside list-disc flex-col justify-center text-[0.9rem] text-gray-600 md:gap-2 md:p-2 md:text-[0.9rem] lg:w-9/12 lg:gap-6 lg:text-[1.1rem] lg:font-bold">
          <li>
            PC Beheben hilft Ihnen, verlorene oder gelöschte Dateien mit Leichtigkeit
            wiederherzustellen.
          </li>
          <li>Wir helfen Ihnen auf nahtlose und effiziente Weise beim Datenübertragung.</li>
          <li>Unsere Antivirensoftware bietet Ihnen den bestmöglichen Schutz.</li>
          <li>
            Genießen Sie eine schnellere, stabilere und sicherere Computing-Erfahrung mit PC
            Beheben.
          </li>
          <li>Eine Lösung für alle Geräte- und Softwareinstallationsbedürfnisse.</li>
          <li>Entdecken Sie unseren umfassenden Service für Unternehmensnetzwerkinfrastruktur.</li>
        </ul>
      </div>
      {/* text-content-ends*/}
      {/*main div ends */}
    </div>
  );
};

export default ComprehensiveITservices;
