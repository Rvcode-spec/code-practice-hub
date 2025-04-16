'use client';
import { useState, useEffect, useRef } from 'react';

const AboutReliableExpertise = () => {
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
    <div className="w-full bg-indigo-50">
      {/* Main container starts */}
      {/* Outer content container starts */}
      <div className="flex flex-col-reverse justify-center sm:flex-col-reverse sm:items-center sm:justify-center md:flex-row md:items-center md:justify-center lg:items-center lg:justify-center">
        {/* Text content container starts */}
        <div
          className={`ml-[5%] flex w-4/5 flex-col gap-3 p-3 sm:flex sm:w-3/4 sm:flex-col sm:gap-6 sm:p-3 md:flex md:w-2/4 md:flex-col md:gap-6 md:p-3 lg:flex lg:w-2/4 lg:flex-col lg:gap-6 ${isVisible ? 'duration-1000 animate-in slide-in-from-right-96' : ''} `}
          ref={ref}
        >
          <p className="text-gray-400">ZUVERLÄSSIGE EXPERTISE</p>
          <h1 className="mt-5 text-[1.8rem] font-bold text-gray-500 sm:text-[2rem] sm:font-bold md:text-[2rem] md:font-bold lg:text-[3rem] lg:font-bold">
            Umfassende IT-Dienstleistungen
          </h1>

          <p className="text-[0.9rem] font-semibold text-gray-400 sm:text-[1.1rem] sm:font-semibold md:text-[0.9rem] md:font-semibold lg:text-[1.3rem]">
            Unsere erfahrenen Techniker bieten erstklassigen Service mit Professionalität und
            Respekt und gewährleisten so Kundenzufriedenheit in jeder Hinsicht. Von einfachen
            Reparaturen bis hin zu komplexen Upgrades bietet unser erfahrenes Team zuverlässige
            Lösungen für Ihre Bedürfnisse, um Ihre Geräte reibungslos am Laufen zu halten.
          </p>
        </div>
        {/* Text content container ends */}

        {/* Image container starts */}
        <div
          className={`ml-[10%] w-3/4 sm:ml-0 sm:w-2/5 md:w-2/5 lg:w-2/5 ${isVisible ? 'duration-1000 animate-in slide-in-from-left-72' : ''} `}
        >
          <img src="/images/hero-image-min.png" className="w-full" alt="" />
        </div>
        {/* Image container ends */}
      </div>
      {/* Outer content container ends */}
      {/* Main container ends */}
    </div>
  );
};

export default AboutReliableExpertise;
