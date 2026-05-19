import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, contactInfo } from "../../constants";
import Chatbot from "./Chatbot";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(currentScrollY > 20);

          if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 120) {
            setVisible(false);
          } else if (currentScrollY < lastScrollY.current - 10 || currentScrollY <= 10) {
            setVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "home" && location.pathname === "/") return true;
    return location.pathname === `/${path}`;
  };

  const getRoutePath = (id) => {
    if (id === "home") return "/";
    return `/${id}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 transform top-0 ${visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white/70 backdrop-blur-sm py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16">

          {/* 🔹 LEFT: LOGO */}
          <div className="flex justify-start h-16 ">
            <Link to="/" className="flex items-center">
              <img
                src="/Logo/Feathers_Logooo.png"   // better use absolute path
                alt="Feathers Logo"
                className=" h-16 w-auto object-contain"
              />
              <h1 className="text-3xl font-bold tracking-wider text-[#102f4f] hover:opacity-80 transition">
                Feathers
              </h1>

            </Link>
          </div>

          {/* 🔹 CENTER: MENU */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center space-x-10 whitespace-nowrap">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={getRoutePath(link.id)}
                    className={`relative text-sm font-medium transition-all duration-200 hover:text-blue-600 ${isActive(link.id)
                      ? "text-blue-600 after:w-full"
                      : "text-gray-800"
                      } after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 RIGHT: WHATSAPP + MOBILE */}
          <div className="flex justify-end items-center gap-3 w-full">

            {/* WhatsApp Button */}
            <button className="hidden lg:flex bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition" onClick={() => {
              const chatbotBtn = document.getElementById("chatbot-toggle");

              if (chatbotBtn) {
                chatbotBtn.click();
              }
            }}>
              {/* <a
              href={`https://wa.me/${contactInfo.phone.replace(
                /[^0-9]/g,
                ""
              )}?text=${encodeURIComponent(
                "Hi, I need home healthcare service.\n\n• Patient name: \n• Age: \n• Location: \n• Service required: \n• Phone number: "
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              
            > */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
              </svg>
              {/* </a> */}
            </button>

            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden lg:flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-full"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {/* Call Now */}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#1C4571] ml-auto"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 🔻 MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={getRoutePath(link.id)}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-blue-600"
            >
              {link.title}
            </Link>
          ))}

          {/* WhatsApp in mobile */}
          <a
            href={`https://wa.me/${contactInfo.phone.replace(
              /[^0-9]/g,
              ""
            )}?text=${encodeURIComponent(
              "Hi, I need home healthcare service.\n\n• Patient name: \n• Age: \n• Location: \n• Service required: \n• Phone number: "
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>

          {/* call Now */}
          <a
            href={`tel:${contactInfo.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Call Now: {contactInfo.phone}
          </a>


        </div>
      )}
    </nav>
  );
};

export default Navbar;