// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
