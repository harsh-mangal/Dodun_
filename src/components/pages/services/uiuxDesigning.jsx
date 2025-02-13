import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const uiuxDesigning = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/Homepage-Background-Training-181334_1080x600.jpg?updatedAt=1739346348793"
  const pageName= "UI/UX DESIGNING"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "User Research & Analysis",
      description: "Conducts research to understand user behavior, needs, and pain points. Analyzes target audience to design solutions that enhance user satisfaction. Ensures the design is based on real user data for better results."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "Wireframing & Prototyping",
      description: "Develops low-fidelity wireframes and interactive prototypes to visualize design concepts. Allows early testing of functionality and user flow before full development. Reduces design errors and streamlines the development process."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Information Architecture (IA) Design",
      description: "Organizes website or app content logically to improve navigation and usability. Structures information to help users find what they need quickly and efficiently. Enhances user experience by simplifying complex systems."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Interaction Design",
      description: "Focuses on designing smooth and engaging interactions between users and interfaces. Ensures intuitive controls, animations, and responses that enhance usability. Improves user engagement and satisfaction with seamless functionality."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "Usability Testing",
      description: "Tests the design with real users to identify issues and areas for improvement. Provides insights on user behavior, helping refine the interface for better performance. Ensures the design meets user needs and expectations."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Visual Design",
      description: "Crafts aesthetically appealing user interfaces that align with brand identity. Focuses on layout, color schemes, typography, and imagery to enhance user appeal. Balances form and function, ensuring the interface is both beautiful and usable."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of UI/UX
      Designing Services</h1>
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

export default uiuxDesigning