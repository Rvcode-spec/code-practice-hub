'use client';
import { CheckCircleIcon } from 'lucide-react';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

function HomeStoreService() {
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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mt-24 animate-reveal-left">
          <h2 className="text-xl font-bold text-gray-500">ONE-STOP SOLUTION</h2>
          <h1 className="mt-2 text-4xl font-bold text-gray-700 sm:text-5xl">
            In-Store IT Services.
          </h1>
          <p className="mt-4 text-lg font-semibold text-gray-500">
            Our skilled technicians prioritize exceptional customer care, delivering reliable
            solutions with expertise and professionalism, ensuring smooth device functionality.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex">
              <CheckCircleIcon className="fas fa-check mt-1 text-purple-500" />
              <p className="ml-3 font-medium text-gray-500">
                Exceptional customer service with professionalism and respect.
              </p>
            </li>
            <li className="flex">
              <CheckCircleIcon className="fas fa-check mt-1 text-purple-500" />
              <p className="ml-3 font-medium text-gray-500">
                Skilled technicians provide reliable solutions for all device needs.
              </p>
            </li>
            <li className="flex">
              <CheckCircleIcon className="fas fa-check mt-1 text-purple-500" />
              <p className="ml-3 font-medium text-gray-500">
                Commitment to exceeding expectations and ensuring smooth device operation.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-12 animate-reveal-right lg:mt-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="h-full w-full items-center justify-center rounded-md text-purple-600 sm:w-1/2 md:w-full">
                <img src="/images/cashregistersystems.png" className="w-20" alt="" />
                <div>
                  <h3 className="mt-8 text-2xl font-bold text-gray-700">Kassensysteme</h3>
                  <p className="mt-2 text-lg font-semibold text-gray-500">
                    Increase efficiency and improve customer experience in your store.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="h-full w-full items-center justify-center rounded-md text-purple-600 sm:w-1/2 md:w-full">
                <img src="/images/Datastorage.png" className="w-20" alt="" />
                <div>
                  <h3 className="mt-8 text-2xl font-bold text-gray-700">Datenspeicher</h3>
                  <p className="mt-2 text-lg font-semibold text-gray-500">
                    Wir bieten sichere und zuverlässige Lagermöglichkeiten.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="h-full w-full items-center justify-center rounded-md text-purple-600 sm:w-1/2 md:w-full">
                <img src="/images/Crnsystem.png" className="w-20" alt="" />
                <div>
                  <h3 className="mt-8 text-2xl font-bold text-gray-700">CRM System</h3>
                  <p className="mt-2 text-lg font-semibold text-gray-500">
                    Erhöhen Sie die Anzahl Ihrer Kunden und Ihres Geschäfts.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="h-full w-full items-center justify-center rounded-md text-purple-600 sm:w-1/2 md:w-full">
                <img src="/images/ITHelpdesk.png" className="w-20" alt="" />
                <div>
                  <h3 className="mt-8 text-2xl font-bold text-gray-700">IT Helpdesk</h3>
                  <p className="mt-2 text-lg font-semibold text-gray-500">
                    Ein 24/7 IT-Helpdesk für Einzelhandel und Geschäfte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStoreService;
