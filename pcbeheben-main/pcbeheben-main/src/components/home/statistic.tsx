'use client';
import React, { useState, useEffect, useRef } from 'react';

const Statistic: React.FC = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetValues = {
      customerCount: 2500,
      satisfactionRate: 94,
      averageRating: 4.54,
    };

    const duration = 2000;
    const interval = 50;

    const customerIncrement = targetValues.customerCount / (duration / interval);
    const satisfactionIncrement = targetValues.satisfactionRate / (duration / interval);
    const ratingIncrement = targetValues.averageRating / (duration / interval);

    let elapsedTime = 2;

    if (startCounting) {
      const timer = setInterval(() => {
        elapsedTime += interval;

        setCustomerCount((prev) => Math.min(prev + customerIncrement, targetValues.customerCount));
        setSatisfactionRate((prev) =>
          Math.min(prev + satisfactionIncrement, targetValues.satisfactionRate),
        );
        setAverageRating((prev) => Math.min(prev + ratingIncrement, targetValues.averageRating));

        if (elapsedTime >= duration) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [startCounting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
          }
        });
      },
      { threshold: 1 },
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={statRef}
      className="mx-14 flex animate-reveal-left animate-reveal-top flex-col items-center justify-between space-y-10 bg-white py-10 md:flex-row md:space-x-16 md:space-y-0 lg:mx-28"
    >
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-800 md:text-5xl">{Math.floor(customerCount)}</p>
        <p className="text-sm text-gray-600 md:text-lg">Über zufriedene Kunden</p>
        <p className="text-sm text-gray-600 md:text-lg">und Zählen.</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-800 md:text-5xl">
          {Math.floor(satisfactionRate)}%
        </p>
        <p className="text-sm text-gray-600 md:text-lg">Außergewöhnliche</p>
        <p className="text-sm text-gray-600 md:text-lg">Zufriedenheitsrate.</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-800 md:text-5xl">{averageRating.toFixed(2)}</p>
        <p className="text-sm text-gray-600 md:text-lg">Durchschnittliche Bewertung.</p>
        <p className="text-sm text-gray-600 md:text-lg">Bewertung.</p>
      </div>
    </div>
  );
};

export default Statistic;
