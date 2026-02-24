import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

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
        </Route>
      </Routes>
    </Router>
  );
}
