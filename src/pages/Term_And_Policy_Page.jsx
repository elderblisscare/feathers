import React from 'react';
import PoliciesPage from '../components/Terms-And-Policies';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Term_And_Policy_Page = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20"> {/* Adding padding top to account for fixed navbar */}
                <PoliciesPage />
                <Footer />
            </div>
        </>
    );
}

export default Term_And_Policy_Page;
