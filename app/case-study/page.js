'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import Footer from '@/components/Footer/Footer';
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
        <source src="/video/Earth_Fighter_Rocket_Earth_Static.webm" type="video/webm" />
      </video>

      {/* Background Video (Rotation, Looping) */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
        style={{ display: videoFinished ? 'block' : 'none' }}
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

      <Header />

      {/* Content */}
      <div className="z-0 relative">
        {showContent && (
          <div className="p-12 right-0 z-50 absolute w-8/12 space-y-4 flex flex-col items-center justify-center h-screen">
            <div
              className={`bg-black bg-opacity-50 p-4 rounded-lg w-full ${
                expandedIndex !== null ? 'grid-cols-1' : 'grid-cols-2'
              } grid gap-4`}
            >
              {caseStudy.map((item, index) =>
                expandedIndex === null || expandedIndex === index ? (
                  <div
                    className={`p-6 border rounded-lg shadow min-h-[200px] space-y-10 ${
                      expandedIndex === index ? 'bg-gray-200 transition-all ease-out' : 'bg-gray-200'
                    }`}
                    key={index}
                  >
                    {expandedIndex === index ? (
                      <>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                          {item.highlight}
                        </h5>
                        <div className="flex justify-between pb-4">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {item.category}
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {item.industry}
                          </span>
                        </div>
                        <p className="text-sm" dangerouslySetInnerHTML={{__html:item.description}}/>
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
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {item.category}
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
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
                ) : null
              )}
            </div>
          </div>
        )}
      </div>

      {showSidebar && (
        <Sidebar
          className="translate-x-0 transition-transform duration-1000 z-50"
          isHomepage={false}
          footer={footer}
        />
      )}
      <Footer toggleFooter={toggleFooter} footer={footer} />
    </div>
  );
}

export default Page;
