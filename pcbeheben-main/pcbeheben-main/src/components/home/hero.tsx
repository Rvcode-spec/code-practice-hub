'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from '../layout/custom-link';
import Routes from '@/lib/routes';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

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
    <div  className="relative h-screen bg-cover bg-center font-sans" ref={ref}>
      {/* Background Image */}
      <img
        src="/images/hero-1.jpg"
        alt="Background showcasing IT services"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="flex h-full flex-col items-center px-4 sm:px-6 md:px-10 lg:flex-row lg:px-16">
        {/* Text Content */}
        <div
          className={`mb-10 w-full text-center lg:mb-0 lg:w-1/2 lg:text-left ${
            isVisible ? 'duration-1000 animate-in slide-in-from-left-96' : ''
          }`}
        >
          <div className="mt-28 text-white md:mt-28 lg:mt-32">
            <h1 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl lg:leading-snug">
              IT Lösungen für Zuhause und Unternehmen
            </h1>
            <p className="mb-6 text-sm sm:text-base md:text-lg lg:pr-8 lg:text-xl">
              Unser Ziel ist es, herausragende IT-Lösungen zu liefern, die sowohl Ihre unmittelbaren
              technischen Anforderungen erfüllen als auch mit Ihren übergeordneten Geschäftszielen
              im Einklang stehen.
            </p>
            <div>
              <Link
                href={Routes.home + '#RegisterAdvice'}
                className="rounded-md bg-red-500 px-4 py-2 font-mono text-base font-bold text-white transition duration-500 hover:border hover:border-white hover:bg-transparent hover:text-white sm:px-5 sm:py-3 sm:text-lg md:text-xl"
              >
                Lassen Sie sich beraten
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`mt-10 flex w-full justify-center sm:mt-16 lg:mt-0 lg:w-1/2 lg:justify-end ${
            isVisible ? 'duration-1000 animate-in slide-in-from-right-96' : ''
          }`}
        >
          <img
            className="relative h-auto w-3/4 max-w-xs sm:w-2/3 sm:max-w-sm md:w-1/2 md:max-w-md lg:w-full lg:max-w-lg"
            src="/images/hero-image-min.png"
            alt="Illustration of IT services"
          />
        </div>
      </div>
    </div>
  );
}
