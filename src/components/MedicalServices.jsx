import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MedicalServices = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Heading animation
    const headingElements = contentRef.current.querySelectorAll('h2, h3');
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
    
    // Service items animation
    const serviceItems = contentRef.current.querySelectorAll('.service-item');
    gsap.fromTo(serviceItems, 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        } 
      }
    );
  }, []);

  const services = [
    {
      title: "Ambulance Services",
      description: "24/7 emergency medical transport with fully equipped ambulances and trained paramedics for critical care during transit.",
      icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
    },
    {
      title: "Doctor On Call",
      description: "Immediate access to qualified physicians for telephone consultations, video calls, or urgent home visits when needed.",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      title: "Support During Hospitalization",
      description: "Comprehensive assistance throughout hospital stays, including medical advocacy, care coordination, and family support services.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Health Monitoring",
      description: "Regular vital sign tracking, health assessments, and chronic condition management for optimal health maintenance.",
      icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Labs & Diagnostics",
      description: "At-home collection services for blood tests, urine samples, and other diagnostic procedures with prompt results delivery.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "Trained Eldercare Professionals",
      description: "Specialized caregivers with expertise in geriatric care, providing personalized assistance tailored to seniors' unique needs.",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    }
  ];

  return (
    <section ref={sectionRef} id="medical-services-content" className="py-20 ">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1C4571] mb-6">Medical Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services tailored to your needs with compassionate care and professional expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="service-item flex flex-col bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-[#1C4571]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1C4571]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[#1C4571] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <button className="self-start mt-auto text-[#1C4571] font-semibold hover:text-[#ff8c39] transition-colors flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalServices; 