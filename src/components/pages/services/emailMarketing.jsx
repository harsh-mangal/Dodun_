import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const emailMarketing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/hand-pressing-envelope-that-is-sent-world.jpg?updatedAt=1740032298909"
  const pageName= "EMAIL MARKETING"
  const para= "We offer targeted email marketing services to help businesses boost engagement and drive conversions. Reach your audience effectively with personalized campaigns and data-driven strategies."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Email Campaign Management",
      description: "Designs, schedules, and sends email campaigns to segmented lists. Ensures personalized content and timing for maximum engagement. Tracks performance metrics like open rates and click-through rates."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Automated Email Sequences",
      description: "Creates drip campaigns that automatically send emails based on user actions. Nurtures leads with targeted content at each stage of the buyer's journey. Saves time while maintaining consistent communication with subscribers."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Newsletter Creation",
      description: "Develops visually appealing and informative email newsletters. Keeps your audience updated with industry news, promotions, and company updates. Encourages repeat engagement and builds long-term customer relationships."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "List Segmentation & Management",
      description: "Organizes email lists based on demographics, behavior, and engagement. Targets specific segments with relevant content for higher open rates. Helps personalize campaigns for improved engagement and conversions."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "A/B Testing",
      description: "Tests different email subject lines, content, and designs to optimize performance. Helps determine what resonates best with your audience. Increases email effectiveness through data-driven adjustments."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Email Design & Template Creation",
      description: "Crafts professional, mobile-friendly email templates. Ensures consistent branding and enhances the user experience. Maximizes engagement with visually appealing, easy-to-read emails."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Email
      Marketing Services</h1>
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

export default emailMarketing