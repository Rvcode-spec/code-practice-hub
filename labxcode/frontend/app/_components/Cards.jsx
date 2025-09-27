import React from 'react'
import { Code, Palette, Server, Smartphone, Globe, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function Cards() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that drive business growth and deliver exceptional user experiences",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Reliable"],

      gradient: " from-blue-900 to-green-600",
      iconColor: "bg-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users across all devices",
      features: ["iOS & Android", "Cross-Platform", "App Store Ready", "Push Notifications"],

      gradient: " from-blue-900 to-green-600",
      iconColor: "bg-green-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-focused designs that convert visitors to customers with stunning visual experiences",
      features: ["User Research", "Prototyping", "Design Systems", "Accessibility"],

      gradient: " from-blue-900 to-green-600",
      iconColor: "bg-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Boost your online presence with targeted strategies that deliver measurable results",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
      gradient: " from-blue-900 to-green-600",
      iconColor: "bg-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <div
          key={service.title}
          className="group relative rounded-2xl p-6 lg:p-8 transition-all duration-500 shadow-2xl  hover:scale-105  overflow-hidden"
        >
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon */}
            <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${service.iconColor} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <service.icon className="w-full h-full text-white" />
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-lg lg:text-xl font-bold text-black mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-800 text-sm lg:text-base mb-6 leading-relaxed line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-800 text-xs lg:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10">
              <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-4 rounded-full font-semibold text-sm lg:text-base hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-xl`}>
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </div>
      ))}
    </div>
  )
}