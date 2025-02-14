import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const ppc = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/53094.jpg?updatedAt=1739454490813"
  const pageName= "PAY PER CLICK"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Search Ads",
      description: "Displays text ads on search engine results pages (SERPs). Targets specific keywords relevant to user search queries. Drives highly qualified traffic to your website."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "Display Ads",
      description: "Uses banner ads on websites across Google’s Display Network. Targets users based on demographics, interests, and browsing behavior. Increases brand visibility and awareness across a vast audience."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Social Media Ads",
      description: "Promotes ads on platforms like Facebook, Instagram, and LinkedIn. Targets specific audience segments based on interests, behaviors, and demographics. Builds engagement and drives traffic from active social media users."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Remarketing",
      description: "Re-engages users who previously visited your website. Displays ads across the web to remind users of your brand. Increases conversions by targeting users already familiar with your offerings."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "Shopping Ads",
      description: "Features product ads directly in search engine shopping results. Includes product image, price, and merchant information. Ideal for e-commerce businesses to drive product sales."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
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

export default ppc