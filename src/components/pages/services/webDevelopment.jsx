import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const webDevelopment = () => {
 const link="https://ik.imagekit.io/jncw2kb8u/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg?updatedAt=1740037085453"
  const pageName= "WEB DEVELOPMENT"
  const para= "We offer professional web development services, crafting responsive and user-friendly websites tailored to your business needs. Our solutions focus on performance, scalability, and a seamless user experience."

  
  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Custom Website Development",
      description: "Our team works closely with you to understand your vision, ensuring that every aspect of the site reflects your brand identity. Whether you need a simple brochure site or a complex web application, we’ve got you covered."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "E-Commerce Solutions",
      description: "We create secure, user-friendly online stores that make shopping easy and enjoyable. From product listings to payment gateways, we handle every detail to ensure a smooth customer experience and increased sales."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Content Management Systems (CMS)",
      description: "Our expertise in various content management systems, such as WordPress, Drupal, and Joomla, allows you to easily manage your website content. We develop custom CMS solutions that enable you to update and maintain your site effortlessly."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Responsive Web Design",
      description: "With the increasing use of mobile devices, having a responsive website is crucial. We design and develop websites that adapt seamlessly to all screen sizes, ensuring an optimal user experience whether on a desktop, tablet, or smartphone."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Web Application Development",
      description: "Our team is skilled in creating powerful web applications that enhance functionality and user engagement. From interactive dashboards to customized tools, we build applications that meet your specific business needs and improve operational efficiency."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Website Maintenance and Support",
      description: "We offer comprehensive maintenance and support services to keep your site running smoothly, including updates, security checks, and troubleshooting. Our proactive approach ensures your website stays current and secure."
    }
  ];
  return (
    <>
   <Navbar_second />
   <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Web Development Services</h1>
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

export default webDevelopment