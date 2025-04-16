import { HardDriveDownload, MonitorCog } from 'lucide-react';
import { FC } from 'react';

const FixDataRecovery: FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mx-auto mb-6 text-center text-4xl font-bold text-gray-700 md:text-5xl lg:w-2/3">
        Warum PC Beheben für den Datenrettung wählen?
      </h1>
      <p className="mx-auto mb-12 text-center text-lg text-gray-600 lg:w-3/4">
        Datenrettung leicht gemacht mit PC Beheben. Wir sind uns der Bedeutung Ihrer Daten bewusst
        und möchten Ihnen dabei helfen, diese schnell und sicher wiederherzustellen.
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
    icon: <img src="/images/png_icons/Tailor-madePOS.png" alt="" />,
    alt: 'Icon of a customized POS system',
    title: 'Erweiterte Wiederherstellung',
    description:
      'Wir verwenden komplexe Algorithmen, um Festplatten oder Speichergeräte zu scannen, gelöschte Dateien zu identifizieren und sie in ihren ursprünglichen Zustand zurückzusetzen.',
  },
  {
    icon: <HardDriveDownload size={48} color="#7e5aaa" strokeWidth={1.5} />,
    alt: 'Icon of scalable solutions',
    title: 'Kompatibilität zwischen Geräten',
    description:
      'Wir können gelöschte Dateien von Festplatten, USB-Sticks, SD-Karten und anderen externen Speichergeräten wiederherstellen.',
  },
  {
    icon: <img src="/images/png_icons/Scalablesolutions.png" />,
    alt: 'Icon of secure POS system',
    title: 'Unterstützt verschiedene Dateitypen',
    description:
      'PC-BEHEBEN unterstützt die Wiederherstellung verschiedener Dateitypen, einschließlich Dokumenten, Fotos, Videos, Audiodateien und mehr.',
  },
  {
    icon: <MonitorCog size={48} color="#7e5aaa" strokeWidth={1.5} />,
    alt: 'Icon of seamless integrations',
    title: 'Kundenorientierte',
    description:
      'Wir stehen Ihnen rund um die Uhr zur Verfügung, um Ihnen während des Wiederherstellungsprozesses zu helfen und alle Fragen zu beantworten.',
  },
];

export default FixDataRecovery;
