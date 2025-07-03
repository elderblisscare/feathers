import React from 'react';
import Navbar from '../components/Navbar';
import MedicalEquipment from '../components/MedicalEquipment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MedicalEquipmentPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
        <MedicalEquipment />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default MedicalEquipmentPage; 