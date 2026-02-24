import React from 'react';
import { HardHat, Ruler, ClipboardList, Home, Building2, Wrench } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Ruler size={40} />,
      title: 'Pre-Construction',
      desc: 'Comprehensive planning and estimation to ensure your project starts on the right foundation. We handle feasibility studies, budgeting, and scheduling.',
    },
    {
      icon: <HardHat size={40} />,
      title: 'Design-Build',
      desc: 'Seamless integration of design and construction phases for maximum efficiency and quality. One point of contact from concept to completion.',
    },
    {
      icon: <ClipboardList size={40} />,
      title: 'Construction Management',
      desc: 'Expert oversight of your entire project, ensuring it is delivered on time and within budget. We coordinate all subcontractors and suppliers.',
    },
    {
      icon: <Home size={40} />,
      title: 'Residential Construction',
      desc: 'From custom homes to major renovations, we build living spaces that reflect your lifestyle and stand the test of time.',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Commercial Construction',
      desc: 'Office buildings, retail spaces, and industrial facilities built to support your business operations and growth.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Remodeling & Additions',
      desc: 'Transform your existing space. We specialize in high-end kitchen and bath remodels, as well as structural additions.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Services</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-bold uppercase tracking-widest block mb-3 text-sm">What We Do</span>
            <h2 className="text-4xl font-extrabold text-gray-900">Our Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-gray-50 p-12 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-800 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-500 text-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase tracking-tight">Ready to Start Your Project?</h2>
          <p className="text-xl font-medium mb-10">Contact us today for a consultation and estimate.</p>
          <a href="/contact-us" className="inline-block px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded transition duration-300 uppercase tracking-wide text-lg">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
