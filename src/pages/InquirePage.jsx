import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

const InquirePage = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
                <InquiryForm />
                <Footer />
            </div>
        </>
    );
};

export default InquirePage; 