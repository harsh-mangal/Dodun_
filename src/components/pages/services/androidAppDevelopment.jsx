import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const androidAppDevelopment = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg?updatedAt=1740035009998"
  const pageName= "ANDROID APP DEVELOPMENT"
  const para= "We offer expert Android app development services, crafting intuitive and high-performance mobile solutions tailored to your business needs."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Custom Android App Development",
      description: "Develops personalized Android applications tailored to specific business requirements. Focuses on creating feature-rich and user-friendly apps for diverse industries. Utilizes the latest Android technologies for optimal performance and design."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Android App UI/UX Design",
      description: "Designs intuitive and visually engaging user interfaces to enhance user experience. Conducts user research to create seamless interactions and easy navigation. Ensures compliance with Android design guidelines for a consistent look and feel."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "API Integration Services",
      description: "Integrates third-party APIs and services to extend app functionality. Connects the app with backend systems, databases, and other applications. Ensures smooth data flow and interoperability for enhanced user experience."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Quality Assurance and Testing",
      description: "Implements rigorous testing methodologies to ensure app functionality and reliability. Conducts both manual and automated testing to identify and fix bugs. Ensures the app meets industry standards and provides a seamless user experience."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "App Maintenance and Support",
      description: "Offers ongoing maintenance and updates to keep the app running smoothly. Monitors performance, resolves issues, and implements new features as necessary. Ensures compatibility with the latest Android updates and devices."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "App Store Optimization (ASO)",
      description: "Enhances app visibility and discoverability on the Google Play Store. Optimizes app listings with effective titles, descriptions, keywords, and visuals. Analyzes performance data to refine strategies for increased downloads and user engagement."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Android App
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
    {/* <Client /> */}
    <Footer />
    </>
  )
}

export default androidAppDevelopment