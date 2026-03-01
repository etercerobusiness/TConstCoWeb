import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  // Cycle featured posts every 15 seconds
  useEffect(() => {
    if (featuredPosts.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 15000);
    
    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Our Blog</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            Insights, news, and updates from the Tercero Construction team.
          </p>
        </div>
      </section>

      {/* Featured Blog Carousel */}
      {featuredPosts.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <span className="text-blue-700 font-bold uppercase tracking-widest block mb-2 text-sm">Featured</span>
              <h2 className="text-3xl font-extrabold text-gray-900">Top Stories</h2>
            </div>
            {/* Carousel Indicators */}
            <div className="flex space-x-2 pb-2">
              {featuredPosts.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentFeaturedIndex(idx)}
                  className={`w-12 h-1.5 rounded-full transition-colors duration-300 ${
                    idx === currentFeaturedIndex ? 'bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeaturedIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${featuredPosts[currentFeaturedIndex].imageUrl}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                  <span className="inline-block px-4 py-1 bg-yellow-500 text-black font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                    {featuredPosts[currentFeaturedIndex].category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight max-w-4xl">
                    {featuredPosts[currentFeaturedIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl hidden md:block">
                    {featuredPosts[currentFeaturedIndex].excerpt}
                  </p>
                  <Link 
                    to={`/blog/${featuredPosts[currentFeaturedIndex].id}`}
                    className="inline-flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded transition duration-300 uppercase tracking-wide text-sm"
                  >
                    Read Article <ChevronRight className="ml-2" size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Latest Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* We'll show all posts in the grid, or just the regular ones. Let's show all for a fuller grid. */}
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <Link to={`/blog/${post.id}`} className="block h-60 overflow-hidden relative group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${post.imageUrl}')` }}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-900 font-bold text-xs uppercase tracking-widest rounded shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-4 font-medium">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-blue-700 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-blue-700 font-bold uppercase tracking-wider text-sm hover:text-blue-900 transition-colors mt-auto"
                >
                  Read More <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
