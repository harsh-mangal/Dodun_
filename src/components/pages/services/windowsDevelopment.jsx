import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const windowsDevelopment = () => {
   const link="https://ik.imagekit.io/jncw2kb8u/Homepage-Background-Training-181334_1080x600.jpg?updatedAt=1739346348793"
  const pageName= "WINDOWS DEVELOPMENT"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Windows Design",
      description: "We create visually stunning and user-friendly interfaces for Windows applications. Our design process focuses on enhancing usability and ensuring a seamless user experience, making your app not only functional but also enjoyable to use."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "Application Development",
      description: "Our team specialises in building custom Windows applications tailored to your business needs. From concept to deployment, we develop robust software solutions that are efficient, scalable, and designed to enhance productivity."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "App Monetization Strategies",
      description: "Maximise your app’s revenue potential with our monetization strategies. We help you implement various models, including subscriptions, in-app purchases, and ads, ensuring that your app generates income while providing value to users."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Windows Universal Platform (UWP) Development",
      description: "We develop UWP applications that provide a consistent experience across all Windows devices, including PCs, tablets, and phones. Our UWP solutions leverage the latest features of the Windows platform to engage users effectively."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "Legacy Application Modernization",
      description: "Transform your outdated applications into modern solutions. We specialise in migrating and updating legacy Windows applications to enhance performance, security, and compatibility with current technologies."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Application Integration",
      description: "We seamlessly integrate your Windows applications with existing systems, APIs, and third-party services, ensuring smooth data exchange and improved functionality across platforms."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Windows Development Services</h1>
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

export default windowsDevelopment