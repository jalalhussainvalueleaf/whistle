"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import Footer from "@/components/Footer/Footer";
import { faqData } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

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
        style={{ display: videoFinished ? "block" : "none" }} // Hide until intro finishes
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>
      <Header />
      <div className="bg-purple relative flex h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat">
        {/* Stars Background */}
        <div className="absolute inset-0 bg-[url('http://salehriaz.com/404Page/img/overlay_stars.svg')] bg-contain bg-repeat"></div>

        {/* Central Content */}
        <div className="z-10 flex flex-col items-center justify-center space-y-6">
          <Image
            src="/images/404.svg"
            alt="404 Error"
            width={300}
            height={300}
          />
          <a
            href="/"
            className="btn-go-home rounded-full border border-yellow-400 px-4 py-2 text-sm uppercase text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-white"
          >
            GO BACK HOME
          </a>
        </div>

        {/* Animated Objects */}
        <div className="absolute left-0 top-0 size-full">
          <div className="object_rocket absolute left-1/2 top-3/4 -translate-x-1/2 animate-[rocket-movement_200s_linear_infinite]">
            <Image
              src="/images/rocket.svg"
              alt="Rocket"
              width={40}
              height={40}
            />
          </div>
          <div className="earth-moon absolute left-[15%] top-[20%]">
            {/* <Image src="/images/earth.svg" alt="Earth" width={100} height={100} className="animate-[spin-earth_100s_linear_infinite]" /> */}
            <Image src="/images/moon.svg" alt="Moon" width={80} height={80} />
          </div>
          <div className="box_astronaut absolute right-[20%] top-[60%] animate-[move-astronaut_50s_linear_infinite]">
            <Image
              src="/images/astronaut.svg"
              alt="Astronaut"
              width={140}
              height={140}
              className="animate-[rotate-astronaut_200s_linear_infinite]"
            />
          </div>
        </div>

        {/* Glowing Stars */}
        <div className="glowing_stars absolute left-0 top-0 z-0 size-full">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="star absolute size-2.5 animate-[glow-star_2s_ease-in-out_infinite_alternate] rounded-full bg-white opacity-30"
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
