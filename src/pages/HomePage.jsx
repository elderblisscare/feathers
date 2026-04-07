import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Locations from '../components/Locations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className='pt-20'>
        <Hero />
        <About />
        <Locations />
        <Testimonials/>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default HomePage; 