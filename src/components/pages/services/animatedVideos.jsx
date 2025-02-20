import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const animatedVideos = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/attractive-male-video-editor-works-with-footage-video-his-personal-computer-having-break-communicating-his-smartphone-he-works-creative-office-studio-home-neon-lights.jpg?updatedAt=1740033687019"
  const pageName= "ANIMATED VIDEOS"
  const para= "We create captivating animated videos that bring your ideas to life, perfect for marketing, promotions, and storytelling. Enhance your brand’s message with engaging visuals tailored to your audience."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Infographic Videos",
      description: "Turn data into visually compelling stories with infographic videos. These animations combine charts, icons, and statistics to present information in a clear, engaging format. Ideal for breaking down complex data, making it easy to understand and memorable for your audience."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Insta Reels",
      description: "Capture attention in seconds with short, engaging Insta Reels. These fast-paced, visually dynamic videos are perfect for showcasing products, promoting events, or sharing behind-the-scenes content. Ideal for increasing brand visibility and connecting with a wider audience on Instagram."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Ad Films and Posters",
      description: "Boost your brand’s visibility with striking ad films and posters. Ad films use compelling storytelling and visuals to deliver powerful messages, while posters offer eye-catching designs for quick impact. Both formats are perfect for driving engagement, promoting products, and enhancing your marketing campaigns."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Motion Graphics",
      description: "Bring static visuals to life with motion graphics, a perfect blend of animation and design. These dynamic videos use moving text, shapes, and graphics to communicate ideas in a visually appealing way. Ideal for enhancing presentations, explainer videos, and promotional content with sleek, professional animations."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "2D & 3D Animation",
      description: "A traditional animation style where characters and objects are created in a two-dimensional space, moving along height and width. It’s commonly used in explainer videos, cartoons, and marketing ads."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Product Demos & Tutorials",
      description: "simplify complex product features through engaging animations, making it easier for customers to understand functionality. They enhance user experience by visually demonstrating step-by-step usage, reducing confusion. These videos boost conversions by showcasing product benefits effectively."
    }
  ];
  return (
    <>
    <Navbar_second />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Specialized Animated Video Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-20">
        {services.map((service, index) => (
          <div key={index} className="bg-[#E2E8F0] shadow-lg rounded-2xl p-6 text-center transition-transform transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full shadow"><i className={service.img}></i></div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <TechStack />
    <GetTouch />
    <Client />
    <Footer />
    </>
  )
}

export default animatedVideos