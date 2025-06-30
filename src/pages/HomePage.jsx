import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Locations from '../components/Locations';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Locations />
        <Contact />
      </main>
    </>
  );
};

export default HomePage; 