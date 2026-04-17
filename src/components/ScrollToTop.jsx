import React from 'react';

const ScrollToTop = () => {

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={goToBtn}
      className="fixed bottom-8 right-8 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-colors z-10"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  );
}

export default ScrollToTop;
