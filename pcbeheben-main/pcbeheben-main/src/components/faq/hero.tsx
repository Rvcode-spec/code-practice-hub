import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Routes from '@/lib/routes';
import Link from '../layout/custom-link';

const faqData = [
 {
  tittle:'Firewall-Schutz',
  questions:[
    {
      question: 'Was ist der Firewall-schutzservice von pc beheben fur unternehmen ? ',
      answer:  'Firewall-Schutz ist entscheidend, um unbefugten Zugriff, Datenverletzungen und die Einhaltung von Vorschriften zu verhindern.',
    },
    {
      question: 'Welche Arten von Firewall-Technologien bietet PC Beheben an?',
      answer:
        'Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae purus and efficitur ipsum primis in cubilia laoreet tempor gravida congue laoreet turpis neque auctor',
    },
    {
      question: 'Wie passt PC Beheben den Firewall-Schutz an Unternehmen an?',
      answer:
        'PC Beheben bewertet Ihr Netzwerk, identifiziert Schwachstellen und passt eine Sicherheitsstrategie an Ihre Bedürfnisse an.',
    },
    {
      question: 'Wie gewährleistet PC Beheben die kontinuierliche Firewall-Verwaltung?',
      answer:
        'PC Beheben bietet proaktive Überwachung, Bedrohungsanalyse und Unterstützung für eine kontinuierliche Sicherheit.',
    },
  ],
 },
 {
  title: 'Datenrettung',
  questions: [
    {
      question: 'Aus welchen Arten von Geräten stellen Sie Daten wieder her?',
      answer:
        'Wir sind spezialisiert auf die Wiederherstellung von Daten von einer Vielzahl von Geräten, einschließlich Festplatten, SSDs, USB-Laufwerken, Speicherkarten und mehr.',
    },
    {
      question: 'Wie lange dauert der Datenwiederherstellungsprozess?',
      answer:
        'Die Dauer variiert je nach Komplexität des Problems, aber wir bemühen uns um schnellen und effizienten Service und schließen die Wiederherstellung in der Regel innerhalb von 3-5 Werktagen ab.',
    },
    {
      question: 'Besteht die Gefahr eines Datenverlusts während der Wiederherstellung?',
      answer:
        'Wir treffen alle Vorkehrungen, um das Risiko eines Datenverlusts zu minimieren, indem wir fortschrittliche Techniken und Software verwenden. Es besteht jedoch immer ein geringes inhärentes Risiko im Zusammenhang mit Datenwiederherstellungsverfahren.',
    },
    {
      question: 'Kann ich Unterstützung bei Computerproblemen aus der Ferne erhalten?',
      answer:
        'Ja, wir bieten Fernunterstützung für bestimmte Computerprobleme an. Unsere Techniker können eine sichere Verbindung zu Ihrem Computer herstellen, um Softwareprobleme zu diagnostizieren und zu reparieren.',
    },
    {
      question: 'Kann ich meine Daten vor Ort wiederherstellen lassen?',
      answer:
        'Wir bieten ausschließlich einen Service zur Datenwiederherstellung in unserem Labor an, um eine sichere und effektive Wiederherstellung zu gewährleisten. Sie können Ihre Geräte entweder persönlich vorbeibringen oder per Kurierdienst senden.',
    },
  ],
},
{
  title: 'Antiviren Software',
  questions: [
    {
      question: 'Was ist Antivirensoftware von PC Beheben?',
      answer: 'Antivirensoftware von PC Beheben schützt Ihr Gerät vor schädlichen Bedrohungen wie Viren und Spyware.',
    },
    {
      question: 'Wie funktioniert sie?',
      answer:
        'Die Wahl der Firewall hängt von Faktoren wie Netzwerkgröße, Verkehrsart, Sicherheitsanforderungen und Budget ab. Für robuste, moderne Sicherheit werden von PC BEHEBEN häufig Next-Generation Firewalls (NGFWs) und cloudbasierte Firewalls empfohlen.',
    },
    {
      question: 'Vollständiger Scan vs. Schnellscan?',
      answer: 'Vollständige Scans überprüfen alles, während Schnellscans sich auf kritische Bereiche konzentrieren.',
    },
    {
      question: 'Ist mein System geschützt?',
      answer: 'Überprüfen Sie den Echtzeitscan-Status und halten Sie Ihre Software auf dem neuesten Stand.',
    },
    {
      question: 'Mehrere Sicherheitsprodukte?',
      answer: 'Verwenden Sie nur ein zuverlässiges Antivirenprogramm, um Konflikte zu vermeiden.',
    },
  ],
},
{
  title: 'Netzwerksicherheit',
  questions: [
    {
      question: 'Was ist Netzwerksicherheit?',
      answer:
        'Netzwerksicherheit umfasst Maßnahmen zum Schutz der Computer-Netzwerke und Daten eines Unternehmens vor unbefugtem Zugriff, Missbrauch, Änderung oder Denial-of-Service-Angriffen.',
    },
    {
      question: 'Warum ist Netzwerksicherheit für Unternehmen wichtig?',
      answer:
        'Netzwerksicherheit ist entscheidend, um sensible Informationen zu schützen, die Integrität der Systeme aufrechtzuerhalten, Vorschriften zu erfüllen und einen unterbrechungsfreien Betrieb sicherzustellen.',
    },
    {
      question: 'Welche Arten von Cyberbedrohungen schützt Netzwerksicherheit?',
      answer:
        'Zu den häufigen Cyberbedrohungen gehören Malware, Phishing-Angriffe, Ransomware, DDoS-Angriffe, Insider-Bedrohungen und unbefugte Zugriffsversuche. Netzwerksicherheitsmaßnahmen helfen, sich gegen diese Bedrohungen zu verteidigen.',
    },
    {
      question: 'Welche Netzwerksicherheitsdienste bietet Ihr Unternehmen an?',
      answer:
        'Unser Unternehmen bietet eine Reihe von Netzwerksicherheitsdiensten an, darunter Firewall-Management, Intrusion Detection und Prevention, Vulnerability Assessments, Sicherheitsaudits, Netzwerküberwachung und Incident Response Planning.',
    },
  ],
},
{
  title: 'Treiber Aktualisieren',
  questions: [
    {
      question: 'Was ist ein Treiberaktualisierungsdienst?',
      answer:
        'Ein Treiberaktualisierungsdienst aktualisiert automatisch Gerätetreiber auf Ihrem Computer, um optimale Leistung, Kompatibilität und Sicherheit zu gewährleisten.',
    },
    {
      question: 'Wie funktioniert er?',
      answer:
        'Diese Dienste scannen Ihr System nach veralteten Treibern, vergleichen sie mit einer Datenbank von Updates und laden dann die...',
    },
  ],
},
]

