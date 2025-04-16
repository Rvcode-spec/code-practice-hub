'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const carouseldata: {
  name: string;
  title: string;
  description: string;
  img: string;
}[] = [
  {
    name: 'Günther',
    title: 'Musikerin',
    description:
      'Ich war beeindruckt von den maßgeschneiderten Lösungen von PC Beheben für mein Unternehmen. Sie konnten für uns ein neues Computersystem einrichten und alle auftretenden Probleme beheben. Ihr Team war professionell und effizient und sie boten uns einen hervorragenden Kundenservice.',
    img: '/images/review-author-4.jpg',
  },
  {
    name: 'Emily',
    title: 'Leitender Designer',
    description:
      'Ich habe eine großartige Erfahrung mit den Upgrade-Services von PC Beheben gemacht. Sie konnten meinem Computer mehr RAM hinzufügen, was dazu beitrug, dass er viel schneller lief. Ihr Team war kompetent und freundlich und gab mir hilfreiche Ratschläge, wie ich dafür sorgen konnte, dass mein Computer reibungslos läuft.',
    img: '/images/review-author-5.jpg',
  },
  {
    name: 'Heinrich',
    title: 'Inhalts Autor',
    description:
      'Ich habe den schnellen und zuverlässigen Service von PC Beheben geschätzt, als ich ein technisches Problem mit meinem Computer hatte. Ihr Team war in der Lage, das Problem schnell zu diagnostizieren und zu beheben, was mir half, ohne Ausfallzeiten wieder an die Arbeit zu gehen. Ich würde ihre Dienste auf jeden Fall wieder in Anspruch nehmen.',
    img: '/images/review-author-6.jpg',
  },
  {
    name: 'STEVE',
    title: 'Entwicklerin',
    description:
      'Ich hatte eine tolle Erfahrung mit PC Beheben! Ihr Team konnte meinen Laptop schnell und effizient reparieren und hielt mich während des gesamten Prozesses auf dem Laufenden. Ich schätze ihre Professionalität und würde sie auf jeden Fall jedem empfehlen, der Computerreparaturdienste benötigt.',
    img: '/images/review-author-1.jpg',
  },
  {
    name: 'Paul',
    title: 'Restaurantbesitzer',
    description:
      'Ich habe mich wegen eines Virus auf meinem Computer an PC Beheben gewandt und sie konnten ihn schnell und effektiv entfernen. Ihr Team war sachkundig und freundlich und sie gaben mir hilfreiche Tipps, um künftigen Infektionen vorzubeugen. Ich war mit ihrem Service sehr zufrieden.',
    img: '/images/review-author-2.jpg',
  },
  {
    name: 'Olivia',
    title: 'Grafikdesigner',
    description:
      'Ich hatte eine großartige Erfahrung mit den Wartungsdiensten von PC Beheben. Sie konnten meinen Computer optimieren und unnötige Dateien entfernen, was dazu führte, dass er viel schneller lief. Ihr Team war freundlich und kompetent und ich schätzte ihre Liebe zum Detail.',
    img: '/images/review-author-3.jpg',
  },
];

const Testimonials = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="mt-[15%] flex flex-col items-center justify-center bg-indigo-50 p-3">
      {' '}
      {/*main div */}
      {/* heading starts */}
      <div className="mt-14 text-center text-gray-700 md:w-3/4 lg:w-2/4">
        <h1 className="font-bold md:text-[2rem] lg:text-[3rem]">
          Das sagen unsere großartigen Kunden
        </h1>

        <p className="m-5 font-bold md:text-[1.1rem] lg:text-[1.2rem]">
          Entdecken Sie die Zufriedenheit unserer Dienstleistungen anhand von Kundenstimmen.
        </p>
      </div>
      {/* heading ends */}
      {/* carousel div starts */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full p-7 sm:p-20 md:block md:w-[90%] lg:w-[80%]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouseldata.map((item, index) => {
            return (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                {/* <div className="bg-primary h-20 w-full"></div> */}
                <div className="relative z-20 p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-start justify-center gap-4 p-6">
                      <p className="relative z-20 text-gray-600">{item.description}</p>
                      <span>
                        <Quote className="absolute left-7 top-0 fill-current sm:top-40 md:top-6 opacity-25 w-14 h-14 rotate-180 " />
                      </span>
                      <div className="flex gap-4">
                        <img src={item.img} className="h-12 w-12 rounded-full" alt="" />

                        <div className="flex flex-col">
                          <p className="font-bold text-gray-800">{item.name}</p>
                          <p className="text-gray-600">{item.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      {/* carousel div ends*/}
    </div>
  );
};

export default Testimonials;
