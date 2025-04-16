'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowBigUp, Search } from 'lucide-react';

const PCFixforDriverUpdate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }, // Adjust this for sensitivity
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-20 p-6 md:px-20">
      {' '}
      {/*main div starts */}
      {/* header starts */}
      <div
        className={`flex flex-col gap-8 text-center ${isVisible ? 'duration-1000 animate-in fade-in' : ''} lg:w-3/4`}
        ref={ref}
      >
        <h1 className="text-[1.4rem] font-bold text-gray-700 md:text-lg lg:text-4xl">
          Warum PC Fix für die Treiberaktualisierung wählen?
        </h1>
        <p className="text-[1.1rem] text-gray-600 md:text-[1.1rem] lg:text-xl">
          Unsere Upgrade-Services werden von erfahrenen Technikern durchgeführt, die sich dafür
          einsetzen, unseren Kunden den bestmöglichen Service zu bieten.
        </p>
      </div>
      {/* header ends */}
      {/* icon starts */}
      <div
        className={`grid w-lvw grid-cols-1 gap-10 md:w-full md:grid-cols-2 md:place-content-between md:gap-10 md:p-14 ${isVisible ? 'duration-1000 animate-in slide-in-from-bottom' : ''} `}
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 lg:items-center">
          <img
            src="/images/pcbehebenicon/Scan.png"
            className="w-14 md:w-fit"
            alt="/images/pcbehebenicon/Scalable solutions.png"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-lg lg:text-[1.5rem]">
              Scannen
            </p>
            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Unsere Software scannt Ihren Computer nach veralteten oder fehlenden Treibern.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 lg:items-center">
          <img
            src="/images/pcbehebenicon/Analyze.png"
            className="w-14 md:w-fit"
            alt="/images/pcbehebenicon/Scalable solutions.png"
          />

          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-lg lg:text-[1.5rem]">
              Analysieren
            </p>
            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Anschließend werden Ihre Treiber mit unserer umfangreichen Datenbank verglichen.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 md:text-left lg:items-center">
          <img
            src="/images/pcbehebenicon/Update.png"
            className="w-14 md:w-fit"
            alt="/images/pcbehebenicon/Scalable solutions.png"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-lg lg:text-[1.5rem]">
              Aktualisieren
            </p>
            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Mit nur einem Klick können Sie alle Ihre Treiber auf die neuesten Versionen
              aktualisieren.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-5 lg:items-center">
          <img
            src="/images/pcbehebenicon/restore backup.png"
            className="w-14 md:w-fit"
            alt="/images/pcbehebenicon/Scalable solutions.png"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-col md:items-start md:gap-2 md:text-left">
            <p className="text-[1.1rem] font-bold text-gray-700 md:text-[1.3rem] lg:text-[1.5rem]">
              Backup wiederherstellen
            </p>

            <p className="text-sm text-gray-500 lg:text-[1.1rem]">
              Wenn Sie unseren Expertenrat einholen, können Sie sicherstellen.
            </p>
          </div>
        </div>
      </div>
      {/* icon ends */}
      {/* main div ends */}
    </div>
  );
};

export default PCFixforDriverUpdate;
