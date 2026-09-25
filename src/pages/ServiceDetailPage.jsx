import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getServiceBySlug, servicesData } from "../data/servicesData";
import { contactInfo } from "../../constants";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  const [activeFaq, setActiveFaq] = useState(null);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex flex-col items-center justify-center pt-28 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-4">
            ?
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-600 max-w-md mb-6">
            The service page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/our-services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition shadow"
          >
            Explore All Services
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleBookService = () => {
    navigate("/inquiry", {
      state: { service: service.inquiryValue || service.title }
    });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-12 bg-slate-50">
        {/* 🔹 HERO */}
        <section className="bg-gradient-to-b from-blue-100/60 via-blue-50/40 to-slate-50 py-12 md:py-16 px-4 md:px-8 border-b border-blue-100/60">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#102f4f] leading-tight font-serif">
                  {service.title}
                </h1>

                <p className="text-lg md:text-xl font-medium text-blue-900/80">
                  {service.subtitle}
                </p>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {service.overview}
                </p>

                {/* CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleBookService}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    Book This Service
                  </button>

                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-[#1C4571] border border-gray-200 hover:border-blue-500 text-base font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow transition"
                  >
                    <svg className="w-5 h-5 text-blue-600 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>Talk to Expert: {contactInfo.phone}</span>
                  </a>
                </div>

                {/* Quick Trust Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs md:text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% Background Verified
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instant Replacement Guarantee
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Image Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-blue-200">
                      Trusted In-Home Healthcare
                    </p>
                    <h3 className="text-xl font-bold">{service.shortTitle}</h3>
                    <p className="text-xs text-gray-200 mt-1">{service.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 HIGHLIGHTS METRICS STRIP */}
        <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl shadow-lg border border-blue-50 text-center hover:border-blue-200 transition"
              >
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{item.number}</p>
                <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 KEY FEATURES & SERVICES OFFERED */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Comprehensive Care & Scope
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Everything tailored to the patient's individual clinical, physical, and psychological needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 WHAT'S INCLUDED & WHO IS IT FOR */}
        <section className="bg-white py-16 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Checklist */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200/80">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm">
                    ✓
                  </span>
                  What Is Included in Service
                </h3>
                <ul className="space-y-3.5">
                  {service.whatIncluded.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Is It For */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                    Who Needs This Service?
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Our customized home assistance program is ideal for individuals facing:
                  </p>
                </div>

                <div className="space-y-3">
                  {service.whoIsItFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 bg-blue-50/60 rounded-xl border border-blue-100"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></div>
                      <p className="text-sm font-medium text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Call to action card */}
                <div className="p-6 bg-gradient-to-r from-[#102f4f] to-[#1C4571] rounded-2xl text-white mt-6 shadow-md">
                  <h4 className="text-lg font-bold mb-1">Unsure if this fits your need?</h4>
                  <p className="text-xs text-blue-100 mb-4">
                    Our care managers can assess your situation and recommend the right caregiver or nurse.
                  </p>
                  <button
                    onClick={handleBookService}
                    className="bg-white text-[#1C4571] hover:bg-blue-50 text-xs font-bold px-5 py-2.5 rounded-lg transition"
                  >
                    Request Free Assessment Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 HOW IT WORKS (4 STEPS) */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              How Feathers Home Care Works
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Fast, transparent, and hassle-free onboarding for your peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Contact Us",
                desc: "Call our helpline or fill out the booking form detailing your patient's condition."
              },
              {
                step: "02",
                title: "Clinical Review",
                desc: "Our supervisor assesses requirements and designs a customized daily care roadmap."
              },
              {
                step: "03",
                title: "Caregiver Match",
                desc: "We assign a verified, certified specialist perfectly suited to your language and needs."
              },
              {
                step: "04",
                title: "Care Delivery",
                desc: "Service starts smoothly at home with ongoing supervisory check-ins and support."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-blue-300 transition"
              >
                <span className="text-5xl font-black text-blue-100 group-hover:text-blue-200 transition absolute right-4 top-4">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 FAQ ACCORDION */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-slate-50 transition"
                    >
                      <span className="text-base">{faq.q}</span>
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
          </div>
        </section>

        {/* 🔹 EXPLORE OTHER SERVICES */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">
                Other Specialized Healthcare Services
              </h3>
              <p className="text-gray-500 text-sm">Explore related medical and in-home care solutions</p>
            </div>
            <Link
              to="/our-services"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((other) => (
                <Link
                  key={other.id}
                  to={`/services/${other.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      {other.badge}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {other.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed flex-grow">
                      {other.tagline}
                    </p>
                    <span className="mt-4 text-xs font-semibold text-blue-600 flex items-center gap-1">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
