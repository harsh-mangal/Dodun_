import React from "react";
import { useState, useEffect } from "react";

const front_second = () => {

  const [offsetY, setOffsetY] = useState(0);
  
    // Track the scroll position
    const handleScroll = () => {
      setOffsetY(window.scrollY * -0.1); // Adjust speed by changing multiplier
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <div className="relative manrope w-full h-120 md:h-[800px] flex items-center justify-center text-center overflow-hidden px-4 md:px-8">
        {/* Background Image */}
        <img
          src="https://ik.imagekit.io/jncw2kb8u/portrait-pretty-young-woman-home-sitting-kitchen-floor-looking-digital-tablet-using.jpg?updatedAt=1739947699246"
          alt="Blog Background"
          className="absolute inset-0 w-full h-140 md:h-[900px] object-fit"
          style={{
            transform: `translateY(${offsetY}px)`,
            willChange: "transform", // Optimize for performance
          }}
        />
        {/* Overlay Content */}
        <div className="absolute bg-black w-full h-full opacity-30 shadow-lg backdrop-blur-lg"></div>

        <h1
          data-aos="fade-left"
          className="relative cormorant-garamond-bold text-white mb-20 ml-40 md:ml-100 md:mb-50 text-5xl md:text-8xl overflow-hidden"
        >
          OUR <br /> BLOGS
        </h1>
      </div>
    </>
  );
};

export default front_second;
