'use client';
import { useState, useEffect, useRef } from 'react';

const QuestionAnswer = () => {
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
    <div className="flex flex-col items-center justify-center gap-10 p-5 md:gap-10 md:px-20">
      {' '}
      {/*main div starts */}
      {/* heading starts */}
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[1.4rem] font-bold text-gray-700 md:text-[2rem] lg:text-[3rem]">
          Fragen & Antworten
        </h1>
        <h2 className="text-[0.9rem] font-bold text-gray-500 md:text-[1.2rem] lg:text-[1.5rem]">
          Ligula risus auctor tempus magna feugiat lacinia.
        </h2>
      </div>
      {/* heading ends */}
      {/* question & answers starts */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Q1 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            1. Was ist ein Treiberaktualisierungsdienst?
          </p>

          <p className="text-gray-500">
            Ein Treiberaktualisierungsdienst aktualisiert automatisch Gerätetreiber auf Ihrem
            Computer, um optimale Leistung, Kompatibilität und Sicherheit zu gewährleisten.
          </p>
        </div>
        {/* Q1 ends */}

        {/* Q2 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            2.Wie funktioniert er?
          </p>

          <p className="text-gray-500">
            Diese Dienste scannen Ihr System nach veralteten Treibern, vergleichen sie mit einer
            Datenbank von Updates und laden dann die neuesten Versionen herunter und installieren
            sie.
          </p>
        </div>
        {/* Q2 ends */}

        {/* Q3 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            3.Sind sie sicher zu verwenden?
          </p>

          <p className="text-gray-500">
            Seriöse Treiberaktualisierungsdienste sind im Allgemeinen sicher, aber es ist wichtig,
            einen vertrauenswürdigen Anbieter zu wählen, um Malware oder Kompatibilitätsprobleme zu
            vermeiden.
          </p>
        </div>
        {/* Q3 ends */}

        {/* Q4 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            4.Können sie die Leistung verbessern?
          </p>

          <p className="text-gray-500">
            Ja, durch die Behebung von Kompatibilitätsproblemen, die Fehlerbehebung und die
            Verbesserung der Hardwareeffizienz können aktualisierte Treiber die Systemleistung
            verbessern.
          </p>
        </div>
        {/* Q4 ends */}

        {/* Q5 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            5.Sind sie kostenlos oder kostenpflichtig?
          </p>

          <p className="text-gray-500">
            Beide Optionen sind möglich, wobei Premiumdienste zusätzliche Funktionen wie
            automatische Updates, Backup-/Wiederherstellungsfunktionen und Prioritätssupport bieten.
          </p>
        </div>
        {/* Q5 ends */}

        {/* Q6 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            6.Wie oft sollte ich sie verwenden?
          </p>

          <p className="text-gray-500">
            Eine regelmäßige Nutzung wird empfohlen, um stets auf dem neuesten Stand der Treiber zu
            bleiben, wobei die Häufigkeit von Faktoren wie neuen
            Hardware-/Softwareveröffentlichungen und Sicherheitslücken abhängt.
          </p>
        </div>
        {/* Q6 ends */}
      </div>
      {/* question & answers ends */}
      {/* main div ends */}
    </div>
  );
};

export default QuestionAnswer;
