import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';
import InquirySeoContent from '../components/InquirySeoContent';

const InquirePage = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
                <InquiryForm />
                <InquirySeoContent />
                <Footer />
            </div>
        </>
    );
};

export default InquirePage; 