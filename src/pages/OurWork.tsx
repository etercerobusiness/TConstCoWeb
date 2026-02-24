import React from 'react';

export default function OurWork() {
  const projects = [
    { title: 'Modern Residential Build', category: 'RESIDENTIAL', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Downtown Office Complex', category: 'COMMERCIAL', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Historic Home Renovation', category: 'REMODELING', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Luxury Custom Estate', category: 'CUSTOM HOMES', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Commercial Exterior Upgrade', category: 'EXTERIORS', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'High-End Kitchen Remodel', category: 'INTERIORS', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Suburban Development', category: 'RESIDENTIAL', img: 'https://images.unsplash.com/photo-1512915922686-57c11dde9c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Retail Space Buildout', category: 'COMMERCIAL', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Mountain Retreat', category: 'CUSTOM HOMES', img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Our Work</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            Explore our portfolio of commercial and residential projects across Colorado.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Placeholder (Static for now) */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-6 py-2 bg-blue-700 text-white font-bold uppercase tracking-wider text-sm rounded-full">All</button>
            <button className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold uppercase tracking-wider text-sm rounded-full transition-colors">Residential</button>
            <button className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold uppercase tracking-wider text-sm rounded-full transition-colors">Commercial</button>
            <button className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold uppercase tracking-wider text-sm rounded-full transition-colors">Remodeling</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 overflow-hidden rounded-lg mb-4 shadow-md">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div>
                  <span className="text-blue-700 font-bold uppercase tracking-widest text-xs block mb-1">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
