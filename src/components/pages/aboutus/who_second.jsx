import React from "react";

const who_second = () => {
  return (
    <>
     <div data-aos="fade-down" className="max-w-5xl manrope mx-auto p-8 mt-5 bg-[#F8FAFC] shadow-lg rounded-lg">
        <div className="">
          <h1 className="text-4xl font-bold text-[#1E293B] text-center">
            Who We Are
          </h1>
          <img
                src="https://ik.imagekit.io/jncw2kb8u/cherrydeck-rMILC1PIwM0-unsplash.jpg?updatedAt=1739617218044"
                alt="Company Overview"
                className="w-full max-w-xl md:max-w-5xl py-5 object-cover"
              />
          <p className="mt-4 text-[#475569] text-justify text-md">
            Over the past five years, our journey has been nothing short of
            remarkable. From startups to established enterprises, we have
            successfully delivered tailored solutions across various industries,
            helping businesses thrive. When you partner with DODUN Soft
            Solutions, you choose a team that genuinely cares about your
            success. We take the time to understand your unique challenges and
            objectives, crafting tailored solutions that align with your vision.
            Our holistic approach, combined with our commitment to quality and
            client satisfaction, sets us apart in the industry. Here’s what you
            can expect from us:
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#E2E8F0] rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full shadow">
              <i class="fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B]">Tailored Solutions</h3>
              <p className="text-[#475569] mt-2">
                We customise our services to meet your specific needs, ensuring
                that you receive the most relevant and effective strategies.
              </p>
            </div>

            <div className="text-center p-6 bg-[#E2E8F0] rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full shadow">
              <i class="fa-regular fa-hand-peace text-[#1D4ED8] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B]">Expert Guidance</h3>
              <p className="text-[#475569] text-center mt-2">
                Our team is here to guide you every step of the way, offering
                insights and support to help you navigate the digital landscape.
              </p>
            </div>

            <div className="text-center p-6 bg-[#E2E8F0] rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full shadow">
                <i class="fa-solid fa-handshake text-[#1D4ED8] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B]">
                Results-Driven Approach
              </h3>
              <p className="text-[#475569] mt-2">
                We focus on delivering measurable results, using data and
                analytics to inform our strategies and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default who_second;
