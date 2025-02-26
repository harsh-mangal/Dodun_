import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const front = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation happens only once while scrolling
    });
    AOS.refresh();    // refresh AOS after initialization
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 mx-4 md:ml-20 lg:ml-30 overflow-hidden">
        <div data-aos="fade-up-right" className="max-w-lg mb-8 md:mb-0 text-center md:text-left overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 md:mb-6 leading-tight">
            Join Our Team At <br />
            <span className="text-sky-600">Dodun</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
          Join our dynamic team and help build innovative products that shape the future. Unlock your potential and grow your career with us!
          </p>
          {/* <button className="bg-gradient-to-r from-sky-400 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:scale-105 transition duration-300 shadow-lg">
            View Openings
          </button> */}
        </div>

        <div data-aos="fade-up-left" className="hidden md:block w-full md:w-auto overflow-hidden">
          <img
            src="https://ik.imagekit.io/jncw2kb8u/0921f826-careerly-img-bg.png?updatedAt=1740463286188"
            alt="Career"
            className="w-full max-w-md md:max-w-[700px] mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default front;
