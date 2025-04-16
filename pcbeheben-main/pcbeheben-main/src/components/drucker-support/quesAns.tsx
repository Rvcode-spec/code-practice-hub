import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react"; // Importing Lucide icons
import Link from "next/link";

const QuesAns = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 mx-auto mt-8 justify-center items-center" id="Faq">
      <div className="space-y-4 mx-auto lg:px-16 py-6">
        <div className="text-gray-700 justify-center text-center">
          <h1 className="text-4xl md:text-5xl sm:text-lg w-full font-bold mb-4 ">
            Häufig gestellte Fragen zu Drucker problemen
          </h1>
          <p className="text-lg font-medium md:text-xl mb-6">
            Von Papierstaus bis zu Verbindungsproblemen, wir haben die Lösung
          </p>
        </div>

        <div className="border-b text-sky-800">
          <button
            className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 focus:outline-none flex items-center justify-between"
            onClick={() => toggleAnswer(1)}
          >
            Warum wird mein Drucker als offline angezeigt?
            <span>
              {openIndex === 1 ? (
                <ChevronDown className="text-xl" />
              ) : (
                <ChevronRight className="text-xl" />
              )}
            </span>
          </button>
          {openIndex === 1 && (
            <div className="px-4 py-3 text-gray-700">
              Ein Drucker kann aus verschiedenen Gründen als offline angezeigt
              werden, z. B. aufgrund von Verbindungsproblemen, falschen
              Druckereinstellungen oder Treiberproblemen. Stellen Sie sicher, dass
              Ihr Drucker eingeschaltet ist, ordnungsgemäß verbunden ist und als
              Standarddrucker festgelegt ist.
            </div>
          )}
        </div>

        <div className="border-b text-sky-800">
          <button
            className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 focus:outline-none flex items-center justify-between"
            onClick={() => toggleAnswer(2)}
          >
            Wie kann ich meinen offline Drucker wieder online bringen?
            <span>
              {openIndex === 2 ? (
                <ChevronDown className="text-xl" />
              ) : (
                <ChevronRight className="text-xl" />
              )}
            </span>
          </button>
          {openIndex === 2 && (
            <div className="px-4 py-3 text-gray-700">
              Überprüfen Sie, ob der Drucker angeschlossen ist (über USB oder
              drahtlos), starten Sie den Drucker neu und stellen Sie sicher, dass
              er in den Einstellungen Ihres Geräts als Standarddrucker festgelegt
              ist. Wenn diese Schritte nicht funktionieren, sollten Sie in Erwägung
              ziehen, den Druckertreiber neu zu installieren.
            </div>
          )}
        </div>

        <div className="border-b text-sky-800">
          <button
            className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 focus:outline-none flex items-center justify-between"
            onClick={() => toggleAnswer(3)}
          >
            Was soll ich tun, wenn ich einen Papierstau habe?
            <span>
              {openIndex === 3 ? (
                <ChevronDown className="text-xl" />
              ) : (
                <ChevronRight className="text-xl" />
              )}
            </span>
          </button>
          {openIndex === 3 && (
            <div className="px-4 py-3 text-gray-700">
              Schalten Sie den Drucker aus, ziehen Sie vorsichtig sichtbares Papier
              aus dem Ausgabe- oder Einzugsfach heraus, öffnen Sie die
              Zugangstür des Druckers und entfernen Sie vorsichtig jedes
              eingeklemmte Papier. Beachten Sie immer die Anleitung des Druckers
              für spezifische Anweisungen.
            </div>
          )}
        </div>

        <div className="border-b text-sky-800">
          <button
            className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 focus:outline-none flex items-center justify-between"
            onClick={() => toggleAnswer(4)}
          >
            Wie weiß ich, wann es Zeit ist, die Druckertinte zu wechseln?
            <span>
              {openIndex === 4 ? (
                <ChevronDown className="text-xl" />
              ) : (
                <ChevronRight className="text-xl" />
              )}
            </span>
          </button>
          {openIndex === 4 && (
            <div className="px-4 py-3 text-gray-700">
              Die meisten modernen Drucker zeigen eine Warnung oder Anzeige auf
              ihrem Display oder Computerbenachrichtigung an, wenn der Tintenstand
              niedrig ist oder aufgebraucht wurde.
            </div>
          )}
        </div>

        <div className="border-b text-sky-800">
          <button
            className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 focus:outline-none flex items-center justify-between"
            onClick={() => toggleAnswer(5)}
          >
            Wie behebe ich einen Spooler-Fehler auf meinem Windows-Computer?
            <span>
              {openIndex === 5 ? (
                <ChevronDown className="text-xl" />
              ) : (
                <ChevronRight className="text-xl" />
              )}
            </span>
          </button>
          {openIndex === 5 && (
            <div className="px-4 py-3 text-gray-700">
              <ul className="text-gray-700">
                <li>Restart the Print Spooler service in Windows.</li>
                <li>Delete all pending print jobs in the print queue.</li>
                <li>Ensure your printer drivers are up to date.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="border-b text-sky-800">
          <button
            className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 focus:outline-none flex items-center justify-between"
            onClick={() => toggleAnswer(6)}
          >
            Wie ersetze ich die Tintenpatrone in meinem Drucker?
            <span>
              {openIndex === 6 ? (
                <ChevronDown className="text-xl" />
              ) : (
                <ChevronRight className="text-xl" />
              )}
            </span>
          </button>
          {openIndex === 6 && (
            <div className="px-4 py-3 text-gray-700">
              Öffnen Sie die Zugangstür des Druckers, warten Sie, bis der
              Patronenwagen zentriert ist, entfernen Sie vorsichtig die leere
              Patrone und setzen Sie dann die neue gemäß den Anweisungen des
              Herstellers ein. Stellen Sie sicher, dass der Drucker beim Tun dies
              eingeschaltet ist.
            </div>
          )}
        </div>

        
      </div>
      <p className=" text-lg font-medium text-center text-gray-700 py-4">
      Haben Sie noch eine Frage?
      <span className="text-sky-900 underline">
      <Link href="/appointment">
Kontaktieren Sie noch heute unsere Live-Experten!
</Link>
      </span>
	
      </p>
    </div>
  );
};

export default QuesAns;
