import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Locations from '../components/Locations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Locations />
        <Contact />
        <Footer/>
      </main>
    </>
  );
};

export default HomePage; 