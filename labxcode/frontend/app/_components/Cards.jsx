import React from 'react'
import { Code, Palette, Server, Smartphone } from 'lucide-react';


export default function Cards() {
     const services = [
    { icon: Code, title: 'Web Development', desc: 'Modern, responsive websites built with cutting-edge technology' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful, intuitive user interfaces and experiences' },
    { icon: Server, title: 'Server Solutions', desc: 'Robust backend infrastructure and hosting services' }
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service) => (
        <div key={service.title} className="bg-white rounded-lg shadow-md p-4">
          <service.icon className="w-12 h-12 text-cyan-500 mb-2" />
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  )
}
