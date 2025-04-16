'use client';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
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
    <div className="lg:items-starts flex flex-col-reverse p-10 md:flex-row md:items-center md:gap-7 md:p-16 lg:p-24">
      {' '}
      {/*main div starts */}
      {/* text-content-starts */}
      <div
        className={`mt-14 flex w-full flex-col gap-3 leading-tight md:w-1/2 md:gap-4 lg:w-1/2 lg:gap-8 ${isVisible ? 'duration-1000 animate-in slide-in-from-right' : ''} `}
        ref={ref}
      >
        <p className="text-lg font-semibold text-gray-500">Service leicht gemacht</p>

        <h1 className="text-[1.3rem] font-bold text-gray-700 md:text-[1.5rem] lg:text-[3rem]">
          PC Beheben Antiviren Software
        </h1>

        <p className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
          In einer zunehmend digitalisierten Welt ist die Sicherheit Ihres Geschäfts und
          Einzelhandels von entscheidender Bedeutung. PC-BEHEBEN bietet fortschrittliche Antiviren
          Softwarelösungen, die speziell für Geschäfte und Einzelhandelsumgebungen entwickelt
          wurden.
        </p>

        <ul className="flex list-inside list-disc flex-col gap-4">
          <li className="text-base text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
            Schützen Sie Ihr Einzelhandelsunternehmen vor Cyber-Bedrohungen mit erstklassiger
            Antivirensoftware
          </li>
          <li className="text-base text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
            Wir bieten umfassenden Schutz vor Malware, Ransomware und anderen Cyber-Bedrohungen und
            gewährleisten so die Sicherheit und Integrität Ihrer Daten.
          </li>
        </ul>
      </div>
      {/* text-content-ends */}
      {/* image div starts */}
      <div
        className={` ${isVisible ? 'duration-1000 animate-in slide-in-from-left' : ''} md:w-full lg:w-1/2`}
        ref={ref}
      >
        <img
          src="images/antivirus-hero-image-min.png"
          className="w-full object-contain md:mt-0 md:!h-[calc(100vh-80px)]"
          alt="antivirus-system"
        />
      </div>
      {/* image div ends */}
      {/* main div ends */}
    </div>
  );
};

export default Hero;
