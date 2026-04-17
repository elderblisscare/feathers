import React from "react";

const servicesData = [
  {
    category: "Medical Services",
    categoryDescription: [
      "Our medical services are designed to provide comprehensive and timely care for individuals of all age groups, from children to senior citizens. Whether it’s emergency response, doctor consultations, or continuous health monitoring, our team ensures that every patient receives personalized and professional attention.",

      "We focus on preventive, diagnostic, and emergency care to maintain overall well-being. From hospitalization support to specialized eldercare services, our offerings are tailored to meet diverse healthcare needs and ensure comfort, safety, and peace of mind."
    ],
    items: [
      {
        title: "Ambulance Services",
        image: "/ServicesImg/AHS1.jpg",
        features: [
          "24/7 emergency response",
          "Fully equipped ambulance",
          "Trained paramedics",
        ],
        description:
          "Quick and reliable ambulance services ensuring safe patient transport during emergencies.",
      },
      {
        title: "Doctor On Call",
        image: "/ServicesImg/AHS2.jpg",
        features: [
          "Instant consultation",
          "Home visits",
          "Online consultation",
        ],
        description:
          "Get access to professional doctors anytime at your home or online.",
      },
      {
        title: "Support During Hospitalization",
        image: "/ServicesImg/AHS3.jpg",
        features: [
          "Caregiver support",
          "Admission assistance",
          "Doctor coordination",
        ],
        description:
          "Complete assistance during hospital stays for a smooth experience.",
      },
      {
        title: "Health Monitoring",
        image: "/ServicesImg/AHS4.avif",
        features: [
          "Vital checks",
          "Remote monitoring",
          "Health tracking",
        ],
        description:
          "Continuous monitoring of patient health and vital signs.",
      },
      {
        title: "Labs & Diagnostics",
        image: "/ServicesImg/AHS5.webp",
        features: [
          "Home sample collection",
          "Accurate reports",
          "Fast results",
        ],
        description:
          "Reliable lab testing services at your doorstep.",
      },
      {
        title: "Trained Eldercare Professionals",
        image: "/ServicesImg/AHS6.jpg",
        features: [
          "Skilled caregivers",
          "Personal elder support",
          "Mobility & hygiene assistance",
          "Emotional Companionship",
        ],
        description:
          "Professional care services focused on elderly comfort and safety.",
      },
      {
        title: "Emergency Care",
        image: "/ServicesImg/AHS7.jpg",
        features: [
          "Immediate response",
          "Critical care",
          "Emergency support",
        ],
        description:
          "Fast emergency services for critical situations.",
      },
    ],
  },
  {
    category: "Medical Equipments",
    categoryDescription: [
      "Our wide range of medical equipment supports accurate diagnosis, effective treatment, and continuous monitoring. From ventilators and monitors to oxygen cylinders and mobility aids, we ensure patients receive reliable and modern healthcare support.",

      "These solutions are suitable for patients of all ages, including critical care and long-term recovery. With advanced technology and ease of use, we make healthcare more accessible and efficient for both patients and caregivers."
    ],
    items: [
      {
        title: "Monitor",
        image: "/ServicesImg/med1.png",
        description: "Tracks vital signs like heart rate, BP, and oxygen levels.",
      },
      {
        title: "Urine Catheter",
        image: "/ServicesImg/med2.png",
        description: "Helps in urine drainage for patients unable to urinate naturally..",
      },
      {
        title: "ECG Electrodes",
        image: "/ServicesImg/med3.png",
        description: "Used for heart monitoring.",
      },
      {
        title: "Crash Cart",
        image: "/ServicesImg/med4.png",
        description: "Emergency life-saving equipment trolley.",
      },
      {
        title: "Ventilator",
        image: "/ServicesImg/med5.png",
        description: "Supports breathing in critical care.",
      },
      {
        title: "NG Tube",
        image: "/ServicesImg/md6.png",
        description: "Used for feeding or medication.",
      },
      {
        title: "Digital Thermometer",
        image: "/ServicesImg/md7.png",
        description: "Measures body temperature.",
      },
      {
        title: "Ambu Bag",
        image: "/ServicesImg/md8.png",
        description: "Manual breathing support device.",
      },
      {
        title: "Pulse Oximeter",
        image: "/ServicesImg/md9.png",
        description: "Measures oxygen levels.",
      },
      {
        title: "Stretcher",
        image: "/ServicesImg/md10.png",
        description: "Patient transport equipment.",
      },
      {
        title: "Oxygen Cylinder",
        image: "/ServicesImg/md11.png",
        description: "Provides oxygen supply.",
      },
      {
        title: "Gun Thermometer",
        image: "/ServicesImg/md13.png",
        description: "Contactless temperature device.",
      },
      {
        title: "Glucometer",
        image: "/ServicesImg/md12.png",
        description: "Measures blood sugar levels.",
      },
      {
        title: "Hearing Aids",
        image: "/ServicesImg/md14.png",
        description: "Improves hearing ability.",
      },
      {
        title: "BP Machine",
        image: "/ServicesImg/md15.png",
        description: "Measures blood pressure.",
      },
      {
        title: "BiPAP",
        image: "/ServicesImg/md17.png",
        description: "Breathing support device.",
      },
      {
        title: "CPAP",
        image: "/ServicesImg/md16.png",
        description: "Airway pressure support device.",
      },
    ],
  },
  {
    category: "Home Care Services",
    categoryDescription: [
      "Our home care services bring professional healthcare directly to your doorstep, ensuring comfort and convenience without compromising quality. From doctor visits to 24/7 nursing care, we provide complete support tailored to individual needs.",

      "We focus on personalized care that promotes faster recovery and better well-being. Whether it’s elderly care or lifestyle support, our trained professionals deliver compassionate and reliable services at home."
    ],
    items: [
      {
        title: "Doctor Home Visit",
        image: "/ServicesImg/HM1.jpg",
        features: [
          " In-home consultation",
          "Diagnosis & treatment ",
          " Follow-up visits"
        ],
        description: "Doctor consultation at home.",
      },
      {
        title: "Physio Home Visit",
        image: "/ServicesImg/HM2.png",
        features: [
          "Personalized therapy ",
          " Injury recovery",
          " Mobility improvement"
        ],
        description: "Expert Physiotherapy sessions at home.",
      },
      {
        title: "Professional Attendants",
        image: "/ServicesImg/HM3.webp",
        features: [
          " Daily care assistance",
          " Hygiene support",
          " Patient handling"
        ],
        description: "Daily care assistance. Trained attendants for everyday care needs.",
      },
      {
        title: "Nurse 24 Hour Care",
        image: "/ServicesImg/HM4.jpeg",
        features: [
          " 24/7 nursing support",
          " Medication management",
          "Critical care "
        ],
        description: "Continuous medical supervision at home.",
      },
      {
        title: "Medicine & Food Delivery",
        image: "/ServicesImg/Hm5.jpg",
        features: [
          " Timely delivery",
          " Prescription management",
          " Healthy meals"
        ],
        description: "Convenient delivery services for patient needs.",
      },
      {
        title: "Home Healthcare",
        image: "/ServicesImg/HM6.webp",
        features: [
          " Comprehensive care",
          " Chronic illness support",
          " Rehab services"
        ],
        description: "Hospital-like care at home.",
      },
      {
        title: "Lifestyle Support",
        image: "/ServicesImg/HM7.jpg",
        features: [
          "Daily activity support ",
          "Mental wellness ",
          "Routine management "
        ],
        description: "Helps maintain a healthy and balanced lifestyle.",
      },
    ],
  },
];

const AllHealthServices = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {servicesData.map((section, index) => (
          <div
            key={index}
            className="mb-16 bg-blue-100 p-6 md:p-10 rounded-2xl shadow-sm"
          >
            <h2 className="text-6xl font-serif  mb-6 text-center">
              {section.category}
            </h2>

            {/* ✅ CATEGORY DESCRIPTION */}
            <div className="max-w-3xl mx-auto text-justify mb-10">
              <p className="text-gray-600 mb-3">
                {section.categoryDescription[0]}
              </p>
              <p className="text-gray-600">
                {section.categoryDescription[1]}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-100 to-white border border-blue-300 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 overflow-hidden"
                >

                  <div className="relative w-full h-[250px] overflow-hidden rounded-t-xl">
                    {/* Background Blur */}
                    <img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-70"
                    />

                    {/* Main Image */}
                    <div className="relative w-full h-[250px] flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[220px] w-[300px] rounded-md shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    {item.features && (
                      <ul className="text-sm mb-2 list-disc pl-5">
                        {item.features.map((f, idx) => (
                          <li key={idx}>{f}</li>
                        ))}
                      </ul>
                    )}

                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllHealthServices;