import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const contentMarketing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/Homepage-Background-Training-181334_1080x600.jpg?updatedAt=1739346348793"
  const pageName= "CONTENT MARKETING"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Blog Writing",
      description: "Produces informative, engaging articles tailored to your audience. Helps establish authority and improve SEO through keyword integration. Drives organic traffic and builds ongoing engagement."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "Infographics",
      description: "Creates visually appealing graphics that simplify complex data. Communicates information quickly and effectively to your audience. Highly shareable, improving social reach and backlinks."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Video Content",
      description: "Develops engaging video content for platforms like YouTube and social media. Improves brand storytelling and boosts audience retention. Increases conversions with visual and interactive content."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Case Studies",
      description: "Showcases success stories to highlight the effectiveness of your products or services. Builds credibility and trust with potential clients. Helps guide prospects through the decision-making process."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "eBooks & Whitepapers",
      description: "Offers in-depth, authoritative content on industry-specific topics. Used for lead generation by offering value in exchange for contact information. Positions your brand as a thought leader in your niche."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Email Newsletters",
      description: "Provides consistent, valuable content directly to your subscribers' inboxes. Nurtures leads and maintains engagement with existing customers. Encourages repeat traffic, promotions, and customer loyalty."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Content Marketing Services</h1>
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

export default contentMarketing