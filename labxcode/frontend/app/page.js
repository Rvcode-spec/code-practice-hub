"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Users, Award, Clock, Star, Globe, Smartphone, Palette, TrendingUp, MessageSquare, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

// Cards Component
const Cards = () => {
    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Development",
            description: "Modern, responsive websites that drive business growth",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
            price: "₹15,000+"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications",
            features: ["iOS & Android", "Cross-Platform", "App Store Ready"],
            price: "₹25,000+"
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "User-focused designs that convert visitors to customers",
            features: ["User Research", "Prototyping", "Design Systems"],
            price: "₹8,000+"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Digital Marketing",
            description: "Boost your online presence with targeted strategies",
            features: ["SEO", "Social Media", "Content Strategy"],
            price: "₹5,000+"
        }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mb-4">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="text-blue-300 font-semibold">{service.price}</div>
                </div>
            ))}
        </div>
    );
};

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            title: "An Innovative IT Solutions Agency",
            subtitle: "Transform Your Digital Vision Into Reality",
            description: "We create cutting-edge digital solutions that drive business growth and innovation in the modern world."
        },
        {
            title: "Expert Web & Mobile Development",
            subtitle: "Building Tomorrow's Technology Today",
            description: "From responsive websites to powerful mobile apps, we deliver solutions that exceed expectations."
        },
        {
            title: "Digital Marketing That Delivers",
            subtitle: "Grow Your Business Online",
            description: "Strategic digital marketing services that boost your online presence and drive measurable results."
        }
    ];

    const stats = [
        { number: "150+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "3+", label: "Years Experience" },
        { number: "99%", label: "Success Rate" }
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            company: "TechStart Solutions",
            text: "LabXCode transformed our business with their innovative solutions. Highly recommended!",
            rating: 5
        },
        {
            name: "Priya Sharma",
            company: "Fashion Hub",
            text: "Professional team with excellent results. Our sales increased by 300% after their work.",
            rating: 5
        },
        {
            name: "Amit Patel",
            company: "Local Business",
            text: "Outstanding service and support. They delivered beyond our expectations.",
            rating: 5
        }
    ];

    const whyChooseUs = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Expert Team",
            description: "Skilled professionals with years of industry experience"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Quality Assured",
            description: "We deliver high-quality solutions that exceed expectations"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "On-Time Delivery",
            description: "We respect deadlines and deliver projects on schedule"
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Round-the-clock support for all your technical needs"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <header className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/80 to-blue-900/90"></div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-6xl mx-auto">
                    <div className="mb-6">
                        <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text text-lg font-semibold mb-4 animate-fade-in">
                            🚀 Best IT Solutions Provider
                        </span>
                    </div>

                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                        {heroSlides[currentSlide].title}
                    </h1>

                    <p className="text-2xl sm:text-3xl text-purple-300 font-semibold mb-4 animate-slide-up delay-200">
                        {heroSlides[currentSlide].subtitle}
                    </p>

                    <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed animate-slide-up delay-300">
                        {heroSlides[currentSlide].description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up delay-500">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl">
                            Get Started <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                            <Play className="w-5 h-5" /> Watch Demo
                        </button>
                    </div>

                    <div className="animate-bounce">
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </header>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="group">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">LabXCode</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Founded on October 20, 2025, LabXCode is a fast-growing IT company with a clear vision - to empower businesses with powerful and innovative digital solutions. We transform small dreams into impactful digital realities.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Our team blends creativity, technical expertise, and industry experience to deliver results that take your business beyond expectations. We don't just create IT solutions; we bring your ideas to life.
                            </p>
                            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                                Learn More <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
                            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {whyChooseUs.map((item, index) => (
                                        <div key={index} className="text-center group">
                                            <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mb-3 flex justify-center">
                                                {item.icon}
                                            </div>
                                            <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-purple-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive digital solutions to transform your business and drive growth in the digital age
                        </p>
                    </div>

                    <Cards />

                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 mx-auto">
                            View All Services <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
                        <p className="text-xl text-gray-300">Don't just take our word for it</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-blue-300 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
                        <p className="text-xl text-gray-300">Ready to start your next project? Let's talk!</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500/20 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-gray-300">contact@labxcode.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-500/20 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Phone</p>
                                        <p className="text-gray-300">+91 XXX XXX XXXX</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-500/20 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Location</p>
                                        <p className="text-gray-300">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                                ></textarea>
                                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                                    Send Message <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-blue-100 mb-8">Join 50+ satisfied clients who trust LabXCode for their digital success</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                            <MessageSquare className="w-5 h-5" /> Start Your Project
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
        </div>
    );
}