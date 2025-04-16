"use client";
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { currentStepAtom, storeAtom } from '../../lib/atom/atoms';
import Navbar from './navbar';
import Footer from './footer';
import { Any } from 'next-sanity';
import useRouter from '@/hooks/use-custom-router';
import { form } from 'sanity/structure';

function FormAppointment() {
  const router = useRouter();
  // Local state for form inputs
  const [, setStep] = useAtom(currentStepAtom);
  const [data, setData] = useAtom(storeAtom); // The global data state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    model: '',
    acceptProblem: false,
  });

  const handleSubmit = async (event: Any) => {
    event.preventDefault();
    
    setData(()=>{
      return {...data, ...formState }
    });

    setStep(4); 
  };


  const handleChange = (event: Any) => {
    const { name, value, type, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="md:min-w-fit">
      <Navbar />
      <div className="text-center w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-700 pr-2 w-3/4 mx-auto mt-6">
          Können Sie uns bitte Ihren Namen und email nennen, bevor wir mit der Fehlerbehebung beginnen?
        </h1>
        <form
          className="max-w-lg w-full mx-auto border-2 px-6 sm:px-12 pt-9 pb-12"
          onSubmit={handleSubmit}
        >
          <div className="md:flex md:items-center mb-6">
            <div className="w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Kundenname"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                type="email"
                placeholder="E-mail"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-model"
                type="text"
                placeholder="Druckermodell"
                name="model"
                value={formState.model}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <label className="md:w-full block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                name="acceptProblem"
                checked={formState.acceptProblem}
                onChange={handleChange}
              />
              <span className="text-sm">
                Wir können Ihnen möglicherweise weitere Lösungen oder Produkte empfehlen, die Ihr Problem beheben können
              </span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-2/3 mx-auto">
              <button
                className="shadow bg-orange-400 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-5 -translate-y-4"
                type="submit"
              >
                Weiter
              </button>
            </div>
          </div>
        </form>
        <div className="mt-24"></div>
      </div>
      <Footer />
    </div>
  );
}

export default FormAppointment;
