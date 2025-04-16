import React from 'react'
import HeroFotter from '@/components/PrivacyPolicy/heroFotter'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Datenschutzrichtlinie: Ihre Daten bei PC Beheben sicher",
  description: "Erfahren Sie, wie unsere Datenschutzrichtlinie bei PC Beheben die Sicherheit Ihrer Daten gewährleistet.",
  openGraph: {
      title: "Datenschutzrichtlinie: Ihre Daten bei PC Beheben sicher",
      description: "Erfahren Sie, wie unsere Datenschutzrichtlinie bei PC Beheben die Sicherheit Ihrer Daten gewährleistet",
      images: {
        url: "/images/opengrapgh.png",
        alt: "PCBeheben"
    }
  },
  twitter: {
    title: "Datenschutzrichtlinie: Ihre Daten bei PC Beheben sicher",
    description: "Erfahren Sie, wie unsere Datenschutzrichtlinie bei PC Beheben die Sicherheit Ihrer Daten gewährleistet",
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