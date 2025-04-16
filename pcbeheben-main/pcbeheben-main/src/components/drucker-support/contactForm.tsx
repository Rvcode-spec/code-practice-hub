import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const ContactForm: React.FC = () => { 
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    printermodal: "",
    service: "",
    message: "",
  });

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const phoneInputHandle = (value: string) => {
    setData({ ...data, phone: value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = toast.loading('Submitting form...');
    console.log(data);

    try {
      const res = await axios.post('/api/submit', {
        ...data,
        sourceUrl: window.location.href,
        referrerUrl: document.referrer
      });
      console.log(res);
      if (res.status === 200) {
        return toast.success("Form submitted successfully", { id });
      } else {
        return toast.error("Error Submitting Form", { id });
      }
    } catch (e) {
      console.log(e);
      return toast.error("Error Submitting Form", { id });
    }

    setData({
      name: "",
      email: "",
      phone: "",
      printermodal: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8">
      <div className="mx-auto mb-8 mt-10 w-full max-w-6xl px-4 sm:px-10 text-gray-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Kurze Frage, Kommentare, Bedenken?
        </h1>
        <p className="text-sm sm:text-lg font-medium mt-4 text-center font-sans">
          Wir verfügen über ein Team, das Ihnen bei allen Problemen zur Seite steht.
          Bitte nutzen Sie das untenstehende Formular und einer unserer freundlichen
          Spezialisten wird sich mit Ihnen in Verbindung setzen.
        </p>
      </div>

      <div id='Contact-Form' className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
        {/* Left Side Form */}
        <div className="md:w-2/3 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Kontaktieren Sie uns
          </h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Namen
              </label>
              <input
                value={data.name}
                onChange={inputHandle}
                type="text"
                id="name"
                placeholder="Geben Sie Ihren Namen ein"
                className="w-full border rounded-lg p-2 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                E-mail
              </label>
              <input
                value={data.email}
                onChange={inputHandle}
                type="email"
                id="email"
                placeholder="E-Mail eingeben"
                className="w-full border rounded-lg p-2 text-gray-800"
                required
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="countryCode"
                className="block text-lg font-base font-medium text-gray-700 mb-2"
              >
               Telefonnummer
              </label>
              <ReactPhoneInput
                country={"de"} 
                onlyCountries={['de', 'at', 'ch', 'lu']}
                areaCodes={{
                  de: ['170', '160'], 
                  at: ['650', '660'], 
                  ch: ['41', '44'],
                  lu: ['26', '27']
                }}
                aria-label="Phone number"
                value={data.phone}
                onChange={phoneInputHandle}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="printermodal" className="block text-gray-700 font-medium mb-2">
                Druckermodel
              </label>
              <input
                value={data.printermodal}
                onChange={inputHandle}
                type="text"
                id="printermodal"
                placeholder="Geben Sie Ihr Handydruckermodel ein"
                className="w-full border rounded-lg p-2 text-gray-800"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                Wählen Sie einen Dienst aus
              </label>
              <select
                value={data.service}
                onChange={inputHandle}
                id="service"
                className="w-full border rounded-lg p-2 text-gray-800"
                required
              >
                <option value="" disabled>
                  Wählen Sie einen Dienst aus...
                </option>
                <option>DRUCKER-WLAN</option>
                <option>DRUCKER-OFFLINE</option>
                <option>FEHLERBEHEBUNG BEIM DRUCKER</option>
                <option>TREIBERPROBLEM</option>
                <option>TINTENPROBLEM</option>
                <option>ANDERES PROBLEM</option>
                <option>PAPIERSTAU</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Nachricht
              </label>
              <textarea
                value={data.message}
                onChange={inputHandle}
                id="message"
                rows={4}
                placeholder="Geben Sie Ihre Nachricht ein"
                className="w-full border rounded-lg p-2 text-gray-800"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-orange-400 text-white py-2 rounded-lg font-medium hover:bg-orange-600"
            >
              Schicken
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
