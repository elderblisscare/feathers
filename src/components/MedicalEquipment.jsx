import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MedicalEquipment = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Heading animation
    const headingElements = contentRef.current.querySelectorAll('h2, .subtitle');
    gsap.fromTo(headingElements, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.3, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        } 
      }
    );
    
    // Equipment items animation
    const equipmentItems = contentRef.current.querySelectorAll('.equipment-item');
    gsap.fromTo(equipmentItems, 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 0.7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        } 
      }
    );
  }, []);

  const equipmentList = [
    { name: "Monitor", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { name: "Urine Catheter", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { name: "ECG electrodes", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Crash Cart", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Ventilator", icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" },
    { name: "Nasogastric tube (NG tube)", icon: "M9 12h6m-6 4h6m-6-8h6M9 1v2a2 2 0 002 2h2a2 2 0 002-2V1M5 13V9a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2z" },
    { name: "Digital Thermometer", icon: "M9.5 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.5 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.5 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" },
    { name: "Ambu Bag with Mask", icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" },
    { name: "Pulse Oximeter", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
    { name: "Stretcher", icon: "M4 21v-2a4 4 0 014-4h12M4 13V8a4 4 0 014-4h12M3 3h18M20 6l-2 4.5M15 6l2 4.5" },
    { name: "Oxygen Cylinder", icon: "M19.366 10.14a10.941 10.941 0 01-3.866 6.01L12 20.016l-3.5-3.866a10.941 10.941 0 01-3.866-6.01M12 3c1.488 0 2.914.526 4.076 1.458L12 8.016l-4.076-3.558A7.465 7.465 0 0112 3z" },
    { name: "Gun Thermometer", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { name: "Glucometer", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { name: "Hearing Aids", icon: "M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zm-9 8c0 1 1 1 1 1h5s1 0 1-1-1-4-4-4-3 3-3 4zm7 0c0 1 1 1 1 1h5s1 0 1-1-1-4-4-4-3 3-3 4z" },
    { name: "BP Machine", icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" },
    { name: "BiPAP", icon: "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0" },
    { name: "CPAP", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
  ];

  return (
    <section ref={sectionRef} id="equipment-content" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1C4571] mb-4">Medical Equipment</h2>
          <p className="subtitle text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality medical equipment for home and clinical use, designed for comfort and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <div key={index} className="equipment-item bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-[#1C4571]/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1C4571]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-[#1C4571]">{item.name}</h3>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-gray-500">Available for rent/purchase</span>
                <button className="text-[#1C4571] text-sm font-medium hover:text-[#ff8c39] transition-colors flex items-center">
                  Inquire
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalEquipment; 