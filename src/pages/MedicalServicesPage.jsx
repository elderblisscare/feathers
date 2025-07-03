import React from 'react';
import Navbar from '../components/Navbar';
import MedicalServices from '../components/MedicalServices';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MedicalServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
        <MedicalServices />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default MedicalServicesPage; 