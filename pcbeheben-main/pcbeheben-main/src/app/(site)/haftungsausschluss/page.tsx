
import HeroFotter from '@/components/disclaimer/heroFotter'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Haftungsausschluss - PC Beheben | IT-Dienstleistungen",
  description: "Erfahren Sie mehr über die Haftungsausschlüsse von PC Beheben. Ihr Experte für Computer Reparatur und IT-Dienstleistungen",
  openGraph: {
      title: "Datenschutzrichtlinie: Ihre Daten bei PC Beheben sicherHaftungsausschluss - PC Beheben | IT-Dienstleistungen",
      description: "Erfahren Sie mehr über die Haftungsausschlüsse von PC Beheben. Ihr Experte für Computer Reparatur und IT-Dienstleistungen",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Datenschutzrichtlinie: Ihre Daten bei PC Beheben sicherHaftungsausschluss - PC Beheben | IT-Dienstleistungen",
      description: "Erfahren Sie mehr über die Haftungsausschlüsse von PC Beheben. Ihr Experte für Computer Reparatur und IT-Dienstleistungen",
      images: {
          url: "/images/twittergraph.png",
          alt: "PCBeheben"
      }
  }
}


const page = () => {
  return (
    <div>
     <HeroFotter />
    </div>
  )
}

export default page