import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const hosting = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg?updatedAt=1740037805495"
  const pageName= "HOSTING"
  const para= "Reliable and secure hosting solutions tailored to meet your business needs. Experience seamless performance, 24/7 support, and scalable options for every project."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Shared Hosting",
      description: "Multiple websites share the same server resources. Most affordable option for beginners and small websites. Limited customization and scalability due to shared resources."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "VPS Hosting (Virtual Private Server)",
      description: "Offers dedicated virtual resources on a shared physical server. More control and scalability compared to shared hosting. Ideal for growing websites with moderate traffic."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Dedicated Hosting",
      description: "A single server dedicated to one website. Offers full control, customization, and high performance. Best for large websites with high traffic and resource demands."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Cloud Hosting",
      description: "Websites are hosted on multiple interconnected servers. Scalable resources with flexible pricing based on usage. Excellent uptime and performance, suitable for dynamic websites."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Managed Hosting",
      description: "Managed hosting is a service where the hosting provider handles server maintenance, security, updates, and performance optimization, allowing businesses to focus on their website or application. It includes automated backups, 24/7 technical support, and enhanced security."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Reseller Hosting",
      description: "Reseller hosting allows individuals or businesses to purchase hosting services in bulk and resell them to clients under their own brand. It includes management tools like WHM (Web Host Manager) and cPanel for easy client account control. This is ideal for web developers, agencies, or entrepreneurs looking to offer hosting services."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Specialized Hosting Services</h1>
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

export default hosting