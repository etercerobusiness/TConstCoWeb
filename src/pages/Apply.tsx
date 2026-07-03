import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Upload, CheckCircle, FileText } from 'lucide-react';

// Helper function to convert the file to a Base64 string for Resend
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = (error) => reject(error);
  });
};

export default function Apply() {
  const location = useLocation();
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // State to hold the rest of the form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });
  
  // State for the uploaded resume
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam) {
      setRole(roleParam);
    }
  }, [location]);

  // Update state when text inputs change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Update state when a file is selected
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      let base64Resume = null;
      let resumeName = null;

      if (selectedFile) {
        base64Resume = await fileToBase64(selectedFile);
        resumeName = selectedFile.name;
      }

      // Combine experience and message into the cover letter field for the API
      const combinedMessage = `Years of Experience: ${formData.experience}\n\nCover Letter / Additional Info:\n${formData.message}`;

      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          position: role,
          message: combinedMessage,
          resumeName: resumeName,
          resumeContent: base64Resume,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Failed to send application. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
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
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-md">
              {error}
            </div>
          )}

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
                <input 
                  type="text" 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="John" 
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="(555) 123-4567" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Years of Experience in this Role</label>
              <select 
                id="experience" 
                value={formData.experience}
                onChange={handleInputChange}
                required 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">Select experience level...</option>
                <option value="0-1">0-1 years (Entry Level)</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years (Experienced)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Brief Cover Letter / Additional Info</label>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleInputChange}
                rows={4} 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Tell us why you'd be a great fit for Tercero Construction..."
              ></textarea>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors bg-gray-50">
                <div className="space-y-1 text-center">
                  {selectedFile ? (
                    <div className="flex flex-col items-center">
                      <FileText className="mx-auto h-12 w-12 text-blue-500 mb-2" />
                      <p className="text-sm text-gray-900 font-medium">{selectedFile.name}</p>
                      <button 
                        type="button" 
                        onClick={() => setSelectedFile(null)}
                        className="text-xs text-red-500 hover:text-red-700 mt-1"
                      >
                        Remove file
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-blue-700 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 px-2 py-1">
                          <span>Upload a file</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleFileChange}
                            required 
                          />
                        </label>
                        <p className="pl-1 py-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full px-8 py-4 ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} text-white font-bold rounded transition duration-300 uppercase tracking-wide text-lg flex justify-center items-center`}
              >
                {isLoading ? 'Sending Application...' : 'Submit Application'}
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
