import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    id: 'emergency-care',
    category: 'Emergency & Critical',
    tag: 'Critical Care',
    badge: '24/7 Available',
    badgeColor: 'bg-rose-500/90 text-white',
    title: 'Emergency Care',
    subtitle: '24/7 Immediate Assistance',
    description:
      'Rapid-response clinical support, on-call ambulance coordination, and urgent home medical stabilization when every minute counts.',
    image: '/ServicesImg/emergency.jpg',
    features: [
      'Immediate physician & paramedic triage',
      'ICU-equipped home stabilization setup',
      'Direct 24/7 hospital liaison & ambulance transfer',
    ],
    inquiryValue: 'Emergency Care',
    serviceLink: '/our-services',
  },
  {
    id: 'home-healthcare',
    category: 'Nursing & Attendants',
    tag: 'Skilled Nursing',
    badge: 'Verified Staff',
    badgeColor: 'bg-blue-600/90 text-white',
    title: 'Home Healthcare & Nursing',
    subtitle: 'HealthCare at Your Doorstep',
    description:
      'Certified General Duty Assistants (GDA) and registered ICU nurses delivering compassionate, clinical care in the warmth of home.',
    image: '/ServicesImg/homeHealthCare.avif',
    features: [
      '12-hr & 24-hr live-in nurse/attendant shifts',
      'Wound dressing, IV infusions & catheter care',
      'Bathing, feeding, mobility & hygiene assistance',
    ],
    inquiryValue: 'Home Attendant / GDA Services',
    serviceLink: '/services/home-nursing-care',
  },
  {
    id: 'health-monitoring',
    category: 'Emergency & Critical',
    tag: 'Diagnostics',
    badge: 'Daily Tracking',
    badgeColor: 'bg-amber-500/90 text-white',
    title: 'Health Monitoring & Vitals',
    subtitle: 'Regular Checkups & Tracking',
    description:
      'Continuous vitals charting, blood glucose and BP monitoring, and scheduled diagnostic sample collection right from home.',
    image: '/ServicesImg/healthMonitor.jpg',
    features: [
      'Daily vital recording & family health portal updates',
      'Timely doorstep diagnostic sample collection',
      'Early complication alerts with doctor escalation',
    ],
    inquiryValue: 'Lab Test & Diagnostics',
    serviceLink: '/services/lab-test-diagnostics',
  },
  {
    id: 'elderly-healthcare',
    category: 'Senior Care',
    tag: 'Elder Care',
    badge: 'Personalized Care',
    badgeColor: 'bg-emerald-600/90 text-white',
    title: 'Elderly HealthCare',
    subtitle: 'Support for Elder People',
    description:
      'Dignified senior living support, fall prevention, Alzheimer’s & dementia supervision, and empathetic emotional companionship.',
    image: '/ServicesImg/elderCare.jpg',
    features: [
      'Mobility assistance & fall risk mitigation',
      'Specialized care for Alzheimer’s & dementia',
      'Routine medication alerts & daily companionship',
    ],
    inquiryValue: 'Home Attendant / GDA Services',
    serviceLink: '/services/home-attendant-gda',
  },
  {
    id: 'physiotherapy',
    category: 'Therapy & Doctors',
    tag: 'Mobility & Rehab',
    badge: 'Certified PT',
    badgeColor: 'bg-indigo-600/90 text-white',
    title: 'Physiotherapy & Rehab',
    subtitle: 'Mobility & Active Recovery',
    description:
      'Targeted physical rehabilitation for post-surgery recovery, stroke rehab, joint pain management, and restored senior independence.',
    image: '/ServicesImg/physio.jpg',
    features: [
      'Orthopedic, neurological & cardiopulmonary rehab',
      'Personalized strength & balance recovery plans',
      'Advanced electrotherapy & pain relief modalities',
    ],
    inquiryValue: 'Physiotherapy',
    serviceLink: '/services/physiotherapy',
  },
  {
    id: 'doctor-consultation',
    category: 'Therapy & Doctors',
    tag: 'Physician Visits',
    badge: 'On-Demand',
    badgeColor: 'bg-teal-600/90 text-white',
    title: 'Doctor Consultation & Visits',
    subtitle: 'Expert Physician Guidance at Home',
    description:
      'Comprehensive in-person doctor home visits and teleconsultations across specialties with full clinical prescription oversight.',
    image: '/ServicesImg/doctorOnCall.jpg',
    features: [
      'Holistic geriatric & chronic illness assessments',
      'Medication reviews & lab report interpretations',
      'Direct protocol coordination with home nurses',
    ],
    inquiryValue: 'Doctor Consultation',
    serviceLink: '/services/doctor-consultation',
  },
];

const categories = [
  'All Services',
  'Emergency & Critical',
  'Nursing & Attendants',
  'Senior Care',
  'Therapy & Doctors',
];

const Locations = () => {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const filteredServices =
    activeCategory === 'All Services'
      ? servicesList
      : servicesList.filter((s) => s.category === activeCategory);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔹 SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 pt-4">

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#102f4f] tracking-tight leading-tight mb-4">
            Healthcare Services We Provide
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored for every age group — from emergency clinical
            support to compassionate long-term care at home across Delhi-NCR.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#1C4571] text-white shadow-md shadow-blue-900/15 scale-105'
                      : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 border border-gray-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 🔹 6 MODERN SERVICES GRID */}
        {/* Desktop: 3 columns | Tablet: 2 columns | Mobile: 1 column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 items-stretch">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(28,69,113,0.12)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden relative"
            >
              {/* Image & Floating Badges */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-[1.03]"
                  loading="lazy"
                />

                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating Category Tag (Top-Left) */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="backdrop-blur-md bg-white/90 text-gray-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs uppercase tracking-wide">
                    {service.tag}
                  </span>
                </div>

                {/* Floating Availability Badge (Top-Right) */}
                <div className="absolute top-3.5 right-3.5">
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full shadow-sm ${service.badgeColor}`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Subtitle overlay on bottom of image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs font-medium text-blue-100 tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 min-h-[3.25rem] flex items-center">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Micro-features Checkpoints */}
                  <div className="space-y-2.5 mb-6 pt-3 border-t border-gray-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug">
                        <svg
                          className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                  <Link
                    to="/inquiry"
                    state={{ selectedService: service.inquiryValue }}
                    className="flex-1"
                  >
                    <button className="w-full bg-[#1C4571] hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer">
                      <span>Book Service</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link
                    to={service.serviceLink}
                    className="text-xs font-semibold text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50/60 transition-colors whitespace-nowrap"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 BOTTOM PROMO / EXPLORE STRIP */}
        <div className="mt-14 md:mt-16 bg-gradient-to-r from-[#1C4571] via-[#16385d] to-[#0f2844] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Need Personalized Care Planning?
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-serif">
              Can't find the exact service you're looking for?
            </h4>
            <p className="text-sm text-blue-100 max-w-xl">
              Our clinical care coordinators build custom care bundles combining nurses, attendants,
              doctor visits, and physiotherapy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link to="/our-services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-[#1C4571] font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition shadow-md cursor-pointer">
                Explore All Services
              </button>
            </Link>
            <a
              href="tel:+919891177712"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+91-9891177712</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;