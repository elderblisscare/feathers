import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                        className={`text-content space-y-6 max-w-xl ${reverse ? "lg:order-2 lg:pl-8" : "lg:pr-8"
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

                        <button className="border border-blue-600 text-blue-600 px-5 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                            Explore Our Services
                        </button>
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

// 🔹 WHY CHOOSE SECTION
const WhyChoose = () => {
    return (
        <section className="py-16 md:py-24 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* 🔹 IMAGE (LEFT) */}
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                        src="doctors.jpg" // change image
                        alt="Home Healthcare"
                        className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover rounded-xl"
                    />
                </div>

                {/* 🔹 TEXT (RIGHT) */}
                <div className="space-y-6">

                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                        Why Choose Feathers Healthcare?
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        At Feathers, we are committed to delivering compassionate, high-quality
                        healthcare services in the comfort of your home. Our goal is to ensure
                        safety, dignity, and well-being for every patient.
                    </p>

                    {/* 🔹 BULLETS */}
                    <div className="space-y-4">

                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                            <p className="text-gray-700">
                                Experienced and certified healthcare professionals
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                            <p className="text-gray-700">
                                Personalized care plans for every patient
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                            <p className="text-gray-700">
                                24/7 support and emergency assistance
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                            <p className="text-gray-700">
                                Affordable and transparent pricing
                            </p>
                        </div>

                    </div>

                    {/* 🔹 BUTTON */}
                    <button className="mt-4 border border-blue-600 text-blue-600 px-6 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                        Contact Us
                    </button>

                </div>
            </div>
        </section>
    );
};

// 🔹 FOUNDER SECTION (LIKE YOUR IMAGE)
const FounderSection = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-semibold">
                        Meet Our Core Team
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        At FeathersCare, we begin at home & at the heart of our leadership.
                        Our team brings years of caregiving experience.
                    </p>
                </div>

                {/* BOX 1 */}
<div className="bg-[#e9f0f8] p-6 md:p-8 rounded-xl mb-10 grid md:grid-cols-3 items-center gap-6 shadow-md hover:shadow-lg transition">

  {/* 🔹 TEXT (2 parts) */}
  <div className="md:col-span-2">
    <p className="text-gray-700 font-display leading-relaxed">
      I started Feathers Healthcare after personally experiencing the challenges
      of caring for aging family members at home.
    </p>

    <p className="text-gray-700 font-display leading-relaxed mt-3">
      With years of experience across professional environments and a deep
      understanding of service quality and care standards, I witnessed firsthand
      how fragmented and impersonal senior care services can often be.
    </p>

    <p className="text-gray-700 font-display leading-relaxed mt-3">
      Feathers Healthcare was created to bridge that gap—by delivering reliable,
      compassionate, and personalized care that allows elders to age with dignity,
      comfort, and trust in their own homes.
    </p>

    <p className="text-gray-700 font-display leading-relaxed mt-3">
      For me, this isn’t just business—it’s deeply personal.
    </p>

    <p className="mt-4 font-semibold">Deepak Saraswat</p>
    <p className="text-sm text-gray-600">Founder, Feathers</p>
  </div>

  {/* 🔹 IMAGE (1 part) */}
  <div className="md:col-span-1 flex justify-center ">
    <img
      src="doctors.jpg"
      className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover"
    />
  </div>

</div>

                {/* BOX 2 */}
                {/* <div className="bg-[#f5e9e7] p-6 md:p-8 rounded-xl grid md:grid-cols-2 items-center gap-6">
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="doctors.jpg"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-gray-700">
                            With extensive experience in nursing and patient care, our mission
                            is to deliver trusted healthcare at home.
                        </p>
                        <p className="mt-4 font-semibold">Flora Saraswat</p>
                        <p className="text-sm text-gray-600">Co-Founder</p>
                    </div>
                </div> */}

            </div>
        </section>

        //     <section className="py-16 md:py-24 px-4 bg-white">
        //   <div className="max-w-6xl mx-auto">

        //     {/* 🔹 TOP HEADING */}
        //     <div className="text-center max-w-3xl mx-auto mb-12">
        //       <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        //         Top Elderly Care Services in Noida
        //       </h2>

        //       <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
        //         At FeathersCare, we begin at home & at the heart of our leadership. Our
        //         core team brings together years of experience in healthcare and caregiving.
        //       </p>
        //     </div>

        //     {/* 🔸 BOX 1 */}
        //     <div className="bg-[#f5e9e7] p-6 md:p-8 rounded-xl mb-10">
        //       <div className="grid md:grid-cols-2 gap-6 items-center">

        //         {/* TEXT */}
        //         <div>
        //           <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        //             I started FeathersCare after spending nearly a decade as the primary
        //             caregiver to my aging parents. With years in healthcare and caregiving,
        //             I saw firsthand how fragmented and impersonal senior care can be.
        //           </p>

        //           <p className="mt-4 font-semibold text-gray-900">
        //             Deepak Saraswat
        //           </p>

        //           <p className="text-sm text-gray-600">
        //             Founder, FeathersCare
        //           </p>
        //         </div>

        //         {/* IMAGE */}
        //         <div className="flex justify-center md:justify-end">
        //           <img
        //             src="doctors.jpg"
        //             alt="Founder"
        //             className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
        //           />
        //         </div>

        //       </div>
        //     </div>

        //     {/* 🔸 BOX 2 */}
        //     <div className="bg-[#e9f0f8] p-6 md:p-8 rounded-xl">
        //       <div className="grid md:grid-cols-2 gap-6 items-center">

        //         {/* IMAGE */}
        //         <div className="flex justify-center md:justify-start order-1 md:order-1">
        //           <img
        //             src="doctors.jpg"
        //             alt="Care Expert"
        //             className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
        //           />
        //         </div>

        //         {/* TEXT */}
        //         <div className="order-2 md:order-2">
        //           <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        //             With over a decade of hands-on experience in nursing and elderly care,
        //             our mission is to deliver compassionate, professional care that families
        //             can trust.
        //           </p>

        //           <p className="mt-4 font-semibold text-gray-900">
        //             Flora Saraswat
        //           </p>

        //           <p className="text-sm text-gray-600">
        //             Co-Founder, FeathersCare
        //           </p>
        //         </div>

        //       </div>
        //     </div>

        //   </div>
        // </section>


    );
};

// 🔹 Main Component
const AboutUs = () => {
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


            <WhyChoose />

            <FounderSection />

        </>

    );
};

export default AboutUs;