'use client';
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { useAtom } from 'jotai';
import { currentStepAtom, selectedServiceAtom, storeAtom} from '../../lib/atom/atoms';

const Appointment = () => {
 
  
  const [step, setStep] = useAtom(currentStepAtom); 
  const [service, setService] = useAtom(selectedServiceAtom); 
 const [, setStoreAtom] = useAtom(storeAtom)

  
  const cardData = [
    { image: '/images/appointment1.svg', title: 'Windows' },
    { image: '/images/appointment2.svg', title: 'Mac' },
    { image: '/images/appointment3.svg', title: 'Chromebook' },
  ];

  
  const handleCardClick = (service: string) => {
    setService(service); 
    setStep(1); 
  setStoreAtom((prev)=>(
    {
      ...prev, service
    }
  )) 
  };

  return (
    <div>
  
      <Navbar />

  
      <div className="mx-auto w-full h-auto my-3 py-5 lg:px-20">
        <h1 className="text-gray-700 text-4xl font-bold text-center">
          Wählen Sie unten das Betriebssystem aus
        </h1>

 
        <div className="flex flex-wrap justify-center items-center py-5 mt-3">
          {cardData.map((card) => (
            <div
              key={card.title} 
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto cursor-pointer hover:shadow-xl transition-shadow duration-200"
            >
              <button onClick={() => handleCardClick(card.title)}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-40 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-4 text-center">{card.title}</h2>
              </button>
            </div>
          ))}
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Appointment;
