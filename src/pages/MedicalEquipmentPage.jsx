import React from 'react';
import Navbar from '../components/Navbar';
import MedicalEquipment from '../components/MedicalEquipment';
import Contact from '../components/Contact';

const MedicalEquipmentPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
        <MedicalEquipment />
        <Contact />
      </div>
    </>
  );
};

export default MedicalEquipmentPage; 