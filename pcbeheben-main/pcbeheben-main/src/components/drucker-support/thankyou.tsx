import { CheckCircle } from 'lucide-react';
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const ThankYou = () => {
  return (
    <>
   
      <Navbar />
     
      <section
        className="bg-cover bg-center py-14 bg-[#f5f5f5]"
       
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4  items-center">
    
          <div className="lg:px-5 sm:px-2">
            <img
              src="/images/thank-you/PC BEHEBEN CALL US 1.png"
              alt="call us"
              width={300}
              height={100}
              className="mb-6 mx-auto lg:mx-0"
            />
            <p className="text-lg font-semibold mb-4 text-center lg:text-left text-gray-500">
              Benötigen Sie sofortige Hilfe?
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-center lg:text-left text-gray-700">
              Vielen Dank für Ihre Anfrage!
            </h1>
            <p className="text-lg mb-6 text-center lg:text-left text-gray-500 font-medium">
              Wir haben Ihre Daten erhalten und prüfen diese gerade.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-700">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span>
                  <strong>Schnelle Rückmeldung :</strong> Wir melden uns in Kürze
                  bei Ihnen.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span>
                  <strong>Persönlicher Support :</strong> Ein Teammitglied wird
                  Ihnen direkt weiterhelfen.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span>
                  <strong>Aktuelle Informationen :</strong> Bitte überprüfen Sie
                  Ihr Telefon und Ihre E-Mails.
                </span>
              </li>
            </ul>
          </div>

   
          <div className="px-4">
            <img
              src="/images/thank-you/94.png"
              alt="hero image"
              width={600}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ThankYou;
