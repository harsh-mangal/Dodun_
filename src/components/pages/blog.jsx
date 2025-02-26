import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Front from "./Blog/front";
import BackToTop from "./BacktoTop";
//import Front_second from "./Blog/front_second";
// import { useMediaQuery } from "react-responsive";

const blog = () => {
  //const isMobile = useMediaQuery({ maxWidth: 1400 });
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <BackToTop />
      <Front />
      <div className="bg-white py-12 px-4 sm:px-8 overflow-hidden">
        {/* Blog Section */}
        <div
          data-aos="flip-up"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Blog Card 1 */}
          <div className="bg-gradient-to-r from-sky-300 to-blue-600 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-3xl">
            <div className="bg-white m-1 rounded-[calc(0.5rem-1px)]">
              <img
                src="https://ik.imagekit.io/jncw2kb8u/emailmarketingguide.png?updatedAt=1738333319406"
                alt="Email Marketing Guide"
                className="w-full h-52 object-cover rounded-t-md "
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  The Ultimate Email Marketing Guide for Beginners
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  dodun | October 15, 2024
                </p>
                <p className="text-gray-700">
                  Email marketing remains one of the most effective ways to
                  reach your audience, nurture leads, and drive conversions...
                </p>
                <Link
                  to="/first"
                  className="text-blue-600 font-medium mt-4 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-gradient-to-r from-sky-300 to-blue-600 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-3xl">
            <div className="bg-white m-1 rounded-[calc(0.5rem-1px)]">
              <img
                src="https://ik.imagekit.io/jncw2kb8u/Untitled-design-2.jpg?updatedAt=1738333319161"
                alt="PPC Performance"
                className="w-full h-52 object-cover rounded-t-md"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Maximize Your PPC Performance | 6 Proven Strategies
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  dodun | October 15, 2024
                </p>
                <p className="text-gray-700">
                  PPC advertising remains one of the most effective strategies
                  for driving targeted traffic and conversions...
                </p>
                <Link
                  to="/second"
                  className="text-blue-600 font-medium mt-4 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-gradient-to-r from-sky-300 to-blue-600 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-3xl">
            <div className="bg-white m-1 rounded-[calc(0.5rem-1px)]">
              <img
                src="https://ik.imagekit.io/jncw2kb8u/Untitled-design.jpg?updatedAt=1738333319159"
                alt="Digital Challenges"
                className="w-full h-52 object-cover rounded-t-md"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Navigating the Digital Landscape | 5 Challenges
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  dodun | October 15, 2024
                </p>
                <p className="text-gray-700">
                  In today’s fast-paced digital world, marketers face an
                  ever-evolving landscape filled with opportunities and
                  challenges...
                </p>
                <Link
                  to="/third"
                  className="text-blue-600 font-medium mt-4 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default blog;
