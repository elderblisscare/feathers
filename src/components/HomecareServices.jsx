import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const HomecareServices = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      titleRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );

    // Cards animation
    const cards = cardsRef.current.querySelectorAll('.service-card');
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const homecareServices = [
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
    },
    {
      title: "Doctor Home Visit",
      description: "Our qualified doctors visit your home for consultations, check-ups, and medical care, providing convenient healthcare without the need to travel.",
      icon: "M9 12h6m-6 4h6m-6-8h6M9 1v2a2 2 0 002 2h2a2 2 0 002-2V1M5 13V9a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2z"
    },
    {
      title: "Physio Home Visit",
      description: "Professional physiotherapists deliver personalized therapy sessions in the comfort of your home, helping improve mobility, strength, and quality of life.",
      icon: "M14 11h3m-3 4h3m-7-9v5a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v1M6 4v12a2 2 0 002 2h10a2 2 0 002-2V4"
    },
    {
      title: "Experienced & Professional Attendants",
      description: "Our GDA (General Duty Assistant) staff provides compassionate personal care, assistance with daily activities, and companionship to ensure comfort and dignity.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Nurse 24 Hour Care at Home",
      description: "Round-the-clock nursing care provided by skilled professionals who monitor health conditions, administer medications, and respond to emergencies at any time.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    },
    {
      title: "Medicine Delivery at Home",
      description: "Convenient delivery of prescribed medications directly to your doorstep, ensuring you receive essential supplies without leaving home.",
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ];

  return (
    <section ref={sectionRef} id="homecare-content" className="py-20 bg-gradient-to-b from-[#f0f4f8] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1C4571] mb-6">
            Homecare Services
          </h2>
          <p className="text-lg text-gray-600">
            Our dedicated team delivers comprehensive healthcare solutions in the comfort of your home, designed to enhance quality of life and promote independence.
          </p>
        </div>

        <div ref={cardsRef} className="max-w-6xl mx-auto">
          {homecareServices.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl shadow-md mb-8 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="bg-[#1C4571] md:w-1/4 p-8 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <div className="p-8 md:w-3/4">
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1C4571] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>
                  <button
                    onClick={() => navigate("/inquiry", { state: { service: service.title } })}
                    className="px-5 py-2 bg-[#1C4571] text-white rounded-lg hover:bg-[#3c80c8] transition-colors">
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomecareServices; 