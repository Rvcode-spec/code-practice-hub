import React from 'react';
import Link from '../layout/custom-link';
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
	   Datenschutzrichtlinie
          </h1>
          <p className="text-center text-sm font-semibold text-gray-500 md:text-xl">
	   Diese Richtlinie tritt am 1. Januar 2023 in Kraft
          </p>
        </div>

        <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
          <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	   PC Beheben verpflichtet sich zum Schutz der Privatsphäre und Sicherheit Ihrer persönlichen Informationen. Diese Datenschutzerklärung erläutert die Arten von personenbezogenen Daten, die wir erheben, wie wir diese verwenden und schützen, sowie Ihre Rechte bezüglich Ihrer personenbezogenen Daten.
          </p>

       
        </div>
      </div>
      {/* heading ends */}
      {/* cookies starts*/}
      <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">1. Informationen, die wir erheben</p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 Personenbezogene Daten: Wir können personenbezogene Daten erheben, die Sie uns freiwillig zur Verfügung stellen, wie Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer, Postanschrift und alle anderen Informationen, die Sie uns bei der Kontaktaufnahme oder Nutzung unserer Dienste mitteilen.


        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 Automatisch erhobene Informationen: Wenn Sie unsere Website besuchen oder unsere Dienste nutzen, können wir automatisch bestimmte Informationen über Ihr Gerät und Ihr Nutzungsverhalten erfassen, wie Ihre IP-Adresse, Browsertyp, Betriebssystem, besuchte Seiten und die verweisende Website.


        </p>
      </div>
      {/* cookies ends */}
      {/* License starts */}
      <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">2. Verwendung der Informationen
	 </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 Wir können die von uns erhobenen personenbezogenen Daten für verschiedene Zwecke verwenden, einschließlich der Bereitstellung und Verbesserung unserer Dienste, der Kommunikation mit Ihnen, der Abwicklung von Transaktionen und der Personalisierung Ihrer Erfahrung.
        
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Wir können auch automatisch erhobene Informationen für Analysezwecke verwenden, um Trends, Nutzungs- und Aktivitätsmuster in Verbindung mit unseren Diensten zu überwachen und zu analysieren.
        </p>

       
      
      </div>
      {/* License ends */}
      {/* Billing starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">3.  Weitergabe von Informationen</p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 Wir können Ihre personenbezogenen Daten mit Drittanbietern teilen, die uns bei der Durchführung unseres Geschäfts unterstützen, wie Zahlungsabwicklern, Hosting-Anbietern und Marketing-Dienstleistern.
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 Wir können Ihre Informationen auch in Antwort auf rechtliche Anfragen oder Verpflichtungen, zum Schutz unserer Rechte oder unseres Eigentums oder zur Untersuchung oder Verhinderung von Betrug oder illegalen Aktivitäten weitergeben.
        </p>
       

  
       
      </div>
      {/* Billing ends */}
      {/* Cancellation/Refund Policy starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">
          4.  Datensicherheit
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen.
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Bitte beachten Sie jedoch, dass keine Übertragung über das Internet oder Speicherung von Daten elektronisch zu 100% sicher ist, und wir keine absolute Sicherheit garantieren können.
        </p>
      </div>
      {/* Cancellation/Refund Policy ends */}
      {/* Changes to the Terms starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          5.  Ihre Auswahlmöglichkeiten
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Sie können wählen, bestimmte personenbezogene Daten nicht zur Verfügung zu stellen, aber dies kann Ihre Möglichkeit beeinträchtigen, bestimmte Funktionen unserer Dienste zu nutzen.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
	 Sie können sich vom Erhalt von Werbe-E-Mails von uns abmelden, indem Sie den Anweisungen in diesen E-Mails folgen oder uns direkt kontaktieren.
        </p>
      </div>

      <div className="align-left flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          6.  Kontaktieren Sie uns
        </p>
        <div className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
        Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie oder unseren Datenschutzpraktiken haben, kontaktieren,
          <Link href={Routes.contact} className="underline">
	   kontaktieren Sie uns bitte hier.{' '}
          </Link>
          Sie uns bitte.
        </div>
      </div>
      {/* Contact Information ends */}
      {/* main div */}
    </div>
  );
};

export default HeroFotter;
