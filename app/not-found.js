'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from "@/components/Common/Header"
import Sidebar from "@/components/Menu/SideBar"
import Footer from '@/components/Footer/Footer';
import { faqData } from "@/utils/data"
import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {



    const [videoFinished, setVideoFinished] = useState(false);
    const introVideoRef = useRef(null);
    const rotationVideoRef = useRef(null);

    const handleVideoEnd = () => {
        setVideoFinished(true);
      };


  return (
    <>
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
      <Header />
    <div className="bg-purple bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Stars Background */}
      <div className="absolute inset-0 bg-[url('http://salehriaz.com/404Page/img/overlay_stars.svg')] bg-repeat bg-contain"></div>

   

      {/* Central Content */}
      <div className="flex flex-col items-center justify-center space-y-6 z-10">
        <Image src="/images/404.svg" alt="404 Error" width={300} height={300} />
        <a href="/" className="btn-go-home text-sm uppercase px-4 py-2 border border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300">GO BACK HOME</a>
      </div>

      {/* Animated Objects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="object_rocket absolute top-[75%] left-1/2 transform -translate-x-1/2 animate-[rocket-movement_200s_linear_infinite]">
          <Image src="/images/rocket.svg" alt="Rocket" width={40} height={40} />
        </div>
        <div className="earth-moon absolute top-[20%] left-[15%]">
          {/* <Image src="/images/earth.svg" alt="Earth" width={100} height={100} className="animate-[spin-earth_100s_linear_infinite]" /> */}
          <Image src="/images/moon.svg" alt="Moon" width={80} height={80} />
        </div>
        <div className="box_astronaut absolute top-[60%] right-[20%] animate-[move-astronaut_50s_linear_infinite]">
          <Image src="/images/astronaut.svg" alt="Astronaut" width={140} height={140} className="animate-[rotate-astronaut_200s_linear_infinite]" />
        </div>
      </div>

      {/* Glowing Stars */}
      <div className="absolute top-0 left-0 w-full h-full z-0 glowing_stars">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="star absolute rounded-full bg-white w-2.5 h-2.5 opacity-30 animate-[glow-star_2s_ease-in-out_infinite_alternate]"
            style={{
              animationDelay: `${(idx + 1) * 1}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
    </>
  );
}
