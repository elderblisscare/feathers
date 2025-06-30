import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Configure ScrollTrigger defaults for the entire project
ScrollTrigger.config({
  // Make animations trigger earlier
  markers: false,
  toggleActions: 'play none none reverse',
  // Start animations when scrolling to 20% of the element's visibility
  start: 'top 80%',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
