import Link from 'next/link'
import React from 'react'
import { useAtom } from 'jotai'
import { currentStepAtom, storeAtom } from '../../lib/atom/atoms'
import Navbar from './navbar'
import Footer from './footer'

const PrinterModel = () => {
  const [, setStep] = useAtom(currentStepAtom);

  const [, setStore] = useAtom(storeAtom)

  const handlePrinterModel = (printermodal: string) => {
    setStep(3);
    setStore((prev) => ({
      ...prev, printermodal
    }))
  }



  return (
    <div>
      <Navbar />
      <div >
        <div className="mt-14 text-center text-gray-700 md:w-3/4 
      lg:w-2/3 mx-auto p-4">
          <h1 className="font-bold w-11/12 mx-auto  lg:text-4xl">
            Wählen Sie die Marke oder das Modell des Druckers aus
          </h1>

        </div>

        <div className="flex flex-wrap justify-center w-3/4 mx-auto py-8 ">
          {/* Card Template */}
          {[
            {
              label: 'Xerox',
              img: 'images/xerox.png',
            },
            {
              label: "brother",
              img: 'images/brother.png',
            },
            {
              label: "Hp",
              img: 'images/HP.png',
            },
            {
              label: "Canon",
              img: 'images/Canon.png',
            },
            {
              label: "Epson",
              img: 'images/epson.png',
            },
            {
              label: "Andere",
              img: 'images/andere.png'
            }
          ].map((card, index) => (
            <button onClick={() => handlePrinterModel(card.label)} >
            <div
              key={index}
              className="w-full sm:w-[200px] md:w-[240px] lg:w-[200px] sm:h-[180px] md:h-[140px] lg:h-[100px] bg-white shadow-xl rounded-lg border-2 p-4 flex flex-col items-center text-center flex-wrap my-4 hover:bg-gray-200 mx-5 justify-center "
            >
             
                <img
                  src={card.img}
                  className=" w-28 h-16  "
                />
              
            </div>
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrinterModel