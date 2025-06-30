import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LocationCard = ({ title, subtitle, index, addToRefs }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Handle mouse move for parallax effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate position relative to center of card (-1 to 1)
    const xPos = (x / rect.width - 0.5) * 2;
    const yPos = (y / rect.height - 0.5) * 2;
    
    setPosition({ x: xPos * -10, y: yPos * -10 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={(el) => {
        cardRef.current = el;
        addToRefs(el);
      }}
      className="location-card relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay with bottom emphasis */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
      
      {/* Bottom shadow overlay - only at the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
      
      {/* Image with parallax effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="/iStock-1447873986.jpg" 
          alt={title}
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(1.1)`,
            transition: 'transform 0.2s ease-out' 
          }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Text content */}
      <div className="absolute bottom-0 left-0 p-5 z-20 w-full">
        <h2 className="text-white text-xl md:text-2xl font-medium flex items-center">
          {title}
          <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </h2>
        <p className="text-white/90 text-sm mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

const Locations = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Reset refs array
    cardsRef.current = cardsRef.current.slice(0, 5);

    // Animation for heading and text
    const textElements = document.querySelectorAll(".locations-text h1, .locations-text p, .locations-text a");
    textElements.forEach((text, index) => {
      gsap.fromTo(text, {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animation for location cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, {
          opacity: 0,
          y: 40,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3 + (index * 0.1),
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* First row: 3 columns - text + 2 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">
          {/* Text Container */}
          <div className="locations-text md:pr-6 h-full flex flex-col justify-center">
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Our Services</h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Learn more about our services
            </p>
            <a href="#" className="inline-block bg-transparent border border-blue-600 text-blue-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 mt-auto">
              Explore all services
            </a>
          </div>

          {/* First row - Image 1: Arizona */}
          <LocationCard 
            title="Emergency"
            subtitle="Phoenix & Scottsdale"
            index={0}
            addToRefs={addToRefs}
          />

          {/* First row - Image 2: Florida */}
          <LocationCard 
            title="Healthcare"
            subtitle="Jacksonville"
            index={1}
            addToRefs={addToRefs}
          />
        </div>

        {/* Second row: 3 columns - all images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Second row - Image 1: Minnesota */}
          <LocationCard 
            title="Care Plans"
            subtitle="Rochester"
            index={2}
            addToRefs={addToRefs}
          />

          {/* Second row - Image 2: Health System */}
          <LocationCard 
            title="Lifestyle"
            subtitle="Iowa, Minnesota, Wisconsin"
            index={3}
            addToRefs={addToRefs}
          />

          {/* Second row - Image 3: Healthcare */}
          <LocationCard 
            title="Convenience"
            subtitle="London, United Kingdom"
            index={4}
            addToRefs={addToRefs}
          />
        </div>
      </div>
    </section>
  )
}

export default Locations 