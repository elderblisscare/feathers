const serviceDropdownLinks = [
  {
    id: "home-attendant-gda",
    title: "Home Attendant / GDA Services",
    path: "/services/home-attendant-gda",
    icon: "attendant"
  },
  {
    id: "home-nursing-care",
    title: "Home Nursing Care",
    path: "/services/home-nursing-care",
    icon: "nursing"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    path: "/services/physiotherapy",
    icon: "physio"
  },
  {
    id: "doctor-consultation",
    title: "Doctor Consultation",
    path: "/services/doctor-consultation",
    icon: "doctor"
  },
  {
    id: "lab-test-diagnostics",
    title: "Lab Test & Diagnostics",
    path: "/services/lab-test-diagnostics",
    icon: "lab"
  },
  {
    id: "jpa-baby-care",
    title: "Japa Care / Baby Care",
    path: "/services/jpa-baby-care",
    icon: "baby"
  }
];

const navLinks = [
  { id: 'home', title: 'Home', path: '/' },
  { id: 'about', title: 'About Us', path: '/about' },
  { 
    id: 'services', 
    title: 'Services', 
    path: '/our-services',
    hasDropdown: true,
    dropdownItems: serviceDropdownLinks
  },
  { id: 'blogs', title: 'Blogs', path: '/blogs' },
  { id: 'inquiry', title: 'Service Inquiry', path: '/inquiry' },
];

const contactInfo = {
  email: 'feathers.agency29@gmail.com',
  phone: '+91-9891177712'
};

export { navLinks, serviceDropdownLinks, contactInfo };