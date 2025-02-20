import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const webDesigning = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/programming-background-collage.jpg?updatedAt=1740032598376"
  const pageName= "WEB DESIGNING"
  const para= "We offer creative and responsive web designing services tailored to elevate your online presence. Our designs blend aesthetics with functionality, ensuring an engaging user experience across all devices."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Custom Website Design",
      description: "Creates a unique, tailored design to reflect your brand identity. Ensures a user-friendly experience and seamless navigation. Focuses on aesthetics, functionality, and conversion optimization."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Responsive Web Design",
      description: "Develops websites that adapt to various screen sizes (mobile, tablet, desktop). Enhances user experience with optimized layouts for all devices. Improves SEO rankings and ensures accessibility across platforms."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "UI/UX Design",
      description: "Focuses on crafting intuitive user interfaces and exceptional user experiences. Prioritizes functionality, ease of use, and engaging design. Aims to boost user satisfaction and increase conversions."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "eCommerce Website Design",
      description: "Builds online stores with secure payment gateways and easy navigation. Designs product pages to optimize user engagement and conversions. Focuses on mobile-friendliness and seamless checkout processes."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Landing Page Design",
      description: "Creates high-converting landing pages for campaigns or promotions. Focuses on clear calls-to-action, minimal distractions, and optimized layout. Aims to capture leads or drive specific user actions."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Website Redesign",
      description: "Revamps existing websites with modern designs and improved performance. Updates outdated elements, improving user experience and functionality. Enhances site speed, SEO, and mobile responsiveness for better results."
    }
  ];
  return (
    <>
    <Navbar_second />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Web
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
    <Client />
    <Footer />
    </>
  )
}

export default webDesigning