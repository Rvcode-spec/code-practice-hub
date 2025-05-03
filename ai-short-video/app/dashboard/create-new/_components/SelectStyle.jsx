import React, { useState } from 'react'
import Image from 'next/image';
export default function SelectStyle({onUserSelect}) {

    const styleOptions=[
        {
            name:'Realstic',
            image:'/real.png'

        },

        {
            name:'Cortoon',
            image:'/cartoon.jpg'

        },

        {
            name:'comic',
            image:'/comic.jpg'

        },

        {
            name:'WaterColor',
            image:'/watercolor.jpg'

        },
    ]

    const [selectedOption, setSelectedOption] = useState()

  return (
    <div className='mt-7'>
       <h2 className='font-bold text-xl text-primary '>Style</h2>
       <p className='text-gray-500'>Select your video style?</p>

       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4xl xl:grid-cols-6 gap-5 mt-3'>
        {styleOptions.map((item,index)=>(
            <div key={index} className={`relative hover:scale-105 transition-all 
                cursor-pointer rounded-xl
            ${selectedOption==item.name&&'border-4 border-pink-500'}
            
            `}>
                <Image src={item.image} width={100} height={100} alt="img"
                className='h-48 object-cover rounded-lg w-full'
                onClick={()=>{
                    setSelectedOption(item.name)
                    onUserSelect('imageStyle',item.name)

                }}
                />
                <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">{item.name}</h2>
            </div>
        ))}
       </div>
    </div>
  )
}
