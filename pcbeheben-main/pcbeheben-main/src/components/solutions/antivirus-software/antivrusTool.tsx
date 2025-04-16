import { FC } from 'react';

const AntivrusTool: FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mx-auto mb-6 text-center text-4xl font-bold text-gray-700 md:text-5xl lg:w-2/3">
        Beginnen Sie mit der PC-BEHEBEN Antiviren Software für Geschäfte und Einzelhandel!
      </h1>
      <p className="mx-auto mb-12 text-center text-lg text-gray-600 lg:w-3/4">
        Die PC-FIX Antivirensoftware ist Ihre verlässliche Verteidigung gegen digitale Bedrohungen
        und stärkt Ihr Geschäft im Einzelhandel mit zuverlässigem Schutz und Sorgenfreiheit.
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
    src: '/images/Customizablesettings.png',
    alt: 'Icon of a customized POS system',
    title: 'Echtzeit-Scanning',
    description:
      'Unsere Antiviren Software scannt Ihre Systeme ständig auf Bedrohungen und bietet Echtzeitschutz vor Malware, Ransomware und anderen Cyberangriffen.',
  },
  {
    src: '/images/Multi-layeredprotection.png',
    alt: 'Icon of scalable solutions',
    title: 'Mehrschichtiger Schutz',
    description:
      'Die Antiviren Software von PC Beheben verwendet einen mehrschichtigen Sicherheitsansatz, der umfassenden Schutz gegen eine Vielzahl von Cyberbedrohungen gewährleistet.',
  },
  {
    src: '/images/cloud-basedmanagement.png',
    alt: 'Icon of secure POS system',
    title: 'Cloud-basiertes Management',
    description:
      'Verwalten und überwachen Sie Ihre Antiviren Software von überall aus mit unserer cloudbasierten Managementplattform, die Ihnen mehr Kontrolle und Flexibilität bietet.',
  },
  {
    src: '/images/png_icons/Tailor-madePOS.png',
    alt: 'Icon of seamless integrations',
    title: 'Anpassbare Einstellungen',
    description:
      'Passen Sie die Einstellungen Ihrer Antiviren Software an die spezifischen Anforderungen Ihres Geschäfts und Einzelhandelsunternehmens an, um optimalen Schutz und Leistung zu gewährleisten.',
  },
];

export default AntivrusTool;
