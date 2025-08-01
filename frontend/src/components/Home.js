import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import GalerieReact from './Galerie';
import Testimonials from './Testimonials';
import Contact from './Contact';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <GalerieReact />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;