"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Top Grid Section */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Codeyaan
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              We build innovative digital products and modern IT solutions using cutting-edge technologies.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Server Solutions"].map((item) => (
                <li
                  key={item}
                  className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 transition-colors duration-300">
                hello@labxcode.com
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-300">
                +91 98765 43210
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-300">
                Delhi, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LabXCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}