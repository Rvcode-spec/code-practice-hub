'use client';
import { Clock, Home, Shield, Trophy } from 'lucide-react';
import { FC } from 'react';
import { useState, useEffect, useRef } from 'react';

const HomeService: FC = () => {
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
    <div>
      <div
        className={`font-inter bg-white py-16 text-center ${isVisible ? 'duration-1000 animate-in slide-in-from-right-72' : ''} `}
        ref={ref}
      >
        <h1 className="text-4xl font-semibold text-gray-800">Ihre Nachbarschaft, unser Service.</h1>
        <p className="mt-2 text-lg text-gray-500">Bester Computerservice in Deutschland.</p>
        <div className="mt-12 grid animate-reveal-left grid-cols-1 gap-8 md:mr-8 md:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-100 p-6">
              {/* <i className="fas fa-trophy text-5xl text-purple-600"></i> */}
              <Trophy className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Best Services</h3>
            <p className="mt-2 break-words text-gray-500">Erstklassige Dienstleistungen.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-100 p-6">
              {/* <i className="fas fa-clock text-5xl text-purple-600"></i> */}
              <Clock className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">24/7 Unterstützung</h3>
            <p className="mt-2 break-words text-gray-500">
              Immer verfügbare Hilfe, rund um die Uhr.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-100 p-6">
              {/* <i className="fas fa-shield-alt text-5xl text-purple-600"></i> */}
              <Shield className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">100 % Sicher</h3>
            <p className="mt-2 break-words text-gray-500">Garantiert vollständige Sicherheit.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-100 p-6">
              {/* <i className="fas fa-home text-5xl text-purple-600"></i> */}
              <Home className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Haustürservice</h3>
            <p className="mt-2 break-words text-gray-500">
              Bequeme Haushaltshilfe für alle Ihre Bedürfnisse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
