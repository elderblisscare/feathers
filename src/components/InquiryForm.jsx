
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const InquiryForm = () => {
    const location = useLocation();
    const infoRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    // 🔥 Auto-fill service from navigation
    useEffect(() => {
        if (location.state?.service) {
            setFormData((prev) => ({
                ...prev,
                service: location.state.service,
            }));
        }
    }, [location.state]);

    // 🔹 Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        //  Google Sheet ke liye
        const formBody = new URLSearchParams();
        formBody.append("name", formData.name);
        formBody.append("phone", formData.phone);
        formBody.append("email", formData.email);
        formBody.append("service", formData.service);
        formBody.append("message", formData.message);

        try {
            //  Dono API ek saath hit karenge
            const [backendRes, sheetRes] = await Promise.all([

                //  Node Backend
                fetch("https://api-p3fcjtjysa-uc.a.run.app/api/booking", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }),

                // Google Sheet
                fetch("https://script.google.com/macros/s/AKfycbzeElJ9jylGvwRhvCOefLuMJDnARkt5uI8fAXOukwFpFmv-uCJhbNV0a00mbYpkOK6d/exec", {
                    method: "POST",
                    body: formBody
                })
            ]);

            //  Backend response
            const backendData = await backendRes.json();

            //  Sheet response
            const sheetText = await sheetRes.text();

            console.log("Backend:", backendData);
            console.log("Sheet:", sheetText);

            alert("Booking Enquiry submitted");

            // Reset form
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: "",
            });

        } catch (error) {
            console.error(error);
            alert("Something went wrong ❌");
        }
    };

    return (
        <>
            <div className="text-center pt-12 pb-2 px-4 bg-gray-50">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102f4f] font-serif">
                    Healthcare Service Inquiry & Booking
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
                    Connect with our care team for certified home nursing, patient attendants (GDA), elderly care, physiotherapy, and Japa baby care delivered to your doorstep.
                </p>
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 py-10 px-6 lg:px-20 bg-gray-50 items-stretch">


                <div
                    ref={infoRef}
                    className="bg-[#012d61] h-full backdrop-blur-md rounded-xl p-5 lg:p-6 text-white shadow-xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                    <div>
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
                                    <a href="mailto:feathers.agency29@gmail.com" className="text-white/90 hover:text-[#ff8c39] transition-colors text-sm hover:underline">feathers.agency29@gmail.com</a>
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
                                    <a href="tel:+919891177712" className="text-white/90 hover:text-[#ff8c39] transition-colors text-sm hover:underline">+91 9891177712</a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media - more elegant */}
                        <div className="mt-6">
                            <h4 className="font-cormorant text-lg font-medium text-white mb-3">Follow Us</h4>
                            <div className="flex space-x-3">
                                <a href="https://www.facebook.com/feathers.agency/" target='_blank' rel="noopener noreferrer" className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/feathers-agency/" target='_blank' rel="noopener noreferrer" className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/feathers.agency/" target='_blank' rel="noopener noreferrer" className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@Feathers.Agency" target='_blank' rel="noopener noreferrer" className="social-icon bg-white/10 hover:bg-gradient-to-br hover:from-[#1C4571] hover:to-[#2a5d94] p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Location Map */}
                    <div className="mt-6 pt-5 border-t border-white/15">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-cormorant text-lg font-medium text-white flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ff8c39]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Our Location</span>
                            </h4>
                            <a
                                href="https://maps.google.com/?q=Feathers Agency, D 29, Block D, Sector 105, Noida, Uttar Pradesh 201304"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-white/80 hover:text-[#ff8c39] transition-colors flex items-center gap-1 hover:underline"
                            >
                                <span>View on Map</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="w-full h-48 sm:h-52 md:h-56 rounded-lg overflow-hidden shadow-lg border border-white/15">
                            <iframe
                                title="Office Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1822.0829433752076!2d77.36517289376661!3d28.533457670529792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7dde6bd2d83%3A0x5729f632b2a82afb!2sFeathers%20Agency!5e0!3m2!1sen!2sin!4v1777265326012!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>


                <div className="w-full h-full bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">

                    {/* 🔹 Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                        Book Healthcare Services
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Fill out the form and our team will get back to you shortly.
                    </p>

                    {/* 🔥 Show selected service */}
                    {formData.service && (
                        <p className="text-blue-600 mb-4 font-medium">
                            Selected Service: {formData.service}
                        </p>
                    )}

                    {/* 🔹 Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Phone */}
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Service Dropdown */}
                        <select
                            name="service"
                            value={formData.service}
                            required
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Service</option>
                            <option value="Home Attendant / GDA Services">Home Attendant / GDA Services</option>
                            <option value="Home Nursing Care">Home Nursing Care</option>
                            <option value="Physiotherapy">Physiotherapy at Home</option>
                            <option value="Doctor Consultation">Doctor Consultation</option>
                            <option value="Lab Test & Diagnostics">Lab Test & Diagnostics</option>
                            <option value="Japa Care / Baby Care">Japa Care / Baby Care</option>
                            <option value="Doctor Home Visit">Doctor Home Visit</option>
                            <option value="Elderly Care Professional">Elderly Care Professional</option>
                            <option value="Ambulance Services">Ambulance Services</option>
                            <option value="Hospitalization Support">Hospitalization Support</option>
                            <option value="Health Monitoring">Health Monitoring</option>
                            <option value="Medicine Delivery">Medicine Delivery</option>
                            <option value="Medical Equipments">Medical Equipments</option>
                        </select>

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Describe your requirement"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#012d61] text-white py-3 rounded-lg hover:bg-blue-900 transition"
                        >
                            Submit Request
                        </button>

                    </form>
                </div>
            </section>
        </>
    );
};

export default InquiryForm;