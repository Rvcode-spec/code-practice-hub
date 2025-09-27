"use client";
import React, { useState } from 'react';
import { Globe, Smartphone, Palette, Edit3, TrendingUp, Code, Monitor, Search, MessageSquare, ShoppingCart, Database, Cloud, ArrowRight, Check, Star, Users } from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('web');

  const mainServices = [
    {
      id: 'web',
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      subtitle: "Static & Dynamic Websites",
      description: "Modern, responsive, and secure websites that drive business growth",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Reliable"],
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      startingPrice: "₹15,000"
    },
    {
      id: 'mobile',
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      subtitle: "iOS & Android Applications",
      description: "Advanced mobile applications that engage users and boost your business",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Real-time Updates"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      startingPrice: "₹25,000"
    },
    {
      id: 'design',
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      subtitle: "User Experience & Interface",
      description: "User-focused, engaging, and visually appealing designs that convert",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      startingPrice: "₹8,000"
    },
    {
      id: 'marketing',
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      subtitle: "SEO & Social Media",
      description: "Comprehensive digital marketing strategies to boost your online presence",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
      startingPrice: "₹5,000"
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions for your specific business needs",
      price: "Starting from ₹20,000"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Secure and efficient database design and management",
      price: "Starting from ₹10,000"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Cloud migration, hosting, and management services",
      price: "Starting from ₹12,000"
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Content Management",
      description: "Professional content creation and optimization services",
      price: "Starting from ₹3,000"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Consulting",
      description: "Expert SEO audit and strategy development",
      price: "Starting from ₹5,000"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store development and management",
      price: "Starting from ₹18,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team creates stunning designs and develops robust solutions"
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures quality and optimal performance"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Successful deployment with ongoing support and maintenance"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      rating: 5,
      text: "LabXCode transformed our digital presence completely. Their web development skills are outstanding!"
    },
    {
      name: "Priya Sharma",
      company: "Fashion Hub",
      rating: 5,
      text: "The mobile app they developed for us increased our sales by 300%. Highly recommended!"
    },
    {
      name: "Amit Patel",
      company: "Local Business",
      rating: 5,
      text: "Professional, timely, and excellent results. LabXCode is our go-to tech partner."
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-800 mb-6 leading-tight">
              Our <span className="text-blue-800">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive digital solutions to transform your business and drive growth in the digital age
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Tabs */}
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold text-blue-800 mb-2 top-8">Core Services</h2>
          <p className="text-xl text-gray-900">Choose the service that fits your needs</p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {mainServices.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all hover:scale-105  duration-300 text-xl  ${activeTab === service.id
                  ? 'bg-gradient-to-r from-blue-500 to-green-700 text-white shadow-lg '
                  : 'bg-white/10 text-gray-700 hover:text-blue-600 hover:font-bold hover:text-xl'
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="w-full max-w-6xl mx-auto">
          {mainServices.map((service) => (
            activeTab === service.id && (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="text-green-600 w-10 h-10 sm:w-12 sm:h-12">{service.icon}</div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 leading-tight">{service.title}</h3>
                    <p className="text-lg sm:text-xl text-green-800 font-bold">{service.subtitle}</p>
                    <p className="text-gray-900 text-base sm:text-lg leading-relaxed">{service.description}</p>

                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-black mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-900 text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                      Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                      <h4 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {service.technologies.map((tech, index) => (
                          <span key={index} className="bg-white/10 text-green-600 font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <h5 className="font-semibold text-black mb-2 text-sm sm:text-base">Project Timeline</h5>
                        <p className="text-gray-900 text-sm sm:text-base">2-8 weeks depending on complexity</p>
                      </div>
                      <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <h5 className="font-semibold text-black mb-2 text-sm sm:text-base">Support Included</h5>
                        <p className="text-gray-900 text-sm sm:text-base">3 months free support & maintenance</p>
                      </div>
                      <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <h5 className="font-semibold text-black mb-2 text-sm sm:text-base">Revisions</h5>
                        <p className="text-gray-900 text-sm sm:text-base">Unlimited revisions until satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white/5 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-900">Extended solutions for comprehensive digital transformation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mb-4 w-6 h-6 sm:w-8 sm:h-8">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-800 font-bold mb-3 leading-tight">{service.title}</h3>
                <p className="text-gray-900 mb-4 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Process</h2>
          <p className="text-xl text-gray-900">How we deliver exceptional results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-500/70 to-green-600/70 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg sm:text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-4 leading-tight">{step.title}</h3>
              <p className="text-gray-900 leading-relaxed text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="backdrop-blur-md  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 shadow-md"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-800 mb-6 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-blue-700 text-xs sm:text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-2">150+</div>
            <div className="text-gray-900 text-sm sm:text-base">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-2">50+</div>
            <div className="text-gray-900 text-sm sm:text-base">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-2">24/7</div>
            <div className="text-gray-900 text-sm sm:text-base">Support Available</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 mb-2">99%</div>
            <div className="text-gray-900 text-sm sm:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">Let's discuss how we can help transform your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" /> Get Free Consultation
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}