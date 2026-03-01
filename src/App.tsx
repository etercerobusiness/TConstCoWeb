import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Careers from './pages/Careers';
import Apply from './pages/Apply';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="careers" element={<Careers />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </Router>
  );
}
