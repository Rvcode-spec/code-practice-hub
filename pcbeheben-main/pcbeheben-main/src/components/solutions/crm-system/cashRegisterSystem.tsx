import { FC } from 'react';

const CashRegisterSystem: FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mx-auto mb-6 text-center text-4xl font-bold text-gray-700 md:text-5xl lg:w-2/3">
        Hauptmerkmale der PC Beheben CRM-Systemlösungen
      </h1>
      <p className="mx-auto mb-12 text-center text-lg text-gray-600 lg:w-3/4">
        Die PC-BEHEBEN CRM-Systemlösungen bieten umfassende Funktionen zur Optimierung des
        Kundenbeziehungsmanagements. Von der robusten Kontaktverwaltung bis zur effizienten
        Aufgabenautomatisierung ermöglicht es Unternehmen, Kundenbindung zu verbessern und die
        organisatorische Effizienz zu steigern.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {features.map(({ src, alt, title, description }) => (
          <div key={title} className="justify-center text-center">
            <div className="mb-4 flex justify-center">
              <img src={src} alt={alt} width={64} height={64} className="h-16 w-16" />
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
    src: '/images/png_icons/Tailor-madePOS.png',
    alt: 'Icon of a customized POS system',
    title: 'Maßgeschneidertes CRM',
    description:
      'Unsere CRM-Systeme können an Ihre spezifischen Geschäftsanforderungen angepasst werden und gewährleisten eine optimale Leistung und Funktionalität.',
  },
  {
    src: '/images/png_icons/Scalablesolutions.png',
    alt: 'Icon of scalable solutions',
    title: 'Skalierbare Lösungen',
    description:
      'Wenn Ihr Unternehmen wächst, können unsere CRM-Lösungen problemlos erweitert werden, um Ihren wachsenden Anforderungen gerecht zu werden.',
  },
  {
    src: '/images/png_icons/SecurePOS.png',
    alt: 'Icon of secure POS system',
    title: 'Sicheres CRM',
    description:
      'Wir legen großen Wert auf Datensicherheit und halten uns an Industriestandards, um Ihr Geschäft und die Informationen Ihrer Kunden zu schützen.',
  },
  {
    src: '/images/png_icons/Seamlessintegrations.png',
    alt: 'Icon of seamless integrations',
    title: 'Nahtlose Integrationen',
    description:
      'Unsere POS-Systeme integrieren sich nahtlos in Ihre bestehende Infrastruktur und optimieren so Abläufe und steigern die allgemeine Effizienz.',
  },
];

export default CashRegisterSystem;
