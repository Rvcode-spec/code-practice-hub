'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
const Aboutus = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const targetValues = {
      customerCount: 2500,
      satisfactionRate: 94.2,
      averageRating: 4.5,
    };

    const duration = 2000;
    const interval = 50;

    const customerIncrement = targetValues.customerCount / (duration / interval);
    const satisfactionIncrement = targetValues.satisfactionRate / (duration / interval);
    const ratingIncrement = targetValues.averageRating / (duration / interval);

    let elapsedTime = 0;

    const timer = setInterval(() => {
      elapsedTime += interval;

      setCustomerCount((prev) => Math.min(prev + customerIncrement, targetValues.customerCount));
      setSatisfactionRate((prev) =>
        Math.min(prev + satisfactionIncrement, targetValues.satisfactionRate),
      );
      setAverageRating((prev) => Math.min(prev + ratingIncrement, targetValues.averageRating));

      if (elapsedTime >= duration) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-32 flex w-[95vw] flex-col items-center justify-center gap-20 sm:mt-32 sm:flex sm:w-[95vw] sm:flex-col sm:gap-16 md:mt-32 md:flex md:w-[95vw] md:flex-col md:items-center md:justify-center md:gap-20 lg:mt-32 lg:flex lg:w-[95vw] lg:flex-col lg:items-center lg:justify-center lg:gap-24">
      {/*main hero container */}

      {/* heading div starts */}
      <div className="flex w-3/4 flex-col gap-5 text-left sm:ml-[20%] sm:flex sm:w-3/4 sm:flex-col sm:justify-center sm:gap-5 md:ml-[20%] md:flex md:w-2/3 md:flex-col md:gap-5 lg:ml-0 lg:w-2/3">
        <h1 className="w-[95%] text-[1.4rem] font-bold text-gray-600 sm:w-[95%] sm:text-[1.8rem] sm:font-semibold md:w-[90%] md:text-[2.2rem] md:font-bold lg:w-[70%] lg:text-4xl lg:font-semibold">
          Wir stellen IT-Techniker für Privatanwender und Geschäftsinhaber zur Verfügung
        </h1>

        <h2 className="text-[0.9rem] font-semibold text-gray-500 sm:text-[11px] sm:font-semibold md:text-[14px] lg:text-[18px]">
          Unser Ziel ist es, herausragende IT-Lösungen zu liefern, die sowohl Ihre unmittelbaren Anforderungen erfüllen als auch mit Ihren größeren Geschäftszielen übereinstimmen.
        </h2>
      </div>
      {/* heading div ends */}

      {/* image div starts */}
      <div className="flex flex-col items-center justify-center gap-5 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-5 md:flex md:flex-col md:items-start md:justify-center md:gap-5 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10">
        {/* upper images */}
        <div className="w-[60%] sm:w-[70%] md:flex md:w-[50%] md:gap-3 md:p-4 lg:flex lg:w-[90%] lg:gap-8">
          <img
            src="/images/about-us-printer.jpg"
            className="hidden rounded-2xl sm:hidden md:block lg:w-96"
            alt=""
          />

          <img
            src="/images/IT-ABOUT-US-3.jpg"
            className="w-full rounded-2xl sm:w-full lg:w-2/3"
            alt=""
          />
        </div>

        {/* upper images ends*/}

        {/* lower images */}

        <div className="flex flex-col items-center justify-center gap-3 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-3 md:flex md:flex-row md:items-start md:justify-center md:gap-3 md:p-4 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-7">
          <img
            src="/images/IT-ABOUT-US-2.jpg"
            className="w-2/3 rounded-2xl sm:w-[450px] md:h-[300px] md:w-[260px] lg:w-[600px]"
            alt=""
          />

          <div className="relative w-[80%] rounded-2xl bg-indigo-950 p-3 text-[0.9rem] text-white sm:relative sm:w-[70%] sm:p-3 sm:text-[0.9rem] sm:text-white md:relative md:w-[35%] md:p-3 md:text-[0.9rem] md:text-white lg:relative lg:w-[16%] lg:rounded-2xl lg:p-6 lg:text-[0.9rem] lg:text-white">
            <span>
              <Quote className="absolute left-3 fill-white opacity-50" />
            </span>
            <p className="z-10 mt-2">
              Es gibt nur einen Chef: den Kunden. Und er kann jeden im Unternehmen vom
              Vorstandsvorsitzenden abwärts feuern, indem er einfach sein Geld woanders ausgibt.
            </p>

            <p className="mt-4">Sam Walton</p>
            <p>American Business Magnate</p>
          </div>

          <img
            src="/images/a2-4.jpg "
            className="s hidden rounded-2xl sm:hidden md:block md:w-[300px] lg:w-1/3"
            alt=""
          />
        </div>

        {/* lower images ends*/}
      </div>

      {/* image div ends*/}

      {/* services and solutions starts */}
      <div className="flex w-[90%] flex-col items-center justify-center gap-9 sm:flex sm:w-[90%] sm:flex-col sm:items-center sm:justify-center sm:gap-9 md:flex md:w-[90%] md:flex-row md:justify-center md:gap-9 lg:flex lg:w-[90%] lg:flex-row lg:items-start lg:justify-center lg:gap-9">
        {/* sevices starts */}
        <div className="flex flex-col justify-center gap-4 text-center text-gray-500 sm:ml-[10%] sm:flex sm:flex-col sm:justify-center sm:gap-4 sm:text-center md:flex md:flex-col md:justify-center md:gap-4 md:text-left lg:ml-10 lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:text-left">
          <h3 className="text-[1.1rem] font-bold text-gray-600 md:text-[1.1rem] md:font-semibold lg:text-[1.5rem] lg:font-bold">
            Zuverlässige und effiziente IT-Dienste
          </h3>

          <p className="md:text-[0.8rem] lg:text-[1.1rem]">
            Von der Heimunterstützung bis zum professionellen Support legen wir Wert darauf, die
            besten Lösungen für alle Ihre IT-Anforderungen zu liefern.
          </p>

          <ul className="flex list-inside list-disc flex-col gap-2 lg:flex lg:flex-col lg:gap-4">
            <li className="md:text-[0.8rem] lg:text-[1.1rem]">
              Ob Reparaturen, Upgrades oder Wartung, unser Expertenteam sorgt dafür, dass alle Ihre
              Anforderungen reibungslos ablaufen
            </li>

            <li className="md:text-[0.8rem] lg:text-[1.1rem]">
              Wir bieten personalisierte Dienstleistungen, um den unterschiedlichen Anforderungen
              und der Kundenzufriedenheit gerecht zu werden
            </li>
          </ul>
        </div>
        {/* sevices ends */}

        {/* solutions starts */}
        <div className="flex flex-col items-center justify-center gap-4 text-gray-500 sm:ml-[10%] sm:flex sm:flex-col sm:justify-center sm:gap-4 sm:text-center md:flex md:flex-col md:gap-4 md:text-left lg:flex lg:flex-col lg:gap-8 lg:text-left">
          <h4 className="text-[1.1rem] font-bold text-gray-600 md:text-[1.1rem] md:font-semibold lg:text-[1.5rem] lg:font-bold">
            Zuverlässige IT-Lösungen
          </h4>

          <p className="md:text-[0.8rem] lg:text-[1.1rem]">
            PC Fix bietet erstklassige IT-Dienste für Privathaushalte und Unternehmen und sorgt mit einem Team, das sich für die Kundenzufriedenheit einsetzt, für schnelle Lösungen.
          </p>

          <p className="md:text-[0.8rem] lg:text-[1.1rem]">
            Erfahrene Techniker und Spezialisten garantieren einen qualitativ hochwertigen Service, wettbewerbsfähige Preise und eine schnelle Abwicklung für Ihren Komfort direkt vor Ihrer Haustür
          </p>
        </div>
        {/* solutions ends */}
      </div>

      {/* services and solutions ends*/}

      {/* number counting starts  */}
      <div className="mx-14 flex flex-col items-center justify-between space-y-10 bg-white py-10 md:flex-row md:space-x-16 md:space-y-0 lg:mx-28">
        <div className="text-center md:flex md:flex-col md:gap-4 lg:flex lg:flex-col lg:gap-4">
          <p className="text-4xl font-bold text-gray-700 md:text-5xl">
            {Math.floor(customerCount)}
          </p>
          <p className="md:w-44 md:border-2 lg:ml-12 lg:w-56 lg:border-2"></p>
          <p className="text-sm text-gray-600 md:text-lg">Zufriedene Kunden</p>
        </div>

        <div className="text-center md:flex md:flex-col md:gap-4 lg:flex lg:flex-col lg:gap-4">
          <p className="text-4xl font-bold text-gray-700 md:text-5xl">
            {Math.floor(satisfactionRate)}%
          </p>
          <p className="md:w-44 md:border-2 lg:ml-12 lg:w-56 lg:border-2"></p>
          <p className="text-sm text-gray-600 md:text-lg">Zufriedenheitsrate</p>
        </div>
        <div className="text-center md:flex md:flex-col md:gap-4 lg:flex lg:flex-col lg:gap-4">
          <p className="text-4xl font-bold text-gray-700 md:text-5xl">
            {averageRating.toFixed(2)}/5
          </p>
          <p className="md:w-44 md:border-2 lg:ml-12 lg:w-56 lg:border-2"></p>
          <p className="text-sm text-gray-600 md:text-lg lg:ml-12">Durchschnittliche Bewertung.</p>
        </div>
      </div>
      {/* number counting ends */}
    </div>
  );
};

export default Aboutus;
