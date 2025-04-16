'use client';
import { useState, useEffect, useRef } from 'react';
import { Home, House } from 'lucide-react';
import { Trophy } from 'lucide-react';

const Yourneighborhood = () => {
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
    <div className="flex w-full flex-col items-center justify-center text-center md:w-full md:flex-col md:items-center md:justify-center lg:w-full lg:flex-col lg:items-center lg:justify-center">
      {/*main div */}

      <h1 className="mt-14 text-[1.7rem] font-bold text-gray-500 md:mt-14 md:text-[2rem] md:font-bold lg:mt-10 lg:text-[3rem] lg:font-bold">
        Ihre Nachbarschaft, unser Service.
      </h1>
      <h2 className="text-[1.2rem] font-semibold text-gray-500 md:text-[1.5rem] md:font-semibold lg:text-[2rem] lg:font-semibold">
        Beste IT-Services in Deutschland.
      </h2>

      {/* icons div state */}
      <div
        className={`mt-20 flex flex-col items-center justify-center gap-20 p-6 md:mt-20 md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-10 md:p-3 lg:mt-20 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10 ${isVisible ? 'delay-150 duration-700 animate-in slide-in-from-bottom' : ''} `}
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center md:flex-col md:items-center md:justify-center md:gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-4">
          <Trophy className="h-16 w-16 text-violet-400 md:h-12 md:w-12 lg:h-14 lg:w-14" />

          <p className="text-gray-500 md:text-[1.1rem] md:font-semibold lg:text-[1.3rem] lg:font-semibold">
            Beste Dienstleistungen
          </p>
          <p className="text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
            Erstklassige Dienstleistungen.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-col md:items-center md:justify-center md:gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-4">
          <img src="/images/24_7support.png" alt="" />

          <p className="text-gray-500 md:text-[1.1rem] md:font-semibold lg:text-[1.3rem] lg:font-semibold">
            24/7 Unterstützung
          </p>
          <p className="text-center text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
            Immer verfügbare Hilfe, rund um die Uhr.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-col md:items-center md:justify-center md:gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-4">
          <img src="/images/100_safe.png" alt="" />
          <p className="text-gray-500 md:text-[1.1rem] md:font-semibold lg:text-[1.3rem] lg:font-semibold">
            100 % Sicher
          </p>
          <p className="text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
            Garantiert vollständige Sicherheit.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-col md:items-center md:justify-center md:gap-2 lg:flex-col lg:items-center lg:justify-center lg:gap-4">
          <Home className="text-violet-400 md:h-12 md:w-12 lg:h-14 lg:w-14" />

          <p className="text-gray-500 md:text-[1.1rem] md:font-semibold lg:text-[1.3rem] lg:font-semibold">
            Haustürservice
          </p>

          <p className="text-center text-[0.9rem] text-gray-500 md:text-[0.9rem] lg:text-[1.1rem]">
            Bequeme Haushaltshilfe für alle Ihre Bedürfnisse.
          </p>
        </div>
      </div>

      {/* icons div state */}
    </div>
  );
};

export default Yourneighborhood;
