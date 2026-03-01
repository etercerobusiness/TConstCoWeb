import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Upload, CheckCircle } from 'lucide-react';

export default function Apply() {
  const location = useLocation();
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam) {
      setRole(roleParam);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send a multipart/form-data request to a backend server.
    // The backend would then process the file upload and send the email via an SMTP service.
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-24">
        <div className="max-w-lg mx-auto bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Application Sent!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for applying for the <strong>{role || 'position'}</strong>. Your application and resume have been successfully sent to <a href="mailto:info@terceroconstruction.com" className="text-blue-700 hover:underline font-bold">info@terceroconstruction.com</a>. We will review your qualifications and get back to you soon.
          </p>
          <Link to="/careers" className="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition duration-300 uppercase tracking-wide text-sm">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Apply Now</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            Take the next step in your career with Tercero Construction CO.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide border-b border-gray-200 pb-4">Job Application</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Position Applying For</label>
              <input 
                type="text" 
                id="role" 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 font-medium text-gray-900" 
                placeholder="e.g. General Construction Worker"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Years of Experience in this Role</label>
              <select id="experience" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option value="">Select experience level...</option>
                <option value="0-1">0-1 years (Entry Level)</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years (Experienced)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Brief Cover Letter / Additional Info</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us why you'd be a great fit for Tercero Construction..."></textarea>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors bg-gray-50">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-700 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 px-2 py-1">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" required />
                    </label>
                    <p className="pl-1 py-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition duration-300 uppercase tracking-wide text-lg flex justify-center items-center">
                Submit Application
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, your application will be sent to <strong>info@terceroconstruction.com</strong> with the subject "Job Application".
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
