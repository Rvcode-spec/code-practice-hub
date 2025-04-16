import { Contact } from '@/components/contact/form';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Tech Aid: Digitale Lösungen für Telekom und Transformation",
  description: "Entdecken Sie digitale Lösungen und stärken Sie Ihre Technologie mit Tech Aid für Telekommunikation und digitale Transformation.",
  openGraph: {
      title: "Tech Aid: Digitale Lösungen für Telekom und Transformation",
      description: "Entdecken Sie digitale Lösungen und stärken Sie Ihre Technologie mit Tech Aid für Telekommunikation und digitale Transformation.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Tech Aid: Digitale Lösungen für Telekom und Transformation",
    description: "Entdecken Sie digitale Lösungen und stärken Sie Ihre Technologie mit Tech Aid für Telekommunikation und digitale Transformation.",
      images: {
          url: "/images/twittergraph.png",
          alt: "PCBeheben"
      }
  }
}
const pages = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default pages;
