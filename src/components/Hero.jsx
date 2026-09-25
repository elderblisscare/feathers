import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '/HeroVideo.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Ensure video plays immediately after mount
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
          setVideoLoaded(true);
        }
      } catch (error) {
        console.error("Video play failed:", error);
        setVideoError(true);
      }
    };

    playVideo();
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#f5f5f5]">
      {/* Container with rounded corners */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="relative w-full max-w-[1280px] h-[82vh] md:h-[86vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Fallback background color if video fails */}
          {videoError && <div className="absolute inset-0 bg-[#8aa6c9] z-0"></div>}

          {/* Dark cinematic gradient scrim for ultra-clear readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 z-20 pointer-events-none" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4 md:px-8">

            {/* Hero Main Heading */}
            <h1 className="hero-text text-white mb-4 sm:mb-6 max-w-4xl">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider font-extrabold drop-shadow-md mb-2 sm:mb-3">
                FEATHERS
              </div>
              <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide font-light text-slate-100 drop-shadow">
                Smart, Reliable Healthcare for Every Stage of Life.
              </div>
            </h1>

            {/* Quick CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
              <Link
                to="/our-services"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-[#1C4571] font-semibold text-sm sm:text-base shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/inquiry"
                className="w-full sm:w-auto px-7 py-3 rounded-full backdrop-blur-md bg-white/15 border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/25 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
