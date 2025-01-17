'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from "@/components/Common/Header"
import Sidebar from "@/components/Menu/SideBar"
import SideMenu from "@/components/Menu/Menu"

export default function RootLayout({children}) {

  const [videoFinished, setVideoFinished] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State to control the visibility of Login component
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);

      // Play rotation video after intro finishes
      const handleVideoEnd = () => {
        setVideoFinished(true);
      };

  return (
  <>


<video
        ref={introVideoRef}
        className="absolute left-0 top-0 size-full object-cover z-0"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd} // Trigger when intro video finishes
      >
        <source src="/video/earth_intro.webm" type="video/webm" />
      </video>
  <Header/>
  
{children}
<Sidebar isHomepage={false} />
{/* <SideMenu/> */}
      </>
  );
}
