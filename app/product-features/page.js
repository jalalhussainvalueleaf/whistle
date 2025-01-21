'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from "@/components/Common/Header"
import Sidebar from "@/components/Menu/SideBar"
import SideMenu from "@/components/Menu/Menu"
import Footer from '@/components/Footer/Footer';
import Slider from "@/components/Slider"

function Page() {

  const [videoFinished, setVideoFinished] = useState(false);
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);
  const [footer, setFooter] = useState(false); // State for Footer visibility
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility

  const [showContent, setShowContent] = useState(false); // State for controlling sidebar visibility

  useEffect(() => {
      setTimeout(() => {
        setShowContent(true); // Show Sidebar with animation
      }, 100); // Delay for smooth effect
  });


  // Show Sidebar with smooth transition after Login
  useEffect(() => {

    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 100); // Delay for smooth effect


      setTimeout(() => {
        setShowSidebar(true); // Show Sidebar with animation
      }, 3000); // Delay for smooth effect
  });


      // Play rotation video after intro finishes
      const handleVideoEnd = () => {
        setVideoFinished(true);
      };

      const toggleFooter = () => {
        setFooter(!footer);
    };

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
        <source src="/video/Earth_Side_Rotation.webm" type="video/webm" />
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
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

  <Header/>

     {/* Content */}
  {/* Content */}
  {showContent && <div className='p-12 right-0 z-50 absolute w-8/12 space-y-4 flex flex-col items-center justify-center h-screen transition-all ease-in-out'>  
<Slider/>
      </div>}
  

{showSidebar && <Sidebar className="translate-x-0 transition-transform duration-1000 z-50" isHomepage={false} footer={footer} />}
{/* <SideMenu/> */}
<Footer toggleFooter={toggleFooter} footer={footer}/>
      </div>
  );
}
export default Page