// App.js
import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import MyCarousel from './components/Carousel';
import ContactSection from './components/ContactSection';
import HealthPartnerSection from './components/doc_head';
import GoogleMapsSection from './components/GoogleMapsSection';
import HeroSection from './components/HeroSection';
import ChatIcon from './components/ChatIcon';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import CustomerTestimonials from './components/reviews2';

const App = () => {
  return (
    <div className="antialiased text-gray-700">
      <div class="relative bg-gray-900 min-h-screen">
      
      <Navbar />
      <HealthPartnerSection />
      <ChatIcon />
      <MyCarousel />
      </div>
      <AboutSection />
      <CustomerTestimonials/>
      <ContactSection />
      
      
      <GoogleMapsSection />
      <Footer />
      
    </div>
  );
};

export default App;
