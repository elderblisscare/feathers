// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const InquiryForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     message: "",
//   });


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // later connect to backend/email
//     alert("Your request has been submitted!");
//   };

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

//         {/* 🔹 Heading */}
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
//           Book Healthcare Services
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Fill out the form and our team will get back to you shortly.
//         </p>

//         {/* 🔹 Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             required
//             onChange={handleChange}
//             className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             required
//             onChange={handleChange}
//             className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Service Dropdown */}
//           <select
//             name="service"
//             required
//             onChange={handleChange}
//             className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Service</option>
//             <option value="nursing">Home Nursing</option>
//             <option value="elderly">Elderly Care</option>
//             <option value="physio">Physiotherapy</option>
//             <option value="doctor">Doctor Visit</option>
//           </select>

//           {/* Message */}
//           <textarea
//             name="message"
//             placeholder="Describe your requirement"
//             rows="4"
//             onChange={handleChange}
//             className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Submit Request
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// };

// export default InquiryForm;


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const InquiryForm = () => {
    const location = useLocation();

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

    // 🔹 Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            alert(data.message || "Booking submitted ✅");

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
        <section className="py-16 px-4 bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-3xl mx-auto w-full bg-white p-8 rounded-xl shadow-md">

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
                        <option value="Home Nursing">Home Nursing</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Doctor Visit">Doctor Visit</option>
                        <option value="Home Nursing">Home Nursing</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Doctor Visit">Doctor Visit</option>
                        <option value="Home Nursing">Home Nursing</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Doctor Visit">Doctor Visit</option>
                        <option value="Home Nursing">Home Nursing</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Doctor Visit">Doctor Visit</option>
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
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit Request
                    </button>

                </form>
            </div>
        </section>
    );
};

export default InquiryForm;