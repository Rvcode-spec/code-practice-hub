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
            1. Was ist Antivirensoftware von PC Beheben?
          </h2>
          <p className="mb-6 text-gray-500">
            Antivirensoftware von PC Beheben schützt Ihr Gerät vor schädlichen Bedrohungen wie Viren
            und Spyware.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            2. Wie funktioniert sie?
          </h2>
          <p className="mb-6 text-gray-500">
            Sie scannt Dateien, vergleicht sie mit einer Bedrohungsdatenbank und entfernt schädliche
            Programme.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            3.Vollständiger Scan vs. Schnellscan?
          </h2>
          <p className="mb-6 text-gray-500">
            Vollständige Scans überprüfen alles, während Schnellscans sich auf kritische Bereiche
            konzentrieren.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            4. Ist mein System geschützt?
          </h2>
          <p className="mb-6 text-gray-500">
            Überprüfen Sie den Echtzeitscan-Status und halten Sie Ihre Software auf dem neuesten
            Stand.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            5. Mehrere Sicherheitsprodukte?
          </h2>
          <p className="mb-6 text-gray-500">
            Verwenden Sie nur ein zuverlässiges Antivirenprogramm, um Konflikte zu vermeiden.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            6. Wie aktualisiere ich die Antivirensoftware von PC Beheben?
          </h2>
          <p className="mb-6 text-gray-500">
            Regelmäßige Updates sind entscheidend für optimale Sicherheit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuesAns;
