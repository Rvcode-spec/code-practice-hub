import React from 'react';
import { Star } from 'lucide-react';
import { StarHalf } from 'lucide-react';

const Ourcustomerslove = () => {
  return (
    <div className="mt-[12%] flex flex-col items-center">
      <h1 className="text-center text-[0.9rem] font-bold text-gray-600 md:text-[1rem] lg:text-[1.3rem]">
        Unsere Kunden lieben uns genauso wie wir sie lieben
      </h1>

      {/* icon div */}
      <div className="mt-[3%] flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="flex flex-col items-center">
          <img
            src="/images/brand-21.png"
            className="w-44 md:w-48 lg:w-60"
            alt="/images/brand-21.png"
          />

          <div className="flex gap-2">
            <div className="flex">
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <StarHalf className="w-4 fill-current text-yellow-500" />
            </div>
            <p>4.7/5</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/brand-22.png"
            className="w-44 md:w-48 lg:w-60"
            alt="/images/brand-22.png"
          />

          <div className="flex gap-2">
            <div className="flex">
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
            </div>
            <p>4.95/5</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/brand-23.png"
            className="w-44 md:w-48 lg:w-60"
            alt="/images/brand-23.png"
          />

          <div className="flex gap-2">
            <div className="flex">
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 fill-current text-yellow-500" />
              <Star className="w-4 text-yellow-500" />
            </div>
            <p>4.24/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourcustomerslove;
