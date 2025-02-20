import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const videoEditing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/attractive-male-video-editor-works-with-footage-video-his-personal-computer-having-break-communicating-his-smartphone-he-works-creative-office-studio-home-neon-lights.jpg?updatedAt=1740033687019"
  const pageName= "VIDEO EDITING"
  const para= "We offer professional video editing services to bring your ideas to life with precision and creativity. From seamless transitions to stunning effects, we craft videos that captivate and engage your audience."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Basic Video Editing",
      description: "Provides fundamental editing services, including cutting, trimming, and arranging footage. Enhances video flow and pacing to create a cohesive story. Ideal for personal projects, vlogs, and basic promotional videos."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Advanced Video Editing",
      description: "Offers comprehensive editing services, including color grading, audio mixing, and visual effects. Elevates the overall quality and professionalism of the final product. Suitable for corporate videos, commercials, and cinematic projects."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Motion Graphics & Animation",
      description: "Creates dynamic motion graphics and animations to enhance storytelling. Integrates animated elements into videos for added visual appeal. Perfect for explainer videos, advertisements, and brand promotions."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Social Media Video Editing",
      description: "Tailors videos specifically for social media platforms with optimal formats and lengths. Focuses on eye-catching visuals and engaging content to boost audience interaction. Ideal for marketing campaigns, promotions, and brand awareness."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Event Highlight Reels",
      description: "Edits footage from events such as weddings, corporate functions, or parties into captivating highlight reels. Captures the most memorable moments, ensuring a polished and engaging presentation. Provides a keepsake that clients can cherish and share with others."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Video Retouching & Restoration",
      description: "Enhances and restores old or damaged video footage for improved quality. Addresses issues like noise reduction, stabilization, and color correction. Ideal for preserving cherished memories and revitalizing archival content."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Video
      Editing Services</h1>
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

export default videoEditing