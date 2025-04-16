import React from 'react';

const QuesAns: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
        Fragen & Antworten
      </h1>
      <p className="mb-8 text-center text-base text-gray-500 sm:text-lg">
        Ligula risus auctor tempus magna feugiat lacinia.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            1. Aus welchen Arten von Geräten stellen Sie Daten wieder her?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir sind spezialisiert auf die Wiederherstellung von Daten von einer Vielzahl von
            Geräten, einschließlich Festplatten, SSDs, USB-Laufwerken, Speicherkarten und mehr.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            2. Wie lange dauert der Datenwiederherstellungsprozess?
          </h2>
          <p className="mb-6 text-gray-500">
            Die Dauer variiert je nach Komplexität des Problems, aber wir bemühen uns um schnellen
            und effizienten Service und schließen die Wiederherstellung in der Regel innerhalb von
            3-5 Werktagen ab.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            3.Besteht die Gefahr eines Datenverlusts während der Wiederherstellung?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir treffen alle Vorkehrungen, um das Risiko eines Datenverlusts zu minimieren, indem
            wir fortschrittliche Techniken und Software verwenden. Es besteht jedoch immer ein
            geringes inhärentes Risiko im Zusammenhang mit Datenwiederherstellungsverfahren.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            4. Wie kann ich die Privatsphäre meiner wiederhergestellten Daten sicherstellen?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir legen Wert auf die Vertraulichkeit Ihrer Informationen und wiederhergestellte
            Dateien werden während des gesamten Prozesses sicher behandelt und geschützt, um
            maximale Privatsphäre und Sicherheit zu gewährleisten.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            5. Kann ich Unterstützung bei Computerproblemen aus der Ferne erhalten?
          </h2>
          <p className="mb-6 text-gray-500">
            Ja, wir bieten Fernunterstützung für bestimmte Computerprobleme an. Unsere Techniker
            können eine sichere Verbindung zu Ihrem Computer herstellen, um Softwareprobleme zu
            diagnostizieren und zu reparieren.
          </p>
          <h2 className="mb-2 text-lg font-bold text-gray-700 sm:text-xl">
            6. Kann ich meine Daten vor Ort wiederherstellen lassen?
          </h2>
          <p className="mb-6 text-gray-500">
            Wir bieten ausschließlich einen Service zur Datenwiederherstellung in unserem Labor an,
            um eine sichere und effektive Wiederherstellung zu gewährleisten. Sie können Ihre Geräte
            entweder persönlich vorbeibringen oder per Kurierdienst senden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuesAns;
