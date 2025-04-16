import EnterpriseNetworkInfrastructure from '@/components/solutions/setupthecompanynetwork/enterpriseNetworkInfrastructure';
import Hasslefree from '@/components/solutions/setupthecompanynetwork/hasslefree';
import QuestionsAnswers from '@/components/solutions/setupthecompanynetwork/questionsAnswers';
import Setupthecompanynetwork from '@/components/solutions/setupthecompanynetwork/setupthecompanynetwork';
import { Metadata } from 'next';
import React from 'react';





export const metadata: Metadata = {
  title: "Unternehmensnetzwerk aufbauen: Erfolgreiche Strategien",
  description: "Unternehmensnetzwerk stärken: Tipps und Techniken, um wertvolle Geschäftsbeziehungen und Kooperationen zu entwickeln.",
  openGraph: {
      title: "Tech Aid: Digitale Lösungen für Telekom und Transformation",
      description: "Entdecken Sie digitale Lösungen und stärken Sie Ihre Technologie mit Tech Aid für Telekommunikation und digitale Transformation.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Unternehmensnetzwerk aufbauen: Erfolgreiche Strategien",
    description: "Entdecken Sie digitale Lösungen und stärken Sie Ihre Technologie mit Tech Aid für Telekommunikation und digitale Transformation.",
      images: {
          url: "/images/twittergraph.png",
          alt: "PCBeheben"
      }
  }
}

const page = () => {
  return (
    <div className="mt-[7%]">
      <Setupthecompanynetwork />
      <EnterpriseNetworkInfrastructure />
      <QuestionsAnswers />
      <Hasslefree />
    </div>
  );
};

export default page;
