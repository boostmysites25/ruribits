import React, { useEffect, useState, useRef } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import robot from "../../assets/ai-robot.png";
import gsap from "gsap";
import { Link } from "react-scroll";

const Banner = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const robotRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Create a more complex animation sequence
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    // Store the timeline in ref for access in event handlers
    timelineRef.current = tl;

    // Add floating animation with slight rotation
    tl.to("#robot", {
      translateY: -80,
      rotation: 5,
      duration: 2.5,
      ease: "power1.inOut",
    }).to("#robot", {
      rotation: -5,
      duration: 2,
      ease: "power1.inOut",
    });

    // Add hover event listeners to pause and resume animation
    const robotElement = document.getElementById("robot");

    const handleMouseEnter = () => {
      // Add a quick scale effect on hover
      gsap.to("#robot", {
        scale: 1.05,
        duration: 0.3,
        ease: "back.out",
      });
      tl.pause(); // Pause animation on hover
    };

    const handleMouseLeave = () => {
      // Return to normal scale
      gsap.to("#robot", {
        scale: 1,
        duration: 0.3,
        ease: "back.out",
      });
      tl.resume(); // Resume animation when hover ends
    };

    robotElement.addEventListener("mouseenter", handleMouseEnter);
    robotElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill(); // Clean up animation
      robotElement.removeEventListener("mouseenter", handleMouseEnter);
      robotElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="banner" className="h-screen banner relative overflow-hidden">
      {/* Video Background */}
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        onReady={() => setVideoLoaded(true)}
        pip={false}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload noplaybackrate",
              disablePictureInPicture: true,
              playsinline: true,
            },
          },
        }}
        controls={false}
      />
      
      {/* Overlay with gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-black/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
      
      {/* Content container */}
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="absolute w-full h-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 wrapper flex flex-col-reverse md:grid grid-cols-[1fr,20rem] items-center md:gap-10">
          {/* Text content */}
          <div className="flex w-full flex-col items-start justify-center relative z-10">
            {isWebDevelopment ? (
              <>
                <span data-aos="fade-down" className="inline-block px-4 py-1 bg-primary/20 text-white font-medium rounded-full text-sm mb-6">
                  INNOVATIVE WEB SOLUTIONS
                </span>
                <h1 
                  data-aos="fade-right" 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                  Elevate Your Digital Presence with Cutting-Edge Web Experiences
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="text-lg text-white/90 leading-relaxed max-w-2xl"
                >
                  In the digital era, your website is the cornerstone of your brand identity. 
                  At Ruribits Technology, we craft immersive, performance-driven web solutions 
                  that convert visitors into loyal customers. Our strategic approach combines 
                  stunning design with powerful functionality to create digital experiences 
                  that drive measurable business growth.
                </p>
                <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                  <Link 
                    to="services" 
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1 cursor-pointer"
                    smooth={true}
                    duration={800}
                  >
                    Explore Our Services
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <span data-aos="fade-down" className="inline-block px-4 py-1 bg-primary/20 text-white font-medium rounded-full text-sm mb-6">
                  POWERFUL MOBILE SOLUTIONS
                </span>
                <h1 
                  data-aos="fade-right" 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                  Transform User Engagement with Next-Gen Mobile Applications
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="text-lg text-white/90 leading-relaxed max-w-2xl"
                >
                  In a mobile-first world, exceptional app experiences are no longer optional—they're 
                  essential. Ruribits Technology delivers intuitive, high-performance mobile solutions 
                  that captivate users and drive business growth. Our expert team creates seamless, 
                  feature-rich applications that keep your brand at your customers' fingertips.
                </p>
                <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                  <Link 
                    to="services" 
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1 cursor-pointer"
                    smooth={true}
                    duration={800}
                  >
                    Discover Our Expertise
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </>
            )}
          </div>
          
          {/* Robot animation */}
          <div data-aos="fade-left" className="md:flex hidden justify-center relative">
            {/* Glowing effect behind robot */}
            <div className="absolute w-48 h-48 rounded-full bg-primary/20 filter blur-xl"></div>
            
            <Link to="contact" id="robot" className="cursor-pointer relative" ref={robotRef}>
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-md"></div>
              <img
                src={robot}
                className="w-[15rem] object-contain relative z-0 drop-shadow-2xl"
                alt="AI Robot Assistant"
              />
              
              {/* Floating text bubble */}
              <div className="absolute -top-10 right-0 bg-white text-primary px-4 py-2 rounded-xl text-sm font-medium shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                Need help? Click me!
                <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;