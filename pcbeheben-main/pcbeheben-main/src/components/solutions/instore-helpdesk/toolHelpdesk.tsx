import { HardDriveDownload, MonitorCog } from 'lucide-react';
import { FC } from 'react';

const ToolHelpdesk: FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mx-auto mb-6 text-center text-4xl font-bold text-gray-700 md:text-5xl lg:w-2/3">
        Warum PC Beheben für den Datenrettung wählen?
      </h1>
      <p className="mx-auto mb-12 w-3/4 text-center text-lg text-gray-600">
        Die Firewall-Schutzdienste von PC FIX bieten eine grundlegende Reihe von Funktionen, die
        entwickelt wurden, um Ihre wertvollen Unternehmensdaten zu schützen und deren Integrität,
        Vertraulichkeit und Verfügbarkeit sicherzustellen.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {features.map(({ icon, title, description }) => (
          <div key={title} className="justify-center text-center">
            {/* <div className="mb-4 flex justify-center"> */}
            <div className="mx-auto mb-4 flex h-12 w-12 justify-center rounded-full bg-[#e8f3f9]">
              {/* <img src={src} alt={alt} width={64} height={64} className="h-16 w-16" /> */}
              {icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    icon: <img src="/images/24_7support.png" alt="" />,
    alt: 'Icon of a customized POS system',
    title: '24/7 Technischer Support',
    description:
      'rund um die Uhr steht Ihnen unser erfahrenes Team zur Verfügung, um alle technischen Probleme zu lösen und einen reibungslosen Betrieb sicherzustellen',
  },
  {
    icon: <img src="/images/customer-service.png" alt="" />,
    alt: 'Icon of scalable solutions',
    title: 'Fernunterstützung',
    description:
      'unser Team bietet schnelle Lösungen, egal ob remote oder vor Ort, um Unterbrechungen im Einzelhandel zu minimieren und reibungslose Abläufe sicherzustellen.',
  },
  {
    icon: <MonitorCog size={48} color="#7e5aaa" strokeWidth={1.5} />,
    alt: 'Icon of secure POS system',
    title: 'Softwarekonfiguration',
    description:
      'Unsere Experten passen Softwarelösungen an Ihre spezifischen Anforderungen an und optimieren sie für maximale Leistung und Effizienz.',
  },
  {
    icon: <img src="/images/Secureremoteaccess.png" />,
    alt: 'Icon of seamless integrations',
    title: 'Sicherheit',
    description:
      'Maßgeschneiderte Lösungen für den Einzelhandel, inklusive Firewall, Virenschutz, und proaktiver Überwachung zum Schutz Ihrer Daten und Kund*inneninformationen.',
  },
];

export default ToolHelpdesk;
