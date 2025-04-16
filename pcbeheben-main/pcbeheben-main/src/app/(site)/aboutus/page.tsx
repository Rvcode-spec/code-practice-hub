import Aboutus from '@/components/aboutus/AboutHero';
import AboutReliableExpertise from '@/components/aboutus/AboutReliableExpertise';
import ComprehensiveITservices from '@/components/aboutus/ComprehensiveITservices';
import LatestBlogs from '@/components/aboutus/LatestBlogs';
import Ourcustomerslove from '@/components/aboutus/Ourcustomerslove';
import Testimonials from '@/components/aboutus/Testimonials';
import Whychooseus from '@/components/aboutus/Whychooseus';
import Yourneighborhood from '@/components/aboutus/Yourneighborhood';
import Onestopsolution from '@/components/aboutus/onestopsolution';
import { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
  title: "Ihr Experte für Computerreparatur und Tech-Support",
  description: "Erfahren Sie mehr über uns. Wir bieten erstklassigen Tech-Support für Computerreparatur, Druckerprobleme, langsame PCs und Datenwiederherstellung.",
  openGraph: {
      title: "Ihr Experte für Computerreparatur und Tech-Support",
      description: "Erfahren Sie mehr über uns. Wir bieten erstklassigen Tech-Support für Computerreparatur, Druckerprobleme, langsame PCs und Datenwiederherstellung",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Ihr Experte für Computerreparatur und Tech-Support",
    description: "Erfahren Sie mehr über uns. Wir bieten erstklassigen Tech-Support für Computerreparatur, Druckerprobleme, langsame PCs und Datenwiederherstellung",
      images: {
          url: "/images/twittergraph.png",
          alt: "PCBeheben"
      }
  }
}
const page = () => {
  return (
    <div>
      <Aboutus />
      <AboutReliableExpertise />

      <Yourneighborhood />
      <Whychooseus />
      <ComprehensiveITservices />
      <Testimonials />
      <Ourcustomerslove />
      <Onestopsolution />
      <LatestBlogs />
    </div>
  );
};

export default page;
