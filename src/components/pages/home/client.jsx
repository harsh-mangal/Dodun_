import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const client = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div class="bg-white py-30 px-6 md:mt-10 overflow-hidden">
      {/* <!-- Heading Section --> */}
      <div  data-aos="fade-down" class="text-center mb-10">
        <h1 class="text-3xl font-bold text-gray-800">What Our Clients Say</h1>
        <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
          We offer comprehensive digital marketing services designed to elevate
          your brand, engage your audience, and drive measurable results.
        </p>
      </div>

      {/* <!-- Testimonials Grid --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-200 mx-auto">
        {/* <!-- Testimonial 1 --> */}
        <div class="bg-white border-3 border-blue-600 p-6 shadow-md rounded-lg flex">
          <div>
            <img
              src="https://ik.imagekit.io/jncw2kb8u/client3.jpg?updatedAt=1738850172943"
              class="mt-5 w-50 h-30 md:w-[600px] md:h-[90px] md:mt-10 object-fit md:rounded-full"
            />
          </div>
          <div class="ml-10">
            <p class="text-gray-700 italic">
              "DODUN Soft Solutions transformed our online presence! Their web
              development team was exceptional, and our new site has
              significantly increased our leads."
            </p>
            <div class="mt-4">
              <h4 class="font-semibold text-lg text-gray-900">Rohit Singh</h4>
              <h5 class="text-gray-500">CEO</h5>
            </div>
          </div>
        </div>

        {/* <!-- Testimonial 2 --> */}
        <div class="bg-white border-3 border-blue-600 p-6 shadow-md rounded-lg flex">
          <div>
            <img
              src="https://ik.imagekit.io/jncw2kb8u/client1.jpg?updatedAt=1738850173431"
              class="mt-5 w-50 h-30 md:w-[600px] md:h-[90px] md:mt-10 object-fit md:rounded-full"
            />
          </div>
          <div class="ml-10">
            <p class="text-gray-700 italic">
              "The digital marketing strategies they implemented have driven
              impressive results for our brand. Their commitment to
              understanding our needs was evident."
            </p>
            <div class="mt-4">
              <h4 class="font-semibold text-lg text-gray-900">
                Siddharth Rathi
              </h4>
              <h5 class="text-gray-500">Marketing Director</h5>
            </div>
          </div>
        </div>

        {/* <!-- Testimonial 3 --> */}
        <div class="bg-white border-3 border-blue-600 p-6 shadow-md rounded-lg flex">
          <div>
            <img
              src="https://ik.imagekit.io/jncw2kb8u/client2.jpg?updatedAt=1738850172982"
              class="mt-5 w-50 h-30 md:w-[600px] md:h-[90px] md:mt-10 object-fit md:rounded-full"
            />
          </div>
          <div class="ml-10">
            <p class="text-gray-700 italic">
              "We approached DODUN for a complete rebranding, and they delivered
              beyond our expectations. From the new logo to our website,
              everything feels fresh and modern."
            </p>
            <div class="mt-4">
              <h4 class="font-semibold text-lg text-gray-900">Manish Sharma</h4>
              <h5 class="text-gray-500">Brand Manager</h5>
            </div>
          </div>
        </div>

        {/* <!-- Testimonial 4 --> */}
        <div class="bg-white border-3 border-blue-600 p-6 shadow-md rounded-lg flex">
          <div>
            <img
              src="https://ik.imagekit.io/jncw2kb8u/stylish-indian-man-posing-in-a-bokeh-background-egup76ldmxa7niih.jpg?updatedAt=1738926586588"
              class="mt-5 w-50 h-30 md:w-[600px] md:h-[90px] md:mt-10 object-fit md:rounded-full"
            />
          </div>
          <div class="ml-10">
            <p class="text-gray-700 italic">
              "DODUN transformed our brand with a stunning new identity. The fresh logo and redesigned website perfectly capture our vision. Their work exceeded our expectations, giving our brand a modern and polished look."
            </p>
            <div class="mt-4">
              <h4 class="font-semibold text-lg text-gray-900">Rahul Soni</h4>
              <h5 class="text-gray-500">CEO</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default client;
