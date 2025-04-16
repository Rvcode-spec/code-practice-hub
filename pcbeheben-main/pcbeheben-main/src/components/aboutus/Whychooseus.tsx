'use client';
import { useState, useEffect, useRef } from 'react';

const Whychooseus = () => {
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
    <div className="mt-44 flex items-center justify-center">
      {' '}
      {/*main div */}
      {/* bg div starts */}
      <div className="flex w-[90vw] flex-col-reverse items-center justify-center rounded-lg bg-indigo-50 p-5 sm:flex-row lg:flex-row">
        {/* text content starts */}
        <div
          className={`w-5/6 sm:w-2/5 sm:p-3 lg:mt-16 lg:w-2/5 ${isVisible ? 'duration-1000 animate-in slide-in-from-right-96' : ''} `}
        >
          <p className="mt-6 text-gray-400 sm:mt-4">Warum sollten Sie uns wählen?</p>

          <p className="mt-3 text-[1.3rem] font-bold text-gray-700 sm:mt-3 sm:text-[1.8rem] lg:text-[3rem]">
            Mit Wissen, Fähigkeiten und harter Arbeit
          </p>

          <p className="text-[0.8rem] text-gray-400 sm:text-[0.8rem] lg:mt-4 lg:text-[1.5rem]">
            PC Beheben richtet sich an ein breites Kundenspektrum, darunter an diejenigen, die Hilfe
            bei der Heim-IT benötigen, aber auch an Ladenbesitzer und Geschäftskunden, die
            professionelle und zeitnahe Unterstützung für ihre Bürosysteme benötigen.
          </p>

          <p className="mt-4 text-[1.3rem] font-bold sm:mt-2 sm:text-[1.5rem] lg:mt-4 lg:text-[2rem]">
            Ihr Weg zum Erfolg!
          </p>

          <p className="text-[0.8rem] text-gray-400 sm:text-[0.8rem] lg:text-[1.5rem]">
            Unsere Fachleute stehen Ihnen jederzeit für IT-Support, Reparaturen und jede andere
            technische Unterstützung zur Verfügung, die Sie benötigen.
          </p>
        </div>
        {/* text content ends */}

        {/* image div starts */}

        <div
          className={`w-4/5 sm:w-2/4 lg:w-2/4 ${isVisible ? 'duration-1000 animate-in slide-in-from-left-72' : ''} `}
          ref={ref}
        >
          <img src="/images/Simple-service.png" alt="Simple-service.png" />
        </div>
        {/* image div ends */}
      </div>
      {/* bg div ends*/}
      {/* main dive ends */}
    </div>
  );
};

export default Whychooseus;
