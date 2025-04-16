import Hero from '@/components/solutions/instore-helpdesk/hero';
import InstoreRegister from '@/components/solutions/instore-helpdesk/instoreRegister';
import QuesAns from '@/components/solutions/instore-helpdesk/quesAns';
import ToolHelpdesk from '@/components/solutions/instore-helpdesk/toolHelpdesk';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Technischer Support und IT-Helpdesk: Expertenlösungen",
  description: "Profitieren Sie von unserem IT-Helpdesk-Service bei PC Beheben für erstklassigen technischen Support. Für alle zugänglich, rund um die Uhr!",
  openGraph: {
    title: "Technischer Support und IT-Helpdesk: Expertenlösungen",
  description: "Profitieren Sie von unserem IT-Helpdesk-Service bei PC Beheben für erstklassigen technischen Support. Für alle zugänglich, rund um die Uhr!",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Technischer Support und IT-Helpdesk: Expertenlösungen",
    description: "Profitieren Sie von unserem IT-Helpdesk-Service bei PC Beheben für erstklassigen technischen Support. Für alle zugänglich, rund um die Uhr!",
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
      <ToolHelpdesk />
      <QuesAns />
      <InstoreRegister />
    </div>
  );
};

export default page;
