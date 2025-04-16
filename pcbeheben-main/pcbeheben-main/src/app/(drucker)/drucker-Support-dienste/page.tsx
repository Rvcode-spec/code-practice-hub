"use client";
import React, { useEffect, useState } from "react";
import Link from "@/components/layout/custom-link";
import { usePathname } from "next/navigation";
import Routes from "@/lib/routes";
import Navbar from "../../../components/drucker-support/navbar";
import Hero from "../../../components/drucker-support/hero";
import ProblemSolving from "../../../components/drucker-support/problemSolving";
import CallSerivce from "../../../components/drucker-support/callSerivce";
import SupportBrand from "../../../components/drucker-support/supportBrand";
import ServiceLocation from "../../../components/drucker-support/serviceLocation";
import MyServices from "../../../components/drucker-support/myServices";
import CustomerReviews from "../../../components/drucker-support/customerReviews";
import LiveChat from "../../../components/drucker-support/liveChat";
import QuesAns from "../../../components/drucker-support/quesAns";
import Footer from "../../../components/drucker-support/footer";
import ContactForm from "../../../components/drucker-support/contactForm";
import ChatbotCustom from "@/components/chatbot";



export default function Page() {
  
  return (
    <div>
      {/* Fixed Navigation */}
      <nav className="fixed w-full  top-0 z-40 flex  bg-gray-200 p-2 text-sm items-center justify-around shadow-md">
        <p className="font-semibold text-gray-700">
          Hessenring 70, 61184 Karben, Germany
        </p>
        <p className="font-semibold text-gray-700">
          <span className="mr-2">Montag-Samstag: 08:00 Uhr</span> |{" "}
          <span className="ml-2">20:00 Uhr, 800 1830881</span>
        </p>
      </nav>

      {/* Content Area */}
      <div className="pt-10 small-phone:pt-16 ">
        <Navbar />
        <Hero />
        <ProblemSolving />
        <CallSerivce />
        <SupportBrand />
        <ServiceLocation />
        <MyServices />
        <CustomerReviews />
        <LiveChat />
        <QuesAns />
        <ContactForm />
        <Footer />
      </div>

      {/* Chatbot Component */}
      <div>
        <ChatbotCustom />
      </div>

    </div>



  );
}
