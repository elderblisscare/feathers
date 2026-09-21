import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const faqsData = [
  {
    q: "How quickly can Feathers deploy a home nurse or attendant after submitting an inquiry?",
    a: "We understand that healthcare needs are often urgent. In most areas across Noida, Greater Noida, Delhi, and Gurgaon, we can deploy certified nurses and GDA attendants within 2 to 4 hours of your inquiry and clinical assessment. For planned post-operative or scheduled maternity care, we coordinate caregivers ahead of time."
  },
  {
    q: "Are your caregivers and nurses background-verified and medically trained?",
    a: "Yes, 100%. Every caregiver, nurse, and GDA attendant undergoes strict three-tier verification: government ID verification, permanent address confirmation, and police background clearance. Our nursing staff hold recognized GNM or B.Sc Nursing qualifications, while care attendants are certified in basic life support, patient hygiene, mobility assistance, and bedside care."
  },
  {
    q: "What is the difference between a Home Attendant (GDA) and a Home Nursing Care professional?",
    a: "A Home Attendant (General Duty Assistant) assists with daily living activities, including bathing, sponge baths, diaper changing, feeding, mobility, vital tracking, and companion care. A Home Nurse is a qualified medical professional who manages clinical tasks such as IV infusions, injections, catheterization, tracheostomy care, wound dressings, and critical ICU setup monitoring."
  },
  {
    q: "What if the assigned caregiver is not a good fit for my family or patient?",
    a: "Your comfort and satisfaction are our utmost priority. We offer a 100% hassle-free caregiver replacement guarantee. If for any reason the deployed caregiver does not match your expectations, notify our care coordinator and we will provide a prompt replacement."
  },
  {
    q: "Do you offer flexible shifts such as 12-hour day/night or 24-hour live-in care?",
    a: "Yes. We offer fully customizable care plans tailored to your patient's routine. You can choose 12-hour Day Shifts, 12-hour Night Shifts, or 24-hour continuous live-in care. Short-term rehabilitation (weekly) as well as long-term monthly care packages are available with transparent billing."
  },
  {
    q: "Which locations in Delhi NCR do you serve?",
    a: "Feathers Agency operates extensively across Delhi NCR, including Noida (all sectors, Noida Expressway), Greater Noida & Greater Noida West (Noida Extension), South Delhi, East Delhi, Central Delhi, West Delhi, Gurugram (DLF, Golf Course Road, Sohna Road), and Ghaziabad (Indirapuram, Vaishali, Vasundhara)."
  }
];

const servicesList = [
  {
    title: "Home Nursing Care",
    slug: "home-nursing-care",
    badge: "Clinical Care",
    desc: "24/7 skilled GNM & B.Sc nurses for post-operative recovery, ICU setup, catheterization, tracheostomy, and injection administration."
  },
  {
    title: "Home Attendant / GDA Services",
    slug: "home-attendant-gda",
    badge: "Daily Living",
    desc: "Trained General Duty Assistants for bedridden patient assistance, sponge baths, feeding, mobility rehabilitation, and hygiene care."
  },
  {
    title: "Physiotherapy at Home",
    slug: "physiotherapy",
    badge: "Rehabilitation",
    desc: "Qualified physiotherapists providing personalized sessions for stroke recovery, paralysis, joint replacements, back pain, and sports injuries."
  },
  {
    title: "Doctor Consultation & Home Visit",
    slug: "doctor-consultation",
    badge: "Physician Care",
    desc: "Compassionate bedside doctor consultations, health assessments, prescription reviews, and emergency medical evaluations at home."
  },
  {
    title: "Lab Tests & Diagnostics at Home",
    slug: "lab-test-diagnostics",
    badge: "Doorstep Tests",
    desc: "Hygienic blood sample collection at your doorstep with certified NABL accredited laboratory testing and fast digital report delivery."
  },
  {
    title: "Japa Care / Baby Care",
    slug: "jpa-baby-care",
    badge: "Maternity & Infant",
    desc: "Experienced Japa maids and baby care nurses for traditional mother postpartum massage, newborn oil massage, bathing, and latching support."
  }
];

