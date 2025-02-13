import React from "react";
import { motion } from "framer-motion";

const who = () => {
  return (
    <>
      <div className="manrope relative w-full h-330  md:h-[500px] lg:h-200">
        {/* Background img */}
        <img
          src="https://ik.imagekit.io/jncw2kb8u/about-bg.jpg?updatedAt=1739274067847"
          class="w-full h-full object-cover opacity-50"
        />
        <div className="hidden md:block absolute inset-0 mx-70 mt-120">
          {/* animated img */}
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/about-shape.png?updatedAt=1739278607637"
            alt="Animated PNG"
            animate={{ y: [0, -20, 0] }} // Moves up and down
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} // Infinite loop
          />
        </div>
        <div className="hidden md:block">
        <motion.div // animated img
          animate={{ x: [0, 50, 0] }} // Moves right 50px, then back to start
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} // Infinite loop
          className="w-70 h-25 bg-gray-900 rounded-md flex justify-evenly absolute inset-0 ml-105  mt-30"
        >
          <img
            src="https://ik.imagekit.io/jncw2kb8u/about-award-icon.png?updatedAt=1739279864902"
            className="w-15 h-10 mt-8 ml-6"
          />
          <p className="text-white mt-9 mr-6 text-xl">Best Services</p>
        </motion.div>
        </div>
        <div className=" absolute inset-0 grid grid-cols-1 md:grid-cols-2 md:px-4 ">
          <div className="hidden md:block">
            {/* thumb img */}
            <img
              src="https://ik.imagekit.io/jncw2kb8u/about-thumb.png?updatedAt=1739274068162"
              alt=""
              className="mt-20 mx-20 relative"
            />
            {/* dilevered projects */}
            <div className="mx-70 my-90 bg-blue-600 h-50 w-50 text-white text-center border-4 border-white rounded-full absolute inset-0 flex flex-col">
              <i class="fa-solid fa-thumbs-up mt-10"></i>
              <p className="text-2xl mt-2">521+</p>
              <p className="text-xl mx-5">Projects Delivered</p>
            </div>
          </div>
          {/* main content */}
          <div className="">
            <h2 className="text-4xl font-bold text-black text-left mt-20 md:mx-20 ml-20">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-700 md:text-left text-center text-xl md:mx-20 mx-10">
              Over the past five years, our journey has been nothing short of
              remarkable. From startups to established enterprises, we have
              successfully delivered tailored solutions across various
              industries, helping businesses thrive. When you partner with DODUN
              Soft Solutions, you choose a team that genuinely cares about your
              success. We take the time to understand your unique challenges and
              objectives, crafting tailored solutions that align with your
              vision. Our holistic approach, combined with our commitment to
              quality and client satisfaction, sets us apart in the industry.
              Here’s what you can expect from us:
            </p>
            <section class="mt-4 mx-20">
              <div class="max-w-8xl">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div class="bg-white p-4 shadow-md">
                    <div class="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <h3 class="ml-3 text-lg font-semibold text-gray-800">
                        Tailored Solutions
                      </h3>
                    </div>
                    <p class="text-gray-700 text-left">
                      We customise our services to meet your specific needs,
                      ensuring that you receive the most relevant and effective
                      strategies.
                    </p>
                  </div>

                  <div class="bg-white p-4 shadow-md">
                    <div class="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <h3 class="ml-3 text-lg font-semibold text-gray-800">
                        Expert Guidance
                      </h3>
                    </div>
                    <p class="text-gray-700 text-left">
                      Our team is here to guide you every step of the way,
                      offering insights and support to help you navigate the
                      digital landscape.
                    </p>
                  </div>

                  <div class="bg-white p-3 shadow-md">
                    <div class="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <h3 class="ml-3 text-lg font-semibold text-gray-800">
                        Results-Driven Approach
                      </h3>
                    </div>
                    <p class="text-gray-700 text-left">
                      We focus on delivering measurable results, using data and
                      analytics to inform our strategies and drive growth.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default who;
