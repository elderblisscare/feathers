import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, serviceDropdownLinks, contactInfo } from "../../constants";

const ServiceIcon = ({ type, className = "w-5 h-5" }) => {
  switch (type) {
    case "attendant":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "nursing":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "physio":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 11h3m-3 4h3m-7-9v5a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v1M6 4v12a2 2 0 002 2h10a2 2 0 002-2V4" />
        </svg>
      );
    case "doctor":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m-6-8h6M9 1v2a2 2 0 002 2h2a2 2 0 002-2V1M5 13V9a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
        </svg>
      );
    case "lab":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "baby":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll behavior (hide/show on scroll)
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown and mobile menu whenever route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "home" && location.pathname === "/") return true;
    return location.pathname === `/${path}`;
  };

  const isServicesActive = () => {
    return (
      location.pathname.startsWith("/services") ||
      location.pathname === "/our-services" ||
      location.pathname === "/medical-services" ||
      location.pathname === "/homecare"
    );
  };

  const getRoutePath = (id) => {
    if (id === "home") return "/";
    return `/${id}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 transform top-0 ${visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16">
          {/* 🔹 LEFT: LOGO */}
          <div className="flex justify-start h-16">
            <Link to="/" className="flex items-center">
              <img
                src="/Logo/Feathers_Logooo.png"
                alt="Feathers Logo"
                className="h-16 w-auto object-contain"
              />
              <h1 className="text-3xl font-bold tracking-wider text-[#102f4f] hover:opacity-80 transition">
                Feathers
              </h1>
            </Link>
          </div>

          {/* 🔹 CENTER: DESKTOP MENU */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center space-x-9 whitespace-nowrap">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <li key={link.id} ref={dropdownRef} className="relative">
                      {/* Clickable dropdown trigger button */}
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        type="button"
                        aria-expanded={dropdownOpen}
                        className={`relative flex items-center gap-1.5 text-sm font-medium transition-all duration-200 cursor-pointer py-1 ${isServicesActive() || dropdownOpen
                          ? "text-blue-600 after:w-full"
                          : "text-gray-800 hover:text-blue-600"
                          } after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full`}
                      >
                        <span>{link.title}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* 🔻 CLICKABLE SERVICES DROPDOWN MENU */}
                      {dropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white rounded-2xl shadow-2xl border border-blue-50/80 p-5 transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2">
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 px-2">
                            <div>
                              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                                Feathers Agency
                              </span>
                              <h4 className="text-sm font-semibold text-gray-800">
                                Specialized Home Care Services
                              </h4>
                            </div>
                            <Link
                              to="/our-services"
                              onClick={() => setDropdownOpen(false)}
                              className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100"
                            >
                              All Services →
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {serviceDropdownLinks.map((service) => {
                              const isCurrent = location.pathname === service.path;
                              return (
                                <Link
                                  key={service.id}
                                  to={service.path}
                                  onClick={() => setDropdownOpen(false)}
                                  className={`group flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all duration-200 ${isCurrent
                                    ? "bg-blue-50/90 border border-blue-200 shadow-xs"
                                    : "hover:bg-slate-50/90 border border-transparent hover:border-gray-100"
                                    }`}
                                >
                                  <div
                                    className={`p-2.5 rounded-lg shrink-0 transition-colors duration-200 ${isCurrent
                                      ? "bg-blue-600 text-white shadow-sm"
                                      : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                                      }`}
                                  >
                                    <ServiceIcon type={service.icon} className="w-5 h-5" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p
                                      className={`text-sm font-semibold leading-snug transition-colors ${isCurrent
                                        ? "text-blue-600"
                                        : "text-gray-900 group-hover:text-blue-600"
                                        }`}
                                    >
                                      {service.title}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Quick Bottom Strip */}
                          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between px-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              24/7 Verified Healthcare Staff Available
                            </span>
                            <Link
                              to="/inquiry"
                              onClick={() => setDropdownOpen(false)}
                              className="font-medium text-blue-600 hover:underline"
                            >
                              Need Quick Help? Book Inquiry
                            </Link>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.id}>
                    <Link
                      to={link.path || getRoutePath(link.id)}
                      className={`relative text-sm font-medium transition-all duration-200 hover:text-blue-600 ${isActive(link.id)
                        ? "text-blue-600 after:w-full"
                        : "text-gray-800"
                        } after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 🔹 RIGHT: WHATSAPP + CALL + MOBILE MENU */}
          <div className="flex justify-end items-center gap-3 w-full">
            {/* WhatsApp / Chatbot Button */}
            <button
              className="hidden lg:flex bg-green-500 text-white p-2 rounded-full hover:bg-green-600 hover:scale-105 active:scale-95 transition-all shadow-sm hover:shadow cursor-pointer"
              aria-label="Chatbot toggle"
              onClick={() => {
                const chatbotBtn = document.getElementById("chatbot-toggle");
                if (chatbotBtn) {
                  chatbotBtn.click();
                }
              }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
              </svg>
            </button>

            {/* Call Button */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden lg:flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-full shadow-sm hover:shadow transition"
              aria-label="Call Now"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#1C4571] p-1.5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-7 h-7"
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

      {/* 🔻 MOBILE MENU DRAWER */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col space-y-3 max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.id} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    type="button"
                    className="w-full flex items-center justify-between text-left py-2 font-medium text-gray-800 hover:text-blue-600 transition"
                  >
                    <span className={isServicesActive() ? "text-blue-600 font-semibold" : ""}>
                      {link.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Expandable Services list for mobile */}
                  {mobileDropdownOpen && (
                    <div className="pl-2 mt-2 space-y-1.5 border-l-2 border-blue-200 ml-1">
                      {serviceDropdownLinks.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm transition ${location.pathname === service.path
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                        >
                          <ServiceIcon type={service.icon} className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{service.title}</span>
                        </Link>
                      ))}
                      <Link
                        to="/our-services"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-blue-600 hover:bg-blue-50"
                      >
                        <span>View All Healthcare Services →</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.id}
                to={link.path || getRoutePath(link.id)}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-base font-medium border-b border-gray-100 last:border-none transition ${isActive(link.id)
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-600"
                  }`}
              >
                {link.title}
              </Link>
            );
          })}

          {/* Quick Contact buttons in mobile menu */}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hi, I need home healthcare service.\n\n• Patient name: \n• Age: \n• Location: \n• Service required: \n• Phone number: "
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 px-4 rounded-xl hover:bg-green-600 transition font-medium text-sm shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center justify-center gap-2 bg-[#1C4571] text-white py-2.5 px-4 rounded-xl hover:bg-[#295b94] transition font-medium text-sm shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call Us: {contactInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;