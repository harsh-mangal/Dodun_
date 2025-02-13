import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const videoEditing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/Homepage-Background-Training-181334_1080x600.jpg?updatedAt=1739346348793"
  const pageName= "VIDEO EDITING"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Basic Video Editing",
      description: "Provides fundamental editing services, including cutting, trimming, and arranging footage. Enhances video flow and pacing to create a cohesive story. Ideal for personal projects, vlogs, and basic promotional videos."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "Advanced Video Editing",
      description: "Offers comprehensive editing services, including color grading, audio mixing, and visual effects. Elevates the overall quality and professionalism of the final product. Suitable for corporate videos, commercials, and cinematic projects."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Motion Graphics & Animation",
      description: "Creates dynamic motion graphics and animations to enhance storytelling. Integrates animated elements into videos for added visual appeal. Perfect for explainer videos, advertisements, and brand promotions."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Social Media Video Editing",
      description: "Tailors videos specifically for social media platforms with optimal formats and lengths. Focuses on eye-catching visuals and engaging content to boost audience interaction. Ideal for marketing campaigns, promotions, and brand awareness."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "Event Highlight Reels",
      description: "Edits footage from events such as weddings, corporate functions, or parties into captivating highlight reels. Captures the most memorable moments, ensuring a polished and engaging presentation. Provides a keepsake that clients can cherish and share with others."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Video Retouching & Restoration",
      description: "Enhances and restores old or damaged video footage for improved quality. Addresses issues like noise reduction, stabilization, and color correction. Ideal for preserving cherished memories and revitalizing archival content."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Video
      Editing Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-20">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 text-center transition-transform transform hover:scale-105">
            <img src={service.img} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
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