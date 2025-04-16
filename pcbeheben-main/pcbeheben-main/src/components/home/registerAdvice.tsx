'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Pointer } from 'lucide-react';
import { X } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const RegisterAdvice: React.FC = () => {
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

  const Register = () => {
    const [isMobile, setIsMobile] = useState(false);

    const [formData, setFormData] = useState({
      service: '',
      name: '',
      phone: '',
      email: '',
      message: '',
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

    const handleSubmit = async (e: React.FormEvent) => {
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

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
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
              Werden Sie Partner bei PC Beheben
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Ihre Informationen sind bei uns sicher. Wir garantieren 100%ige Datensicherheit.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name input */}
              <input
                name="name"
                type="text"
                placeholder="Gib deinen Namen ein*"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleInputChange}
              />

              {/* Phone input */}
              <input
                name="phone"
                type="text"
                placeholder="Deine Telefonnummer*"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleInputChange}
              />

              {/* Email input */}
              <input
                name="email"
                type="email"
                placeholder="Ihre E-mail*"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleInputChange}
              />

              {/* Message textarea */}
              <textarea
                name="message"
                value={formData.message} // Controlled input
                placeholder="Your message*"
                className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleInputChange}
                style={{ minHeight: '50px' }} // Optional: Minimum height for textarea
              />

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-purple-600 p-3 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Einreichen
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="RegisterAdvice"
      className="relative mx-auto flex h-5/6 w-11/12 items-center justify-center overflow-y-hidden bg-[url('/images/bg-03.jpg')] bg-cover bg-center bg-no-repeat py-14"
      ref={ref}
    >
      <div
        className={`w-full max-w-md px-4 text-center text-white md:max-w-lg lg:max-w-2xl ${isVisible ? 'duration-1000 animate-in slide-in-from-top' : ''}`}
      >
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Werden Sie Partner bei PC Beheben
        </h1>
        <p className="mb-6 text-lg leading-relaxed sm:text-xl md:text-2xl">
          Erschließen Sie Wachstum, erweitern Sie die Reichweite und entwickeln Sie gemeinsam
          Innovationen in der Technologiebranche.
        </p>
        <button
          className="mx-auto flex transform items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
          onClick={() => setIsDialogOpen(true)}
        >
          <Pointer className="mr-2" /> Hier registrieren
        </button>
        <p className="mt-4 text-sm sm:text-base">Die Registrierung ist kostenlos.</p>
      </div>
      {isDialogOpen && <Register />}
    </div>
  );
};
export default RegisterAdvice;
