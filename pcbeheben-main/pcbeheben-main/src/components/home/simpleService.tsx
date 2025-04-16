'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const SimpleService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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
    <div className="flex flex-col items-center justify-center p-8 md:flex-row">
      {/* Content Section */}
      <div className="mb-8 animate-reveal-left text-center md:mb-0 md:mr-4 md:w-1/3 md:text-left">
        <h1 className="mb-4 text-3xl font-semibold text-gray-700 md:text-4xl">
          Einfacher Service für vielbeschäftigte Menschen.
        </h1>
        <p className="mb-6 text-base text-gray-500 md:text-lg">
          Das Leben kann sehr hektisch sein. Das verstehen wir. Es kann schwierig sein, die Zeit zu
          finden, um zu einer unserer Filialen zu reisen. Aus diesem Grund bieten wir unseren
          mobilen Service für Privathaushalte und kleine Unternehmen an. Wann und wo immer Sie uns
          brauchen, möchten wir für Sie da sein. Unsere Fachleute stehen Ihnen immer zur Verfügung,
          um IT-Support, Reparaturen und jede andere technische Hilfe anzubieten, die Sie benötigen.
          Sie haben zwei Möglichkeiten: Entweder besuchen Sie eine unserer Filialen oder Sie warten
          und wir kommen zu Ihnen.
        </p>
        <button className="rounded-md border-2 border-gray-800 px-6 py-3 text-lg font-semibold text-gray-800 hover:bg-[#7b5dd6] hover:text-white">
          Lassen beraten
        </button>
      </div>

      {/* Image Section */}
      <div className="mb-10 flex animate-reveal-left flex-col items-center md:w-1/2">
        <img
          src="images/Simple-service.png"
          alt="Älteres Paar, das lächelnd auf einen Laptop schaut"
          className="mb-4 w-full max-w-md rounded-lg lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default SimpleService;
