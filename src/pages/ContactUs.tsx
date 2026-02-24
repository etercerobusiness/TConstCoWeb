import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Contact Us</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            Let's discuss your next construction project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <span className="text-blue-700 font-bold uppercase tracking-widest mb-4 block text-sm">Get in Touch</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">We're Here to Help</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have a question about our services, need an estimate, or are ready to start building, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="text-blue-700" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Office Location</h4>
                    <p className="text-gray-600 mt-1">123 Construction Way<br />Denver, CO 80202</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="text-blue-700" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600 mt-1">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-blue-700" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">info@terceroconstruction.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="text-blue-700" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 mt-1">Mon - Fri: 8:00 AM - 5:00 PM<br />Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 p-10 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                    <select id="service" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white">
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Remodeling</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="button" className="w-full px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition duration-300 uppercase tracking-wide text-lg">
                    Submit Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
