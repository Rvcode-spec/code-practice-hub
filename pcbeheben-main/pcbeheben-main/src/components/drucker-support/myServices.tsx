import Link from 'next/link';
import React from 'react';

const MyServices = () => {
  return (
    <div>
      <div id='MyService' className="mx-auto mb-11 mt-14 text-center text-gray-700 md:w-3/4 lg:w-2/3">
        <h1 className="mx-auto w-11/12 font-bold lg:text-4xl">
	 Welche Leistungen wir Ihnen anbieten!
        </h1>
       
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Card Template */}
        {[
          {
            img: '/images/on-site-printer-repair1.svg',
            title: 'Treiber-Update',
            description: 'Erhalten Sie zuverlässige Wartung und Reinigung.',
          },
         
          {
            img: '/images/on-site-printer-repair3.svg',
            title: 'Tintenaustausch',
            description: 'Druckertinte Austausch mit dem besten Profi',
          },
          {
            img: '/images/on-site-printer-repair4.svg',
            title: 'Patronenwechsel',
            description: 'Austausch von Druckerpatronen durch erfahrene IT-Ingenieure.',
          },
          {
            img: '/images/on-site-printer-repair5.svg',
            title: 'Druckereinstellungen',
            description: 'Jede Art von Druckereinrichtung und -installation.',
          },
          {
            img: '/images/on-site-printer-repair6.svg',
            title: 'Fehlerbehebung',
            description: 'Drucker-Fehlerbehebungsservice mit dem besten Profi',
          },
          {
            img: '/images/on-site-printer-repair2.svg',
            title: 'Druckerfehler',
            description: 'Druckerausfall Service mit dem besten Fachmann',
          },
        ].map((card, index) => (
          <div
            key={index}
            className="m-8 flex w-full flex-col flex-wrap items-center rounded-lg border-2 bg-white p-4 text-center shadow-lg hover:bg-gray-200 sm:w-[300px] md:w-[280px] lg:w-[370px] lg:mx-5 "
          >
            <Link href="/appointment">
              <img src={card.img} alt={card.title} className="mx-auto h-40 w-auto object-contain" />
              <h1 className="mt-4 text-lg font-bold">{card.title}</h1>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
