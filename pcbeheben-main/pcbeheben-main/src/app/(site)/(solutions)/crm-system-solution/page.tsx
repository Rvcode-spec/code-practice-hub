import React from 'react';
import Hero from '@/components/solutions/crm-system/hero';
import QuesAns from '@/components/solutions/crm-system/quesAns';
import CashRegisterSystem from '@/components/solutions/crm-system/cashRegisterSystem';
import CrmRegister from '@/components/solutions/crm-system/crmRegister';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Effiziente CRM-Systeme für Ihr Unternehmen",
  description: "Maximieren Sie die Leistung Ihres Systems mit regelmäßigen Treiberaktualisierungen. Erfahren Sie, wie Sie Ihre Treiber effektiv aktualisierenEntdecken Sie maßgeschneiderte CRM Systeme für optimale Effizienz. Steigern Sie Produktivität und Kundenbindung mit unserem CRM-Service.",
  openGraph: {
    title: "Effiziente CRM-Systeme für Ihr Unternehmen",
    description: "Maximieren Sie die Leistung Ihres Systems mit regelmäßigen Treiberaktualisierungen. Erfahren Sie, wie Sie Ihre Treiber effektiv aktualisierenEntdecken Sie maßgeschneiderte CRM Systeme für optimale Effizienz. Steigern Sie Produktivität und Kundenbindung mit unserem CRM-Service.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Effiziente CRM-Systeme für Ihr Unternehmen",
    description: "Maximieren Sie die Leistung Ihres Systems mit regelmäßigen Treiberaktualisierungen. Erfahren Sie, wie Sie Ihre Treiber effektiv aktualisierenEntdecken Sie maßgeschneiderte CRM Systeme für optimale Effizienz. Steigern Sie Produktivität und Kundenbindung mit unserem CRM-Service.",
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
      <CashRegisterSystem />
      <QuesAns />
      <CrmRegister />
    </div>
  );
};

export default page;
