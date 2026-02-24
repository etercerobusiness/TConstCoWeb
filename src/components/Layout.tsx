import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, Linkedin, Instagram, Facebook, X } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const socialLinks = {
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  };

  return (
    <div className="font-sans text-gray-800 antialiased min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo Area */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Replace the src below with your actual logo image path */}
              <div className="h-20 w-auto flex items-center justify-center text-2xl font-extrabold text-blue-900 tracking-tighter">
                <span className="text-yellow-600 mr-1">TERCERO</span> CONSTRUCTION CO.
              </div>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`font-bold text-sm uppercase tracking-wider transition-colors ${
                    location.pathname === link.path ? 'text-blue-700' : 'text-gray-800 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4 text-gray-600">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><Instagram size={20} /></a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><Facebook size={20} /></a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-bold uppercase tracking-wider ${
                    location.pathname === link.path ? 'text-blue-700 bg-blue-50' : 'text-gray-800 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-4 px-3 py-4 text-gray-600 border-t border-gray-100 mt-2">
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><Linkedin size={24} /></a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><Instagram size={24} /></a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><Facebook size={24} /></a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Outlet />
      </main>

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
                <li><Link to="/our-work" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4">
                <li><Link to="/contact-us" className="hover:text-white transition-colors">Get a Quote</Link></li>
                <li><Link to="/contact-us" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10 text-center text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Tercero Construction CO. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
