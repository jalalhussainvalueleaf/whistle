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
          <div className="absolute right-0 z-50 flex min-h-screen flex-col items-center justify-center space-y-4 p-12 lg:w-8/12">
            <div className="w-full space-y-4 rounded-lg bg-black bg-opacity-50 p-4 text-white">
              <p className="text-2xl font-semibold text-wlOrange">
                Discuss Unlimited Communication Solutions!
              </p>
              <p>
                Write to us at :{" "}
                <a href="mailto:info@whistle.mobi" className="text-wlOrange">
                  info@whistle.mobi{" "}
                </a>
              </p>
              <p>
                Call/ WhatsApp us:{" "}
                <a href="tel:9632002641" className="text-wlOrange">
                  9632002641
                </a>{" "}
              </p>
              <p className="font-semibold text-wlOrange">Headquartered at: </p>
              <div class="addBan">
                <div class="addressB">
                  <p>
                    {" "}
                    WValue Martech Pvt.Ltd,No:1187, 5th Main, 21 Cross Road,
                  </p>
                  <p>Sector 7, HSR Layout, Bengaluru, Karnataka 560102</p>
                </div>
              </div>
              <p className="font-semibold text-wlOrange">Branched out to:</p>

              <div class="addBan">
                <div class="addressM">
                  <p>BLUE NILE CO-OPERATIVE HOUSING SOCIETY LTD, 5th Floor, </p>
                  <p>
                    891. Notan Classic, TPS III 24T Road,Turner Road,Bandra(W),
                    Mumbai - 400050
                  </p>
                </div>
              </div>

              <div class="addBan addBanD">
                <div class="addressD">
                  <p>16th Floor, Tower 9A, Cyber City,DLF Phase 3,</p>
                  <p class="mumPin">Gurugram,Haryana 122002</p>
                </div>
              </div>
              <p className="text-xl font-semibold text-wlOrange">
                Trusted by 400+ partners
              </p>
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
