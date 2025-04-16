import React from 'react';

const QuesAns: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
        Fragen & Antworten
      </h1>
      <p className="mb-8 text-center text-base text-gray-500 sm:text-lg">
        Häufig gestellte Fragen zu diesem Service.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            1. Wie schnell ist euer Support verfügbar?
          </h2>
          <p className="mb-6 text-gray-500">
            Unser Support-Team ist rund um die Uhr verfügbar, 24/7.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            2. Welche Sicherheitsmaßnahmen setzt ihr ein?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir verwenden robuste Sicherheitsmaßnahmen wie Firewall-Einrichtung, Virenschutz,
            Datenverschlüsselung und proaktive Überwachung.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            3.Können Probleme remote gelöst werden?
          </h2>
          <p className="mb-6 text-gray-500">
            Ja, wir bieten Fernunterstützung für eine schnelle Problembehebung.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            4. Bietet ihr maßgeschneiderte Lösungen für verschiedene Geschäftsgrößen?
          </h2>
          <p className="mb-6 text-gray-500">
            Ja, unsere Lösungen sind flexibel und auf die Bedürfnisse verschiedener Geschäftsgrößen
            zugeschnitten.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            5. Wie könnt ihr bei Hardwareproblemen helfen?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir bieten umfassende Hardwarewartungsdienste und können bei Problemen sowohl remote als
            auch vor Ort unterstützen.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            6. Welche Softwareoptimierungen bietet ihr an?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir bieten Softwarekonfiguration und -optimierung an, um maximale Leistung und Effizienz
            sicherzustellen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuesAns;
