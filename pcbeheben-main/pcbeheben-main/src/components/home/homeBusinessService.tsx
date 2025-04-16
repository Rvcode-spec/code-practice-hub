'use client';
import React from 'react';

const HomeBusinessService: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 md:w-full md:flex-row-reverse lg:w-full lg:flex-col lg:items-center lg:justify-items-center">
      <div className="flex flex-col items-center justify-center space-y-6 px-4 sm:px-6 md:flex-row md:space-x-6 md:space-y-0 md:px-8 lg:px-16">
        <div className="w-full animate-reveal-left rounded-lg bg-white p-4 shadow-md sm:w-96 md:w-full lg:mb-6 lg:mt-40 lg:w-1/2">
          <img
            src="images/business IT services.png"
            alt="IT services illustration"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="max-w-lg animate-reveal-right lg:w-1/2">
          <h2 className="text-lg font-semibold text-gray-500 lg:mb-8">ZUVERLÄSSIGE EXPERTISE</h2>
          <h1 className="mt-2 font-bold text-gray-700 lg:mt-4 lg:text-6xl">
            Umfassende Geschäfts-IT-Dienstleistungen
          </h1>
          <ul className="space-y-2 font-medium text-gray-500 lg:mt-10 lg:text-base">
            <li className="lg:mt-2">
              • Unsere erfahrenen Techniker bieten erstklassigen Service mit Professionalität und
              Respekt und gewährleisten so Kundenzufriedenheit in jeder Hinsicht.
            </li>
            <li className="lg:mt-2">
              • Von einfachen Reparaturen bis hin zu komplexen Upgrades bietet unser erfahrenes Team
              zuverlässige Lösungen für Ihre Bedürfnisse, um Ihre Geräte reibungslos am Laufen zu
              halten.
            </li>
            <li className="lg:mt-2">
              • Verlassen Sie sich auf unsere zuverlässigen und effektiven IT-Dienstleistungen, die
              Ihre Erwartungen übertreffen und Ihr Unternehmen ohne technologische Probleme
              vorantreiben.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeBusinessService;
