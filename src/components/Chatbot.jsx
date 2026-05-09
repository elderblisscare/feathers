// import { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import { BsChatDotsFill } from "react-icons/bs";
// import { FiSend } from "react-icons/fi";

// const Chatbot = () => {
//     const [open, setOpen] = useState(false);

//     const [messages, setMessages] = useState([
//         {
//             sender: "bot",
//             text: "Hello 👋 Welcome to Feathers Agency.",
//         },
//     ]);

//     const [input, setInput] = useState("");

//     const messagesEndRef = useRef(null);

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({
//             behavior: "smooth",
//         });
//     };

//     const sendMessage = async () => {
//         if (!input.trim()) return;

//         const userMessage = {
//             sender: "user",
//             text: input,
//         };

//         setMessages((prev) => [...prev, userMessage]);

//         const currentMessage = input;

//         setInput("");

//         try {
//             const response = await axios.post(
//                 "http://localhost:5000/chat",
//                 {
//                     message: currentMessage,
//                 }
//             );

//             const botMessage = {
//                 sender: "bot",
//                 text: response.data.reply,
//             };

//             setMessages((prev) => [...prev, botMessage]);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <>
//             {!open && (
//                 <button
//                     onClick={() => setOpen(true)}
//                     className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full"
//                 >
//                     <BsChatDotsFill size={24} />
//                 </button>
//             )}

//             {open && (
//                 <div
//                     className="fixed bottom-5 right-5 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[999999]"
//                     style={{
//                         position: "fixed",
//                     }}
//                 >

//                     <div className="bg-black text-white p-4 flex justify-between">
//                         <h2 className="font-bold">
//                             Feathers Chat
//                         </h2>

//                         <button onClick={() => setOpen(false)}>
//                             X
//                         </button>
//                     </div>

//                     <div className="flex-1 overflow-y-auto p-4 bg-gray-100">

//                         {messages.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className={`mb-3 flex ${msg.sender === "user"
//                                         ? "justify-end"
//                                         : "justify-start"
//                                     }`}
//                             >
//                                 <div
//                                     className={`px-4 py-2 rounded-2xl max-w-[80%]
//                   ${msg.sender === "user"
//                                             ? "bg-black text-white"
//                                             : "bg-white"
//                                         }`}
//                                 >
//                                     {msg.text}
//                                 </div>
//                             </div>
//                         ))}

//                         <div ref={messagesEndRef}></div>

//                     </div>

//                     <div className="p-3 border-t flex gap-2">

//                         <input
//                             type="text"
//                             placeholder="Type message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             className="flex-1 border rounded-xl px-4 py-2 outline-none"
//                             onKeyDown={(e) => {
//                                 if (e.key === "Enter") {
//                                     sendMessage();
//                                 }
//                             }}
//                         />

//                         <button
//                             onClick={sendMessage}
//                             className="bg-black text-white px-4 rounded-xl"
//                         >
//                             <FiSend />
//                         </button>

//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Chatbot;


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
        next: "equipment",
      },
      {
        label: "Doctor Consultation",
        next: "doctor",
      },
    ],
  },

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
    message: "Select required service",
    options: [
      {
        label: "Nursing Care",
        next: "city",
      },
      {
        label: "Attendant",
        next: "city",
      },
      {
        label: "Physiotherapy",
        next: "city",
      },
      {
        label: "ICU Setup",
        next: "city",
      },
    ],
  },

  city: {
    message: "Select your city",
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
    const data = {
      ...selectedData,
      ...formData,
    };

    console.log(data);

    const whatsappMessage =
      `New Elder Care Lead%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Age: ${formData.age}`;

    window.open(
      `https://wa.me/917701953989?text=${whatsappMessage}`,
      "_blank"
    );

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
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full z-[999999] shadow-xl"
        >
          <BsChatDotsFill size={24} />
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-5 right-5 w-[360px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[999999]"
          style={{
            position: "fixed",
          }}
        >
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h2 className="font-semibold text-lg">
              Feathers Agency
            </h2>

            <button onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.type === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-4 py-3 rounded-2xl max-w-[85%] text-sm ${
                    msg.type === "user"
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
                  className="border px-4 py-2 rounded-xl outline-none"
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
                  className="border px-4 py-2 rounded-xl outline-none"
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
                  className="border px-4 py-2 rounded-xl outline-none"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      age: e.target.value,
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