const InquirySeoContent = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 🔹 Dynamic SEO Title, Description, and Structured Data (JSON-LD)
  useEffect(() => {
    // 1. Page Title
    const originalTitle = document.title;
    document.title = "Healthcare Services Inquiry & Booking | Feathers Home Care Delhi NCR";

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    let originalDesc = "";
    if (metaDesc) {
      originalDesc = metaDesc.getAttribute("content") || "";
      metaDesc.setAttribute(
        "content",
        "Inquire & book certified home nursing, GDA attendants, elderly care, physiotherapy, doctor home visits and Japa baby care across Noida, Delhi NCR & Gurgaon."
      );
    }

    // 3. Inject Structured Data (Schema.org JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalBusiness",
          "name": "Feathers Agency",
          "url": "https://feathers.agency/inquiry",
          "logo": "https://feathers.agency/Logo/Feathers_Logooo.png",
          "telephone": "+91-9891177712",
          "email": "feathers.agency29@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "29D, Sector 105",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201304",
            "addressCountry": "IN"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Su 00:00-23:59",
          "availableService": servicesList.map((s) => ({
            "@type": "MedicalProcedure",
            "name": s.title,
            "description": s.desc
          }))
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqsData.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        }
      ]
    };

    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = JSON.stringify(schemaData);
    document.head.appendChild(scriptTag);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute("content", originalDesc);
      }
      if (scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, []);

  return (
    <div className="bg-slate-50 border-t border-gray-200">
      {/* 🔹 1. HOW IT WORKS / 3-STEP PROCESS */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Simple & Transparent Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#102f4f] font-serif">
            How Our Home Healthcare Booking Works
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            From your initial inquiry to caregiver deployment at your doorstep in 3 easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition relative group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-bold text-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
              01
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Your Inquiry</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fill out our simple inquiry form above or call our 24/7 hotline at{" "}
              <a href="tel:+919891177712" className="text-blue-600 font-semibold hover:underline">
                +91 9891177712
              </a>
              . Tell us about the patient's medical condition and timing requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition relative group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-bold text-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
              02
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Clinical Assessment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our care coordinator reviews the clinical history, advises on 12-hr or 24-hr shifts, and selects an experienced, background-verified caregiver tailored to your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition relative group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-bold text-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
              03
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Doorstep Deployment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The assigned nurse or attendant arrives at your residence. You receive ongoing care supervision, vitals tracking, and a 100% free immediate replacement guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 2. WHY CHOOSE FEATHERS (TRUST SIGNALS & SEO HIGHLIGHTS) */}
      <section className="py-16 bg-white border-y border-gray-200 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Why Families Trust Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#102f4f] font-serif">
              Trusted In-Home Healthcare Across Delhi NCR
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              We combine clinical expertise with heartfelt empathy, ensuring your loved ones receive professional hospital-grade care at home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Police & ID Verified</h3>
              <p className="text-gray-600 text-sm">
                Triple-tier verified staff: Aadhaar, permanent residential checks, and police verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">2–4 Hour Deployment</h3>
              <p className="text-gray-600 text-sm">
                Rapid emergency caregiver placement across Noida, Greater Noida, Delhi, and Gurgaon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Replacement Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Not satisfied with your assigned staff? Get an immediate, hassle-free replacement with no extra charges.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                Clear, upfront shift rates with no hidden costs for flexible daily or monthly plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. COMPREHENSIVE SERVICES DIRECTORY FOR INQUIRY */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Services Catalog
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#102f4f] font-serif">
            Healthcare Services Available for Home Booking
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Select any service below to explore detailed packages, pricing inclusions, and clinical protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {service.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition inline-flex items-center gap-1.5 pt-3 border-t border-gray-100"
              >
                <span>View Service Details</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 4. SERVICE AREAS (LOCAL SEO EXPANSION) */}
      <section className="py-14 bg-gradient-to-br from-[#012d61] to-[#1C4571] text-white px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#ff8c39] bg-white/10 px-3 py-1 rounded-full inline-block">
                Coverage Areas
              </span>
              <h2 className="text-3xl font-bold font-serif leading-tight">
                Doorstep Healthcare Coverage Across Delhi NCR
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Headquartered in Sector 105 Noida, our healthcare professionals are strategically deployed throughout Delhi, Noida, Greater Noida, and Gurgaon for prompt service dispatch.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919891177712"
                  className="inline-flex items-center gap-2 bg-[#ff8c39] hover:bg-[#e07628] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                >
                  <span>Call Emergency Coordinator</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1.5">Noida</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Sec 18, 50, 62, 75, 76, 78, 105, 137, 150 & Expressway
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1.5">Greater Noida</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Pari Chowk, Alpha, Beta, Delta, Zeta & Greater Noida West
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1.5">South Delhi</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Saket, GK, Vasant Kunj, Hauz Khas, Defence Colony & Lajpat Nagar
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1.5">East & Central Delhi</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Mayur Vihar, Preet Vihar, Laxmi Nagar, Connaught Place & Karol Bagh
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1.5">Gurugram</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Cyber City, DLF Phases 1-5, Golf Course Rd, Sohna Rd & Sec 56
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1.5">Ghaziabad</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Indirapuram, Vaishali, Vasundhara, Kaushambi & Raj Nagar Ext.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. FAQ SECTION (HIGH VALUE SEO ACCORDION) */}
      <section className="py-16 px-6 lg:px-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#102f4f] font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Everything you need to know about booking our in-home healthcare services.
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-2xs transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-slate-50 transition cursor-pointer"
                >
                  <span className="text-base text-gray-800">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default InquirySeoContent;
