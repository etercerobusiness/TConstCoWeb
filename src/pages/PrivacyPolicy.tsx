import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const lastUpdated = "October 24, 2024";

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Page Header */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Privacy Policy</h1>
          <p className="text-xl text-blue-200 font-light tracking-wide max-w-2xl mx-auto">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <div className="prose prose-blue max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8 font-bold uppercase tracking-wider">Last Updated: {lastUpdated}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4 leading-relaxed">
            Tercero Construction CO., LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
          <p className="mb-4 leading-relaxed">
            This policy complies with United States federal privacy standards and the specific requirements of the State of Colorado, including the Colorado Privacy Act (CPA), reflecting best practices for Limited Liability Companies (LLCs) operating within our jurisdiction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect About You</h2>
          <p className="mb-4 leading-relaxed">We collect several types of information from and about users of our Website, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Personal Information:</strong> Information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.</li>
            <li><strong>Project Information:</strong> Details regarding your construction, remodeling, or commercial project needs submitted through our contact forms or quote requests.</li>
            <li><strong>Technical Data:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details (e.g., IP addresses, browser types, operating systems).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Collect Information</h2>
          <p className="mb-4 leading-relaxed">We collect this information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Directly from you</strong> when you provide it to us (e.g., filling out a "Get a Quote" form, subscribing to a newsletter, or contacting us directly).</li>
            <li><strong>Automatically</strong> as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Information</h2>
          <p className="mb-4 leading-relaxed">We use information that we collect about you or that you provide to us, including any personal information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us, including project estimates and consultations.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
            <li>In any other way we may describe when you provide the information.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Disclosure of Your Information</h2>
          <p className="mb-4 leading-relaxed">We do not sell, trade, or rent your personal identification information to others. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To contractors, service providers, and other third parties we use to support our business (e.g., subcontractors working on your specific project).</li>
            <li>To fulfill the purpose for which you provide it.</li>
            <li>For any other purpose disclosed by us when you provide the information.</li>
            <li>With your consent.</li>
            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
            <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Tercero Construction CO., LLC, our customers, or others.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Colorado Privacy Rights (CPA Compliance)</h2>
          <p className="mb-4 leading-relaxed">
            If you are a resident of Colorado, the Colorado Privacy Act (CPA) provides you with specific rights regarding your personal data. You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Opt-out</strong> of the processing of your personal data for purposes of targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects.</li>
            <li><strong>Access</strong> and confirm whether we are processing your personal data.</li>
            <li><strong>Correct</strong> inaccuracies in your personal data.</li>
            <li><strong>Delete</strong> personal data provided by or obtained about you.</li>
            <li><strong>Data Portability:</strong> Obtain a copy of your personal data in a portable and readily usable format.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            To exercise any of these rights, please contact us using the information provided at the bottom of this policy. We will respond to your request within 45 days as required by Colorado law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Security</h2>
          <p className="mb-4 leading-relaxed">
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
          </p>
          <p className="mb-4 leading-relaxed">
            Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children Under the Age of 13 (COPPA Compliance)</h2>
          <p className="mb-4 leading-relaxed">
            Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to Our Privacy Policy</h2>
          <p className="mb-4 leading-relaxed">
            It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Information</h2>
          <p className="mb-4 leading-relaxed">
            To ask questions or comment about this privacy policy and our privacy practices, or to exercise your rights under Colorado law, contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
            <p className="font-bold text-gray-900">Tercero Construction CO., LLC</p>
            <p className="text-gray-600">2641 Durango Dr</p>
            <p className="text-gray-600">Colorado Springs, CO 80910</p>
            <p className="text-gray-600 mt-2"><strong>Email:</strong> privacy@terceroconstruction.com</p>
            <p className="text-gray-600"><strong>Phone:</strong> (555) 123-4567</p>
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors uppercase tracking-wider">
                Return to Home
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
