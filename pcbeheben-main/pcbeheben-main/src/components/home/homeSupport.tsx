'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const HomeSupport: React.FC = () => {
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
    <div className="bg-white py-12 text-center">
      {/* Title Section */}
      <h1 className="mx-5 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
        Unsere IT-Support- und Wartungsservice-Angebote
      </h1>

      <p className="mx-4 mt-4 text-gray-500">
        Wenn Sie nach einem IT-Partner suchen, der Ihre Technologieanforderungen wirklich versteht,
        sind Sie bei PC-BEHABEN genau richtig.
      </p>

      {/* Service Cards */}
      <div className="mx-5 mt-12 grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group animate-reveal-left rounded-lg bg-gray-100 p-6 shadow-md transition duration-300 hover:bg-gray-200 hover:shadow-lg"
          >
            <img src={service.image} alt={service.alt} className="mx-auto mb-4 rounded-md" />
            <h2 className="break-words text-xl font-bold text-gray-800 transition duration-300 group-hover:text-red-500">
              {service.title}
            </h2>
            <p className="mt-2 break-words text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Service Data Array
const services = [
  {
    image: '/images/data-recovery.png',
    alt: 'Datenrettung',
    title: 'Datenrettung',
    description:
      'Wir helfen Ihnen, verlorene oder gelöschte Dateien problemlos wiederherzustellen.',
  },
  {
    image: '/images/data-transfer.png',
    alt: 'Datenübertragung',
    title: 'Datenübertragung',
    description: 'Wir helfen Ihnen auf nahtlose und effiziente Weise beim Datenübertragung.',
  },
  {
    image: '/images/antivirus.png',
    alt: 'Virenentfernung',
    title: 'Virenentfernung',
    description: 'Unsere Antivirensoftware bietet Ihnen den bestmöglichen Schutz.',
  },
  {
    image: '/images/Driver-updater.png',
    alt: 'Treiber Updater',
    title: 'Treiber Updater',
    description: 'Genießen Sie ein schnelleres, stabileres und sichereres Computererlebnis.',
  },
  {
    image: '/images/Software-and-device-setup.png',
    alt: 'Software und Geräte Setup',
    title: 'Software und Geräte Setup',
    description: 'Eine Lösung für alle Geräte- und Softwareinstallationsbedürfnisse.',
  },
  {
    image: '/images/company-network.png',
    alt: 'Firmennetzwerk einrichten',
    title: 'Firmennetzwerk einrichten',
    description: 'Entdecken Sie unseren umfassenden Unternehmensnetzwerkservice.',
  },
];

export default HomeSupport;
