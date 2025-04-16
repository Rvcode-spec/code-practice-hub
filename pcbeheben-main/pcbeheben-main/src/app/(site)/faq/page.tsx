import Hero from '@/components/faq/hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "FAQ: Technischer Support & Systemlösungen",
  description: "Entdecken Sie Antworten auf Fragen zu Datenwiederherstellung, CRM-Systemen, Firewall-Schutz und Netzwerktypen in unserem FAQ-Bereich.",
  openGraph: {
    title: "FAQ: Technischer Support & Systemlösungen",
  description: "Entdecken Sie Antworten auf Fragen zu Datenwiederherstellung, CRM-Systemen, Firewall-Schutz und Netzwerktypen in unserem FAQ-Bereich.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "FAQ: Technischer Support & Systemlösungen",
    description: "Entdecken Sie Antworten auf Fragen zu Datenwiederherstellung, CRM-Systemen, Firewall-Schutz und Netzwerktypen in unserem FAQ-Bereich.",
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
    </div>
  );
};

export default page;
