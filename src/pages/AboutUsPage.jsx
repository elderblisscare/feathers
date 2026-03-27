import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import AboutUs from '../components/AboutUs';

const AboutUsPage = () => {
  return (
    <>
        <Navbar/>
       <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
        <AboutUs/>
        <Contact/>
        <Footer />
      </div>
    </>
  );
}

export default AboutUsPage;
