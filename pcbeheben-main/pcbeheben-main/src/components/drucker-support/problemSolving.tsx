import Link from 'next/link';
import React from 'react';

const ProblemSolving = () => {
  return (
    <div id='Was-Wir-tin'>
      <div className="mt-14 text-center text-gray-700 md:w-3/4 
      lg:w-2/3 mx-auto mb-11">
        <h1 className="font-bold w-11/12 mx-auto  lg:text-4xl">
          Haben Sie ein Problem mit Ihrem Drucker?
        </h1>
        <p className="font-bold text-sm md:text-base w-11/12 mt-4 mx-auto">
          Lass dich davon nicht aufhalten! Klicken Sie auf die Option unten, um auf Expertenlösungen zuzugreifen, mit denen Sie Ihren Drucker wieder betriebsbereit machen können.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {/* Card Template */}
        {[
          {
            img: '/images/maintenance-icon.svg',
            title: 'Wartung und Reinigung',
            description: 'Erhalten Sie zuverlässige Wartung und Reinigung.',
          },
          {
            img: '/images/paper-jam-icon.svg',
            title: 'Papierstau',
            description: 'Lösen Sie das festsitzende Papierproblem.',
          },
          {
            img: '/images/slow-icon.svg',
            title: 'Druckwarteschlange',
            description: 'Überprüfen Sie die Druckwarteschlange.',
          },
          {
            img: '/images/Error-Messages-icon.svg',
            title: 'Fehlermeldungen',
            description: 'Lösen Sie häufige Druckerfehlermeldungen.',
          },
          {
            img: '/images/Driver-Issue-icon.svg',
            title: 'Treiberprobleme',
            description: 'Aktualisieren oder installieren Sie Druckertreiber.',
          },
          {
            img: '/images/Tintenproblem.svg',
            title: 'Tintenprobleme',
            description: 'Beheben Sie Tinten- und Farbprobleme.',
          },
          {
            img: '/images/print-setup.svg',
            title: 'Druckereinrichtung',
            description: 'Holen Sie sich Hilfe bei der Druckereinrichtung.',
          },
          {
            img: '/images/Printer-Offline-icon.svg',
            title: 'Drucker offline',
            description: 'Beheben Sie Verbindungsprobleme.',
          },
          {
            img: '/images/others.svg',
            title: 'Andere Probleme',
            description: 'Lassen Sie sich zu anderen Problemen beraten.',
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] md:w-[280px] lg:w-[370px] bg-white shadow-lg rounded-lg border-2 p-4 flex flex-col items-center text-center flex-wrap m-8 hover:bg-gray-200 "
          >
            <Link href="/appointment">
              <img
                src={card.img}
                alt={card.title}
                className="h-40 w-auto object-contain mx-auto"
              />
              <h1 className="mt-4 text-lg font-bold">{card.title}</h1>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSolving;
