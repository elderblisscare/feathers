import { useEffect, useRef, useState } from 'react';
import heroVideo from '/HeroVideo.mp4'; // Import directly using Vite's import feature

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
          console.log("Video playing successfully");
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
      <div className="absolute inset-0 flex items-center justify-center px-4 py-10 md:py-16 lg:py-85">
        <div className="relative w-full max-w-[1280px] h-[85vh] rounded-2xl overflow-hidden">
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
          
        
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center">
            <h1 className="hero-text text-white mt-45">
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider mb-2 md:mb-3">
                FEATHERS
              </div>
              <div className="font-serif text-xl md:text-3xl lg:text-3xl tracking-wider mb-2 md:mb-3">
                Healthcare For All
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
