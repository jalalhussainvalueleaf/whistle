"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import Footer from "@/components/Footer/Footer";
import { faqData } from "@/utils/data";
import Link from "next/link";

function Page() {
  const [videoFinished, setVideoFinished] = useState(false);
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);
  const [footer, setFooter] = useState(false); // State for Footer visibility
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility

  const [showContent, setShowContent] = useState(false); // State for controlling content visibility

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 100); // Delay for smooth effect

    setTimeout(() => {
      setShowSidebar(true); // Show Sidebar with animation
    }, 3000); // Delay for smooth effect
  }, []);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const toggleFooter = () => {
    setFooter(!footer);
  };

  const scriptCode = `<script>
document.write('<script src="https://pixel.whistle.mobi/initialize_pixel.js?v=' + Date.now() + '"\\><\\/script>');
</script>`;
  const conversionCode = `<script>document.write('<script src="https://pixel.whistle.mobi/track_pixel.js?v=' + Date.now() + '"\><\/script>');</script>`;

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
        style={{ display: videoFinished ? "block" : "none" }} // Hide until intro finishes
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

      <Header />

      {/* Content */}
      <div className="relative z-0">
        {showContent && (
          <div className="absolute right-0 z-50 flex min-h-screen items-center justify-center space-y-4 p-12 lg:w-8/12 lg:flex-col">
            <div className="w-full space-y-4 rounded-lg bg-black bg-opacity-50 p-4 text-white">
              <h1>How do we track the pixel through Whistle?</h1>
              <p>
                When the user clicks on the Ad, the user is then redirected to
                the Landing Page URL used for that campaign. While redirecting
                to the campaign URL, we generate a unique click ID for every
                user and append that click ID to alias parameter at the end of
                the URL (Example: &alias=aaaaaa0000. The last 10 digits here
                denote the unique click ID)
              </p>
              <p>
                To track the pixel through Whistle Feed, please follow the below
                steps:
              </p>
              <p>
                <strong className="text-wlOrange">Step 1:</strong> Copy the tag
                code and paste it between the{" "}
                <code>&lt;head&gt;&lt;/head&gt;</code> tag of the landing page
                that you will be using when you run your Whistle campaigns.
              </p>
              {/* Code Block */}
              <pre className="overflow-x-auto rounded-lg bg-gray-800 p-4 text-white">
                <code>{scriptCode}</code>
              </pre>

              <p>
                <strong className="text-wlOrange">Step 2:</strong> Copy the tag
                code and paste it between the{" "}
                <code>&lt;head&gt;&lt;/head&gt;</code> tag of the page or action
                button which you consider as the conversion point.
              </p>
              {/* Code Block */}
              <pre className="overflow-x-auto rounded-lg bg-gray-800 p-4 text-white">
                <code>{conversionCode}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      {showSidebar && (
        <Sidebar
          className="z-50 translate-x-0 transition-transform duration-1000"
          isHomepage={false}
          footer={footer}
        />
      )}
      <Footer toggleFooter={toggleFooter} footer={footer} />
    </div>
  );
}

export default Page;
