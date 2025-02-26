import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const DigitalMarketing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/2150063136.jpg?updatedAt=1740038399331"
  const pageName= "Digital Marketing"
  const para= "Boost your brand's online presence with expert digital marketing strategies tailored to drive growth and engagement. From SEO to social media management, get comprehensive solutions that maximize your reach and results."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Search Engine Optimisation",
      description: "We conduct thorough keyword research, optimize your website’s content and structure, and implement on-page and off-page strategies to improve your rankings. Our goal is to drive organic traffic and enhance your online presence."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Pay Per Click",
      description: "We create and manage effective ad strategies across platforms like Google Ads and social media, ensuring your ads reach the right audience at the right time. Our data-driven approach allows us to optimize campaigns for better performance and cost efficiency."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Content Marketing",
      description: "Our content marketing services focus on creating valuable, relevant content that attracts and retains customers. From blog posts and articles to infographics and videos, we help you establish authority in your industry and drive meaningful engagement."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Social Media Marketing",
      description: "We develop tailored content that resonates with your target demographic across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our approach combines organic growth tactics with paid advertising to enhance your brand’s visibility and engagement."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "E-mail Marketing",
      description: "We design engaging newsletters and automated workflows that nurture leads and keep your brand top-of-mind. Our data analysis ensures your emails reach the right people with the right message, driving conversions and loyalty."
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

export default DigitalMarketing;