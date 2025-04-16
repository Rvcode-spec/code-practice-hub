import React from 'react';

const PosQUESANS: React.FC = () => {
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
            1. Welche Art von Hardware wird für das POS-System benötigt?
          </h2>
          <p className="mb-6 text-gray-500">
            Unser POS-System ist hardwareunabhängig und kann auf verschiedenen Geräten betrieben
            werden.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            2. Bietet Ihr POS-System die Möglichkeit zur Integration mit anderen
            Unternehmenssoftwareanwendungen?
          </h2>
          <p className="mb-6 text-gray-500">
            Ja, es unterstützt Integrationen mit verschiedenen Softwareanwendungen.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            3. Wie sicher sind die Zahlungstransaktionen und wie werden Kundendaten geschützt?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir verwenden branchenübliche Verschlüsselungstechnologien und halten uns an
            Datenschutzbestimmungen.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            4. Welche Arten von Berichten und Analysen bietet Ihr POS-System?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir bieten Umsatzberichte, Bestandsanalysen und mehr.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            5. Wie einfach ist es, Ihr POS-System zu implementieren und Mitarbeiter darauf zu
            schulen?
          </h2>
          <p className="mb-6 text-gray-500">
            Die Implementierung ist einfach, und wir bieten umfassende Schulungen und Support.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            6. Gibt es verschiedene Servicepläne oder Abonnementoptionen?
          </h2>
          <p className="mb-6 text-gray-500">
            Ja, wir bieten flexible Servicepläne und Abonnementoptionen an.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PosQUESANS;
