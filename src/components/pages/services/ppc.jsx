import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const ppc = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/5179459.jpg?updatedAt=1739529624292"
  const pageName= "PAY PER CLICK"

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Search Ads",
      description: "Displays text ads on search engine results pages (SERPs). Targets specific keywords relevant to user search queries. Drives highly qualified traffic to your website."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Display Ads",
      description: "Uses banner ads on websites across Google’s Display Network. Targets users based on demographics, interests, and browsing behavior. Increases brand visibility and awareness across a vast audience."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Social Media Ads",
      description: "Promotes ads on platforms like Facebook, Instagram, and LinkedIn. Targets specific audience segments based on interests, behaviors, and demographics. Builds engagement and drives traffic from active social media users."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Remarketing",
      description: "Re-engages users who previously visited your website. Displays ads across the web to remind users of your brand. Increases conversions by targeting users already familiar with your offerings."
    },
    {
      img:  "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Shopping Ads",
      description: "Features product ads directly in search engine shopping results. Includes product image, price, and merchant information. Ideal for e-commerce businesses to drive product sales."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Video Ads",
      description: "Displays ads on platforms like YouTube or other video networks. Engages users with visual content through skippable or non-skippable ads. Great for storytelling and boosting brand awareness through multimedia."
    }
  ];

  return (
    <>
     <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Pay Per Clicks Services</h1>
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

export default ppc