import React from 'react';
import Link from '../layout/custom-link';
import Routes from '@/lib/routes';

const Hero = () => {
  return (
    <div className="flex flex-col justify-start gap-16 bg-gray-50 py-28">
      {' '}
      {/*main div */}
      {/* heading starts */}
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-center text-2xl font-bold text-gray-800 md:text-4xl lg:text-6xl">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-center text-sm font-semibold text-gray-500 md:text-xl">
            Diese Richtlinie tritt am 1. Januar 2023 in Kraft
          </p>
        </div>

        <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
          <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
            Durch den Zugriff auf diese Website gehen wir davon aus, dass Sie diese Bedingungen
            akzeptieren. Nicht weiter verwenden PC Beheben, wenn Sie nicht damit einverstanden sind,
            alle auf dieser Seite aufgeführten Bedingungen zu akzeptieren.
          </p>

          <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
            Die folgende Terminologie gilt für diese Allgemeinen Geschäftsbedingungen, die
            Datenschutzerklärung und den Haftungsausschluss und alle Vereinbarungen: „Kunde“, „Sie“
            und „Ihr“ bezieht sich auf Sie, die Person, die sich auf dieser Website anmeldet und den
            Geschäftsbedingungen des Unternehmens entsprechen. „Das Unternehmen“, „uns“, „wir“,
            „unser“ und „uns“, bezieht sich auf unser Unternehmen. „Partei“, „Parteien“ oder „uns“
            bezieht sich sowohl auf den Kunden als auch auf uns selbst. Alle Begriffe beziehen sich
            auf das Angebot, die Annahme und die Prüfung der Zahlung, die erforderlich sind, um den
            Prozess unserer durchzuführen Unterstützung des Kunden in der am besten geeigneten Weise
            zum ausdrücklichen Zweck, die des Kunden zu erfüllen Bedürfnisse in Bezug auf die
            Erbringung der angegebenen Dienstleistungen des Unternehmens gemäß und vorbehaltlich
            geltendes Recht von de. Jegliche Verwendung der obigen Terminologie oder anderer Wörter
            im Singular, Plural, Groß-/Kleinschreibung und/oder er/sie oder sie werden als
            austauschbar angesehen und beziehen sich daher auf dasselbe.
          </p>
        </div>
      </div>
      {/* heading ends */}
      {/* cookies starts*/}
      <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">1. Cookies</p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Wir verwenden Cookies. Durch den Zugriff auf PC Beheben stimmen Sie der Verwendung von
          Cookies in Übereinstimmung mit der zu Datenschutzerklärung von PC Beheben.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Die meisten interaktiven Websites verwenden Cookies, damit wir bei jedem Besuch die
          Benutzerdaten abrufen können. Kekse sind Wird von unserer Website verwendet, um die
          Funktionalität bestimmter Bereiche zu ermöglichen, um den Besuchern den Besuch zu
          erleichtern unsere Internetseite. Einige unserer Affiliate-/Werbepartner können ebenfalls
          Cookies verwenden.
        </p>
      </div>
      {/* cookies ends */}
      {/* License starts */}
      <div className="flex flex-col gap-7 p-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">2. Lizenz</p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Sofern nicht anders angegeben, besitzen PC Beheben und/oder seine Lizenzgeber die
          geistigen Eigentumsrechte für alle Material auf PC Beheben. Alle geistigen Eigentumsrechte
          sind vorbehalten. Sie können darauf zugreifen von PC Beheben für Ihren eigenen
          persönlichen Gebrauch in diesem Bereich, der von PC Beheben zur Verfügung gestellt wird.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Sie dürfen kein Material von PC Beheben herunterladen oder drucken ohne die ausdrückliche
          Zustimmung des Unternehmens. Verstöße gegen die Bedingungen führen zur Kündigung Ihrer
          Dienste. außerdem wird eine Benachrichtigung an Ihr ISP geschickt. Das Unternehmen behält
          sich das Recht vor, Ihr zu überwachen Internet-Verhalten, einschließlich besuchter Seiten,
          häufig verwendeter Seiten und über den Internet generierter Datenverkehr Dateien. Diese
          Daten werden von Zeit zu Zeit verwendet Analysieren von Trends, Verwalten der Website,
          Verfolgen der Benutzerverhaltensbewegung und Sammeln breiter demografischer Informationen
          für den internen Gebrauch. Jede aufgezeichnete IP-Adresse ist nicht verknüpft mit
          personenbezogenen Daten.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Alle in unseren Materialien enthaltenen Links leiten auf Websites Dritter weiter. Diese
          Websites sind nicht von uns betrieben oder kontrolliert PC Beheben. Wir haben keine
          Kontrolle über und übernehmen keine Verantwortung für den Inhalt, Datenschutzrichtlinien
          oder Praktiken von Websites und Diensten von Dritten.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Sie stimmen ausdrücklich zu, PC Beheben zu entbinden jegliche Haftung im Zusammenhang mit
          der Nutzung von Websites und Diensten von Dritten.
        </p>
      </div>
      {/* License ends */}
      {/* Billing starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">3. Abrechnung</p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Wir bieten verschiedene Dienstleistungen an, die auf einer Gebühr basieren oder kostenlos.
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Einige Dienstleistungen werden gegen Gebühr angeboten. Die angegebenen Gebühren, sofern
          zutreffend, sind in USD angegeben.
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Sie stimmen zu, alle anfallenden Gebühren zu bezahlen, wie zum Beispiel Versand- oder
          Überweisungsgebühren, und Sie übernehmen die volle Verantwortung für alle in Verbindung
          mit Ihrem Kauf anfallenden Steuern, Abgaben oder Abgaben.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          PC Beheben behält sich das Recht vor, seine Preisgestaltung jederzeit und ohne vorherige
          Ankündigung zu ändern.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Sollte es zu einer Gebührenänderung kommen, werden Ihnen die neuen Gebühren mitgeteilt im
          Voraus und Ihre Dienste werden gemäß des aktualisierten Preises berechnet. Sie haben das
          Recht, die Dienste zu kündigen, wenn die Gebührenänderung für Sie nicht akzeptabel ist.
        </p>
      </div>
      {/* Billing ends */}
      {/* Cancellation/Refund Policy starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl font-bold text-gray-800 lg:text-3xl lg:!leading-8">
          4. Cancellation/Refund Policy
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Unless otherwise stated, all services purchased are final and non-refundable.
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          If you are not satisfied with our services, please contact our support team. We will do
          our best to address your concerns and find a satisfactory solution.
        </p>
      </div>
      {/* Cancellation/Refund Policy ends */}
      {/* Changes to the Terms starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          5. Änderungen der Bedingungen
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          PC Beheben behält sich das Recht vor, diese Bedingungen jederzeit zu ändern. Wenn die
          Änderungen wesentlich sind, werden wir Sie über unsere Website informieren oder über
          andere Kontaktinformationen, die Sie bereitgestellt haben. Durch die fortgesetzte Nutzung
          der Dienste nach dem Inkrafttreten der Änderungen stimmen Sie den überarbeiteten
          Bedingungen zu.
        </p>

        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Wenn Sie diese Bedingungen nicht akzeptieren oder mit zukünftigen Änderungen nicht
          einverstanden sind, können Sie die Nutzung unserer Dienste einstellen.
        </p>
      </div>
      {/* Changes to the Terms ends */}
      {/* Children's Privacy starts */}
      <div className="flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          6. Datenschutz für Kinder
        </p>
        <p className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Unsere Dienste richten sich nicht an Kinder unter 13 Jahren, und wir sammeln wissentlich
          keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie glauben, dass wir
          personenbezogene Daten von einem Kind unter 13 Jahren gesammelt haben, kontaktieren Sie
          uns bitte umgehend.
        </p>
      </div>
      {/* Children's Privacy ends */}
      {/* Contact Information starts */}
      <div className="align-left flex flex-col gap-7 px-5 md:px-10 lg:px-36">
        <p className="text-xl text-gray-800 lg:text-3xl lg:font-bold lg:!leading-8">
          7. Kontaktinformationen
        </p>
        <div className="text-sm text-gray-600 lg:text-lg lg:!leading-8">
          Wenn Sie Fragen zu diesen Bedingungen haben,
          <Link href={Routes.contact} className="underline">
            kontaktieren{' '}
          </Link>
          Sie uns bitte.
        </div>
      </div>
      {/* Contact Information ends */}
      {/* main div */}
    </div>
  );
};

export default Hero;
