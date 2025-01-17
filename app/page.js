'use client';
import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic for conditional client-side rendering
import Login from "@/components/Login/login";
import Share from "@/components/SocialMedia/Share";
import Sidebar from "@/components/Menu/SideBar";
// import Lottie from "lottie-react";
import WhistleLogo from "@/public/Whistle_large_logo.json"; // Ensure the path is correct
// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const App = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State to control the visibility of Login component
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);

  // Play rotation video after intro finishes
  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  // Show Sidebar with smooth transition after Login
  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true); // Show Sidebar with animation
    }, 5000); // Delay for smooth effect



    if (showLogin) {
      setTimeout(() => {
        setShowSidebar(true); // Show Sidebar with animation
      }, 1000); // Delay for smooth effect
    }
  }, [showLogin]);

  useEffect(() => {
    if (introVideoRef.current && videoFinished) {
      // Once intro video finishes, start the rotation video
      introVideoRef.current.pause();
      introVideoRef.current.currentTime = 0; // Reset intro video
      if (rotationVideoRef.current) {
        rotationVideoRef.current.play();
      }
    }
  }, [videoFinished]);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Video (Intro) */}
      <video
        ref={introVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd} // Trigger when intro video finishes
      >
        <source src="/video/earth_intro.webm" type="video/webm" />
      </video>

      {/* Background Video (Rotation, Looping) */}
      <video
        ref={rotationVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
        style={{ display: videoFinished ? 'block' : 'none' }} // Hide until intro finishes
      >
        <source src="/video/earth_rotation.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative inset-0 z-10 py-40">
        {/* Lottie Animation below the logo */}
        <div className={`mx-auto mt-10 transition-all duration-300 ease-in-out ${showLogin?'w-[400px] -translate-y-1 ':'w-[800px] translate-y-1 '}`}>
          <Lottie
          
            loop= {false}
            animationData={WhistleLogo} // Directly use the imported JSON data
          />
        </div>

        {/* Render Login after Lottie animation completes */}
        {showLogin && <Login />}

        {/* Smooth transition Sidebar after Login */}
        
      </div>
      {showSidebar && <Sidebar className="translate-x-0 transition-transform duration-1000 z-50" isHomepage={true} />}
      {/* <Sidebar /> */}
      <Share />
    </div>
  );
};

export default App;
