import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'


const seo = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/2112.w039.n003.47B.p1.47.jpg?updatedAt=1739452447754"
  const pageName= "SEO"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Keyword Research",
      description: "Identifying high-traffic, relevant keywords for your niche. Helps optimize content for search engines and target audience. Ensures competitive advantage with well-researched terms."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "On-Page Optimization",
      description: "Enhances website elements like meta tags, headers, and images. Improves site structure, internal linking, and keyword placement. Boosts search engine rankings and overall user experience."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Technical SEO",
      description: "Focuses on improving website performance and crawlability. Optimizes page speed, mobile-friendliness, and sitemap configuration. Ensures search engines can efficiently index your site."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Content Creation & Optimization",
      description: "Develops high-quality, SEO-friendly content for your website. Incorporates relevant keywords and addresses user intent. Strengthens authority, engagement, and search visibility."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "Link Building",
      description: "Acquires quality backlinks from reputable websites. Enhances site authority and improves search engine ranking. Builds trust and drives referral traffic to your site."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Local SEO",
      description: "Optimizes your site for local search queries and Google My Business. Focuses on location-based keywords and online reviews. Helps your business appear in local map results and directories."
    }
  ];

  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of SEO Services</h1>
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

export default seo