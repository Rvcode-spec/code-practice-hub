import FixDataRecovery from '@/components/solutions/data-recovery/fixDataRecovery';
import Hero from '@/components/solutions/data-recovery/hero';
import QuesAns from '@/components/solutions/data-recovery/quesAns';
import RegisterDataRecovery from '@/components/solutions/data-recovery/registerDataRecovery';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Handy Datenrettung: Schnelle Datenwiederherstellung",
  description: "Professionelle Datenrettung für Handys, Festplatten & iPhones. Schnelle Wiederherstellung verloren geglaubter Daten durch Experten.",
  openGraph: {
      title: "Handy Datenrettung: Schnelle Datenwiederherstellung",
      description: "Professionelle Datenrettung für Handys, Festplatten & iPhones. Schnelle Wiederherstellung verloren geglaubter Daten durch Experten",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Professionelle Datenrettung für Handys, Festplatten & iPhones. Schnelle Wiederherstellung verloren geglaubter Daten durch Experten.",
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
      <FixDataRecovery />
      <QuesAns />
      <RegisterDataRecovery />
    </div>
  );
};

export default page;
