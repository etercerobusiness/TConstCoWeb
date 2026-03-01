import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  
  // Find the post by ID
  const post = blogPosts.find(p => p.id === id);

  // If post not found, redirect to blog home
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="bg-white min-h-screen pb-24">
      {/* Hero Image Section */}
      <div className="w-full h-[50vh] md:h-[70vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.imageUrl}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 max-w-5xl mx-auto text-white">
          <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors uppercase tracking-wider text-sm font-bold">
            <ChevronLeft size={16} className="mr-1" /> Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4 mb-6 text-sm font-medium uppercase tracking-widest text-yellow-500">
            <span className="flex items-center"><Tag size={16} className="mr-2" /> {post.category}</span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center text-gray-300"><Calendar size={16} className="mr-2" /> {post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Social Share (Static UI) */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl">
              TC
            </div>
            <div>
              <p className="font-bold text-gray-900">Tercero Construction</p>
              <p className="text-sm text-gray-500">Editorial Team</p>
            </div>
          </div>
          <button className="flex items-center text-gray-500 hover:text-blue-700 transition-colors font-medium">
            <Share2 size={20} className="mr-2" /> Share
          </button>
        </div>

        {/* Blog Body - Using elegant serif typography */}
        <div className="prose-container">
          <style dangerouslySetInnerHTML={{__html: `
            .prose-container p {
              font-family: 'Georgia', serif;
              font-size: 1.25rem;
              line-height: 1.8;
              color: #374151;
              margin-bottom: 2rem;
            }
            .prose-container h3 {
              font-family: 'Inter', sans-serif;
              font-size: 2rem;
              font-weight: 800;
              color: #111827;
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              letter-spacing: -0.025em;
            }
          `}} />
          
          {/* Render the HTML content safely */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer of the post */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your next project?</h4>
            <p className="text-gray-600 mb-6">Contact Tercero Construction Co. today for a consultation.</p>
            <Link to="/contact-us" className="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition duration-300 uppercase tracking-wide text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
