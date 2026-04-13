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

  const scrollToTop = () => {
    console.log("clicked"); // check this
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-colors z-10"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </>
  );
};

export default HomePage; 