import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const windowsDevelopment = () => {
   const link="https://ik.imagekit.io/jncw2kb8u/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg?updatedAt=1740037085453"
  const pageName= "WINDOWS DEVELOPMENT"
  const para= "We offer comprehensive Windows development services, creating efficient and user-friendly desktop applications. Our solutions are tailored to meet your business needs with high performance and seamless functionality."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Windows Design",
      description: "We create visually stunning and user-friendly interfaces for Windows applications. Our design process focuses on enhancing usability and ensuring a seamless user experience, making your app not only functional but also enjoyable to use."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Application Development",
      description: "Our team specialises in building custom Windows applications tailored to your business needs. From concept to deployment, we develop robust software solutions that are efficient, scalable, and designed to enhance productivity."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "App Monetization Strategies",
      description: "Maximise your app’s revenue potential with our monetization strategies. We help you implement various models, including subscriptions, in-app purchases, and ads, ensuring that your app generates income while providing value to users."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Windows Universal Platform (UWP) Development",
      description: "We develop UWP applications that provide a consistent experience across all Windows devices, including PCs, tablets, and phones. Our UWP solutions leverage the latest features of the Windows platform to engage users effectively."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Legacy Application Modernization",
      description: "Transform your outdated applications into modern solutions. We specialise in migrating and updating legacy Windows applications to enhance performance, security, and compatibility with current technologies."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Application Integration",
      description: "We seamlessly integrate your Windows applications with existing systems, APIs, and third-party services, ensuring smooth data exchange and improved functionality across platforms."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Windows Development Services</h1>
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

export default windowsDevelopment