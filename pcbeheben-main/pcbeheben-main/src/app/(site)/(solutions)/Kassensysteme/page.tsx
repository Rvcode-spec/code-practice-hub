import React from 'react';
import Hero from '@/components/solutions/posSystem/hero';
import PcRepair from '@/components/solutions/posSystem/pcRepair';
import PosQUESANS from '@/components/solutions/posSystem/posQUESANS';
import PosRegister from '@/components/solutions/posSystem/posRegister';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Kassen: Effiziente Lösungen für Ihr Geschäft",
  description: "Kassen: Entdecken Sie vielseitige Lösungen für effiziente Abwicklung. Moderne Kassensysteme optimieren Ihren Workflow.",
  openGraph: {
    title: "Kassen: Effiziente Lösungen für Ihr Geschäft",
    description: "Kassen: Entdecken Sie vielseitige Lösungen für effiziente Abwicklung. Moderne Kassensysteme optimieren Ihren Workflow.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Kassen: Effiziente Lösungen für Ihr Geschäft",
    description: "Kassen: Entdecken Sie vielseitige Lösungen für effiziente Abwicklung. Moderne Kassensysteme optimieren Ihren Workflow.",
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
      <PcRepair />
      <PosQUESANS />
      <PosRegister />
    </div>
  );
}
