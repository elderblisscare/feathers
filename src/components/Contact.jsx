import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Phone validation FIRST
    if (formData.phone.length !== 10) {
      alert("Please enter valid 10-digit phone number ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data.message);

      // reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  useEffect(() => {
    // Fixed parallax effect implementation to prevent overflow
    const section = sectionRef.current;

    // Use a different approach for parallax that doesn't cause overflow
    gsap.to(".parallax-bg", {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
      }
    });

    // Animate contact info elements with improved trigger points
    const infoElements = infoRef.current.querySelectorAll('.info-item');
    gsap.fromTo(infoElements,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 90%', // Trigger earlier
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate form elements with improved trigger points
    const formElements = formRef.current.querySelectorAll('.form-group, .submit-btn');
    gsap.fromTo(formElements,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 90%', // Trigger earlier
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Social media icons animation with improved trigger points
    const socialIcons = infoRef.current.querySelectorAll('.social-icon');
    gsap.fromTo(socialIcons,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 90%', // Trigger earlier
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup on unmount
    return () => {
      // Only kill ScrollTrigger instances related to this component
      const triggers = ScrollTrigger.getAll().filter(t =>
        t.vars.trigger === section ||
        t.vars.trigger === infoRef.current ||
        t.vars.trigger === formRef.current
      );
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="vh-10 py-5 relative overflow-hidden"
      >
        {/* Fixed parallax background implementation */}
        <div
          className="parallax-bg absolute inset-0 z-0 bg-fixed"
          style={{
            backgroundImage: 'url("/iStock-1447873986.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 50%',
            willChange: 'background-position', // Performance optimization for smoother animations
          }}
        >
          {/* Improved overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e1941]/80 via-[#121c4a]/75 to-[#0d1638]/85"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
            {/* Contact Information - more elegant design */}
            <div
              ref={infoRef}
              className="bg-white/5 backdrop-blur-md rounded-xl p-5 lg:p-6 text-white shadow-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h2 className="font-cormorant text-white text-2xl mb-3 tracking-wider font-semibold">Contact Us</h2>

              <div className="space-y-4">
                {/* Address */}
                <div className="info-item flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-[#1C4571] to-[#2a5d94] p-2 rounded-full shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-cormorant text-lg font-medium text-white">Address</h4>
                    <p className="text-white/90 text-sm">29D, Sector 105, Noida</p>
                  </div>
                </div>

                {/* Email */}
                <div className="info-item flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-[#1C4571] to-[#2a5d94] p-2 rounded-full shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-cormorant text-lg font-medium text-white">Email</h4>
                    <a href="mailto:contact@feathers.care" className="text-white/90 hover:text-[#ff8c39] transition-colors text-sm hover:underline">contact@feathers.care</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="info-item flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-[#1C4571] to-[#2a5d94] p-2 rounded-full shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-cormorant text-lg font-medium text-white">Phone</h4>
                    <a href="tel:+18005551234" className="text-white/90 hover:text-[#ff8c39] transition-colors text-sm hover:underline">(+91) 7982363899</a>
                  </div>
                </div>
              </div>

              {/* Social Media - more elegant */}
              <div className="mt-6">
                <h4 className="font-cormorant text-lg font-medium text-white mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" target='_blank' className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/feathers-agency/" target='_blank' className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/feathers.agency29/" target='_blank' className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@Feathers.Agency" target='_blank' className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - enhanced design */}
            <div
              ref={formRef}
              className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-5 lg:p-6 border border-white/20 transform transition-all"
            >
              <h3 className="text-xl font-cormorant font-bold text-[#1C4571] mb-4 relative inline-block">
                Send Us a Message
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#1C4571] to-transparent"></span>
              </h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1 text-xs">Your Name</label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571] transition-all bg-white/80 hover:bg-white"
                      placeholder="John Doe"
                      required
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1C4571] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1 text-xs">
                    Phone Number
                  </label>

                  <div className="relative group">
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // only digits
                        setFormData({ ...formData, phone: value });
                      }}
                      className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571] transition-all bg-white/80 hover:bg-white"
                      placeholder="9876543210"
                      maxLength="10"
                      required
                    />

                    {/* Phone Icon */}
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1C4571] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 3a1 1 0 011-1h2.28a1 1 0 01.95.68l1.12 3.36a1 1 0 01-.27 1.02L5.91 8.91a11.05 11.05 0 005.18 5.18l1.85-1.17a1 1 0 011.02-.27l3.36 1.12a1 1 0 01.68.95V21a1 1 0 01-1 1h-1C7.82 22 2 16.18 2 9V3z" />
                      </svg>
                    </div>
                  </div>
                  {formData.phone.length > 0 && formData.phone.length < 10 && (
                    <p className="text-red-500 text-xs mt-1">
                      Enter valid 10-digit number
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1 text-xs">Your Email</label>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571] transition-all bg-white/80 hover:bg-white"
                      placeholder="johndoe@example.com"
                      required
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1C4571] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-1 text-xs">Subject</label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571] transition-all bg-white/80 hover:bg-white"
                      placeholder="How can we help you?"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1C4571] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1 text-xs">Your Message</label>
                  <div className="relative group">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571] resize-none transition-all bg-white/80 hover:bg-white"
                      placeholder="Write your message here..."
                    ></textarea>
                    <div className="absolute left-3 top-3 text-gray-400 group-hover:text-[#1C4571] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="submit-btn w-full bg-gradient-to-r from-[#1C4571] to-[#1e5285] hover:from-[#1e5285] hover:to-[#1C4571] text-white py-2.5 px-5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    <span>Submit Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-10 w-full mx-auto rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=ElderBlissCare&output=embed"
              className="w-full h-[350px] md:h-[400px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact

