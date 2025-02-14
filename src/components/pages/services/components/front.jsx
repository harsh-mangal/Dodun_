import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const front = ({url, text}) => {
   useEffect(() => {
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    }, []);
  return (
    <>
   <div className="relative manrope w-full h-[500px] flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src= {url}
          alt="Blog Background"
          className="absolute inset-0 w-full h-full object-fit opacity-40"
        />
        <div className="absolute bg-white w-full h-full opacity-30 shadow-lg backdrop-blur-lg"></div>
        {/* Overlay Content */}
        <h1
          data-aos="fade-right"
          className="relative text-gray-700 text-4xl md:text-7xl font-bold"
        >
          {text}
        </h1>
      </div>
    </>
  )
}

export default front