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
          Treiber Aktualisieren Mit PC Beheben
        </h1>

        <p className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
          Wir wissen, wie wichtig es ist, die Treiber Ihres Computers auf dem neuesten Stand zu
          halten. Aus diesem Grund bieten wir eine umfassende Lösung, um die Aktualisierung Ihrer
          PC-Treiber so einfach und problemlos wie möglich zu gestalten.
        </p>

        <ul className="flex list-inside list-disc flex-col gap-4">
          <li className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
            Eine zuverlässige und effiziente Lösung für alle Treiberaktualisierungen.
          </li>
          <li className="text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.3rem]">
            PC Beheben ist bestrebt, qualitativ hochwertige Treiber für Ihr System bereitzustellen.
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
          src="/images/Treiber-Updater-hro-image.png"
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
