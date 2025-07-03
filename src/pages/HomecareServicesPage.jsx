import React from 'react';
import Navbar from '../components/Navbar';
import HomecareServices from '../components/HomecareServices';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomecareServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
        <HomecareServices />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomecareServicesPage; 