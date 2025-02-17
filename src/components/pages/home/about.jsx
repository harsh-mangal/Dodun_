import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const about = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* About Section */}
          <div data-aos="fade-up-right" className="text-center lg:text-left">
            <h2 className="text-4xl font-bold">
              Who We Are!
            </h2>
            <div className="lg:hidden flex justify-center mt-6">
              <img
                src="https://ik.imagekit.io/jncw2kb8u/about-us.png?updatedAt=1738752698367"
                alt="Company Overview"
                className="w-full max-w-xl md:max-w-6xl py-5 object-cover"
              />
            </div>
            <p className="text-2xl mt-4 text-black">
              DODUN Soft Solutions - Empowering Tomorrow's Technology!
            </p>
            <p className="text-black text-justify md:text-left mt-4 leading-relaxed text-base text-md">
              At Dodun Soft Solutions, we’re dedicated to crafting innovative IT
              solutions that propel businesses forward. From cutting-edge
              software development to harnessing the power of emerging
              technologies like AI, we prioritize client-centric solutions
              tailored to unique business needs. Our team of skilled
              professionals leverages the latest tools and methodologies to
              deliver scalable, secure, and high-performance applications.
              Whether it’s web and mobile development, cloud computing, or data
              analytics, we ensure seamless integration and optimal efficiency.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                to="/about"
                className="bg-gradient-to-r from-sky-600 to-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-up-left"
            className="hidden lg:flex justify-center"
          >
            <img
              src="https://ik.imagekit.io/jncw2kb8u/about-us.png?updatedAt=1738752698367"
              alt="Company Overview"
              className="w-full max-w-2xl h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
