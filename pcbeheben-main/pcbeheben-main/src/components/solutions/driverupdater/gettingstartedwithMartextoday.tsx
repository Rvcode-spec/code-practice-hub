import React from 'react';
import Link from '@/components/layout/custom-link';
import Routes from '@/lib/routes';

const GettingstartedwithMartextoday = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-32">
      {/* Contact button */}
      <div className="rounded-full bg-indigo-50 p-4 md:w-96 md:p-5">
        <p className="text-[0.9rem] text-gray-500 md:text-[1.1rem]">
          Haben Sie Fragen?
          <Link href={Routes.contact} className="border-primary text-primary underline">
            In Kontakt kommen
          </Link>
        </p>
      </div>

      {/* Banner */}
      <div className="relative mt-[10%] overflow-hidden p-10 text-center md:flex md:w-full md:rounded-2xl md:p-7 md:text-left">
        {/* Background div */}
        <div className="absolute inset-0 -z-10 bg-[url('/images/bg-05.jpg')] bg-cover bg-center md:rounded-2xl"></div>

        {/* Text content */}
        <div className="flex flex-col items-center gap-4 md:items-start lg:ml-20 lg:mt-44">
          <p className="text-[1.2rem] font-bold text-white md:text-2xl lg:text-5xl">
            Starten Sie noch heute mit Martex!
          </p>
          <p className="text-[0.9rem] text-white md:text-lg lg:text-2xl">
            Congue laoreet turpis neque auctor turpis vitae dolor a luctus placerat and magna ligula
            cursus.
          </p>

          <Link
            href={Routes.contact}
            className="w-fit rounded-xl border-2 !bg-primary pb-2 pl-4 pr-4 pt-2 text-white duration-300 ease-in-out hover:border-black hover:!bg-white hover:text-black"
          >
            Lassen Sie sich srarted-es ist kostenlos
          </Link>
        </div>

        {/* Image */}
        <div className="w-full -rotate-12 md:translate-x-16 md:translate-y-10 lg:translate-x-20 lg:translate-y-10">
          <img
            src="/images/img-04.png"
            alt="/images/img-04.png"
            className="hidden object-contain md:block md:h-fit md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GettingstartedwithMartextoday;
