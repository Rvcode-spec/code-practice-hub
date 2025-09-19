"use client";
import { Star } from 'lucide-react';

export default function Features() {
  return (  

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Us?</span>
              </h2>
              <div className="space-y-6">
                {[
                  'Next.js & Modern Frameworks',
                  'Tailwind CSS & Responsive Design',
                  'Advanced Animations & Interactions',
                  'Server Solutions & Hosting',
                  '24/7 Support & Maintenance'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-4 group">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg group-hover:text-cyan-400 transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-500 transform hover:rotate-1">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg italic">{"Outstanding work! They delivered exactly what we needed with incredible attention to detail and modern design."}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-400">CEO, TechStart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )}