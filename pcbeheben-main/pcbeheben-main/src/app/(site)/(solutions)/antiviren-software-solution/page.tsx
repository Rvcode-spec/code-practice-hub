import React from 'react';
import Hero from '@/components/solutions/antivirus-software/hero';
import AntivrusTool from '@/components/solutions/antivirus-software/antivrusTool';
import QuesAns from '@/components/solutions/antivirus-software/quesAns';
import AntivirusRegister from '@/components/solutions/antivirus-software/antivirusRegister';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Das Bestes Antivirenprogramm 2024 Top-Schutz für Ihren PC",
  description: "Entdecken Sie das führende Antivirenprogramm, das Ihren Computer vor den neuesten Bedrohungen schützt und Ihre Daten sicher hält.",
  openGraph: {
      title: "Das Bestes Antivirenprogramm 2024 Top-Schutz für Ihren PC",
      description: "Entdecken Sie das führende Antivirenprogramm, das Ihren Computer vor den neuesten Bedrohungen schützt und Ihre Daten sicher hält.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Das Bestes Antivirenprogramm 2024 Top-Schutz für Ihren PC",
    description: "Entdecken Sie das führende Antivirenprogramm, das Ihren Computer vor den neuesten Bedrohungen schützt und Ihre Daten sicher hält.",
      images: {
          url: "/images/twittergraph.png",
          alt: "PCBeheben"
      }
  }
}



export default function page() {
  return (
    <div>
      <Hero />
      <AntivrusTool />
      <QuesAns />
      <AntivirusRegister />
    </div>
  );
}
