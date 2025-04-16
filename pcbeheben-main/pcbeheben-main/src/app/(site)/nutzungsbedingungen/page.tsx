import Hero from '@/components/terms/Hero';
import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
  title: "Nutzungsbedingungen - PC Beheben | IT-Dienstleistungen",
  description: "Lesen Sie die Nutzungsbedingungen von PC Beheben. Wichtige Informationen zu unseren IT-Dienstleistungen und Computer Reparatur",
  openGraph: {
    title: "Nutzungsbedingungen - PC Beheben | IT-Dienstleistungen",
    description: "Lesen Sie die Nutzungsbedingungen von PC Beheben. Wichtige Informationen zu unseren IT-Dienstleistungen und Computer Reparatur",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
  title: "Nutzungsbedingungen - PC Beheben | IT-Dienstleistungen",
  description: "Lesen Sie die Nutzungsbedingungen von PC Beheben. Wichtige Informationen zu unseren IT-Dienstleistungen und Computer Reparatur",
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
