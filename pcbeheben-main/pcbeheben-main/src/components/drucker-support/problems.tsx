import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { useAtom } from "jotai";
import { currentStepAtom, storeAtom,  } from "../../lib/atom/atoms";

// Problems array
const problems = [
  { id: 1, title: 'DRUCKER-WLAN', icon: '/images/problem1.png', alt: 'Printer with WiFi icon' },
  { id: 2, title: 'DRUCKER OFFLINE', icon: '/images/problem2.png', alt: 'Printer offline icon' },
  { id: 3, title: 'FEHLERBEHEBUNG BEIM DRUCKER', icon: '/images/problem3.png', alt: 'Printer troubleshooting icon' },
  { id: 4, title: 'TREIBERPROBLEM', icon: '/images/problem4.png', alt: 'Driver problem icon' },
  { id: 5, title: 'TINTENPROBLEM', icon: '/images/problem5.png', alt: 'Ink problem icon' },
  { id: 6, title: 'PAPIERSTAU', icon: '/images/problem6.png', alt: 'Paper jam icon' },
  { id: 7, title: 'ANDERES PROBLEM', icon: '/images/problem7.png', alt: 'Other problem icon' },
];

const ProblemsPage = () => {
  const [, setStep] = useAtom(currentStepAtom);
 const [ , setStore] = useAtom(storeAtom)

  const handleProblemClick = (problemTitle : string) => {
     setStep(2);
     setStore((prev)=> ({
      ...prev , problemTitle
    }))
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8">
          Wählen Sie unten ein Problem für den Drucker aus
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:px-14  md:translate-x-16 md:px-16 sm:translate-x-10 lg:-translate-x-16 lg:mx-16 lg:w-full">
          {problems.map((problem) => (
               <button
               onClick={() => handleProblemClick(problem.title

               )}
               role="button"
               aria-label={`Select ${problem.title}`}
               className="justify-center items-center "
             >
            <div
              key={problem.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center lg:w-4/6 md:w-7/12  sm:w-1/3  lg:mx-20 lg:px-10 "
            >
           
                <div className="relative lg:w-20 h-20 mx-auto mb-4 ">
                  <img
                    src={problem.icon}
                    alt={problem.alt}
                    className="object-contain items-center ml-8 lg:-translate-x-8 md:-translate-x-4"
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
                  />
                </div>
                <p className="text-gray-700 text-center font-medium">{problem.title}</p>
             
            </div>
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProblemsPage;
