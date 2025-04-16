'use client';
import { FC } from 'react';
import { useState, useEffect, useRef } from 'react';

const HomeItsolution: FC = () => {
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
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-8 lg:flex-row lg:items-start">
        <div
          className={`relative flex w-full animate-reveal-left justify-center md:w-1/2 lg:right-20 lg:w-1/2 ${isVisible ? 'duration-1000 animate-in slide-in-from-left-96' : ''} `}
        >
          <img
            src="images/IT-SOLUTION-image.png"
            alt="Woman holding a laptop and smiling"
            className="h-auto w-full"
          />
        </div>

        <div
          className={`mt-8 w-full animate-reveal-right lg:mt-0 lg:w-2/3 lg:pl-8 ${isVisible ? 'duration-1000 animate-in slide-in-from-right-72' : ''} `}
          ref={ref}
        >
          <h2 className="mt-5 text-sm text-xl font-semibold uppercase text-gray-500">IT Lösung</h2>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-700 sm:text-4xl lg:text-5xl">
            Für Privatpersonen und Unternehmen
          </h1>
          <p className="mt-4 text-sm text-gray-600 sm:text-base lg:text-lg">
            PC BEHEBEN richtet sich an eine Vielzahl von Kunden, einschließlich solcher, die Hilfe
            bei ihren PCs zu Hause benötigen, sowie Ladenbesitzern und Geschäftskunden, die
            professionelle und zeitnahe Unterstützung für ihre Bürosysteme benötigen.
          </p>
          <h3 className="mt-6 text-xl font-extrabold text-gray-700 sm:text-2xl lg:text-3xl">
            Wir sind technikbegeistert.
          </h3>
          <ul className="mt-4 list-inside list-disc text-sm text-gray-600 sm:text-base lg:text-lg">
            <li>
              Wir wissen, wie wichtig ein funktionierendes Computersystem ist, daher haben wir es
              uns zur Priorität gemacht, allen unseren Kunden zuverlässige und effiziente
              Dienstleistungen anzubieten.
            </li>
            <li>
              Ob Sie eine Reparatur, ein Upgrade oder Wartungsservice benötigen, unser Team von
              Experten wird Ihnen helfen, Ihren Computer reibungslos zum Laufen zu bringen.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeItsolution;
