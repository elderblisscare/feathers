import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger, SplitText, Observer } from "gsap/all";
// Page components
import HomePage from "./pages/HomePage";
import MedicalServicesPage from "./pages/MedicalServicesPage";
import MedicalEquipmentPage from "./pages/MedicalEquipmentPage";
import HomecareServicesPage from "./pages/HomecareServicesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUsPage from "./pages/AboutUsPage";
import ScrollToTop from "./components/ScrollToTop";
import InquiryForm from "./components/InquiryForm";
import InquirePage from "./pages/inquirePage";
import AllServicesPage from "./pages/AllServicesPage";

gsap.registerPlugin(ScrollTrigger, SplitText, Observer);

const App = () => {
  useEffect(() => {
    // Make scrolling smoother for animations
    const smoother = Observer.create({
      type: "wheel,touch",
      wheelSpeed: 1,
      onUp: () => {
        ScrollTrigger.update();
      },
      onDown: () => {
        ScrollTrigger.update();
      },
      tolerance: 10,
      preventDefault: false
    });
    
    // Refresh ScrollTrigger when route changes
    const refresh = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    // Initial refresh
    refresh();

    return () => {
      // Clean up
      smoother.kill();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <main className="bg-[#f5f5f5]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/medical-services" element={<MedicalServicesPage />} />
          <Route path="/equipment" element={<MedicalEquipmentPage />} />
          <Route path="/homecare" element={<HomecareServicesPage />} />
          <Route path="/inquiry" element={<InquirePage/>} />
          <Route path="/our-services" element={<AllServicesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;