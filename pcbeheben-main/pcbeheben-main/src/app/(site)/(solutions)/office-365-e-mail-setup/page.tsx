import EmailServices from '@/components/solutions/office365email/emailServices';
import Emailsetup from '@/components/solutions/office365email/emailsetup';
import Hero from '@/components/solutions/office365email/hero';
import QuestionsAnswers from '@/components/solutions/office365email/questionAnswer';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Email Adresse prüfen: Tipps zur Überprüfung und Sicherheit",
  description: "Erfahren Sie, wie Sie Ihre Email Adresse überprüfen und schützen können. Wichtige Tipps zur Sicherung Ihrer Online-Kommunikation.",
  openGraph: {
    title: "Email Adresse prüfen: Tipps zur Überprüfung und Sicherheit",
    description: "Erfahren Sie, wie Sie Ihre Email Adresse überprüfen und schützen können. Wichtige Tipps zur Sicherung Ihrer Online-Kommunikation.",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Email Adresse prüfen: Tipps zur Überprüfung und Sicherheit",
  description: "Erfahren Sie, wie Sie Ihre Email Adresse überprüfen und schützen können. Wichtige Tipps zur Sicherung Ihrer Online-Kommunikation.",
      images: {
          url: "/images/twittergraph.png",
          alt: "PCBeheben"
      }
  }
}

const page = () => {
  return (
    <div className=" ">
      <Hero />
      <EmailServices />
      <QuestionsAnswers />
      <Emailsetup />
    </div>
  );
};

export default page;
