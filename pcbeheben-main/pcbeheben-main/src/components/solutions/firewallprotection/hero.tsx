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
        className={`mt-20 flex w-full flex-col gap-3 leading-tight md:w-1/2 md:gap-4 lg:w-1/2 lg:gap-8 ${isVisible ? 'duration-1000 animate-in slide-in-from-right' : ''} `}
        ref={ref}
      >
        <p className="font-semibold text-gray-600">Service leicht gemacht</p>

        <h1 className="text-[1.3rem] font-bold text-gray-700 md:text-[1.5rem] lg:text-[3rem]">
          PC Beheben: Firewall-Schutz für Unternehmen
        </h1>

        <p className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
          In der heutigen vernetzten Geschäftswelt ist es wichtiger denn je, das Netzwerk Ihres
          Unternehmens zu sichern. PC-BEHEBEN bietet erstklassige Firewall-Schutzlösungen, die
          speziell für Unternehmen entwickelt wurden, um deren Netzwerkinfrastruktur zu schützen.
        </p>

        <ul className="flex list-inside list-disc flex-col gap-4">
          <li className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
            Stärken Sie das Netzwerk Ihres Unternehmens mit robustem Firewall-Schutz von PC Beheben.
          </li>
          <li className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
            Verhindern Sie Zugriffe und potenzielle Cyber-Bedrohungen und sorgen Sie so für
            Sicherheit und Zuverlässigkeit.
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
          src="/images/Firewall-Schutz-hero-min.png"
          className="mt-10 w-full object-contain md:mt-0 md:!h-[calc(100vh-80px)]"
          alt="/images/Firewall-Schutz-hero-min.png"
        />
      </div>
      {/* image div ends */}
      {/* main div ends */}
    </div>
  );
};

export default Hero;
