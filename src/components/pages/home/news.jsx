import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const news = () => {
  const newsData = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/emailmarketingguide.png?updatedAt=1738333319406",
      title:
        "The Ultimate Email Marketing Guide for Beginners | Tips, Tricks, and Tools You Need to Know",
      description:
        "Email marketing remains one of the most effective ways to reach your audience, nurture leads, and drive conversions.",
      date: "October 15, 2024 | 8:18 am",
      url: "/first",
      animation: "fade-down-left",
      delay:"1000",
      duration: "3000",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/Untitled-design-2.jpg?updatedAt=1738333319161",
      title:
        "Maximize Your PPC Performance | 6 Proven Strategies You Need to Try",
      description:
        "In the fast-paced world of digital marketing, Pay-Per-Click (PPC) advertising remains one of the most effective strategies for driving targeted results.",
      date: "October 15, 2024 | 8:06 am",
      url: "/second",
      animation: "fade-down-left",
      delay:"2000",
      duration: "3000",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/Untitled-design.jpg?updatedAt=1738333319159",
      title:
        "Navigating the Digital Landscape | 5 Challenges Every Marketer Must Overcome",
      description:
        "In today’s fast-paced digital world, marketers face an ever-evolving landscape filled with opportunities and challenges.",
      date: "October 15, 2024 | 7:18 am",
      url: "/third",
      animation: "fade-down-left",
      delay:"3000",
      duration: "3000",
    },
  ];

  useEffect(() => {
    AOS.init({
      // duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-white px-2 text-center grid grid-cols-1 md:grid-cols-2 mx-5 overflow-hidden">
      {/* Title */}
      <div className="md:my-20 md:mx-20">
        <h1 className="text-3xl text-center md:text-left font-bold text-black mb-6">
          Our Blogs
        </h1>
        <p className="text-2xl text-center md:text-left text-black mb-6">
          Boost your organic traffic and engagement with our campaigns that get
          your business in front of the right people at the right time.
        </p>
      </div>

      {/* News Cards Grid */}
      <div className="w-auto max-w-180 md:ml-0 ">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white gap-10 my-3 md:my-5 border-3 border-gray-300 overflow-hidden hover:bg-gray-200 transition duration-700"
            data-aos={news.animation}
            data-aos-duration={news.duration}
          >
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{news.description}</p>
              <Link
                to={news.url}
                className="text-blue-500 font-medium inline-block mt-3 hover:underline"
              >
                Read More
              </Link>
              {/* <p className="text-gray-400 text-xs mt-2">{news.date}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default news;
