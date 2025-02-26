import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const graphicDesigning = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/woman-with-editor-occupation-wearing-headphones.jpg?updatedAt=1740033184868"
  const pageName= "GRAPHIC DESIGNING"
  const para= "We offer creative and impactful graphic design solutions tailored to elevate your brand's identity. From logos to marketing materials, we craft visually engaging designs that leave a lasting impression."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Branding and Identity Design",
      description: "Your brand is your foundation. We create impactful brand identities that resonate with your audience, from distinctive logos to cohesive color schemes and typography. Let us help you establish a memorable presence that tells your story and sets you apart in the market."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Marketing Collateral Design",
      description: "In a competitive landscape, effective marketing materials are essential. Our design services encompass brochures, flyers, and business cards that not only look great but also drive your marketing message home. We ensure your materials capture attention and convert prospects into customers."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Digital Design for Web Development",
      description: "In the digital age, your website is often the first interaction customers have with your brand. Our digital design services focus on creating visually stunning and user-friendly websites. We integrate beautiful graphics with intuitive layouts to enhance user experience and keep visitors engaged."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Custom Illustrations",
      description: "Illustrations can bring your brand to life! Our talented artists create custom visuals that simplify complex ideas and add a unique touch to your marketing efforts. Whether for infographics, social media, or website graphics, we infuse creativity into every design."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "UI/UX Design",
      description: "A seamless user experience is crucial for web development. We specialize in UI/UX design, crafting intuitive interfaces that enhance user interaction. Our designs prioritize functionality while ensuring your brand's aesthetic shines through, resulting in a cohesive and engaging online experience."
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
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Graphic
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

export default graphicDesigning