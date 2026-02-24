import React from 'react';
import { Menu, Linkedin, Instagram, Facebook, ChevronRight, HardHat, Ruler, ClipboardList } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              {/* Replace the src below with your actual logo image path */}
              <div className="h-20 w-auto flex items-center justify-center text-2xl font-extrabold text-blue-900 tracking-tighter">
                <span className="text-yellow-600 mr-1">TERCERO</span> CONSTRUCTION CO.
              </div>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase tracking-wider transition-colors">Home</a>
              <a href="#" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase tracking-wider transition-colors">Our Work</a>
              <a href="#" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase tracking-wider transition-colors">About Us</a>
              <a href="#" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase tracking-wider transition-colors">Services</a>
              <a href="#" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase tracking-wider transition-colors">Contact Us</a>
            </nav>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4 text-gray-600">
              <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Facebook size={20} /></a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[75vh] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 uppercase">
              A Heritage of Integrity.<br/>
              <span className="text-yellow-500">A Crowning Standard of Quality.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-10 font-light tracking-wide">
              Tercero Construction CO.
            </h2>
            <a href="#" className="inline-flex items-center px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition duration-300 uppercase tracking-wide text-lg">
              View Our Work
              <ChevronRight className="ml-2" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-blue-700 font-bold uppercase tracking-widest mb-4 block text-sm">About Us</span>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Colorado's Fastest Growing Construction Team</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With Cisco Tercero and David Tercero at the helm, one of Colorado's fastest-growing construction teams continues to take on more jobs and continues to be praised with more referrals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tercero Construction Co. pledges a commitment to quality and an active attentiveness to each job. You'll rest easy at night knowing that Tercero Construction Co., father and son, will be ready at the job site.
              </p>
            </div>
            <div className="lg:w-1/2 w-full h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Site" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white font-bold text-xl">Father & Son Operated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Commercial and Residential Excellence</h2>
          <p className="text-2xl text-blue-200 font-light tracking-widest uppercase">Licensed & Insured</p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-bold uppercase tracking-widest block mb-3 text-sm">Services</span>
            <h2 className="text-4xl font-extrabold text-gray-900">What We Do</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-700 mb-8">
                <Ruler size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Construction</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive planning and estimation to ensure your project starts on the right foundation.</p>
            </div>
            
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-700 mb-8">
                <HardHat size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design-Build</h3>
              <p className="text-gray-600 leading-relaxed">Seamless integration of design and construction phases for maximum efficiency and quality.</p>
            </div>
            
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-700 mb-8">
                <ClipboardList size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction Management</h3>
              <p className="text-gray-600 leading-relaxed">Expert oversight of your entire project, ensuring it's delivered on time and within budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-24 bg-white border-l-[12px] border-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl italic text-gray-800 mb-10 leading-relaxed font-serif">
            "Tercero Construction Co. was always there and on top of things. We have a new home we are very proud of! Their commitment to quality is unmatched."
          </blockquote>
          <div className="font-bold text-gray-900 uppercase tracking-widest text-lg">
            — Satisfied Client
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <span className="text-yellow-500 font-bold uppercase tracking-widest block mb-3 text-sm">Our Work</span>
          <h2 className="text-4xl font-extrabold text-white">Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
          {[
            { title: 'RESIDENTIAL', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { title: 'COMMERCIAL', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { title: 'REMODELING', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { title: 'CUSTOM HOMES', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { title: 'EXTERIORS', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { title: 'INTERIORS', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
          ].map((item, index) => (
            <div 
              key={index}
              className="relative h-80 group cursor-pointer overflow-hidden rounded-sm"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-2xl tracking-widest uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <h4 className="text-white text-xl font-extrabold uppercase tracking-widest mb-6">Tercero Construction CO.</h4>
              <p className="mb-3 text-gray-300">Colorado's Premier Construction Team</p>
              <p className="mb-3 text-gray-300">Commercial and Residential</p>
              <p className="text-yellow-500 font-bold tracking-wider uppercase text-sm mt-6">Licensed & Insured</p>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Get a Quote</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10 text-center text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Tercero Construction CO. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
