import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const service = () => {
  const services = [
    {
      title: "Development",
      description:
        "Create stunning websites that attract the right visitors and turn them into loyal customers. Our designs are not just visually appealing but also optimized for performance and user experience. We ensure seamless navigation, fast load times, and mobile responsiveness to enhance engagement. With a focus on modern aesthetics and intuitive functionality, we craft websites that leave a lasting impression. Our expertise in SEO and conversion strategies helps businesses grow their online presence effectively. Let us transform your vision into a powerful digital platform that drives success."
    },
    {
      title: "Digital Marketing",
      description:
        "Enhance your brand’s visibility and reputation with our expert digital marketing strategies. We create data-driven campaigns tailored to your target audience, ensuring maximum engagement and conversions. Our team leverages SEO, social media, and paid advertising to boost your online presence. With innovative content marketing and analytics, we optimize your brand’s reach and effectiveness. Stay ahead of the competition with our cutting-edge techniques and industry insights. Let us help you build a strong digital footprint and drive long-term success."
    },
    {
      title: "Hosting Provider",
      description:
        "Reliable hosting services keep your website fast, secure, and always online. They provide high uptime guarantees, ensuring minimal downtime for your visitors. Advanced security measures protect your site from cyber threats and data breaches. Scalable resources allow your website to grow without performance issues. Optimized servers enhance loading speeds, improving user experience and SEO rankings. 24/7 customer support ensures any technical issues are resolved quickly and efficiently.."
    },
    {
      title: "Designing",
      description:
        "Visual designs that speak volumes about your brand’s creativity and professionalism. We craft stunning **logos** that leave a lasting impression. Our **UI/UX designs** ensure seamless and engaging user experiences. We create compelling **social media graphics** that boost engagement. Our **branding materials** establish a strong and consistent identity. With **website and app design**, we bring your digital presence to life with style and functionality."
    },
    {
      title: "Animated Videos",
      description:
        "Animated videos use rapidly displayed images or graphics to create the illusion of movement. They can be created using traditional hand-drawn techniques, 2D vector-based animation, 3D computer-generated imagery, or stop-motion animation. These videos are widely used in entertainment, education, marketing, and social media content. Advanced software tools like Adobe After Effects, Blender, and Toon Boom help artists create high-quality animations. The choice of animation style depends on the purpose, target audience, and budget of the project. With the rise of digital platforms, animated videos have become a powerful medium for storytelling and visual communication."
    }
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // const handleClick = (index) => {
  //   if (isMobile) {
  //     setHoverIndex(index);
  //   }
  // };

  useEffect(() => {
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    }, []);


  return (
   <>
     <div className="max-w-5xl mx-auto mt-10 px-4 py-10 bg-white rounded-lg p-6">
      <h3 className="text-3xl text-center font-bold text-black mb-6">Our Services</h3>
      <h1 className="text-2xl text-center text-black mb-6">
        Empowering Innovation, Elevating Businesses – Your Trusted IT Solutions Partner.
      </h1>
      {services.map((service, index) => (
        <div
          key={index}
          className="mb-4"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => {
            if (isMobile) {
                  hoverIndex === null ? setHoverIndex(index) : setHoverIndex(null);
              }
          }} 
        >
          <div className="w-full flex justify-between items-end text-gray-600 py-4 px-6 border-b border-gray-300 hover:text-gray-800 transition duration-300 text-left focus:outline-none">
           <div className='flex'>
           <span className="">{`0${index + 1}`}</span>
           <h2 className="text-xl font-semibold mx-10">{service.title}</h2>
           </div>
            <div><span className="text-blue-600">{hoverIndex === index ? <i class="fa-solid fa-arrow-down-long"></i> : <i class="fa-solid fa-arrow-right"></i>}</span></div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: hoverIndex === index ? "auto" : 0, opacity: hoverIndex === index ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {hoverIndex === index && (
              <div className="p-6 bg-gray-50 rounded-lg border-b border-gray-300">
                <p className="mb-4 mx-5 text-gray-700 text-lg text-left items-center">{service.description}</p>
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
   </>
  )
}


export default service