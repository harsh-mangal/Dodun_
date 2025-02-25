import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const Designing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/2150063136.jpg?updatedAt=1740038399331"
  const pageName= "Designing"
  const para= "We offer creative and customized design solutions that bring your ideas to life. Our designs focus on aesthetics, functionality, and user engagement to help your brand stand out."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Web Designing",
      description: "Customer-focused web portals with all the necessary functionalities to help expand your business digitally."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "UI/UX Designing",
      description: "Fully-customized websites to speed up business processes, improve productivity, & multiply revenue."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Graphic Designing",
      description: "E-commerce solutions to simplify online shopping, increase revenue & attract a larger customer base."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Logo Designing",
      description: "Easy-to-use CMS web applications to manage your digital content efficiently & gain competitive advantage."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Video Editing",
      description: "Highly functional ERP web solution for better team collaborations, improved user engagement, & transparent results"
    },
  ];

  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of SEO Services</h1>
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

export default Designing