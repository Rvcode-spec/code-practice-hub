"use client"
import Link from 'next/link'
import React from 'react'

const LiveChat = () => {
  return (

	  <>
      {/* <div className="mx-auto rounded-full bg-indigo-50 p-4 md:w-96 md:p-5">
        <p className="text-[0.9rem] text-gray-500 md:text-[1.1rem]">
          Haben Sie Fragen?
          <Link href="/get-in-touch" className="border-primary text-primary underline">
            In Kontakt kommen
          </Link>
        </p>
      </div> */}
      <div
        className={`flex min-h-screen flex-col items-center justify-center gap-10 bg-white px-4 sm:px-6 lg:px-8`}
        id="Beste-Losungen"
      
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between overflow-hidden rounded-lg bg-[url('/images/cta-3.jpg')] bg-cover bg-center p-6 sm:p-8 md:flex-row">
          <div className="z-10 text-white md:w-1/2">
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
	     Probleme mit Ihrem Drucker? PC Beheben Expertenlösungen heute! <span className='text-orange-300'>Erhalten Sie 20 % Rabatt</span>
            </h1>
            <p className="mb-6 text-sm font-medium sm:text-base md:text-lg">
            Verbinden Sie sich mit unserem Live-Chat, um Echtzeit Unterstützung von unserem engagierten Team zu erhalten.
            </p>

            <Link href="/appointment">
              <button className="rounded-lg border-2 bg-orange-400 px-5 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-orange-600 sm:text-base lg:mt-6 ml-7">
               CHATTEN
              </button>
            </Link>
          </div>

          <div className="relative mt-6 md:mt-0 md:w-1/2">
            <img
              src="images/laptop-fix-discount.png"
              alt="Screenshot of POS system on a mobile and desktop device"
              className=" mt-4 translate-y-8 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>

    
  )
}

export default LiveChat