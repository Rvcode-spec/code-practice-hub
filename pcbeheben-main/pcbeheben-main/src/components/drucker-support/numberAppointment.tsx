"use client"
import { useState } from "react";
import { toast } from 'sonner';
import axios from 'axios';
import { useAtom } from "jotai";
import { currentStepAtom, storeAtom } from "@/lib/atom/atoms";
import Footer from "./footer";
import Navbar from "./navbar";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const NumberAppointment = () => {
  const [phone, setPhone] = useState("");
  const [data, setData] = useAtom(storeAtom);
  const [, setStep] = useAtom(currentStepAtom);

 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading('Formular absenden...');
    console.log(
      {...data,phone}
    );
    
    
    try {
      const res = await axios.post('/api/submit', {
        ...data,
        phone,
        sourceUrl: window.location.href,
        referrerUrl: document.referrer
      });
      
      if (res.status === 200) {
        
        setStep(5);
        toast.dismiss(id);
      } else {
        toast.error("Fehler beim Übermitteln für", { id });
      }
    } catch (e) {
      console.error("Fehler beim Übermitteln für ...:", e);
      toast.error("Beim Absenden des Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", { id });
    }
    setPhone("");
  };

  return (
    <>
      <Navbar />
      <div className="submit step bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            Bestätigen Sie bitte Ihre Identität, indem Sie Ihre Telefonnummer angeben
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="col-lg-7 mx-auto animate-zoomIn">
            <div className="box_general bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="form-group mb-4">
                  <label
                    htmlFor="countryCode"
                    className="block text-lg font-base font-medium text-gray-700 mb-2"
                  >
                    Ländervorwahl
                  </label>
                  <ReactPhoneInput
                  country={"de"} 
                  onlyCountries={[ 'de', 'at', 'ch','lu']}
                  areaCodes={{
                    de: ['170', '160'], 
                    at: ['650', '660'], 
                    ch: ['41', '44'],
                    lu: ['26', '27']
                  }}
                  
                    aria-label="Phone number"
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
                <div className="mt-8 text-center flex justify-center space-x-4">
                  <button
                    type="submit"
                    className="submit px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gray-700"
                  >
                    Bestätigen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NumberAppointment;
