'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
const LatestBlogs = () => {
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
    <div className="flex flex-col items-center justify-center gap-7 p-7 md:gap-10 md:p-28 lg:p-10">
      {' '}
      {/*main div starts */}
      {/* heading div starts */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[1.5rem] font-bold text-gray-700 md:text-[2rem] lg:text-[3rem]">
          Neueste Blogs
        </h1>
        <h2 className="text-[0.9rem] font-bold text-gray-500 md:text-[1.1rem] lg:text-[1.5rem]">
          Entdecken Sie frische Einblicke in unseren neuesten Blogs.
        </h2>
      </div>
      {/* heading div ends */}
      {/* image div starts */}
      <div
        className={`grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:ml-[2%] lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-16 lg:p-10 ${isVisible ? 'delay-75 duration-1000 animate-in slide-in-from-bottom' : ''} `}
        ref={ref}
      >
        {/* technology blog starts */}
        <div className="flex flex-col gap-6">
          <img
            src="/images/Neue-Technologien-fur-Hacker-min.jpg"
            className="rounded-2xl md:w-full"
            alt="/images/Neue-Technologien-fur-Hacker-min.jpg"
          />

          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#ff1e1a]">Technology</span>
            <Link href="" className="hover:text-blue-700">
              <p className="text-[0.9rem] font-bold text-gray-700 md:text-[0.9rem] lg:text-[1.2rem]">
                Neue Technologien für Hackers.
              </p>
              <p className="mt-1 text-[0.8rem] text-gray-700 md:mt-3 md:text-[0.8rem]">
                Die Welt ist im stetigen Wandel und so auch die Technologie. Was für viele Vorteile…
              </p>
              <p className="text-[0.8rem] text-gray-800 md:text-[0.8rem]">
                By Steve Smith | Mar 12, 2024
              </p>
            </Link>
          </div>
        </div>
        {/* technology blog ends*/}

        {/* drucker service blogs */}
        <div className="flex flex-col gap-6">
          <img
            src="/images/Drucker-Installieren-min.jpg"
            className="rounded-2xl md:w-full lg:w-96"
            alt="/images/Drucker-Installieren-min.jpg"
          />

          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#0fbc49]">Drucker Service</span>
            <Link href="">
              <p className="text-[0.9rem] font-bold text-gray-700 md:text-[0.9rem] lg:text-[1.2rem]">
                Wie installiere ich einen Drucker.
              </p>
              <p className="mt-1 text-[0.8rem] text-gray-700 md:mt-3 md:text-[0.8rem]">
                Wie installiere ich einen Drucker - Schritt-für-Schritt-Anleitung Das Installieren
                eines neuen Druckers kann eine verwirrende…
              </p>
              <p className="text-[0.8rem] text-gray-800 md:text-[0.8rem]">
                By Petra Root | Feb 29, 2024
              </p>
            </Link>
          </div>
        </div>
        {/* drucker service blogs */}

        {/* technology 2 starts */}
        <div className="flex flex-col gap-6">
          <img
            src="/images/Cyber-insurance-min.jpg"
            className="rounded-2xl md:w-full lg:w-96"
            alt="/images/Cyber-insurance-min.jpg"
          />

          <div className="flex flex-col">
            <span className="font-bold text-[#ff1e1a]">Technology</span>
            <Link href="">
              <p className="text-[0.9rem] font-bold text-gray-700 md:text-[0.9rem] lg:text-[1.2rem]">
                Wie nützlich ist es und welchen Schutz bietet es?
              </p>
              <p className="mt-1 text-[0.8rem] text-gray-700 md:mt-3 md:text-[0.8rem]">
                Die Sicherheit privater Informationen und sensibler Unternehmensdaten ist in der
                heutigen digitalen Welt äußerst wichtig.…
              </p>
              <p className="text-[0.8rem] text-gray-800 md:text-[0.8rem]">
                By Elke Schmidt | Jan 28, 2024
              </p>
            </Link>
          </div>
        </div>
        {/* technology 2 ends */}
      </div>
      {/* image div ends */}
      {/* main div ends */}
    </div>
  );
};

export default LatestBlogs;