const Hero = () => {

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap((item) =>
      item.questions.map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer,
        },
      }))
    ),
  };

  
  return (
    <div className="flex flex-col items-center justify-center gap-9 p-5 py-24 md:px-20">

<script type='application/ld+json'>
      {JSON.stringify(jsonLd)}
      </script>
  
  
    <div className="flex flex-col items-center gap-5 text-center md:gap-4 md:p-5">
      <h1 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
        FAQ: Technischer Support & Systemlösungen
      </h1>
      <h2 className="text-sm font-semibold text-gray-500 md:text-lg lg:text-xl">
        Einige häufige Fragen, die wir zu Martex erhalten
      </h2>
    </div>
  
    <Accordion type="single" collapsible className="flex w-full flex-col lg:w-3/4 lg:gap-10">
      {faqData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-xl font-bold text-gray-700 md:text-2xl lg:text-3xl">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-5">
            {item.questions.map((q, qIndex) => (
              <div key={qIndex} className="flex flex-col gap-3">
                <p className="text-lg font-bold text-gray-700 lg:text-2xl">
                  {qIndex + 1}. {q.question}
                </p>
                <p className="text-sm text-gray-500 lg:text-lg">{q.answer}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    <div className="rounded-full bg-indigo-50 p-4 md:w-96 md:p-5">
        <p className="text-[0.9rem] text-gray-500 md:text-[1.1rem]">
          Haben Sie Fragen?
          <Link href={Routes.contact} className="border-primary text-primary underline">
            In Kontakt kommen
          </Link>
        </p>
      </div>
  
    
  </div>
  
  );
};

export default Hero;
