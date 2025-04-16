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
    <div className="flex flex-col items-center justify-center gap-10 p-5 md:gap-10 md:px-20">
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
            1. Was ist der Firewall-Schutzservice von PC Beheben für Unternehmen?
          </p>

          <p className="text-gray-500">
            Firewall-Schutz ist entscheidend, um unbefugten Zugriff, Datenverletzungen und die
            Einhaltung von Vorschriften zu verhindern.
          </p>
        </div>
        {/* Q1 ends */}

        {/* Q2 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            2.Welche Arten von Firewall-Technologien bietet PC Beheben an?
          </p>

          <p className="text-gray-500">
            PC Beheben bietet traditionelle Firewalls, NGFW, UTM-Geräte und cloudbasierte Lösungen
            an.
          </p>
        </div>
        {/* Q2 ends */}

        {/* Q3 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            3.Wie passt PC Beheben den Firewall-Schutz an Unternehmen an?
          </p>

          <p className="text-gray-500">
            PC Beheben bewertet Ihr Netzwerk, identifiziert Schwachstellen und passt eine
            Sicherheitsstrategie an Ihre Bedürfnisse an.
          </p>
        </div>
        {/* Q3 ends */}

        {/* Q4 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            4.Kann der Firewall-Schutzservice von PC Beheben mit bestehenden Lösungen integriert
            werden?
          </p>

          <p className="text-gray-500">
            Ja, er integriert sich nahtlos in Ihre aktuellen Sicherheitsmaßnahmen.
          </p>
        </div>
        {/* Q4 ends */}

        {/* Q5 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            5.Wie gewährleistet PC Beheben die kontinuierliche Firewall-Verwaltung?
          </p>

          <p className="text-gray-500">
            PC Beheben bietet proaktive Überwachung, Bedrohungsanalyse und Unterstützung für eine
            kontinuierliche Sicherheit.
          </p>
        </div>
        {/* Q5 ends */}

        {/* Q6 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            6.Warum ist Firewall-Schutz für Unternehmen wichtig?
          </p>

          <p className="text-gray-500">
            Firewall-Schutz ist entscheidend, um unbefugten Zugriff, Datenverletzungen und die
            Einhaltung von Vorschriften zu verhindern.
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
