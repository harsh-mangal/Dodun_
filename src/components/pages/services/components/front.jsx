import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const front = ({url, text, paragraph}) => {
   useEffect(() => {
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    }, []);
  return (
    <>
   <div className="relative cormorant-garamond-bold w-full h-140 md:h-[800px] flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src= {url}
          alt="Blog Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-black w-full h-full opacity-10 shadow-lg backdrop-blur-lg"></div>
        {/* Overlay Content */}
        <div className='grid grid-cols-1 '>
        <h1
          data-aos="fade-right"
          className="relative mulish text-white text-4xl md:text-7xl font-bold"
        >
          {text}
        </h1>
        <p data-aos="fade-right" className="mulish text-white mt-5 mx-5 text-2xl max-w-5xl overflow-hidden">
          {paragraph}
        </p>
        </div>
      </div>
    </>
  )
}

export default front