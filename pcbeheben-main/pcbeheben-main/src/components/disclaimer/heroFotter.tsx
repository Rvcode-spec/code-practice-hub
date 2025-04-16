import React from 'react';
import Link from 'next/link';
import Routes from '@/lib/routes';

const HeroFotter = () => {
  return (
    <div className="flex flex-col justify-start gap-16 bg-gray-50 py-28">
      {' '}
      {/*main div */}
      {/* heading starts */}
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-center text-2xl font-bold text-gray-700 md:text-4xl lg:text-6xl">
	   Haftungsausschluss
          </h1>
         
        </div>

        <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
          <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	   Willkommen bei PC Beheben. Durch den Zugriff auf unsere Website und die Nutzung unserer Dienstleistungen stimmen Sie den folgenden Bedingungen zu. Bitte lesen Sie diesen Haftungsausschluss sorgfältig durch, bevor Sie unsere Website oder Dienstleistungen nutzen.
          </p>

       
        </div>
      </div>
      {/* heading ends */}
      {/* cookies starts*/}
      <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">1.  Dienstleistungsbeschränkungen und Haftung</p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 PPC Beheben bietet eine Vielzahl von IT-Dienstleistungen an, einschließlich, aber nicht beschränkt auf, die Einrichtung von Firmennetzwerken, Office 365/Email-Dienste, Netzwerksicherheit, Firewall-Schutz, Treiberaktualisierungen, Kassensysteme, Datenwiederherstellung, CRM-Systeme, Antivirensoftware, IT-Helpdesk, Computerreparaturen und die Behebung von Problemen mit langsamen Laptops und Windows-Problemen.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 Wir bemühen uns, die bestmöglichen Dienstleistungen zu erbringen, jedoch übernimmt PC Beheben keine Garantie dafür, dass unsere Dienstleistungen alle Ihre Anforderungen erfüllen oder fehlerfrei, sicher oder unterbrechungsfrei sind.
        </p>
	 <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 PC Beheben haftet nicht für direkte, indirekte, zufällige, besondere oder Folgeschäden, die sich aus der Nutzung oder der Unmöglichkeit der Nutzung unserer Dienstleistungen ergeben, einschließlich, aber nicht beschränkt auf Datenverlust, Gewinneinbußen oder Betriebsunterbrechungen.
        </p>

      </div>

      <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">2. Datenwiederherstellung und Softwareinstallation
	 </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Datenwiederherstellungsbemühungen sind möglicherweise nicht immer erfolgreich, und PC Beheben garantiert nicht die Wiederherstellung verlorener oder beschädigter Daten. Kunden wird geraten, regelmäßige Backups ihrer Daten durchzuführen.
        
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Die Installation von Software, einschließlich Antivirenprogrammen, CRM-Systemen und Updates, erfolgt nach bestem Wissen und Gewissen. PC Beheben übernimmt jedoch keine Verantwortung für Probleme, die durch Softwarekonflikte, Systeminkompatibilitäten oder Updates von Drittanbietern entstehen.
        </p>

       
      
      </div>
      {/* License ends */}
      {/* Billing starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">3.  Netzwerksicherheit und Firewall-Schutz</p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Unsere Netzwerksicherheits- und Firewall-Schutzdienste sind darauf ausgelegt, Risiken zu minimieren, können jedoch nicht alle potenziellen Bedrohungen vollständig ausschließen. PC Beheben ist nicht verantwortlich für Sicherheitsvorfälle, unbefugten Zugriff oder daraus resultierende Schäden.
        </p>
       
       
      </div>

      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">
          4.  Verantwortlichkeiten des Kunden
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Kunden sind dafür verantwortlich sicherzustellen, dass ihre Systeme die notwendigen Anforderungen für die von PC Beheben erbrachten Dienstleistungen erfüllen.
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Kunden müssen genaue und vollständige Informationen bereitstellen und mit dem Personal von PC Beheben kooperieren, um eine effiziente Erbringung der Dienstleistungen zu gewährleisten.
        </p>
      </div>
   
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          5.  Produkte und Dienstleistungen von Drittanbietern

        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        PC Beheben kann Produkte und Dienstleistungen von Drittanbietern empfehlen oder nutzen. Obwohl wir bemüht sind, seriöse Anbieter auszuwählen, übernehmen wir keine Verantwortung für die Leistung, Qualität oder Zuverlässigkeit von Produkten und Dienstleistungen von Drittanbietern.


        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Alle Garantien oder Zusicherungen von Drittanbietern liegen in der alleinigen Verantwortung der jeweiligen Anbieter.
        </p>
      </div>

      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          6.   IT-Helpdesk und Reparaturen im Geschäft

        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        IT-Helpdesk-Support und Reparaturen im Geschäft werden auf der Grundlage der vom Kunden bereitgestellten Informationen durchgeführt. PC Beheben ist nicht verantwortlich für Fehldiagnosen oder Verzögerungen aufgrund unvollständiger oder ungenauer Informationen des Kunden.


        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Jegliche physische Beschädigung von Geräten, die zur Reparatur im Geschäft verbleiben, liegt in der Verantwortung des Kunden, es sei denn, sie wurde durch Fahrlässigkeit des Personals von PC Beheben verursacht.
        </p>
      </div>

      <div className="align-left flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          7.   Kontaktieren Sie uns
        </p>
        <div className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Bei Fragen zu diesem Haftungsausschluss oder unseren Dienstleistungen kontaktieren Sie uns bitte unter
          <Link href={Routes.contact} className="underline">
          [Kontaktdaten]..{' '}
          </Link>
         
        </div>
      </div>
      {/* Contact Information ends */}
      {/* main div */}
    </div>
  );
};

export default HeroFotter;
