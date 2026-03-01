import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { jobListings } from '../data/jobs';

export default function Careers() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Careers</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            Join Colorado's fastest-growing construction team.
          </p>
        </div>
      </section>

      {/* Roles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight">Roles we're hiring for:</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobListings.map((job) => (
            <Link 
              to={`/apply?role=${encodeURIComponent(job.title)}`} 
              key={job.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group"
            >
              {/* Top 40% Photo */}
              <div className="h-48 relative overflow-hidden flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${job.imageUrl}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Bottom 60% Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {job.description}
                </p>
                <div className="inline-flex items-center text-blue-700 font-bold uppercase tracking-wider text-sm mt-auto">
                  Apply Now <ChevronRight className="ml-1" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
