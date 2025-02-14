import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const emailMarketing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/2995663.jpg?updatedAt=1739455428429"
  const pageName= "EMAIL MARKETING"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Email Campaign Management",
      description: "Designs, schedules, and sends email campaigns to segmented lists. Ensures personalized content and timing for maximum engagement. Tracks performance metrics like open rates and click-through rates."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "Automated Email Sequences",
      description: "Creates drip campaigns that automatically send emails based on user actions. Nurtures leads with targeted content at each stage of the buyer's journey. Saves time while maintaining consistent communication with subscribers."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Newsletter Creation",
      description: "Develops visually appealing and informative email newsletters. Keeps your audience updated with industry news, promotions, and company updates. Encourages repeat engagement and builds long-term customer relationships."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "List Segmentation & Management",
      description: "Organizes email lists based on demographics, behavior, and engagement. Targets specific segments with relevant content for higher open rates. Helps personalize campaigns for improved engagement and conversions."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "A/B Testing",
      description: "Tests different email subject lines, content, and designs to optimize performance. Helps determine what resonates best with your audience. Increases email effectiveness through data-driven adjustments."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Email Design & Template Creation",
      description: "Crafts professional, mobile-friendly email templates. Ensures consistent branding and enhances the user experience. Maximizes engagement with visually appealing, easy-to-read emails."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Email
      Marketing Services</h1>
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

export default emailMarketing