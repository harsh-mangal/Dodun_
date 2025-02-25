import React from 'react'
import Navbar_second from '../../Navbar/Navbar_second'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'
import BackToTop from '../BacktoTop'

const seo = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/2150063136.jpg?updatedAt=1740038399331"
  const pageName= "Search Engine Optimization"
  const para= "Our tailored strategies enhance search rankings, ensuring your business reaches the right audience effectively."

  const services = [
    {
      img: "fa-solid fa-magnifying-glass text-[#1D4ED8] text-2xl",
      title: "Keyword Research",
      description: "Identifying high-traffic, relevant keywords for your niche. Helps optimize content for search engines and target audience. Ensures competitive advantage with well-researched terms."
    },
    {
      img: "fa-brands fa-dropbox text-[#1D4ED8] text-2xl",
      title: "On-Page Optimization",
      description: "Enhances website elements like meta tags, headers, and images. Improves site structure, internal linking, and keyword placement. Boosts search engine rankings and overall user experience."
    },
    {
      img: "fa-solid fa-feather text-[#1D4ED8] text-2xl",
      title: "Technical SEO",
      description: "Focuses on improving website performance and crawlability. Optimizes page speed, mobile-friendliness, and sitemap configuration. Ensures search engines can efficiently index your site."
    },
    {
      img: "fa-solid fa-hand-holding-heart text-[#1D4ED8] text-2xl",
      title: "Content Creation & Optimization",
      description: "Develops high-quality, SEO-friendly content for your website. Incorporates relevant keywords and addresses user intent. Strengthens authority, engagement, and search visibility."
    },
    {
      img: "fa-solid fa-virus text-[#1D4ED8] text-2xl",
      title: "Link Building",
      description: "Acquires quality backlinks from reputable websites. Enhances site authority and improves search engine ranking. Builds trust and drives referral traffic to your site."
    },
    {
      img: "fa-solid fa-server text-[#1D4ED8] text-2xl",
      title: "Local SEO",
      description: "Optimizes your site for local search queries and Google My Business. Focuses on location-based keywords and online reviews. Helps your business appear in local map results and directories."
    }
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

export default seo