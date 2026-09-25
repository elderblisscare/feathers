import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// 🔹 Reusable Modern Block Component
const AboutBlock = ({
  reverse,
  image,
  pill,
  title,
  subtitle,
  text1,
  text2,
  highlights,
  badgeIcon,
  badgeTitle,
  badgeSub,
}) => {
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
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }

    // Text animation
    const textElements = sectionRef.current.querySelectorAll(
      ".text-content h1, .text-content h2, .text-content p, .text-content .action-btn, .text-content .pill-badge, .text-content .feature-item"
    );

    textElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 🔹 TEXT */}
          <div
            className={`text-content space-y-6 max-w-xl ${
              reverse ? "lg:order-2 lg:pl-6" : "lg:pr-6"
            }`}
          >
            {/* Pill Badge */}
            {pill && (
              <div className="pill-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                  {pill}
                </span>
              </div>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#102f4f] leading-tight font-bold tracking-tight">
              {title}
            </h1>

            <h2 className="text-lg md:text-xl font-semibold text-blue-700 tracking-wide">
              {subtitle}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {text1}
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {text2}
            </p>

            {/* Micro-Features Checklist */}
            {highlights && highlights.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-gray-100">
                {highlights.map((item, idx) => (
                  <div key={idx} className="feature-item flex items-center gap-2.5 text-sm sm:text-base text-gray-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2">
              <Link to="/our-services">
                <button className="action-btn bg-[#1C4571] hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
                  <span>Explore Our Services</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* 🔹 IMAGE */}
          <div className={`${reverse ? "lg:order-1" : ""}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-100 bg-slate-100">
              <img
                ref={imgRef}
                src={image}
                alt="Healthcare"
                className="w-full h-[300px] sm:h-[380px] md:h-[440px] lg:h-[500px] object-cover object-center transition-all duration-700 ease-out group-hover:scale-106"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Glassmorphic Trust Badge */}
              {badgeTitle && (
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto backdrop-blur-md bg-white/95 border border-white/50 p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3.5 transition-transform duration-300 group-hover:scale-105">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-xl flex items-center justify-center shrink-0 shadow-xs">
                    {badgeIcon || "⭐"}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{badgeTitle}</p>
                    <p className="text-[11px] sm:text-xs text-gray-500">{badgeSub}</p>
                  </div>
                </div>
              )}
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
        image="aboutImg1.jpg"
        pill="Compassionate Homecare"
        title="Compassionate Care Starts at Home"
        subtitle="Trusted Healthcare for Every Stage of Life"
        text1="At Feathers, we provide personalized healthcare services for seniors, adults, and children — ensuring comfort, safety, and expert medical support at home."
        text2="Our experienced doctors, nurses, and caregivers deliver reliable home healthcare services with compassion and professionalism."
        highlights={[
          "100% Police & Background Verified Staff",
          "Dedicated 24/7 Clinical Care Coordination",
          "Holistic Patient-Centric Recovery Plans",
        ]}
        badgeIcon="⭐"
        badgeTitle="4.9 / 5 Star Care Rating"
        badgeSub="Trusted by 10,000+ Happy Families"
      />

      {/* 🔸 Section 2 (Image Left, Text Right) */}
      <AboutBlock
        reverse={true}
        image="aboutImg2.jpg"
        pill="Clinical Excellence"
        title="Quality Care You Can Trust"
        subtitle="Dedicated to Your Health & Wellbeing"
        text1="We bring professional medical care directly to your home with a focus on comfort, dignity, and personalized attention."
        text2="Our team ensures every patient receives the highest level of care with modern medical practices."
        highlights={[
          "Hospital-Grade Patient Safety Protocols",
          "Continuous Family Health Updates & Vitals",
          "Experienced Doctors, ICU Nurses & GDAs",
        ]}
        badgeIcon="🩺"
        badgeTitle="Certified Healthcare Experts"
        badgeSub="Clinical Supervision at Every Step"
      />
    </>
  );
};

export default About;