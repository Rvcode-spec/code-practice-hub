import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { NavigationContainer } from '@/components/layout/navigation';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maßgeschneiderte IT Lösungen für Zuhause und Unternehmen | PC Beheben',
  description: 'Professionelle Computer-Reparatur & Wartung: Schnelle IT-Lösungen von Experten in Hardware und Software. Kontaktieren Sie uns jetzt!',

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
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
        {/* Microsoft Clarity */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "huzysc4ch2");
      `}} />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <NavigationContainer />
        <Toaster />
      </body>
    </html>
  );
}
