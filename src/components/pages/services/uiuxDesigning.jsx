import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const uiuxDesigning = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/representations-user-experience-interface-design.jpg?updatedAt=1740032972075"
  const pageName= "UI/UX DESIGNING"
  const para= "We offer intuitive and user-centric UI/UX design solutions that enhance user engagement and elevate brand experiences. Our designs focus on seamless navigation, aesthetic appeal, and optimized functionality for all platforms."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "User Research & Analysis",
      description: "Conducts research to understand user behavior, needs, and pain points. Analyzes target audience to design solutions that enhance user satisfaction. Ensures the design is based on real user data for better results."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Wireframing & Prototyping",
      description: "Develops low-fidelity wireframes and interactive prototypes to visualize design concepts. Allows early testing of functionality and user flow before full development. Reduces design errors and streamlines the development process."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Information Architecture (IA) Design",
      description: "Organizes website or app content logically to improve navigation and usability. Structures information to help users find what they need quickly and efficiently. Enhances user experience by simplifying complex systems."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Interaction Design",
      description: "Focuses on designing smooth and engaging interactions between users and interfaces. Ensures intuitive controls, animations, and responses that enhance usability. Improves user engagement and satisfaction with seamless functionality."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Usability Testing",
      description: "Tests the design with real users to identify issues and areas for improvement. Provides insights on user behavior, helping refine the interface for better performance. Ensures the design meets user needs and expectations."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Visual Design",
      description: "Crafts aesthetically appealing user interfaces that align with brand identity. Focuses on layout, color schemes, typography, and imagery to enhance user appeal. Balances form and function, ensuring the interface is both beautiful and usable."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of UI/UX
      Designing Services</h1>
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

export default uiuxDesigning