import React from "react";
import { useState, useEffect } from "react";

const techStack = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerSlide = 5;
  const images = [
    "https://ik.imagekit.io/jncw2kb8u/technologies-5.png?updatedAt=1738577529737",
    "https://ik.imagekit.io/jncw2kb8u/technologies-4.png?updatedAt=1738577529740",
    "https://ik.imagekit.io/jncw2kb8u/technologies-1.png?updatedAt=1738577",
    "https://ik.imagekit.io/jncw2kb8u/technologies-2.png?updatedAt=1738577529157",
    "https://ik.imagekit.io/jncw2kb8u/1_1UBNwRFaslvqt_G3Njw3pg.jpg?updatedAt=1739348580733",
    "https://ik.imagekit.io/jncw2kb8u/1_doAg1_fMQKWFoub-6gwUiQ.png?updatedAt=1739348645570",
    "https://ik.imagekit.io/jncw2kb8u/images%20(3).png?updatedAt=1739348719660",
    "https://ik.imagekit.io/jncw2kb8u/1_i2fRBk3GsYLeUk_Rh7AzHw.png?updatedAt=1739349388393",
    "https://ik.imagekit.io/jncw2kb8u/technologies-5.png?updatedAt=1738577529737",
    "https://ik.imagekit.io/jncw2kb8u/technologies-4.png?updatedAt=1738577529740",
    "https://ik.imagekit.io/jncw2kb8u/technologies-1.png?updatedAt=1738577",
    "https://ik.imagekit.io/jncw2kb8u/technologies-2.png?updatedAt=1738577529157",
    "https://ik.imagekit.io/jncw2kb8u/1_1UBNwRFaslvqt_G3Njw3pg.jpg?updatedAt=1739348580733",
    "https://ik.imagekit.io/jncw2kb8u/1_doAg1_fMQKWFoub-6gwUiQ.png?updatedAt=1739348645570",
    "https://ik.imagekit.io/jncw2kb8u/images%20(3).png?updatedAt=1739348719660",
    "https://ik.imagekit.io/jncw2kb8u/technologies-5.png?updatedAt=1738577529737",
    "https://ik.imagekit.io/jncw2kb8u/technologies-4.png?updatedAt=1738577529740",
    "https://ik.imagekit.io/jncw2kb8u/technologies-1.png?updatedAt=1738577",
    "https://ik.imagekit.io/jncw2kb8u/technologies-2.png?updatedAt=1738577529157",
    "https://ik.imagekit.io/jncw2kb8u/1_1UBNwRFaslvqt_G3Njw3pg.jpg?updatedAt=1739348580733",
    "https://ik.imagekit.io/jncw2kb8u/1_doAg1_fMQKWFoub-6gwUiQ.png?updatedAt=1739348645570",
    "https://ik.imagekit.io/jncw2kb8u/images%20(3).png?updatedAt=1739348719660",
    "https://ik.imagekit.io/jncw2kb8u/1_i2fRBk3GsYLeUk_Rh7AzHw.png?updatedAt=1739349388393",
    "https://ik.imagekit.io/jncw2kb8u/technologies-5.png?updatedAt=1738577529737",
    "https://ik.imagekit.io/jncw2kb8u/technologies-4.png?updatedAt=1738577529740",
    "https://ik.imagekit.io/jncw2kb8u/technologies-1.png?updatedAt=1738577",
    "https://ik.imagekit.io/jncw2kb8u/technologies-2.png?updatedAt=1738577529157",
    "https://ik.imagekit.io/jncw2kb8u/1_1UBNwRFaslvqt_G3Njw3pg.jpg?updatedAt=1739348580733",
    "https://ik.imagekit.io/jncw2kb8u/1_doAg1_fMQKWFoub-6gwUiQ.png?updatedAt=1739348645570",
    "https://ik.imagekit.io/jncw2kb8u/images%20(3).png?updatedAt=1739348719660",
  ];

  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <>
      <div className="px-4 py-12 bg-white text-gray-900">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center mb-2 text-black">
            Technology Stack
          </h2>
          <h1 className="text-3xl font-bold text-center mb-4 mt-5 text-gray-800">
            We Work With
          </h1>
          <p className="text-center text-base sm:text-lg mb-8 text-gray-700 mt-6 sm:mt-10 max-w-3xl mx-auto">
            At DODUN Soft Solutions, we harness the power of cutting-edge
            technologies to deliver
            <br className="hidden sm:block" /> exceptional web development services.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mt-10 overflow-hidden">
          {/* Slider Content */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 flex justify-center gap-8"
              >
                {images
                  .slice(
                    slideIndex * imagesPerSlide,
                    (slideIndex + 1) * imagesPerSlide
                  )
                  .map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Technology ${index + 1}`}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-32 lg:h-32 object-contain  shadow-md border-2 border-gray-900"
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default techStack;
