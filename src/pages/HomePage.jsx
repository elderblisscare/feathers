import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Locations from '../components/Locations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import { useLocation } from 'react-router-dom';


const HomePage = () => {
  const location = useLocation();


  useEffect(() => {
    if (location.hash === "#testimonials") {
      const el = document.getElementById("testimonials");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
      <Navbar />
      <main className='pt-20'>
        <Hero />
        <About />
        <Locations />
        <section id="testimonials">
          <Testimonials />
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default HomePage; 