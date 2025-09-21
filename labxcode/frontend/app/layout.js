import { Carattere } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const carattere = Carattere({
  subsets: ["latin"],
  variable: "--font-condiment",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={carattere.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
