import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row lg:gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 lg:w-5/12">
          <p className="mb-3 text-center text-base font-semibold text-gray-500 sm:text-lg md:text-left">
            SERVICE LEICHT GEMACHT
          </p>
          <h1 className="mb-5 text-center text-3xl font-bold text-gray-700 sm:text-5xl md:text-left">
            Kassensysteme–
            <br />
            PC–BEHEBEN
          </h1>
          <p className="mb-5 text-center text-sm font-medium text-gray-500 sm:text-lg md:text-left lg:text-[1.1rem]">
            Ein Point of Sale (POS) System ist eine Kombination aus Hardware und Software, die von
            Unternehmen verwendet wird, um Transaktionen mit Kunden abzuschließen, typischerweise am
            Verkaufspunkt.
          </p>
          <ul className="list-disc space-y-3 pl-5 text-sm font-medium text-gray-500 sm:text-lg lg:text-[1.1rem]">
            <li>
              Optimieren Sie den Checkout-Prozess und ermöglichen Sie schnelle und genaue
              Transaktionen.
            </li>
            <li>
              Funktionen zur Bestandsverfolgung in Echtzeit und helfen bei der Geschäftsoptimierung.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:w-1/2 lg:w-7/12">
          <img
            src="/images/pos-system-hero-min.png"
            alt="Person using a POS system in a store"
            className="w-full max-w-sm rounded-lg border-none md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
