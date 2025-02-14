import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const iosAppDevelopment = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/3593965.jpg?updatedAt=1739515129439"
  const pageName= "IOS APP DEVELOPMENT"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Custom IOS App Development",
      description: "Creates tailored iOS applications designed specifically for your business needs and objectives. Focuses on user experience and functionality to engage and retain users. Utilizes the latest iOS technologies for optimal performance and design."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "IOS App UI/UX Design",
      description: "Designs intuitive and visually appealing interfaces that enhance user engagement. Conducts user research and testing to create a seamless user experience. Ensures the app design aligns with Apple’s Human Interface Guidelines for consistency."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "App Integration Services",
      description: "Integrates third-party APIs and services to extend app functionality. Connects the app with backend systems, databases, and other applications. Ensures smooth data flow and interoperability for enhanced user experience."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "IOS App Testing & Quality Assurance",
      description: "Conducts comprehensive testing to identify and fix bugs, ensuring a smooth user experience. Uses automated and manual testing methods to verify app performance and functionality. Delivers a high-quality app that meets industry standards and user expectations."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "App Maintenance and Support",
      description: "Provides ongoing support and updates to keep your app running smoothly. Monitors performance, resolves issues, and implements new features as needed. Ensures compatibility with the latest iOS updates and devices."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "App Store Optimization (ASO)",
      description: "Enhances app visibility and ranking on the App Store through effective ASO strategies. Optimizes app titles, descriptions, keywords, and visuals to attract more downloads. Analyzes performance metrics to refine marketing strategies and boost user acquisition."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of IOS App
      Development Services</h1>
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

export default iosAppDevelopment