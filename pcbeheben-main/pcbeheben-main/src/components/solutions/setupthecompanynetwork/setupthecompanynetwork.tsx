'use client';
import { useState, useEffect, useRef } from 'react';

const Setupthecompanynetwork = () => {
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
    <div className="lg:items-starts flex flex-col-reverse gap-10 p-10 md:flex-row md:items-center md:gap-7 md:p-16 lg:p-24">
      {' '}
      {/*main div starts */}
      {/* text-content-starts */}
      <div
        className={`flex w-full flex-col gap-3 leading-tight md:w-1/2 md:gap-4 lg:w-1/2 lg:gap-8 ${isVisible ? 'duration-1000 animate-in slide-in-from-right' : ''} `}
        ref={ref}
      >
        <p className="font-semibold text-gray-600">Service leicht gemacht</p>

        <h1 className="text-[1.3rem] font-bold text-gray-700 md:text-[1.5rem] lg:text-[3rem]">
          Unternehmensnetzwerk aufbauen: Erfolgreiche Strategien
        </h1>

        <p className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
          Entdecken Sie unsere umfassenden Infrastrukturdienste für Unternehmensnetzwerke, die auf
          die unterschiedlichen Anforderungen Ihres Unternehmens zugeschnitten sind, einschließlich
          der Einrichtung von Unternehmensnetzwerken.
        </p>

        <ul className="flex list-inside list-disc flex-col gap-4">
          <li className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
            Betont die Bedeutung eines stabilen Netzwerks als Grundlage für den Geschäftserfolg.
          </li>
          <li className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
            Enterprise Network optimiert Geschäftsnetzwerke mit umfassenden Dienstleistungen,
            einschließlich Planung, Implementierung, Sicherheit und Skalierbarkeit.
          </li>
        </ul>
      </div>
      {/* text-content-ends */}
      {/* image-content-starts */}
      <div
        className={` ${isVisible ? 'duration-1000 animate-in slide-in-from-left' : ''} md:w-full lg:w-1/2`}
        ref={ref}
      >
        <img src="/images/company-network-hero-min.png" className="w-[100%] lg:w-[100%]" alt="" />
      </div>
      {/* image-content-ends */}
      {/* main div ends */}
    </div>
  );
};

export default Setupthecompanynetwork;
