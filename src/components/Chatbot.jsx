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
        label: "General Physician",
        next: "city",
      },
      {
        label: "Physiotherapist",
        next: "city",
      },
      {
        label: "Neurologist",
        next: "city",
      },
      {
        label: "Cardiologist",
        next: "city",
      },
    ],
  },

  // COMMON FLOW
  city: {
    message: "Select your city : ",
    options: [
      {
        label: "Delhi",
        next: "timing",
      },
      {
        label: "Noida",
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
    const conversation = messages
      .map((msg, index) => {
        return `${msg.type === "bot" ? "[BOT]" : "[USER]"}: ${msg.text}`;
      })
      .join("%0A");

    const whatsappMessage =
      `New Feathers Agency Lead %0A%0A` +

      `-------Chat Conversation-------%0A` +
      `${conversation}%0A%0A` +

      `%0A` +

      `----------Patient Details----------%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Age: ${formData.age}%0A` +
      `Gender: ${formData.gender}%0A` +
      `Address: ${formData.address}%0A%0A` +

      `%0A` +

      `Sent from Feathers Agency Chatbot`;

    window.open(
      `https://wa.me/917701953989?text=${whatsappMessage}`,
      "_blank"
    );

    // const url1 = `https://wa.me/917701953989?text=${whatsappMessage}`;
    // const url2 = `https://wa.me/919990825711?text=${whatsappMessage}`;

    // window.open(url1, "_blank");

    // // same tab after delay
    // setTimeout(() => {
    //   window.location.href = url2;
    // }, 1500);

    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: "Thank you! Our team will contact you shortly.",
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
          className="fixed bottom-5 right-2 md:right-5 bg-green-600 text-white p-3 rounded-full z-[999999] shadow-xl"
        >
          <BsChatDotsFill size={16} />
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-5 right-5 w-[280px] h-[500px] md:w-[360px] md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[999999]"
          style={{
            position: "fixed",
          }}
        >
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/Logo/green_logo.png"
                alt="Feathers Agency Logo"
                className="w-10 h-10 rounded-full object-cover bg-white p-1"
              />

              <h2 className="font-semibold text-lg">
                Feathers Agency
              </h2>
            </div>

            <button onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.type === "user"
                  ? "text-right"
                  : "text-left"
                  }`}
              >
                <div
                  className={`inline-block px-4 py-3 rounded-2xl max-w-[85%] text-sm ${msg.type === "user"
                    ? "bg-green-600 text-white"
                    : "bg-white shadow"
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
                        className="border border-green-600 text-green-600 px-4 py-2 rounded-xl text-left hover:bg-green-50 transition"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {showForm && (
              <div className="bg-white p-4 rounded-2xl shadow mt-4 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border px-4 py-2 rounded-xl outline-none  focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571]"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="Enter Phone"
                  className="border px-4 py-2 rounded-xl outline-none   focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571]"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="Patient Age"
                  className="border px-4 py-2 rounded-xl outline-none  focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571]"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      age: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Patient Gender"
                  className="border px-4 py-2 rounded-xl outline-none  focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571]"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="Patient Address"
                  className="border px-4 py-2 rounded-xl outline-none   focus:ring-1 focus:ring-[#1C4571] focus:border-[#1C4571]"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    })
                  }
                />

                <button
                  onClick={submitLead}
                  className="bg-green-600 text-white py-3 rounded-xl"
                >
                  Submit
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