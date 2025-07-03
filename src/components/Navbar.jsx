import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, contactInfo } from '../../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Prevent excessive function calls
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Determine if scrolled past threshold for styling
          const isScrolled = currentScrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
          
          // Handle show/hide based on scroll direction with a small threshold
          if (currentScrollY > lastScrollY.current + 5 && currentScrollY > 100) {
            // Scrolling DOWN and past threshold - hide navbar
            setVisible(false);
          } else if (currentScrollY < lastScrollY.current - 5 || currentScrollY <= 10) {
            // Scrolling UP or at page top - show navbar
            setVisible(true);
          }
          
          // Update last scroll position
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Determine if a link is active
  const isActive = (path) => {
    if (path === 'home' && location.pathname === '/') {
      return true;
    }
    return location.pathname === `/${path}`;
  };

  // Convert navLink id to proper route path
  const getRoutePath = (id) => {
    if (id === 'home') return '/';
    return `/${id}`;
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 transform top-0 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled ? 'glass-effect shadow-sm py-1' : 'bg-transparent pt-1 pb-3'
    }`}>
      {/* Updated container with better grid layout and max-width */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_3fr_1fr] items-center h-14">
          {/* Logo - Left column */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <h1 className={`font-cormorant text-3xl md:text-4xl font-semibold tracking-wide ${
                scrolled ? 'text-[#1C4571]' : 'text-[#1C4571]'
              }`}>
                Feathers
              </h1>
            </Link>
          </div>
          
          {/* Navigation Links - Center column with more width */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center space-x-12 justify-center">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    to={getRoutePath(link.id)}
                    className={`nav-link font-medium text-sm tracking-wide transition-colors hover:opacity-70 ${
                      scrolled ? 'text-[#1C4571]' : 'text-[#1C4571]'
                    } ${isActive(link.id) ? 'font-bold' : ''}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Mobile Menu - Right column */}
          <div className="flex justify-end items-center">
            {/* Contact Info - hidden on mobile */}
            <div className="hidden lg:flex items-center">
              <Link 
                to={`https://wa.me/${contactInfo?.whatsapp || ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C4571] rounded-full p-2 text-white hover:bg-[#e1f0ff] hover:text-[#1C4571] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                </svg>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button className={`lg:hidden ${scrolled ? 'text-[#1C4571]' : 'text-[#1C4571]'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;