import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const logoDesigning = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/young-graphic-designer-working-office.jpg?updatedAt=1740033497745"
  const pageName= "LOGO DESIGNING"
  const para= "Transform your brand identity with creative and impactful logo designs. Stand out with unique, professional logos tailored to your vision."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Custom Logo Design",
      description: "Creates unique, tailored logos that reflect your brand's identity and values. Collaborates closely with clients to ensure the design aligns with their vision. Delivers a logo that stands out in the market and resonates with the target audience."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Logo Redesign",
      description: "Revamps existing logos to modernize the design and improve brand relevance. Focuses on retaining brand recognition while updating aesthetics and functionality. Ensures the new design meets current design trends and consumer expectations."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Brand Identity Development",
      description: "Develops a comprehensive brand identity package that includes logo, colors, and typography. Ensures consistency across all branding materials and platforms. Helps establish a strong and cohesive visual presence in the market."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Icon Design",
      description: "Creates custom icons that complement your logo and enhance brand messaging. Focuses on simplicity and clarity to ensure easy recognition and usability. Ideal for digital platforms, apps, and other branding collateral."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Typography-Based Logo Design",
      description: "Specializes in designing logos that focus on creative typography and lettering. Crafts unique text-based logos that convey the brand’s personality. Enhances readability and memorability through thoughtful design choices."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Logo Animation",
      description: "Develops animated logos that add a dynamic element to your brand identity. Enhances engagement and memorability on digital platforms and videos. Ideal for use in marketing materials, websites, and social media campaigns."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Logo
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

export default logoDesigning