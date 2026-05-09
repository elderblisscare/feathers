import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { BsChatDotsFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const Chatbot = () => {
    const [open, setOpen] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hello 👋 Welcome to Feathers Agency.",
        },
    ]);

    const [input, setInput] = useState("");

    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = {
            sender: "user",
            text: input,
        };

        setMessages((prev) => [...prev, userMessage]);

        const currentMessage = input;

        setInput("");

        try {
            const response = await axios.post(
                "http://localhost:5000/chat",
                {
                    message: currentMessage,
                }
            );

            const botMessage = {
                sender: "bot",
                text: response.data.reply,
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full"
                >
                    <BsChatDotsFill size={24} />
                </button>
            )}

            {open && (
                <div
                    className="fixed bottom-5 right-5 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[999999]"
                    style={{
                        position: "fixed",
                    }}
                >

                    <div className="bg-black text-white p-4 flex justify-between">
                        <h2 className="font-bold">
                            Feathers Chat
                        </h2>

                        <button onClick={() => setOpen(false)}>
                            X
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">

                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-3 flex ${msg.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`px-4 py-2 rounded-2xl max-w-[80%]
                  ${msg.sender === "user"
                                            ? "bg-black text-white"
                                            : "bg-white"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        <div ref={messagesEndRef}></div>

                    </div>

                    <div className="p-3 border-t flex gap-2">

                        <input
                            type="text"
                            placeholder="Type message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 border rounded-xl px-4 py-2 outline-none"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                        />

                        <button
                            onClick={sendMessage}
                            className="bg-black text-white px-4 rounded-xl"
                        >
                            <FiSend />
                        </button>

                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;