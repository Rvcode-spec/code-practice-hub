import GettingstartedwithMartextoday from '@/components/solutions/driverupdater/gettingstartedwithMartextoday';
import Hero from '@/components/solutions/driverupdater/hero';
import PCFixforDriverUpdate from '@/components/solutions/driverupdater/pCFixforDriverUpdate';
import QuestionAnswer from '@/components/solutions/driverupdater/questionAnswer';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Effektivität steigern: Treiber aktualisieren",
  description: "Maximieren Sie die Leistung Ihres Systems mit regelmäßigen Treiberaktualisierungen. Erfahren Sie, wie Sie Ihre Treiber effektiv aktualisieren.",
  openGraph: {
    title: "Effektivität steigern: Treiber aktualisieren",
    description: "Maximieren Sie die Leistung Ihres Systems mit regelmäßigen Treiberaktualisierungen. Erfahren Sie, wie Sie Ihre Treiber effektiv aktualisieren.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Effektivität steigern: Treiber aktualisieren",
  description: "Maximieren Sie die Leistung Ihres Systems mit regelmäßigen Treiberaktualisierungen. Erfahren Sie, wie Sie Ihre Treiber effektiv aktualisieren.",
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
      <PCFixforDriverUpdate />
      <QuestionAnswer />
      <GettingstartedwithMartextoday />
    </div>
  );
};

export default page;
