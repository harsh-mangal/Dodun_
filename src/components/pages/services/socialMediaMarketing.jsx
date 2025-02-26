import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const socialMediaMarketing = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/11602339.jpg?updatedAt=1740031925785"
  const pageName= "SOCIAL MEDIA MARKETING"
  const para= "We offer expert social media marketing services to boost your brand's online presence and engagement. Our tailored strategies maximize reach, drive traffic, and grow your audience across all platforms."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Social Media Management",
      description: "Manages and schedules posts across platforms like Facebook, Instagram, and Twitter. Ensures consistent engagement with your audience and brand visibility. Analyzes performance metrics to optimize content strategy."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "Paid Social Advertising",
      description: "Creates targeted ads on platforms like Facebook, Instagram, and LinkedIn. Focuses on reaching specific demographics and interests to boost visibility. Drives traffic, leads, and conversions through tailored campaigns."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Content Creation for Social Media",
      description: "Develops visually appealing and engaging content like images, videos, and captions. Tailors content for each platform to increase audience engagement. Enhances brand storytelling and boosts audience interaction."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Influencer Marketing",
      description: "Partners with influencers to promote your products or services. Leverages their audience to build trust and reach a wider market. Increases brand awareness and credibility through authentic endorsements."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Community Management",
      description: "Monitors and engages with your social media audience in real-time. Responds to comments, messages, and inquiries to maintain strong customer relationships. Fosters a sense of community around your brand, enhancing loyalty."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Social Media Analytics & Reporting",
      description: "Tracks performance of social media campaigns through detailed analytics. Provides insights into audience behavior, engagement, and ROI. Uses data to adjust strategies and improve future campaigns."
    }
  ];
  return (
    <>
    <Navbar_second />
    <BackToTop />
    <Front url={link} text={pageName} paragraph={para} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Social Media
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
    {/* <Client /> */}
    <Footer />
    </>
  )
}

export default socialMediaMarketing