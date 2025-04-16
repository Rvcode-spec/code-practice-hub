import Link from 'next/link'
import React from 'react'

const ServiceLocation = () => {
  return (
    <div className=' my-20'>
	<div className="flex flex-col items-center justify-center p-8 md:flex-row bg-[#f5f5f5]">
      {/* Content Section */}
      <div className="mb-8 animate-reveal-left text-center md:mb-0 md:mr-4 md:w-1/3 md:text-left">
        <h1 className="mb-4 text-3xl font-semibold text-gray-700 md:text-4xl">
	 Drucker Service von Ort
        </h1>
        <p className="mb-6 text-base text-gray-500 md:text-lg">
	 Wir bieten Vor-Ort-Druckerservices an und schicken bei allen Druckerproblemen qualifizierte Techniker direkt an Ihre Haustür. Erleben Sie schnelle und effiziente Lösungen, ohne Ihre Räumlichkeiten zu verlassen. Ihr Druckerproblem ist unsere Priorität. Kontaktieren Sie uns noch heute für unkomplizierte, fachkundige Unterstützung.
        </p>
        <Link href="/appointment">
        <button className="rounded-2xl  0 px-6 py-3 text-lg font-semibold text-white bg-orange-400 hover:bg-orange-600 hover:text-white hover:border-white ">
  Termin
  vereinbaren
        </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="mb-10 flex animate-reveal-left flex-col items-center md:w-1/2 mt-8">
        <img
          src="images/on-site-printer-repair1.jpg"
          alt="Älteres Paar, das lächelnd auf einen Laptop schaut"
          className="mb-4 w-full max-w-md rounded-xl lg:max-w-lg"
        />
      </div>
    </div>
    </div>
  )
}

export default ServiceLocation