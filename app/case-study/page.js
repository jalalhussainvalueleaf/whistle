"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import Footer from "@/components/Footer/Footer";
import { caseStudy } from "@/utils/data";

function Page() {
  const [videoFinished, setVideoFinished] = useState(false);
  const [footer, setFooter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded card

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 5000);

    setTimeout(() => {
      setShowSidebar(true);
    }, 3000);
  }, []);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const toggleFooter = () => {
    setFooter(!footer);
  };

  const handleReadMore = (index) => {
    setExpandedIndex(index); // Expand the selected card
  };

  const handleBack = () => {
    setExpandedIndex(null); // Collapse the expanded card
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Video (Intro) */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      >
        <source
          src="/video/Earth_Fighter_Rocket_Earth_Static.webm"
          type="video/webm"
        />
      </video>

      {/* Background Video (Rotation, Looping) */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
        style={{ display: videoFinished ? "block" : "none" }}
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

      <Header />

      {/* Content */}
      <div className="relative z-0">
        {showContent && (
          <div className="absolute right-0 z-50 flex min-h-screen flex-col items-center justify-center space-y-4 lg:w-8/12 lg:p-12">
            <div
              className={`w-full rounded-lg bg-black bg-opacity-50 p-4 ${
                expandedIndex !== null ? "grid-cols-1" : "lg:grid-cols-2"
              } grid gap-4`}
            >
              {caseStudy.map((item, index) =>
                expandedIndex === null || expandedIndex === index ? (
                  <div
                    className={`min-h-[200px] space-y-10 rounded-lg border p-6 shadow ${
                      expandedIndex === index
                        ? "bg-gray-200 transition-all ease-out"
                        : "bg-gray-200"
                    }`}
                    key={index}
                  >
                    {expandedIndex === index ? (
                      <>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                          {item.highlight}
                        </h5>
                        <div className="flex justify-between pb-4">
                          <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            {item.category}
                          </span>
                          <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            {item.industry}
                          </span>
                        </div>
                        <p
                          className="text-sm"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                        <button
                          className="text-sm text-wlOrange"
                          onClick={handleBack}
                        >
                          Back
                        </button>
                      </>
                    ) : (
                      <>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 hover:text-wlOrange">
                          {item.highlight}
                        </h5>
                        <div className="flex justify-between pb-4">
                          <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            {item.category}
                          </span>
                          <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            {item.industry}
                          </span>
                        </div>
                        <button
                          className="text-sm text-blue-500"
                          onClick={() => handleReadMore(index)}
                        >
                          Read More
                        </button>
                      </>
                    )}
                  </div>
                ) : null,
              )}
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
