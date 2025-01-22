'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Header from "@/components/Common/Header"
import Sidebar from "@/components/Menu/SideBar"
import SideMenu from "@/components/Menu/Menu"
import Footer from '@/components/Footer/Footer';
import {articlesLists} from "@/utils/data"


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
      }, 5000); // Delay for smooth effect
  });


  // Show Sidebar with smooth transition after Login
  useEffect(() => {

    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 5000); // Delay for smooth effect


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
        <source src="/video/Interceptor_Earth_Static.webm" type="video/webm" />
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
  
    {showContent && <div className='p-12 right-0 z-50 absolute w-8/12 space-y-4 flex flex-col items-center justify-center h-screen transition-all ease-in-out'>  
        <div className=" bg-opacity-50 p-4 rounded-lg space-y-4 h-[500px]">


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-[500px] overflow-scroll">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-100 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
      <tr>
        <th scope="col" className="px-6 py-3">
          Publication
        </th>
        <th scope="col" className="px-6 py-3">
          Article
        </th>
        <th scope="col" className="px-6 py-3">
          Featured
        </th>
      </tr>
    </thead>
    <tbody>
      {articlesLists.map((article, index) => (
        <tr
          key={index}
          className="odd:bg-gray-300 odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {article.publication}
          </th>
          <td className="px-6 py-4 break-all">
            <Link href={article.url} target="_blank" className="hover:text-wlOrange">
              {article.url}
            </Link>
          </td>
          <td className="px-6 py-4">{article.feature}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




        </div>
        </div>}
    

  {showSidebar && <Sidebar className="translate-x-0 transition-transform duration-1000 z-50" isHomepage={false} footer={footer} />}
  {/* <SideMenu/> */}
<Footer toggleFooter={toggleFooter} footer={footer}/>
      </div>
  );
}

export default Page
