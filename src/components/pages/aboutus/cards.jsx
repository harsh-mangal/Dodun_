import React from "react";

const cards = () => {
  return (
    <>
      <div data-aos="fade-down" className="max-w-5xl manrope mx-auto p-8 mt-5">
        <div className="">
          <h1 className="text-4xl font-bold text-black text-center">
            Why Dodun Soft Solutions ?
          </h1>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full">
                <i class="fa-solid fa-rocket"></i>
              </div>
              <h3 className="text-xl font-semibold ">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                Our mission is to empower businesses of all sizes by providing
                exceptional digital solutions that drive growth and success. We
                believe that every brand has a unique story to tell, and we are
                here to help you communicate that story effectively to your
                audience.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full">
                <i class="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-semibold ">Our Vision</h3>
              <p className="text-gray-600 text-center mt-2">
                To be a leading digital solutions provider recognized for our
                commitment to quality, creativity, and client satisfaction. We
                envision a future where businesses thrive in the digital
                landscape, leveraging our expertise to achieve their goals.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full">
                <i class="fa-solid fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold ">Our Values</h3>
              <p className="text-gray-600 mt-2">
                At DODUN Soft Solutions, we foster a collaborative and inclusive
                environment where creativity thrives. Our team is committed to
                continuous learning and professional development, staying ahead
                of industry trends to provide the best solutions for our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cards;
