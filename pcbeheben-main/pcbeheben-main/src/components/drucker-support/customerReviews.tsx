import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star, StarHalf } from "lucide-react"; // Importing icons from Lucide

interface Review {
  id: number;
  title: string;
  description: string;
  reviewer: string;
  location: string;
  rating: number; // Assuming rating is out of 5
}

interface Slide {
  id: number;
  title: string;
  description: string;
  reviews: number;
}

const CustomerReviews: React.FC = () => {
  const reviews: Review[] = [
	{
		id: 1,
		title: "Sehr empfehlenswert!",
		description:
		  "PCBeheben ist meine erste Anlaufstelle für Druckerprobleme. Sie sind zuverlässig, reaktionsschnell und kompetent. Sie haben mich vor dem Ärger der technischen Probleme gerettet, und ich bin mit ihrem Service mehr als zufrieden.",
		reviewer: "Michael H.",
		location: "Dortmund",
		rating: 5,
	     },
	     {
		id: 2,
		title: "Beste Druckerlösung aller Zeiten!!!",
		description:
		  "PCBeheben bietet hervorragende Lösungen für Druckerprobleme. Ich war beeindruckt von ihrer schnellen Reaktionszeit und der Tatsache, dass sie sicherstellten, dass ich die Schritte verstand, die sie unternommen haben, um meinen Drucker zu reparieren. Sehr zu empfehlen!",
		reviewer: "Sophie M.",
		location: "Essen",
		rating: 5,
	     },
	     {
		id: 3,
		title: "Sehr beeindruckt von dem schnellen Service",
		description:
		  "Die Techniker von PCBeheben kennen sich wirklich aus. Ich hatte ein komplexes Druckerproblem, das mich tagelang vor Rätsel gestellt hat, aber sie haben es mit Zuversicht und Kompetenz angegangen. Das Beste war ihre Geduld, mir die Lösung Schritt für Schritt zu erklären. Dank ihnen funktioniert mein Drucker wieder einwandfrei.",
		reviewer: "David W.",
		location: "Hanover",
		rating: 5,
	     },
	     {
		id: 4,
		title: "Intelligent, schnell und zuverlässig",
		description:
		  "Ich hatte dringende Druckanforderungen für mein Unternehmen, und mein Drucker entschied sich ausgerechnet in dem ungünstigsten Moment für eine Störung. PCBeheben hat den Tag gerettet! Ihr Service am selben Tag und die effektive Problembehebung haben mich schnell wieder auf Kurs gebracht. Ich bin unglaublich dankbar für ihre schnelle und zuverlässige Unterstützung.",
		reviewer: "Linda B.",
		location: "Münster",
		rating: 5,
	     },
	     {
		id: 5,
		title: "Professioneller, zuverlässiger, freundlicher und qualitativ hochwertiger Service",
		description:
		  "PCBeheben ist ein Lebensretter! Mein Drucker hat mich ständig genervt, aber ihr Expertenteam hat das Problem schnell identifiziert und behoben. Der Service war nicht nur effizient, sondern auch sehr freundlich. Ich empfehle sie wärmstens jedem mit Druckerproblemen.",
		reviewer: "Anna S.",
		location: "Berlin",
		rating: 5,
	     },
	     {
		id: 6,
		title: "Unglaublicher Service!",
		description:
		  "PCBeheben hat mir geholfen, als ich Unterstützung für meinen Drucker brauchte. Sie haben eine klare und verständliche Lösung für mein Problem bereitgestellt, und ihre Preise waren vernünftig. Ich schätze ihre Professionalität und ihr Fachwissen.",
		reviewer: "John D.",
		location: "Munich",
		rating: 5,
	     },
	     {
		id: 7,
		title: "Effizient, freundlich und brillant",
		description:
		  "Ich hatte ein hartnäckiges Druckerproblem, das mich wochenlang geärgert hat. Das Team von PCBeheben hat es nicht nur schnell behoben, sondern auch erklärt, wie ähnliche Probleme in Zukunft vermieden werden können. Ihre Hingabe an die Kundenzufriedenheit ist lobenswert.",
		reviewer: "Maria L.",
		location: "Frankfurt am Main",
		rating: 5,
	     },
  ];

  const slides: Slide[] = []; // Placeholder for additional slides

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideListRef = useRef<HTMLDivElement>(null);
  const totalSlides = reviews.length + slides.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const slideWidth = slideListRef.current?.offsetWidth || 0;
    const transformValue = -(slideWidth * currentSlide);
    if (slideListRef.current) {
      slideListRef.current.style.transform = `translateX(${transformValue}px)`;
    }
  }, [currentSlide]);

  const getSlideContent = (index: number) => {
    if (index < reviews.length) {
      const review = reviews[index];
      return (
        <div
          key={review.id}
          className="slideshow__item flex-none w-full p-8 text-center bg-gray-50"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            {review.title}
          </h2>
          <p className="text-gray-600 mt-4">{review.description}</p>
          <div className="mt-4">
            <span className="text-yellow-500 font-semibold">
              {Array.from({ length: review.rating }, (_, i) => (
                <Star key={i} className="inline-block" />
              ))}
              {review.rating < 5 && <StarHalf className="inline-block" />}
              {` (${review.reviewer}, ${review.location})`}
            </span>
          </div>
        </div>
      );
    } else {
      const slide = slides[index - reviews.length];
      return (
        <div
          key={slide.id}
          className="slideshow__item flex-none w-full p-8 text-center bg-gray-50"
        >
          <h2 className="text-2xl font-semibold text-gray-800">{slide.title}</h2>
          <p className="text-gray-600 mt-4">{slide.description}</p>
          <div className="mt-4">
            <span className="text-yellow-500 font-semibold">
              {slide.reviews} Reviews
            </span>
          </div>
        </div>
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const touchMoveX = moveEvent.touches[0].clientX;
      const slideWidth = slideListRef.current?.offsetWidth || 0;

      if (touchStartX - touchMoveX > slideWidth / 3) {
        handleNext();
        document.removeEventListener("touchmove", handleTouchMove);
      } else if (touchMoveX - touchStartX > slideWidth / 3) {
        handlePrev();
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", handleTouchMove);
    });
  };

  return (
	<div className="p-6" id="reviews">
	<h1 className="text-3xl font-bold text-center mb-6">
	  Was unsere Kunden sagen
	</h1>
	<p className="mx-auto text-center">
	  Ausgezeichnete Lösungen für Druckerprobleme - PC Beheben liefert immer!
	</p>
	<div className="relative w-full max-w-3xl mx-auto overflow-hidden border rounded-lg shadow-lg bg-white">
	  {/* Slide Container */}
	  <div
	    ref={slideListRef}
	    className="slideshow__list flex transition-transform duration-500 ease-in-out"
	    onTouchStart={handleTouchStart}
	  >
	    {Array.from({ length: totalSlides }).map((_, index) =>
	      getSlideContent(index)
	    )}
	  </div>
	</div>
     
	{/* Navigation Arrows - Outside the Slideshow */}
	{/* <button
	  onClick={handlePrev}
	  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 focus:ring focus:ring-gray-400"
	>
	  <ArrowLeft size={24} />
	</button>
	<button
	  onClick={handleNext}
	  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 focus:ring focus:ring-gray-400"
	>
	  <ArrowRight size={24} />
	</button> */}
     
	{/* Pagination */}
	<div className="dotNav flex justify-center mt-4 space-x-2">
	  {Array.from({ length: totalSlides }).map((_, index) => (
	    <button
	      key={index}
	      onClick={() => setCurrentSlide(index)}
	      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
		 currentSlide === index ? "bg-gray-800" : "bg-gray-400"
	      }`}
	    />
	  ))}
	</div>
     </div>
     
  );
};

export default CustomerReviews;
