import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

// 🔹 UPDATED CARD COMPONENT
const LocationCard = ({ title, subtitle, image, addToRefs }) => {
  return (
    <div
      ref={(el) => addToRefs(el)}
      className="group bg-[#cfdff3] p-4 rounded-md border border-blue-200 shadow-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:-translate-y-2"
    // className="bg-[#cfdff3] p-4 rounded-md border border-blue-200 shadow-sm hover:scale-105 transition-all duration-300"
    >

      {/* Image */}
      <div className="overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          // className="w-full h-[220px] object-cover rounded "
          className="w-full h-[220px] object-cover rounded transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 cursor-pointer"
        // className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      {/* Content */}
      <div className="bg-white mt-4 p-5 text-center rounded shadow-sm">

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          {title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {subtitle}
        </p>

       <Link to="/inquiry">
       <button className="bg-[#1C4571] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#cfdff3] hover:text-[#1C4571] transition">
          Book Now
        </button>
        </Link>

      </div>
    </div>
  );
}

// 🔹 MAIN COMPONENT (UNCHANGED STRUCTURE)
const Locations = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, 5)

    const textElements = document.querySelectorAll(
      ".locations-text h1, .locations-text p, .locations-text a"
    )

    textElements.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      )
    })

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + index * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        )
      }
    })
  }, [])

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* 🔹 FIRST ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">

          {/* TEXT */}
          <div className="locations-text md:pr-6 h-full flex flex-col justify-center">
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Healthcare Services We Provide
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Comprehensive healthcare solutions tailored for every age group — from emergency care to long-term support.
            </p>
            <Link
              to="/our-services"
              className="inline-block border border-blue-600 text-blue-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 mt-auto"
            >
              Explore Our Services
            </Link>
          </div>

          {/* CARDS */}
          <LocationCard
            title="Emergency Care"
            subtitle="24/7 Immediate Assistance"
            image="./ServicesImg/emergency.jpg"
            addToRefs={addToRefs}
          />

          <LocationCard
            title="Home Healthcare"
            subtitle="HealthCare at Your Doorstep"
            image="homeHealthCare.avif"
            addToRefs={addToRefs}
          />
        </div>

        {/* 🔹 SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          <LocationCard
            title="Health Monitoring"
            subtitle="Regular Checkups & Tracking"
            image="./ServicesImg/healthMonitor.jpg"
            addToRefs={addToRefs}
          />

          <LocationCard
            title="Elderly HealthCare"
            subtitle="Support for Elder People"
            image="./ServicesImg/elderCare.jpg"
            addToRefs={addToRefs}
          />

          <LocationCard
            title="Lifestyle Support"
            subtitle="Wellness & Preventive Care"
            image="health_lifestyle.jpg"
            addToRefs={addToRefs}
          />

        </div>
      </div>
    </section>
  )
}

export default Locations