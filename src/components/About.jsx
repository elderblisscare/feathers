import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const imgRef1 = useRef(null);
  const sectionRef1 = useRef(null);

  const imgRef2 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    // Section 1 animations
    gsap.set(".text-content-1 h1, .text-content-1 h2, .text-content-1 p, .text-content-1 a, .text-content-1 button", {
      opacity: 1,
      y: 0
    });

    if (imgRef1.current) {
      gsap.set(imgRef1.current, { 
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)"
      });

      gsap.to(imgRef1.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: "top 85%",
          end: "center 60%",
          scrub: 0.5,
          once: false,
          anticipatePin: 1,
        },
      });
    }

    const textElements1 = document.querySelectorAll(".text-content-1 h1, .text-content-1 h2, .text-content-1 p, .text-content-1 a, .text-content-1 button");
    textElements1.forEach((text, index) => {
      gsap.fromTo(text, {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: index * 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });
    });

    // Section 2 animations
    gsap.set(".text-content-2 h1, .text-content-2 h2, .text-content-2 p, .text-content-2 a, .text-content-2 button", {
      opacity: 1,
      y: 0
    });

    if (imgRef2.current) {
      gsap.set(imgRef2.current, { 
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)"
      });

      gsap.to(imgRef2.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: sectionRef2.current,
          start: "top 85%",
          end: "center 60%",
          scrub: 0.5,
          once: false,
          anticipatePin: 1,
        },
      });
    }

    const textElements2 = document.querySelectorAll(".text-content-2 h1, .text-content-2 h2, .text-content-2 p, .text-content-2 a, .text-content-2 button");
    textElements2.forEach((text, index) => {
      gsap.fromTo(text, {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: index * 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef2.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef1.current || 
            trigger.vars.trigger === sectionRef2.current) {
          trigger.kill();
        }
      });
    };

  }, []);

  return (
    <>
      {/* Section 1 - Image right */}
      <section ref={sectionRef1} className="py-16 px-4 overflow-hidden my-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text */}
            <div className="text-content-1 space-y-6 lg:pr-8">
              <div className="space-y-3">
                <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight">
                  Healing starts here
                </h1>
                <h2 className="text-xl font-medium text-gray-800 mt-4">
                  Your Loved Ones Deserve Premium
                </h2>
                <p className="text-gray-600 text-base lg:text-lg">
                  Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges.
                </p>
              </div>
              <div className="space-y-3 mt-6">
                <h2 className="text-xl lg:text-2xl font-medium text-gray-900">
                  Most trusted network in NCR.
                </h2>
                <p className="text-gray-600 text-base lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline transition-colors">
                    Learn more about our team.
                  </a>
                </p>
              </div>
              <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-base font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 mt-4">
                Why choose Feathers
              </button>
            </div>

            {/* Right - Image */}
            <div className="img-container right mt-8 lg:mt-0">
              <div className="relative overflow-hidden rounded-xl" style={{ maxWidth: "100%", maxHeight: "480px" }}>
                <img 
                  ref={imgRef1}
                  src="/Screenshot From 2025-06-28 03-36-42.png"
                  alt="Healthcare professional with stethoscope and mask"
                  className="w-full object-cover object-center"
                  style={{ height: "auto", maxHeight: "480px", width: "100%", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image left */}
      <section ref={sectionRef2} className="py-16 px-4 overflow-hidden my-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="img-container left mt-8 lg:mt-0">
              <div className="relative overflow-hidden rounded-xl" style={{ maxWidth: "100%", maxHeight: "480px" }}>
                <img 
                  ref={imgRef2}
                  src="/Screenshot From 2025-06-28 03-36-42.png"
                  alt="Healthcare professional with stethoscope and mask"
                  className="w-full object-cover object-center"
                  style={{ height: "auto", maxHeight: "480px", width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="text-content-2 space-y-6 lg:pl-8">
              <div className="space-y-3">
                <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight">
                  Healing starts here
                </h1>
                <h2 className="text-xl font-medium text-gray-800 mt-4">
                  Your Loved Ones Deserve Premium
                </h2>
                <p className="text-gray-600 text-base lg:text-lg">
                  Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges.
                </p>
              </div>
              <div className="space-y-3 mt-6">
                <h2 className="text-xl lg:text-2xl font-medium text-gray-900">
                  Most trusted network in NCR.
                </h2>
                <p className="text-gray-600 text-base lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline transition-colors">
                    Learn more about our team.
                  </a>
                </p>
              </div>
              <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-base font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 mt-4">
                Why choose Feathers
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
