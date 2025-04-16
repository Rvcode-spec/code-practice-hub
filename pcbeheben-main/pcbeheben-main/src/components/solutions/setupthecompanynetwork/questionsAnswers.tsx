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
    <div className="mt-[15%] flex flex-col items-center justify-center gap-10 p-5 md:gap-10 md:p-20">
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
            1. Wie wird die Netzwerksicherheit gewährleistet?
          </p>

          <p className="text-gray-500">
            Die Netzwerksicherheit wird durch robuste Maßnahmen wie Verschlüsselung, Firewalls,
            Intrusionserkennungssysteme und regelmäßige Sicherheitsaudits sichergestellt.
          </p>
        </div>
        {/* Q1 ends */}

        {/* Q2 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            2.Welche Maßnahmen gibt es für die Datensicherung?
          </p>

          <p className="text-gray-500">
            Wir setzen regelmäßige Datensicherungen in sicheren Standorten ein, um die
            Datenintegrität und -verfügbarkeit im Falle von Notfällen oder Datenverlustvorfällen zu
            gewährleisten.
          </p>
        </div>
        {/* Q2 ends */}

        {/* Q3 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            3.Welche Art von Netzwerksupport wird angeboten?
          </p>

          <p className="text-gray-500">
            Wir bieten umfassende Netzwerkunterstützungsdienste, einschließlich Fehlerbehebung,
            Wartung und proaktives Monitoring, um alle netzwerkbezogenen Probleme zeitnah zu lösen.
          </p>
        </div>
        {/* Q3 ends */}

        {/* Q4 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            4.Wie wird eine Betriebszeit rund um die Uhr sichergestellt?
          </p>

          <p className="text-gray-500">
            Wir verfügen über redundante Systeme, automatisierte Überwachung und qualifizierte
            Techniker, die rund um die Uhr verfügbar sind, um eine kontinuierliche
            Netzwerkverfügbarkeit zu gewährleisten und Ausfallzeiten zu minimieren.
          </p>
        </div>
        {/* Q4 ends */}

        {/* Q5 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            5.Gibt es Skalierbarkeit für das Netzwerk?
          </p>

          <p className="text-gray-500">
            Ja, unsere Netzwerkinfrastruktur ist so konzipiert, dass sie sich je nach den
            Anforderungen Ihres Unternehmens nahtlos erweitern oder verkleinern lässt.
          </p>
        </div>
        {/* Q5 ends */}

        {/* Q6 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            6.Welche Arten von Ausfällen werden durch das Backup abgedeckt?
          </p>

          <p className="text-gray-500">
            Unsere Backup-Lösung deckt verschiedene Arten von Ausfällen ab, darunter
            Hardwareausfälle, Softwareprobleme, menschliche Fehler und Datenkorruption, um eine
            umfassende Datensicherung und -wiederherstellung zu gewährleisten.
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
