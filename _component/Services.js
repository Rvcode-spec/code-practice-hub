"use client";

import React, { useState } from "react";
import { Code, Smartphone, Palette, Server } from "lucide-react";

export default function Services() {  
  const services = [
    { icon: Code, title: 'Web Development', desc: 'Modern, responsive websites built with cutting-edge technology' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful, intuitive user interfaces and experiences' },
    { icon: Server, title: 'Server Solutions', desc: 'Robust backend infrastructure and hosting services' }
  ];

  const [currentService, setCurrentService] = useState(0);

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
        </h2>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Spotlight Section */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-slate-700">
          <div key={currentService} className="animate-fade-in">
            {React.createElement(services[currentService].icon, { 
              className: "w-12 h-12 text-cyan-400 mx-auto mb-4" 
            })}
            <h3 className="text-xl font-semibold mb-2 text-center">{services[currentService].title}</h3>
            <p className="text-gray-300 text-center">{services[currentService].desc}</p>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentService ? 'bg-cyan-400 scale-110' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentService(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
