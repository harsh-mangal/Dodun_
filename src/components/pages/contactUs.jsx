import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const contactUs = () => {

  const contactDetails = [
    {
      icon: <MapPin className="text-sky-300" />, 
      title: "Address",
      info: "GM Plaza, Phase -7 Industrial Area, Sector-73, Mohali, India",
      animation: "fade-up",
    },
    {
      icon: <Phone className="text-sky-300" />, 
      title: "Call Us",
      info: "+91-8968881110",
      animation: "fade-down",
    },
    {
      icon: <Mail className="text-sky-300" />, 
      title: "Email Us",
      info: "dodunsoftsolutions@gmail.com",
      animation: "fade-up",
    },
    {
      icon: <Clock className="text-sky-300" />, 
      title: "Business Hours",
      info: (
        <>
          <p className="text-gray-700">Monday-Friday: 9:00 AM – 6:00 PM</p>
          <p className="text-gray-700">Saturday: 10:00 AM – 4:00 PM</p>
          <p className="text-gray-700">Sunday: Closed</p>
        </>
      ),
      animation: "fade-down",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 mt-10 md:mx-20 md:grid-cols-2 lg:grid-cols-4 bg-white py-10 px-6 gap-6">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          data-aos={item.animation}
          className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center space-x-4 p-6"
        >
          {item.icon}
          <div>
            <h4 className="text-lg font-semibold text-center md:text-left">{item.title}</h4>
            <p className="text-gray-700 text-center md:text-left">{item.info}</p>
          </div>
        </div>
      ))}
    </div>

      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div
          data-aos="fade-right"
          className="w-full max-w-4xl bg-slate-300 shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-700 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
            <div data-aos="fade-left" className="space-y-6">
              <div className="flex items-center space-x-4 p-5">
                <MapPin className="text-sky-300" />
                <span className="text-gray-700">
                  GM Plaza, Phase -7 Industrial Area, Sector-73, Mohali, India
                </span>
              </div>
              <div className="flex items-center space-x-4 p-5">
                <Phone className="text-sky-300" />
                <span className="text-gray-700">+91-8968881110</span>
              </div>
              <div className="flex items-center space-x-4 p-5">
                <Mail className="text-sky-300" />
                <span className="text-gray-700">
                  dodunsoftsolutions@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contactUs;
