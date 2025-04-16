import { PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CallSerivce = () => {
  return (
    <div>
	 <div className="flex flex-col items-center justify-center p-8 md:flex-row mt-10">
      {/* Content Section */}
      <div className="mb-8 animate-reveal-left text-center md:mb-0 md:mr-4 md:w-1/3 md:text-left">
        <h1 className="mb-4 text-3xl font-semibold text-gray-700 md:text-4xl">
        Problem - brauchen Sie hilfe!
        </h1>
        <p className="mb-6 text-base text-gray-500 md:text-lg">
        Haben Sie Probleme mit Ihrem Drucker? Lassen Sie sich davon nicht aufhalten! <span className=' underline text-orange-400'><Link href="#">Chatten Sie jetzt mit uns</Link></span>, um auf Expertenlösungen für die Wiederinbetriebnahme Ihres Druckers zuzugreifen. Verabschieden Sie sich von Druckproblemen – oder rufen Sie uns jetzt an!
        </p>
        <div className="flex items-center space-x-2">
  <PhoneIcon className="text-gray-800 text-2xl" />
  <span className="text-gray-800 font-bold text-2xl">+49 8001 830881</span>
</div>
<p className='text-gray-500 font-medium'>Wir können alle Druckermarken und -modelle reparieren</p>
        
      </div>

      {/* Image Section */}
      <div className="mb-10 flex  animate-reveal-left flex-col  items-center md:w-1/2">
        <img
          src="images/Drucker-offline1.jpg"
          alt="Älteres Paar, das lächelnd auf einen Laptop schaut"
          className="mb-4 w-2/3 rounded-xl max-w-md rounded-lg lg:max-w-lg"
        />
      </div>
    </div>
    </div>
  )
}

export default CallSerivce