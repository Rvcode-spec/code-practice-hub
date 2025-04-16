import Link from 'next/link'
import React from 'react'

const SupportBrand = () => {
  return (
    <div id='Marken-Die-Wir-reparieren'>
	  <div className='bg-[#f5f5f5]'>
      <div className="mt-14 text-center text-gray-700 md:w-3/4 
      lg:w-2/3 mx-auto p-4">
        <h1 className="font-bold w-11/12 mx-auto  lg:text-4xl">
        Unsere unterstützen Druckermarken
        </h1>
	
      </div>

      <div className="flex flex-wrap justify-center w-3/4 mx-auto py-8 ">
        {/* Card Template */}
        {[
          {
            img: 'images/Dell.png',
       
          },
          {
            img: 'images/xerox.png',
       
          },
          {
            img: 'images/brother.png',
         
          },
          {
            img: 'images/HP.png',
        
          },
          {
            img: 'images/samsung.png',
          
          },
          {
            img: 'images/lexmark.png',
        
          },
          {
            img: 'images/Canon.png',
          
          },
          {
            img: 'images/epson.png',
        
          },
          
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[200px] md:w-[240px] lg:w-[200px] sm:h-[180px] md:h-[140px] lg:h-[100px] bg-white shadow-lg rounded-lg border-2 p-4 flex flex-col items-center text-center flex-wrap my-4 hover:bg-gray-200 mx-5 justify-center "
          >
            <Link href="/appointment">
              <img
                src={card.img}
               
                className=" w-28 h-14  " 
              />
             
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default SupportBrand