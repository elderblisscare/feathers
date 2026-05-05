import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fix: Use document.documentElement and document.body for reliability
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Safari fix
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const goToBtn = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Safari fix
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={goToBtn}
          className="fixed bottom-8 right-8 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-colors z-10"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;