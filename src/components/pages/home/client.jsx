import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const client = () => {
  const testimonials = [
    {
      id: 1,
      text: "DODUN Soft Solutions transformed our online presence! Their web development team was exceptional, and our new site has significantly increased our leads.",
      name: "Rohit Singh",
      role: "CEO",
      image:
        "https://ik.imagekit.io/jncw2kb8u/client3.jpg?updatedAt=1738850172943",
      rating: 5,
    },
    {
      id: 2,
      text: "The digital marketing strategies they implemented have driven impressive results for our brand. Their commitment to understanding our needs was evident.",
      name: "Siddharth Rathi",
      role: "Marketing Director",
      image:
        "https://ik.imagekit.io/jncw2kb8u/client1.jpg?updatedAt=1738850173431",
      rating: 4,
    },
    {
      id: 3,
      text: "We approached DODUN for a complete rebranding, and they delivered beyond our expectations. From the new logo to our website, everything feels fresh and modern.",
      name: "Manish Sharma",
      role: "Brand Manager",
      image:
        "https://ik.imagekit.io/jncw2kb8u/client2.jpg?updatedAt=1738850172982",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative">
        <img
          src="https://ik.imagekit.io/jncw2kb8u/testi-bg.jpg?updatedAt=1739270342783"
          class="w-500 h-200 object-cover"
        />

        <div className="absolute inset-0 max-w-8xl mx-auto p-6 text-center mt-10 mb-40">
          <h3 className="text-black text-3xl font-bold">
            What Our Clients Say
          </h3>
          <h2 className="text-xl mt-5 text-center">
            We offer comprehensive digital marketing services designed <br /> to
            elevate your brand, engage your audience, and drive measurable
            results.
          </h2>

          {/* Profile Images in Circular Layout (STATIC) */}
          <div className="flex justify-center space-x-6 mb-4 mt-10">
            {testimonials.map((person, idx) => (
              <img
                key={idx}
                src={person.image}
                alt={person.name}
                className={`w-20 h-20 md:w-30 md:h-40 rounded-full border-6 ${
                  idx === activeIndex ? "border-blue-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Swiper for Testimonials */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="mt-6"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="">
                <div className="p-8">
                  {/* Quote and Text */}
                  <p className="text-gray-600 italic texy-lg md:text-xl max-w-2xl mx-auto">
                    "{testimonial.text}"
                  </p>

                  {/* Star Ratings */}
                  <div className="flex justify-center mt-3">
                    {"★"
                      .repeat(testimonial.rating)
                      .split("")
                      .map((star, i) => (
                        <span key={i} className="text-yellow-500 text-lg">
                          ★
                        </span>
                      ))}
                  </div>

                  {/* Name and Role */}
                  <h3 className=" font-semibold text-lg mt-3">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mt-3">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute left-0 md:left-20 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 text-xs md:text-lg p-2 bg-white shadow-md rounded-full w-5 h-5 md:w-16 md:h-16 flex items-center justify-center hover:bg-sky-300">
              ❮
            </div>
            <div className="custom-next absolute right-0 md:right-20 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 text-xs md:text-lg p-2 bg-white shadow-md rounded-full w-5 h-5 md:w-16 md:h-16 flex items-center justify-center hover:bg-sky-300">
              ❯
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default client;
