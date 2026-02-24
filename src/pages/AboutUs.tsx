import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">About Us</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            A Heritage of Integrity. A Crowning Standard of Quality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-blue-700 font-bold uppercase tracking-widest mb-4 block text-sm">Our Story</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Father & Son Operated</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With Cisco Tercero and David Tercero at the helm, one of Colorado's fastest-growing construction teams continues to take on more jobs and continues to be praised with more referrals.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Tercero Construction Co. pledges a commitment to quality and an active attentiveness to each job. You'll rest easy at night knowing that Tercero Construction Co., father and son, will be ready at the job site.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every project, whether residential or commercial, deserves the highest level of craftsmanship and dedication. Our family name is on the line, and we build every structure as if it were our own.
              </p>
            </div>
            <div className="lg:w-1/2 w-full h-[600px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
              {/* Placeholder for a team or father/son photo */}
              <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-700 font-bold uppercase tracking-widest block mb-3 text-sm">Our Philosophy</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">We do the right thing, even when no one is looking. Honest communication and transparency are the foundations of our client relationships.</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Quality</h3>
              <p className="text-gray-600 leading-relaxed">We hold ourselves to a crowning standard. We use premium materials and employ skilled craftsmen to ensure lasting results.</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Attentiveness</h3>
              <p className="text-gray-600 leading-relaxed">We are actively present on every job site. We listen to our clients' needs and address concerns promptly and professionally.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
