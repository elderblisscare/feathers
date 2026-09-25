import { useState, useRef, useEffect } from "react";
import { BsChatDotsFill } from "react-icons/bs";

const chatbotFlow = {
  start: {
    message:
      "Hello 👋 Welcome to Feathers Agency. How can we help you today?",
    options: [
      {
        label: "Home Care Services",
        next: "care_type",
      },
      {
        label: "Medical Equipment",
        next: "equipment_type",
      },
      {
        label: "Doctor Consultation",
        next: "doctor_type",
      },
    ],
  },

  // HOME CARE FLOW
  care_type: {
    message: "Who needs care support?",
    options: [
      {
        label: "Elderly Person",
        next: "service_type",
      },
      {
        label: "Patient Recovery",
        next: "service_type",
      },
      {
        label: "Bedridden Patient",
        next: "service_type",
      },
    ],
  },

  service_type: {
    message: "Select required service : ",
    options: [
      {
        label: "Nursing Care",
        next: "city",
      },
      {
        label: "Doctor Visit",
        next: "city",
      },
      {
        label: "Attendant",
        next: "city",
      },
      {
        label: "Medicine Delivery",
        next: "city",
      },
      {
        label: "Physiotherapy",
        next: "city",
      },
      {
        label: "Lab Test & Diagnostics",
        next: "city",
      },
      {
        label: "ICU Setup",
        next: "city",
      },
    ],
  },

  // EQUIPMENT FLOW
  equipment_type: {
    message: "Who needs medical equipment support?",
    options: [
      {
        label: "Elderly Person",
        next: "equipment",
      },
      {
        label: "Patient Recovery",
        next: "equipment",
      },
      {
        label: "Bedridden Patient",
        next: "equipment",
      },
    ],
  },

  equipment: {
    message: "Select required equipment : ",
    options: [
      {
        label: "Oxygen Concentrator",
        next: "city",
      },
      {
        label: "Hospital Bed",
        next: "city",
      },
      {
        label: "Wheelchair",
        next: "city",
      },
      {
        label: "BiPAP / CPAP",
        next: "city",
      },
    ],
  },

  // DOCTOR FLOW
  doctor_type: {
    message: "Who needs doctor consultation?",
    options: [
      {
        label: "Elderly Person",
        next: "doctor",
      },
      {
        label: "Patient Recovery",
        next: "doctor",
      },
      {
        label: "Bedridden Patient",
        next: "doctor",
      },
    ],
  },

  doctor: {
    message: "Select doctor consultation type : ",
    options: [
      {
        label: "Tele Consultation",
        next: "city",
      },
      {
        label: "Home visit",
        next: "city",
      },
    ],
  },

  // COMMON FLOW
  city: {
    message: "Select your city : ",
    options: [
            {
        label: "Faridabad",
        next: "timing",
      },
      {
        label: "Delhi",
        next: "timing",
      },
      {
        label: "Noida",
        next: "timing",
      },
            {
        label: "Greater Noida",
        next: "timing",
      },
      {
        label: "Gurgaon",
        next: "timing",
      },
      {
        label: "Ghaziabad",
        next: "timing",
      },
    ],
  },

  timing: {
    message: "When do you need service?",
    options: [
      {
        label: "Immediately",
        next: "form",
      },
      {
        label: "Today",
        next: "form",
      },
      {
        label: "Tomorrow",
        next: "form",
      },
      {
        label: "This Week",
        next: "form",
      },
    ],
  },
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // chatbot auto open after 2 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: chatbotFlow.start.message,
      options: chatbotFlow.start.options,
    },
  ]);

  const [selectedData, setSelectedData] = useState({});

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    address: ""
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleOptionClick = (option, next) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: option,
      },
    ]);

    setSelectedData((prev) => ({
      ...prev,
      selected: option,
    }));

    if (next === "form") {
      setShowForm(true);
      return;
    }

    const nextFlow = chatbotFlow[next];

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: nextFlow.message,
          options: nextFlow.options,
        },
      ]);
    }, 400);
  };

  const submitLead = async () => {

    /* VALIDATIONS */

    if (formData.name.trim() === "") {

      alert("Please enter patient name");
      return;

    }

    if (formData.age === "") {

      alert("Please select age group");
      return;

    }

    if (formData.gender === "") {

      alert("Please select gender");
      return;

    }

    if (formData.phone.trim() === "") {

      alert("Please enter phone number");
      return;

    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {

      alert("Please enter valid 10 digit phone number");
      return;

    }

    if (formData.address.trim() === "") {

      alert("Please enter address");
      return;

    }

    /* CHAT CONVERSATION */

    const conversation = messages
      .filter((msg) => !msg.isFormData)
      .map((msg) => {
        return `${msg.type === "bot" ? "[BOT]" : "[USER]"}: ${msg.text}`;
      })
      .join("%0A");

    /* WHATSAPP MESSAGE */

    const whatsappMessage =

      `New Feathers Agency Lead %0A%0A` +

      `------- Chat Conversation -------%0A` +
      `${conversation}%0A%0A` +

      `------- Patient Details -------%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Age Group: ${formData.age}%0A` +
      `Gender: ${formData.gender}%0A` +
      `Address: ${formData.address}%0A%0A` +

      `Sent from Feathers Agency Chatbot`;

    window.open(
      `https://wa.me/919891177712?text=${whatsappMessage}`,
      "_blank"
    );

    /* THANK YOU MESSAGE */

    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: "Thank you! Our care team will contact you shortly.",
        options: [
          {
            label: "Start New Inquiry",
            next: "start",
          },
        ],
      },
    ]);

    setShowForm(false);

  };

  return (
    <>
      {!open && (
        <button
          id="chatbot-toggle"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-4 md:right-6 bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white p-3.5 md:p-4 rounded-full z-[999999] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center group"
          aria-label="Open Chat with Feathers Agency"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
          <BsChatDotsFill className="w-5 h-5 md:w-6 md:h-6 transform transition-transform group-hover:rotate-6" />
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-4 sm:bottom-5 right-3 sm:right-6 w-[calc(100vw-1.5rem)] sm:w-[360px] md:w-[380px] h-[520px] md:h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-[999999] transition-all duration-300"
          style={{
            position: "fixed",
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white px-4 py-3.5 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/Logo/green_logo.png"
                  alt="Feathers Agency Logo"
                  className="w-10 h-10 rounded-full object-cover bg-white p-1 shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>

              <div>
                <h2 className="font-semibold text-base sm:text-lg leading-tight">
                  Feathers Agency
                </h2>
                <p className="text-xs text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online Support
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 active:bg-white/30 transition-all duration-200 cursor-pointer"
              aria-label="Close Chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages & Options */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${msg.type === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "bg-emerald-600 text-white rounded-tr-xs shadow-sm font-medium"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-xs"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.options && (
                  <div className="mt-3 flex flex-col gap-2">
                    {msg.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          handleOptionClick(
                            option.label,
                            option.next
                          )
                        }
                        className="w-full border-2 border-emerald-600/70 bg-white text-emerald-800 font-semibold px-4 py-2.5 rounded-xl text-left text-sm transition-all duration-200 flex items-center justify-between group hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-md active:scale-[0.98] cursor-pointer shadow-xs"
                      >
                        <span className="transition-colors duration-200">{option.label}</span>
                        <span className="text-emerald-600 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200 font-bold text-base">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {showForm && (
              <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 mt-4 flex flex-col gap-3">
                <h3 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-2">
                  Please Share Patient Details
                </h3>

                <input
                  type="text"
                  placeholder="Enter Patient Name"
                  required
                  className="w-full border-2 border-gray-200 hover:border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm text-gray-800 placeholder-gray-400 bg-white"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  maxLength={10}
                  required
                  className="w-full border-2 border-gray-200 hover:border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm text-gray-800 placeholder-gray-400 bg-white"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                />

                <input
                  type="number"
                  placeholder="Enter Patient Age"
                  min="1"
                  max="120"
                  required
                  className="w-full border-2 border-gray-200 hover:border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm text-gray-800 placeholder-gray-400 bg-white"
                  onChange={(e) => {
                    const age = e.target.value;
                    let ageGroup = "";
                    if (age <= 12) {
                      ageGroup = "Child";
                    } else if (age <= 19) {
                      ageGroup = "Teenager";
                    } else if (age <= 59) {
                      ageGroup = "Adult";
                    } else {
                      ageGroup = "Elder";
                    }
                    setFormData({
                      ...formData,
                      age: `${age} (${ageGroup})`,
                    });
                  }}
                />

                <select
                  required
                  className="w-full border-2 border-gray-200 hover:border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm text-gray-800 bg-white cursor-pointer"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  placeholder="Enter Address"
                  required
                  className="w-full border-2 border-gray-200 hover:border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm text-gray-800 placeholder-gray-400 bg-white"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    })
                  }
                />

                <button
                  onClick={submitLead}
                  className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 mt-1"
                >
                  Submit Details
                </button>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;