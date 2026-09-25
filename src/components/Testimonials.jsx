import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Nitish Arun",
    text: "Feathers truly came through when my father needed medical attention early in the morning. They quickly arranged a doctor visit and diagnostics at home, making the whole process smooth and stress-free. Their prompt and caring service made all the difference.",
    location: "Munirka, Delhi",
    service_taken: "Emergency Doctor Visit",
    image: "/Testimonials_Img/Nitish_Arun_test.jpeg",
  },
  {
    name: "Saurabh Das Gupta",
    text: "Feathers has been a great support for my father, who has mild memory issues. The attendant they provided is exceptionally patient, attentive, and handles him with genuine care and respect. It’s a huge comfort knowing someone trustworthy is there for him when we can’t be, allowing us to focus on our daily lives without added worry.",
    location: "CR Park, South Delhi",
    service_taken: "Caregiver Services (Attendant)",
    image: "/Testimonials_Img/Saurabh_Das_Test.jpg",
  },
  {
    name: "Antionette Martin",
    text: "When my mother needed a doctor late at night, Feathers came through without delay. The doctor arrived quickly, was calm and reassuring, and took great care of her. I truly appreciate their dependable service during such a tense moment.",
    location: "Jungpura, South Delhi",
    service_taken: "Doctor Visit",
    image: "/Testimonials_Img/Antionette_Test.jpg",
  },
  {
    name: "Raminder Kaur",
    text: "The physiotherapy sessions from Feathers have really helped me regain my strength and mobility. The therapist is gentle, patient, and always encourages me to keep going. I feel more confident and active than I have in a long time.",
    location: "Gurgaon",
    service_taken: "Physiotherapy at Home",
    image: "/Testimonials_Img/Raminder_Test.jpg",
  },
];

const CHAR_THRESHOLD = 170;

export default function Testimonials() {
  const [expandedCards, setExpandedCards] = useState({});
  const swiperRef = useRef(null);

  const toggleExpand = (name) => {
    setExpandedCards((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const hasAnyExpanded = Object.values(expandedCards).some(Boolean);

  useEffect(() => {
    if (swiperRef.current) {
      if (swiperRef.current.autoplay) {
        if (hasAnyExpanded) {
          swiperRef.current.autoplay.stop();
        } else {
          swiperRef.current.autoplay.start();
        }
      }
      swiperRef.current.update();
    }
  }, [expandedCards, hasAnyExpanded]);

  return (
    <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 relative overflow-hidden">
      {/* Background Subtle Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#102f4f] tracking-tight leading-tight mb-3">
            What Our Clients Say About Us
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Authentic feedback from families who entrusted their loved ones to our verified caregivers,
            nurses, and healthcare specialists.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoHeight={false}
          loop={testimonials.length > 3}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-11! [&>.swiper-wrapper]:!items-start"
        >
          {testimonials.map((item, index) => {
            const isExpanded = !!expandedCards[item.name];
            const isLong = item.text.length > CHAR_THRESHOLD;

            return (
              <SwiperSlide key={index} className="h-auto flex justify-center">
                {/* Testimonial Card Container */}
                <div
                  className={`bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(28,69,113,0.1)] transition-all duration-300 flex flex-col justify-between w-full text-left relative group select-none ${
                    isExpanded
                      ? "min-h-[390px] sm:min-h-[400px] h-auto border-blue-200/90 shadow-[0_16px_40px_rgba(28,69,113,0.12)] z-20"
                      : "h-[390px] sm:h-[400px] z-10"
                  }`}
                >
                  {/* 🔹 Top Row: Rating Stars + Decorative Quote SVG (Consistently Positioned) */}
                  <div className="flex items-center justify-between shrink-0 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs font-bold text-gray-500 ml-1.5">5.0</span>
                    </div>

                    <div className="text-blue-100 group-hover:text-blue-200 transition-colors pointer-events-none">
                      <svg className="w-9 h-9 fill-current opacity-70" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* 🔹 Middle Row: Review Text clamped to prevent height variations + Show More/Less toggle */}
                  <div className="flex-1 flex flex-col justify-center my-auto py-1">
                    <p
                      className={`text-gray-600 text-sm sm:text-base leading-relaxed font-normal transition-all duration-300 ${
                        isExpanded ? "line-clamp-none" : "line-clamp-3"
                      }`}
                    >
                      "{item.text}"
                    </p>

                    {isLong && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(item.name);
                        }}
                        className="inline-flex items-center gap-1.5 mt-2.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer w-fit select-none focus:outline-none"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Show Less" : "Show More"}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* 🔹 Bottom Row: Reviewer Details (Identically Pinned Across All Cards) */}
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-3.5 mt-auto shrink-0 h-[72px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 shadow-sm shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors leading-snug truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5 truncate">
                        <svg
                          className="w-3 h-3 text-gray-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="truncate">{item.location}</span>
                      </p>
                      <span className="inline-block bg-blue-50 text-blue-700 font-semibold text-[11px] px-2.5 py-0.5 rounded-full mt-1.5 truncate max-w-full">
                        {item.service_taken}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}