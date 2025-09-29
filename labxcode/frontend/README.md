  <div className="container  mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 bg-amber-500 top-0">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact <span className="text-purple-400">LabXCode</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation about your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">contact@labxcode.com</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                    <p className="text-gray-400 text-sm">Remote-first company</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                    <p className="text-gray-300">Within 24 hours</p>
                    <p className="text-gray-400 text-sm">Usually much faster!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose LabXCode?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert development team</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Modern tech stack</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Agile methodology</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <p className="text-green-300">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </div>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>