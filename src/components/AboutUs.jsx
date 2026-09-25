import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// 🔹 IMPACT METRICS STRIP
const ImpactMetrics = () => {
    const metrics = [
        {
            value: "5,000+",
            label: "Families Supported",
            desc: "Compassionate elder care, nursing, and recovery at home",
        },
        {
            value: "100%",
            label: "Verified Caregivers",
            desc: "Rigorous police clearance, ID checks, and certified training",
        },
        {
            value: "24/7",
            label: "Clinical Coordination",
            desc: "Continuous care monitoring, doctor on call, and emergency support",
        },
        {
            value: "98.6%",
            label: "Satisfaction Rate",
            desc: "Highly recommended by families across Delhi NCR",
        },
    ];

    return (
        <section className="relative z-10 -mt-10 max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {metrics.map((m, idx) => (
                    <div
                        key={idx}
                        className="text-center lg:text-left space-y-1 lg:border-r last:border-r-0 border-gray-100 lg:pr-6"
                    >
                        <p className="text-3xl md:text-4xl font-extrabold text-[#1C4571] tracking-tight">
                            {m.value}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-gray-800">
                            {m.label}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 hidden sm:block leading-relaxed">
                            {m.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// 🔹 CORE PILLARS OF CARE
const CorePillars = () => {
    const pillars = [
        {
            title: "Dignity & Empathetic Care",
            desc: "Every patient and senior citizen is treated with profound respect, patience, and genuine companionship to safeguard emotional well-being.",
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            title: "Clinical Rigor & Training",
            desc: "Our nursing professionals and GDA attendants receive continuous training in vitals monitoring, hygiene, mobility assistance, and emergency response.",
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            title: "Continuous Supervision",
            desc: "We don't simply deploy staff; dedicated care managers actively track daily progress, review clinical logs, and maintain family communication.",
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
        },
        {
            title: "Ethical & Family-First",
            desc: "Clear agreements, transparent billing, and zero-hassle replacement support. We consider ourselves trusted partners in your family's care journey.",
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 md:py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-[#1C4571] mb-3">
                        Our Core Pillars of Care
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Every service we deliver is anchored in rigorous healthcare standards and genuine empathy, ensuring optimal outcomes and comforting care.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((p, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50/70 hover:bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-100/70 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors duration-300">
                                    <span className="group-hover:text-white transition-colors duration-300">
                                        {p.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 🔹 MISSION & VISION SECTION
const MissionVision = () => {
    return (
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-blue-50 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-60 group-hover:scale-110 transition-transform"></div>
                        <div className="relative z-10 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#1C4571] text-white flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                                Our Purpose
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[#1C4571]">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                To empower seniors, post-operative patients, and individuals with chronic conditions to heal and age with independence and dignity in the comfort of their homes. We bridge clinical healthcare protocols with heartfelt compassion, giving families complete peace of mind.
                            </p>
                            <div className="pt-2 flex flex-wrap gap-2">
                                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">Dignity in Aging</span>
                                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">Clinical Supervision</span>
                                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">Empathetic Care</span>
                            </div>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-blue-50 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-60 group-hover:scale-110 transition-transform"></div>
                        <div className="relative z-10 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                                Our Future
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[#1C4571]">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                To be North India's most trusted home healthcare ecosystem, setting benchmarks in caregiver vetting, patient safety, and clinical responsiveness. We envision a future where high-caliber medical support at home is accessible, transparent, and seamless for every household.
                            </p>
                            <div className="pt-2 flex flex-wrap gap-2">
                                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">Quality Benchmarks</span>
                                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">Trusted Ecosystem</span>
                                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">Total Transparency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 🔹 STORY & PHILOSOPHY BLOCK
const StorySection = () => {
    return (
        <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Story Text */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-5xl text-[#1C4571] leading-tight">
                            Where Clinical Rigor Meets Human Compassion
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            When an aging parent or recovering loved one requires medical care, families often face difficult choices. Prolonged hospital stays can be emotionally draining and financially burdensome, yet unorganized domestic maid agencies lack clinical oversight, reliability, and emergency readiness.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            <strong className="text-gray-900 font-semibold">Feathers Healthcare</strong> was established to bridge this vital gap. We combine hospital-level clinical supervision with the comfort and warmth of home. From skilled nursing care and bedridden patient support to physical therapy and dedicated Japa infant care, every service is delivered by certified professionals.
                        </p>
                        <div className="pt-2 flex flex-col sm:flex-row gap-4">
                            <Link to="/our-services">
                                <button className="w-full sm:w-auto bg-[#1C4571] text-white px-7 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-sm hover:shadow">
                                    Explore Our Services
                                </button>
                            </Link>
                            <Link to="/inquiry">
                                <button className="w-full sm:w-auto border border-[#1C4571] text-[#1C4571] px-7 py-3 rounded-full font-medium hover:bg-blue-50 transition">
                                    Talk to a Care Coordinator
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Story Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/aboutImg1.jpg"
                                alt="Compassionate Healthcare at Home"
                                className="w-full h-[360px] md:h-[460px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <span className="bg-blue-600 text-xs uppercase px-3 py-1 rounded-full font-bold tracking-wider mb-2 inline-block">
                                    Supervised Care
                                </span>
                                <p className="text-lg font-semibold drop-shadow-md">
                                    Hospital-grade clinical standards brought to your living room.
                                </p>
                            </div>
                        </div>

                        {/* Floating Experience Badge */}
                        <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                ✓
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">100% Background Verified</p>
                                <p className="text-xs text-gray-500">Police cleared & medically certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 🔹 WHY CHOOSE SECTION (ELEVATED)
const WhyChoose = () => {
    const highlights = [
        {
            title: "Experienced & Police-Verified Staff",
            desc: "Every caregiver and nurse undergoes strict government ID checks, address verification, and medical screening.",
        },
        {
            title: "Personalized Care Protocols",
            desc: "Custom health plans tailored specifically for stroke rehab, paralysis, post-surgery recovery, or geriatric assistance.",
        },
        {
            title: "24/7 Rapid Coordination & Doctor On Call",
            desc: "Continuous supervision with doctor consultations, emergency support, and ambulance dispatch coordination.",
        },
        {
            title: "Transparent Pricing & Hassle-Free Replacement",
            desc: "Clear daily/monthly packages with zero hidden fees and guaranteed prompt caregiver replacement whenever needed.",
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1C4571] leading-tight">
                        Why Families Across Delhi NCR Trust Feathers Healthcare
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        At Feathers, we don’t treat caregiving as a transactional service. We act as an extension of your family, delivering safety, clinical rigor, and genuine warmth at every step.
                    </p>

                    {/* Feature Items */}
                    <div className="space-y-4 pt-2">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors duration-200">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <Link to="/inquiry">
                            <button className="bg-[#1C4571] text-white px-7 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-sm hover:shadow">
                                Contact Our Team
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Visual Image */}
                <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src="/whychoseimg.jpg"
                            alt="Professional Home Healthcare"
                            className="w-full h-[350px] sm:h-[420px] md:h-[480px] object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C4571]/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-1">
                                Comprehensive Home Care
                            </p>
                            <p className="text-lg md:text-xl font-semibold">
                                From Day Shifts to 24-Hour Live-in Caregivers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 🔹 FOUNDER SECTION (KEPT 100% UNTOUCHED)
const FounderSection = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#1C4571]">
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
                            src="/Testimonials_Img/Deepak-Saraswat-1.avif"
                            alt="Deepak Saraswat - Founder, Feathers"
                            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

// 🔹 CALL TO ACTION BANNER
const ConsultationBanner = () => {
    return (
        <section className="py-16 px-4 bg-[#1C4571] text-white">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                    Need Trusted In-Home Care for Your Family?
                </h2>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Speak directly with our clinical care coordinators. We will understand your patient’s requirements and recommend the ideal care plan within hours.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/inquiry">
                        <button className="w-full sm:w-auto bg-white text-[#1C4571] px-8 py-3.5 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg">
                            Book a Consultation
                        </button>
                    </Link>
                    <a
                        href="tel:+919891177712"
                        className="w-full sm:w-auto border border-white/40 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call: +91 98911 77712
                    </a>
                </div>
            </div>
        </section>
    );
};

// 🔹 MAIN COMPONENT
const AboutUs = () => {
    const heroContentRef = useRef(null);

    useEffect(() => {
        // Page SEO Title & Meta
        const originalTitle = document.title;
        document.title = "About Feathers Healthcare | Trusted Home Nursing & Elder Care Delhi NCR";

        let metaDesc = document.querySelector('meta[name="description"]');
        let originalDesc = "";
        if (metaDesc) {
            originalDesc = metaDesc.getAttribute("content") || "";
            metaDesc.setAttribute(
                "content",
                "Learn about Feathers Healthcare Agency - delivering hospital-grade home nursing, elderly care, patient attendants, and clinical support across Delhi NCR."
            );
        }

        // Hero Content Animation
        if (heroContentRef.current) {
            gsap.fromTo(
                heroContentRef.current.children,
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power2.out",
                }
            );
        }

        return () => {
            document.title = originalTitle;
            if (metaDesc && originalDesc) {
                metaDesc.setAttribute("content", originalDesc);
            }
        };
    }, []);

    return (
        <div className="w-full bg-white">
            {/* 🔹 HERO BANNER */}
            <div className="relative min-h-[60vh] md:min-h-[68vh] w-full overflow-hidden flex items-center">
                {/* Background Image */}
                <img
                    src="/ServicesImg/attendant.jpg"
                    alt="Feathers Healthcare Home Care"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Modern Dark/Navy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d233a]/95 via-[#1C4571]/85 to-[#1C4571]/70"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 text-white">
                    <div ref={heroContentRef} className="max-w-3xl space-y-5">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-sm">
                            Caring with Compassion, Leading with Clinical Excellence
                        </h1>

                        <p className="text-blue-100 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                            Bridging the gap between hospital-level medical supervision and the warmth of home. Providing dignified elder care, certified nursing, and trusted family support across Delhi NCR.
                        </p>

                        <div className="pt-3 flex flex-wrap gap-4 items-center">
                            <Link to="/our-services">
                                <button className="bg-white text-[#1C4571] hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg cursor-pointer">
                                    Explore Our Services
                                </button>
                            </Link>
                            <Link to="/inquiry">
                                <button className="border border-white/60 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer">
                                    Schedule a Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 IMPACT STATS STRIP */}
            <ImpactMetrics />

            {/* 🔹 STORY & PHILOSOPHY */}
            <StorySection />

            {/* 🔹 DUAL PILLARS: MISSION & VISION */}
            <MissionVision />

            {/* 🔹 CORE CLINICAL PILLARS */}
            <CorePillars />

            {/* 🔹 WHY CHOOSE FEATHERS (ELEVATED) */}
            <WhyChoose />

            {/* 🔹 MEET OUR CORE TEAM (STRICTLY UNTOUCHED) */}
            <FounderSection />

            {/* 🔹 CONSULTATION CTA */}
            <ConsultationBanner />
        </div>
    );
};

export default AboutUs;