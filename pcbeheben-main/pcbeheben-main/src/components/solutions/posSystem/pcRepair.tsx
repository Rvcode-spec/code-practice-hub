import { FC } from 'react';

const PcRepair: FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-6 text-center text-4xl font-bold text-gray-900 md:text-5xl">
        Warum PC-Beheben für Kassensysteme wählen?
      </h1>
      <p className="mb-12 text-center text-lg text-gray-600">
        Die Kassensysteme von PC Beheben können je nach Größe und Anforderungen Ihres
        Einzelhandelsunternehmens angepasst und skaliert werden, unabhängig davon, ob Sie ein
        einzelnes Geschäft oder mehrere Standorte betreiben.
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
    title: 'Maßgeschneidertes POS',
    description:
      'Unsere POS-Systeme integrieren sich nahtlos in Ihre bestehende Infrastruktur und optimieren so Abläufe und steigern die allgemeine Effizienz.',
  },
  {
    src: '/images/png_icons/Scalablesolutions.png',
    alt: 'Icon of scalable solutions',
    title: 'Skalierbare Lösungen',
    description:
      'Wenn Ihr Unternehmen wächst, können unsere POS-Lösungen problemlos erweitert werden, um Ihren wachsenden Anforderungen gerecht zu werden.',
  },
  {
    src: '/images/png_icons/SecurePOS.png',
    alt: 'Icon of secure POS system',
    title: 'Sicheres POS',
    description:
      'Ein sicheres Kassensystem gewährleistet den Schutz sensibler Kundenzahlungsdaten bei Transaktionen vor unbefugtem Zugriff.',
  },
  {
    src: '/images/png_icons/Seamlessintegrations.png',
    alt: 'Icon of seamless integrations',
    title: 'Nahtlose Integrationen',
    description:
      'Unsere POS-Systeme integrieren sich nahtlos in Ihre bestehende Infrastruktur und optimieren so Abläufe und steigern die allgemeine Effizienz.',
  },
];

export default PcRepair;
