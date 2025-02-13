import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const hosting = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/Homepage-Background-Training-181334_1080x600.jpg?updatedAt=1739346348793"
  const pageName= "HOSTING"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Shared Hosting",
      description: "Multiple websites share the same server resources. Most affordable option for beginners and small websites. Limited customization and scalability due to shared resources."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "VPS Hosting (Virtual Private Server)",
      description: "Offers dedicated virtual resources on a shared physical server. More control and scalability compared to shared hosting. Ideal for growing websites with moderate traffic."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Dedicated Hosting",
      description: "A single server dedicated to one website. Offers full control, customization, and high performance. Best for large websites with high traffic and resource demands."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Cloud Hosting",
      description: "Websites are hosted on multiple interconnected servers. Scalable resources with flexible pricing based on usage. Excellent uptime and performance, suitable for dynamic websites."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "Managed Hosting",
      description: "Managed hosting is a service where the hosting provider handles server maintenance, security, updates, and performance optimization, allowing businesses to focus on their website or application. It includes automated backups, 24/7 technical support, and enhanced security."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Reseller Hosting",
      description: "Reseller hosting allows individuals or businesses to purchase hosting services in bulk and resell them to clients under their own brand. It includes management tools like WHM (Web Host Manager) and cPanel for easy client account control. This is ideal for web developers, agencies, or entrepreneurs looking to offer hosting services."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Specialized Hosting Services</h1>
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

export default hosting