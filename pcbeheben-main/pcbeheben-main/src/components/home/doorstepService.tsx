'use client';
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const DoorstepService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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

  const DoorRegister = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
      service: '',
      name: '',
      phone: '',
    });

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleSubmit = async(e: React.FormEvent) => {
      e.preventDefault();
      const id = toast.loading('Submitting form...')
      try {
        const res = await axios.post('/api/submit', {
          ...formData,
          sourceUrl: window.location.href,
          referrerUrl: document.referrer
        })
        if (res.status == 200) {
          return toast.success("Form submitted successfully", { id })
        } else {
          return toast.error("Error Submitting Form", { id })
        }
      } catch (e) {
        console.log(e)
        return toast.error("Error Submitting Form", { id })
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4 py-4">
        <div className="mx-auto my-8 flex w-full max-w-3xl flex-col p-6 md:flex-row md:p-12">
          {!isMobile && (
            <div className="hidden w-[1000px] rounded-l-xl bg-[url('/images/modal-request.jpg')] bg-cover bg-no-repeat md:block"></div>
          )}

          <div className="relative rounded-r-xl bg-white p-6 md:w-full lg:p-8 lg:px-4">
            <div className="absolute right-4 top-4">
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setIsDialogOpen(false)}
              >
                <X
                  size={24}
                  className="h-7 w-7 rounded-full bg-gray-300 px-1 py-1 font-bold text-black"
                />
              </button>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              BRAUCHEN SIE HILFE VOR DER TÜR?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Füllen Sie einfach das untenstehende Formular aus.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <select
                name="service"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                defaultValue=""
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select your service
                </option>
                <option value="Home IT Services">IT-Dienstleistungen für Zuhause</option>
                <option value="Business IT Services">IT-Dienstleistungen für Unternehmen</option>
                <option value="In-store IT Services">IT-Dienstleistungen vor Ort</option>
                <option value="Other">Andere</option>
              </select>
              <input
                name="name"
                type="text"
                placeholder="Ihr Name*"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleInputChange}
              />
              <input
                name="phone"
                type="text"
                placeholder="Ihre Telefonnummer*"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-purple-600 p-3 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Jetzt loslegen
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" ref={ref}>
      <div
        className={`mb-7 flex justify-center ${isVisible ? 'duration-1000 animate-in slide-in-from-top' : ''}`}
      >
        <div className="max-w-2xl text-center">
          <h2 className="mb-4 font-bold text-gray-700 lg:text-6xl">Türschwellendienst</h2>
          <p className="text-gray-500 sm:font-semibold lg:text-lg lg:font-bold">
            Professionelle IT-Lösungen direkt vor Ihrer Haustür.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mb-10 ml-4 grid grid-cols-1 items-center justify-center gap-8 border-none md:grid-cols-2 lg:ml-8 lg:w-3/4">
          <img
            className={`w-full rounded-lg ${isVisible ? 'duration-1000 animate-in slide-in-from-left-96' : ''}`}
            src="/images/doorstep-service-image.png"
            alt="PC beheben"
          />

          <div
            className={`space-y-8 ${isVisible ? 'duration-1000 animate-in slide-in-from-right-96' : ''}`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7b5dd6] font-bold text-white hover:border-2 hover:border-[#7b5dd6] hover:bg-white hover:text-[#7b5dd6]">
                  1
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-xl font-semibold">Wählen Sie Ihren Service aus</h5>
                <p className="font-medium text-gray-500">
                  Wählen Sie aus einer Reihe von IT- und Home-Services, die auf Ihre Bedürfnisse
                  zugeschnitten sind.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7b5dd6] font-bold text-white hover:border-2 hover:border-[#7b5dd6] hover:bg-white hover:text-[#7b5dd6]">
                  2
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-xl font-semibold">Vereinbaren Sie Ihren Termin</h5>
                <p className="font-medium text-gray-500">
                  Wählen Sie ein passendes Datum und eine passende Uhrzeit für den Gottesdienst.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7b5dd6] font-bold text-white hover:border-2 hover:border-[#7b5dd6] hover:bg-white hover:text-[#7b5dd6]">
                  3
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-xl font-semibold">Wir kümmern uns um den Rest</h5>
                <p className="font-medium text-gray-500">
                  Lehnen Sie sich zurück und entspannen Sie sich, während wir Ihre IT-Probleme
                  lösen.
                </p>
              </div>
            </div>

            <button
              className="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 md:w-auto"
              onClick={() => setIsDialogOpen(true)}
            >
              Hier registrieren
            </button>
          </div>
        </div>
      </div>

      {isDialogOpen && <DoorRegister />}
    </div>
  );
};

export default DoorstepService;
