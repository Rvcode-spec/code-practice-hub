import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Toaster } from 'sonner';





const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drucker-Offline, Papierstau & Wi-Fi Einrichtung beheben',
  description: 'Professionelle Druckerunterstützung für Offline-Probleme, Papierstau & Wi-Fi-Setup. Schnelle, effektive Lösungen rund um die Uhr. Verbinden Sie sich jetzt!',


  openGraph: {
	siteName: "pcbeheben",
	locale: "de_DE",
	type: "website",

     },
     twitter: {
	card: "summary_large_image",
	siteId: "@site",
	
     },
     icons: {
	shortcut: '/images/Pc-Beheben-fav-icon.png',
     }

};



export default function RootLayout({
	children,
     }: Readonly<{
	children: React.ReactNode;
     }>) {
	return (
	  <html lang="en" className="scroll-pt-20 scroll-smooth">
		<head>
		<link rel="icon" href="/images/Pc-Beheben-fav-icon.png" type="image/png" />
		</head>
	    <body className={inter.className}>
		
	  
	      <main>{children}</main>
	   
	     
	      
	    <Toaster/>
	    </body>
	  </html>
	);
     }