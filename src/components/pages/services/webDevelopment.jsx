import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const webDevelopment = () => {
 const link="https://ik.imagekit.io/jncw2kb8u/18907.jpg?updatedAt=1739515425609"
  const pageName= "WEB DEVELOPMENT"

  
  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Custom Website Development",
      description: "Our team works closely with you to understand your vision, ensuring that every aspect of the site reflects your brand identity. Whether you need a simple brochure site or a complex web application, we’ve got you covered."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "E-Commerce Solutions",
      description: "We create secure, user-friendly online stores that make shopping easy and enjoyable. From product listings to payment gateways, we handle every detail to ensure a smooth customer experience and increased sales."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Content Management Systems (CMS)",
      description: "Our expertise in various content management systems, such as WordPress, Drupal, and Joomla, allows you to easily manage your website content. We develop custom CMS solutions that enable you to update and maintain your site effortlessly."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Responsive Web Design",
      description: "With the increasing use of mobile devices, having a responsive website is crucial. We design and develop websites that adapt seamlessly to all screen sizes, ensuring an optimal user experience whether on a desktop, tablet, or smartphone."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "Web Application Development",
      description: "Our team is skilled in creating powerful web applications that enhance functionality and user engagement. From interactive dashboards to customized tools, we build applications that meet your specific business needs and improve operational efficiency."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Website Maintenance and Support",
      description: "We offer comprehensive maintenance and support services to keep your site running smoothly, including updates, security checks, and troubleshooting. Our proactive approach ensures your website stays current and secure."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Web Development Services</h1>
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

export default webDevelopment