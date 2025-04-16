'use client';
import { useState, useEffect, useRef } from 'react';

const Onestopsolution = () => {
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
    <div className="flex flex-col-reverse gap-10 bg-indigo-50 p-10 md:mt-[15%] md:flex-row md:items-center md:gap-10 md:p-20 lg:p-32">
      {' '}
      {/*main div starts */}
      {/* text container starts */}
      <div
        className={`flex flex-col gap-10 md:w-2/4 ${isVisible ? 'duration-1000 animate-in slide-in-from-right-96' : ''} `}
        ref={ref}
      >
        <p className="font-bold text-gray-500">One-Stop-Lösung</p>

        <h1 className="text-[1.5rem] font-bold text-gray-700 md:text-[1.8rem] lg:w-10/12 lg:text-[2.5rem]">
          Wir sind technikbegeistert.
        </h1>

        <ul className="flex list-inside list-disc flex-col gap-6 text-[0.9rem] font-semibold text-gray-600 md:text-[0.9rem] lg:text-[1.2rem]">
          <li>
            Wir wissen, wie wichtig ein funktionierendes Computersystem ist, daher haben wir es uns
            zur Priorität gemacht, allen unseren Kunden zuverlässige und effiziente Dienstleistungen
            anzubieten.
          </li>

          <li>
            Ganz gleich, ob Sie eine Reparatur, ein Upgrade oder einen Wartungsservice benötigen, unser Expertenteam hilft Ihnen dabei, dass Ihr IT-Gerät oder Ihre IT-Maschine reibungslos funktioniert.
          </li>
        </ul>
      </div>
      {/* text container ends*/}
      {/* image container starts */}
      <div
        className={`md:h-2/4 md:w-2/4 ${isVisible ? 'duration-1000 animate-in slide-in-from-left-72' : ''} `}
      >
        <img src="/images/one-stop-solution-min.png" alt="images/one-stop-solution-min.png" />
      </div>
      {/* image container ends */}
      {/*main div ends*/}
    </div>
  );
};

export default Onestopsolution;
