 "use client";

 
 export default function Footer() {  
   return (
 <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                lobxcode
              </div>
              <p className="text-gray-400 max-w-md">
                Creating innovative digital solutions with cutting-edge technology and modern design principles.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Mobile Apps</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">UI/UX Design</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Server Solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@digisolutions.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DigiSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

   )}