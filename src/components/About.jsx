import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// 🔹 Reusable Block Component
const AboutBlock = ({ reverse, image, title, subtitle, text1, text2 }) => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Image animation
    if (imgRef.current) {
      gsap.set(imgRef.current, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      });

      gsap.to(imgRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }

    // Text animation
    const textElements = sectionRef.current.querySelectorAll(
      ".text-content h1, .text-content h2, .text-content p, .text-content button"
    );

    textElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* 🔹 TEXT */}
          <div
            className={`text-content space-y-6 max-w-xl ${
              reverse ? "lg:order-2 lg:pl-8" : "lg:pr-8"
            }`}
          >
            <h1 className="font-serif text-3xl md:text-5xl text-gray-900 leading-tight">
              {title}
            </h1>

            <h2 className="text-lg md:text-xl font-medium text-gray-800">
              {subtitle}
            </h2>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              {text1}
            </p>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              {text2}
            </p>

           <Link to="/our-services"> <button className="border border-blue-600 text-blue-600 px-5 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              Explore Our Services
            </button>
            </Link>
          </div>

          {/* 🔹 IMAGE */}
          <div className={`${reverse ? "lg:order-1" : ""}`}>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                ref={imgRef}
                src={image}
                alt="Healthcare"
                className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[480px] object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 🔹 Main Component
const About = () => {
  return (
    <>
      {/* 🔸 Section 1 (Text Left, Image Right) */}
      <AboutBlock
        reverse={false}
        image="doctors.jpg"
        title="Compassionate Care Starts at Home"
        subtitle="Trusted Healthcare for Every Stage of Life"
        text1="At Feathers, we provide personalized healthcare services for seniors, adults, and children — ensuring comfort, safety, and expert medical support at home."
        text2="Our experienced doctors, nurses, and caregivers deliver reliable home healthcare services with compassion and professionalism."
      />

      {/* 🔸 Section 2 (Image Left, Text Right) */}
      <AboutBlock
        reverse={true}
        image="doctors.jpg"
        title="Quality Care You Can Trust"
        subtitle="Dedicated to Your Health & Wellbeing"
        text1="We bring professional medical care directly to your home with a focus on comfort, dignity, and personalized attention."
        text2="Our team ensures every patient receives the highest level of care with modern medical practices."
      />
    </>
  );
};

export default About;