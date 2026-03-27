import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AllHealthServices from '../components/AllHealthServices';

const AllServicesPage = () => {
  return (
    <>
      <Navbar/>
         <main className='pt-20'>
            <AllHealthServices/>
         </main>
         <Contact/>
         <Footer/>
    </>
  );
}

export default AllServicesPage;
