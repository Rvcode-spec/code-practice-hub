import Hero from '@/components/solutions/firewallprotection/hero';
import KeepYourBusinessSafe from '@/components/solutions/firewallprotection/keepYourBusinessSafe';
import PCFixFirewall from '@/components/solutions/firewallprotection/pCFixFirewall';
import QuestionsAnswers from '@/components/solutions/firewallprotection/questionsAnswers';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Sicheres Netzwerk: Configure Firewall as DHCP Server",
  description: "Configure the firewall as a DHCP server für Netzwerksicherheit. verwenden Sophos Firewall Security Manager einzurichten und zu optimieren web applications.",
  openGraph: {
      title: "Sicheres Netzwerk: Configure Firewall as DHCP Server",
      description: "Configure the firewall as a DHCP server für Netzwerksicherheit. verwenden Sophos Firewall Security Manager einzurichten und zu optimieren web applications",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Sicheres Netzwerk: Configure Firewall as DHCP Server",
    description: "Configure the firewall as a DHCP server für Netzwerksicherheit. verwenden Sophos Firewall Security Manager einzurichten und zu optimieren web applications..",
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
      <PCFixFirewall />
      <QuestionsAnswers />
      <KeepYourBusinessSafe />
    </div>
  );
};

export default page;
