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
            1. as ist Netzwerksicherheit?
          </p>

          <p className="text-gray-500">
            Netzwerksicherheit umfasst Maßnahmen zum Schutz der Computer-Netzwerke und Daten eines
            Unternehmens vor unbefugtem Zugriff, Missbrauch, Änderung oder
            Denial-of-Service-Angriffen.
          </p>
        </div>
        {/* Q1 ends */}

        {/* Q2 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            2.Warum ist Netzwerksicherheit für Unternehmen wichtig?
          </p>

          <p className="text-gray-500">
            Netzwerksicherheit ist entscheidend, um sensible Informationen zu schützen, die
            Integrität der Systeme aufrechtzuerhalten, Vorschriften zu erfüllen und einen
            unterbrechungsfreien Betrieb sicherzustellen.
          </p>
        </div>
        {/* Q2 ends */}

        {/* Q3 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            3.Welche Arten von Cyberbedrohungen schützt Netzwerksicherheit?
          </p>

          <p className="text-gray-500">
            Zu den häufigen Cyberbedrohungen gehören Malware, Phishing-Angriffe, Ransomware,
            DDoS-Angriffe, Insider-Bedrohungen und unbefugte Zugriffsversuche.
            Netzwerksicherheitsmaßnahmen helfen, sich gegen diese Bedrohungen zu verteidigen.
          </p>
        </div>
        {/* Q3 ends */}

        {/* Q4 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            4.Welche Netzwerksicherheitsdienste bietet Ihr Unternehmen an?
          </p>

          <p className="text-gray-500">
            Unser Unternehmen bietet eine Reihe von Netzwerksicherheitsdiensten an, darunter
            Firewall-Management, Intrusion Detection und Prevention, Vulnerability Assessments,
            Sicherheitsaudits, Netzwerküberwachung und Incident Response Planning.
          </p>
        </div>
        {/* Q4 ends */}

        {/* Q5 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            5.Wie kann unser Unternehmen von Netzwerksicherheitsdiensten profitieren?
          </p>

          <p className="text-gray-500">
            Netzwerksicherheitsdienste können Ihrem Unternehmen dabei helfen, das Risiko von
            Datenverstößen zu reduzieren, die Einhaltung von Vorschriften zu verbessern, die
            Systemleistung zu steigern, das Vertrauen der Kunden zu stärken und Ausfallzeiten
            aufgrund von Cyber-Vorfällen zu minimieren.
          </p>
        </div>
        {/* Q5 ends */}

        {/* Q6 strarts */}
        <div className="flex flex-col gap-5">
          <p className="text-[1rem] font-bold text-gray-700 md:text-[1.2rem] lg:text-[1.5rem]">
            6.Wie passen Sie Netzwerksicherheitslösungen individuell an Unternehmen an?
          </p>

          <p className="text-gray-500">
            Wir bewerten die spezifischen Sicherheitsanforderungen, Infrastrukturen,
            branchenspezifischen Vorschriften und Risikotoleranzen jedes Unternehmens. Basierend auf
            dieser Bewertung entwickeln wir maßgeschneiderte Netzwerksicherheitslösungen, die ihre
            einzigartigen Anforderungen effektiv und effizient erfüllen.
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
