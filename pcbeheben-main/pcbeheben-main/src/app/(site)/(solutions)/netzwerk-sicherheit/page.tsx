import Hero from '@/components/solutions/network/hero';
import React from 'react';
import WhyChooseUs from '@/components/solutions/network/whyChooseUs';
import OuestionAnswer from '@/components/solutions/network/questionAnswer';
import PCFix from '@/components/solutions/network/pCFix';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Netzwerksicherheit: Schutz vor Bedrohungen",
  description: "Stärken Sie Ihr Netzwerk mit umfassender Netzwerksicherheit. Schützen Sie Ihr Unternehmen vor Cyberbedrohungen und Datenverlust.: Entdecken Sie vielseitige Lösungen für effiziente Abwicklung. Moderne Kassensysteme optimieren Ihren Workflow.",
  openGraph: {
    title: "Netzwerksicherheit: Schutz vor Bedrohungen",
    description: "Stärken Sie Ihr Netzwerk mit umfassender Netzwerksicherheit. Schützen Sie Ihr Unternehmen vor Cyberbedrohungen und Datenverlust.: Entdecken Sie vielseitige Lösungen für effiziente Abwicklung. Moderne Kassensysteme optimieren Ihren Workflow.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Netzwerksicherheit: Schutz vor Bedrohungen",
    description: "Stärken Sie Ihr Netzwerk mit umfassender Netzwerksicherheit. Schützen Sie Ihr Unternehmen vor Cyberbedrohungen und Datenverlust.: Entdecken Sie vielseitige Lösungen für effiziente Abwicklung. Moderne Kassensysteme optimieren Ihren Workflow.",
      images: {
          url: "/images/twittergraph.png",
          alt: "PCBeheben"
      }
  }
}

const page = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OuestionAnswer />
      <PCFix />
    </div>
  );
};

export default page;
