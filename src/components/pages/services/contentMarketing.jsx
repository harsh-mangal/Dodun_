import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const contentMarketing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/representation-user-experience-interface-design.jpg?updatedAt=1740030776514"
  const pageName= "CONTENT MARKETING"
  const para= "We offer expert content marketing services to help businesses create engaging, high-quality content that drives traffic and conversions"

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Blog Writing",
      description: "Produces informative, engaging articles tailored to your audience. Helps establish authority and improve SEO through keyword integration. Drives organic traffic and builds ongoing engagement."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Infographics",
      description: "Creates visually appealing graphics that simplify complex data. Communicates information quickly and effectively to your audience. Highly shareable, improving social reach and backlinks."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Video Content",
      description: "Develops engaging video content for platforms like YouTube and social media. Improves brand storytelling and boosts audience retention. Increases conversions with visual and interactive content."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Case Studies",
      description: "Showcases success stories to highlight the effectiveness of your products or services. Builds credibility and trust with potential clients. Helps guide prospects through the decision-making process."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "eBooks & Whitepapers",
      description: "Offers in-depth, authoritative content on industry-specific topics. Used for lead generation by offering value in exchange for contact information. Positions your brand as a thought leader in your niche."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Email Newsletters",
      description: "Provides consistent, valuable content directly to your subscribers' inboxes. Nurtures leads and maintains engagement with existing customers. Encourages repeat traffic, promotions, and customer loyalty."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para}/>
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Content Marketing Services</h1>
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
    {/* <Client /> */}
    <Footer />
    </>
  )
}

export default contentMarketing