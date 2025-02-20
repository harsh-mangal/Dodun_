import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const iosAppDevelopment = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg?updatedAt=1740035009998"
  const pageName= "IOS APP DEVELOPMENT"
  const para= "We offer top-notch iOS app development services, crafting seamless and user-friendly applications tailored to your business needs. Our expert team ensures high performance, intuitive design, and robust functionality for an exceptional user experience."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Custom IOS App Development",
      description: "Creates tailored iOS applications designed specifically for your business needs and objectives. Focuses on user experience and functionality to engage and retain users. Utilizes the latest iOS technologies for optimal performance and design."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "IOS App UI/UX Design",
      description: "Designs intuitive and visually appealing interfaces that enhance user engagement. Conducts user research and testing to create a seamless user experience. Ensures the app design aligns with Apple’s Human Interface Guidelines for consistency."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "App Integration Services",
      description: "Integrates third-party APIs and services to extend app functionality. Connects the app with backend systems, databases, and other applications. Ensures smooth data flow and interoperability for enhanced user experience."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "IOS App Testing & Quality Assurance",
      description: "Conducts comprehensive testing to identify and fix bugs, ensuring a smooth user experience. Uses automated and manual testing methods to verify app performance and functionality. Delivers a high-quality app that meets industry standards and user expectations."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "App Maintenance and Support",
      description: "Provides ongoing support and updates to keep your app running smoothly. Monitors performance, resolves issues, and implements new features as needed. Ensures compatibility with the latest iOS updates and devices."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "App Store Optimization (ASO)",
      description: "Enhances app visibility and ranking on the App Store through effective ASO strategies. Optimizes app titles, descriptions, keywords, and visuals to attract more downloads. Analyzes performance metrics to refine marketing strategies and boost user acquisition."
    }
  ];
  return (
    <>
    <Navbar_second />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of IOS App
      Development Services</h1>
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

export default iosAppDevelopment