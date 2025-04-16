'use client';
import Link from '@/components/layout/custom-link';
import React from 'react';
import { MapPin, Route } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import Routes from '@/lib/routes';
const footer = () => {
  return (
    <footer>
      <div className="mt-5 grid grid-cols-1 place-content-center gap-5 p-3 sm:grid-cols-2 md:content-center md:p-5 lg:grid-cols-3 xl:grid-cols-5">
        {/* footer about start */}
        <div className="flex flex-col gap-4 md:flex md:w-52 md:flex-col md:items-start md:justify-start md:gap-6">
          <div>
            <img src="/images/pc-beheben-logo-black.svg" alt="" className="" />
          </div>

          <div className="text-gray-500 md:text-gray-500">
            PC-BEHEBEN: Erfahrene IT-Profis bieten umfassende Computerreparatur- und Wartungsdienste
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className="flex flex-col gap-4 md:flex md:flex-col md:gap-6">
          <h1 className="text-[15px] font-bold md:text-[20px] md:font-bold">SCHNELLE LINKS</h1>

          <div className="flex flex-col gap-5 text-gray-500 md:flex md:flex-col md:gap-4 md:text-gray-500">
            <Link href={Routes.home}>Home</Link>
            <Link href={Routes.about}>Über uns</Link>
            <Link href={Routes.blog}>Blog</Link>
            <Link href={Routes.contact}>Kontaktiere uns</Link>
          </div>
        </div>

        {/* ENTERPRISE */}

        <div className="flex flex-col gap-4 md:flex md:flex-col md:gap-6">
          <h1 className="text-[15px] font-bold md:text-[20px] md:font-bold">UNTERNEHMEN</h1>

          <div className="flex flex-col gap-5 text-gray-500 md:flex md:flex-col md:gap-4 md:text-gray-500">
            <Link href={Routes.privacyPolicy}>Datenschutzrichtlinie</Link>
            <Link href={Routes.disclaimer}>Haftungsausschluss</Link>
            <Link href={Routes.term}>Nutzungsbedingungen</Link>
            <Link href={Routes.faq}>FAQ</Link>
          </div>
        </div>

        {/* SERVICES */}

        <div className="flex flex-col gap-4 md:flex md:flex-col md:gap-6">
          <h1 className="text-[15px] font-bold md:text-[20px] md:font-bold">SERVICES</h1>

          <div className="flex flex-col gap-5 text-gray-500 md:flex md:flex-col md:gap-4 md:text-gray-500">
            <Link href={Routes.Solution.SetUpTheCompanyNetwork}>Business IT Services</Link>
            <Link href={Routes.Solution.DriverUpdater}>Home IT Services</Link>
            <Link href={Routes.Solution.CRMsystem}>In-store IT services</Link>
          </div>
        </div>

        {/* Get in Touch */}

        <div className="flex flex-col gap-4 md:flex md:flex-col md:gap-6">
          <h1 className="text-[15px] font-bold md:text-[20px] md:font-bold">Get in Touch</h1>

          <div className="flex flex-col gap-5 text-gray-500 md:flex md:flex-col md:gap-4 md:text-gray-500">
            <div className="flex items-start gap-4 md:flex md:items-start md:gap-4">
              <MapPin />
              <p>Hessenring 70 61184 Karben Deutschland</p>
            </div>

            <div className="flex items-start gap-4 md:flex md:items-start md:gap-4">
              <Headset />
              <a href="tel:+49 800 1830881">+49 800 1830881</a>
            </div>

            <div className="flex items-start gap-4 md:flex md:items-start md:gap-4">
              <Mail />
              <a href="mailto:hilfe@pcbeheben.de">hilfe@pcbeheben.de</a>
            </div>
          </div>
        </div>
      </div>

      {/* border div */}

      <div className="md:m-5 md:ml-40 md:w-3/4 md:border-2 md:border-gray-300"></div>

      {/* legals */}

      <div className="m-3 flex flex-col gap-3 md:m-4 md:flex md:flex-row md:justify-around">
        <div className="text-gray-500 md:text-gray-500">
          © 2025 PC-BEHEBEN. Alle Rechte vorbehalten.
        </div>

        {/* icons */}

        <div className="flex gap-5 md:flex md:gap-6">
          <a href="https://www.facebook.com/pcbeheben/" target="_blank">
          <Facebook />
         </a>
          <a href="https://www.linkedin.com/company/pc-beheben-deutschland/" target="_blank">
            <Linkedin />
         </a>
          <a href="https://x.com/PCBeheben247" target="_blank">
          <Twitter />
         </a>
          <a href="https://www.instagram.com/pc_beheben/" target="_blank">
          <Instagram />
         </a>

        </div>
      </div>
    </footer>
  );
};

export default footer;
