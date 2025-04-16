'use client';
import { useState, useEffect, useRef } from 'react';

const QuestionsAnswers = () => {
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
    <div className="flex flex-col items-center justify-center gap-10 p-5 md:gap-10 md:p-20">
      {' '}
      {/*main div starts */}
      {/* heading starts */}
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[1.4rem] font-bold text-gray-700 md:text-[2rem] lg:text-[3rem]">
          Fragen & Antworten
        </h1>
        <h2 className="text-[0.9rem] font-bold text-gray-500 md:text-[1.2rem] lg:text-[1.5rem]">
          Häufig gestellte Fragen zu diesem Service.
        </h2>
      </div>
      {/* heading ends */}
      {/* question & answers starts */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Q1 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            1. Was ist der Office 365 E-Mail-Einrichtungsdienst?
          </p>

          <p className="text-gray-500">
            Es handelt sich um einen Service zur effizienten Einrichtung von Office 365
            E-Mail-Konten für Unternehmen.
          </p>
        </div>
        {/* Q1 ends */}

        {/* Q2 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            2.Warum den Office 365 E-Mail-Einrichtungsdienst wählen?
          </p>

          <p className="text-gray-500">
            Spart Zeit, gewährleistet reibungslose Konfiguration für erhöhte Produktivität.
          </p>
        </div>
        {/* Q2 ends */}

        {/* Q3 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            3.Was ist in den Einrichtungsprozess einbezogen?
          </p>

          <p className="text-gray-500">
            Wir kümmern uns um die Domain-Einrichtung, Benutzererstellung, Sicherheitseinstellungen
            und Client-Integration.
          </p>
        </div>
        {/* Q3 ends */}

        {/* Q4 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            4.Wie lange dauert die Einrichtung?
          </p>

          <p className="text-gray-500">
            Das hängt von der Größe der Organisation ab, aber wir streben eine schnelle
            Bereitstellung an.
          </p>
        </div>
        {/* Q4 ends */}

        {/* Q5 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            5.Benötige ich technisches Fachwissen?
          </p>

          <p className="text-gray-500">Nein, unser Team übernimmt alle technischen Aspekte.</p>
        </div>
        {/* Q5 ends */}

        {/* Q6 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            6.Welche Unterstützung steht nach der Einrichtung zur Verfügung?
          </p>

          <p className="text-gray-500">
            Fortlaufende Unterstützung für Fehlerbehebung und Optimierung.
          </p>
        </div>
        {/* Q6 ends */}
      </div>
      {/* question & answers ends */}
      {/* main div ends */}
    </div>
  );
};

export default QuestionsAnswers;
