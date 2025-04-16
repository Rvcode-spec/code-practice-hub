"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import React from 'react';



const Hero = () => {
  return (
	<div id='Hero' className="lg:items-starts flex flex-col-reverse p-10 md:flex-row md:items-center md:gap-7 md:p-16 lg:p-24 ">
	{' '}
	{/*main div starts */}
	{/* text-content-starts */}
	<div
	  className={`mt-3 flex w-full flex-col gap-3 leading-tight md:w-1/2 md:gap-4 lg:w-1/2 lg:gap-8  `}
	
	>
	
	  <h1 className="text-[1.3rem] font-bold text-gray-800 md:text-[1.5rem] lg:text-[3rem]">
	  Drucken Sie wieder wie ein Profi : <span className='text-sky-900'>
	  Ihr Leitfaden zur Fehlerbehebung.
	  </span>
	  </h1>
 
	  <p className="text-[0.9rem] text-gray-600 md:text-[0.9rem] lg:text-[1.3rem] font-bold">
	  Schnell – zuverlässig – erschwinglich
	  </p>
 
	  <ul className="flex list-inside list-disc flex-col gap-4 list-none">
	  <li className="text-base text-gray-600 md:text-[0.9rem] lg:text-[1.1rem] flex items-center">
  <span className="mr-2 ">
  <Check size={20} color="#00759d" strokeWidth={3} />
  </span>
  Verabschieden Sie sich von Papierstau
</li>

<li className="text-base text-gray-600 md:text-[0.9rem] lg:text-[1.1rem] flex items-center">
  <span className="mr-2 ">
  <Check size={20} color="#00759d" strokeWidth={3} />
  </span>
  Tintenflecken und Verbindungsproblemen
</li>


<li className="text-base text-gray-600 md:text-[0.9rem] lg:text-[1.1rem] flex justify-center">
  <span className="mr-2 mt-1 ">
  <Check size={20} color="#00759d" strokeWidth={3} />
  </span>
  Machen Sie sich bereit, wie ein Profi zu drucken und genießen Sie ein frustfreies Druckerlebnis
</li>

	  </ul>
	 <div className=' w-36 ml-6 '>
		<button className='bg-orange-400 px-3  py-3 rounded-xl
		 hover:bg-orange-600 text-base font-bold text-gray-100'>
		<Link href="/appointment">Überprüfe hier</Link>
		</button>
	 </div>
	</div>
	{/* text-content-ends */}
	{/* image div starts */}
	<div
	  className={`  rounded-2xl md:w-full lg:w-1/2`}
	  
	>
	 <img
  src="/images/DRUCKEN-SIE-WIEDER.png"
  className="w-full h-2/3 rounded-2xl"
  alt=""
/>

	</div>
	{/* image div ends */}
	{/* main div ends */}
     </div>
  )
}

export default Hero