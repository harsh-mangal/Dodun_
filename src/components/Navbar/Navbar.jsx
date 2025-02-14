import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Digital Marketing",
    subMenu: [
      { title: "SEO", link: "/Seo" },
      { title: "Pay Per Click", link: "/Ppc" },
      { title: "Content Marketing", link: "/ContentMarketing" },
      { title: "Social Media Marketing", link: "/SocialMediaMarketing" },
      { title: "Email Marketing", link: "/EmailMarketing" },
    ],
  },
  {
    title: "Designing",
    subMenu: [
      { title: "Web Designing", link: "/WebDesigning" },
      { title: "UI/UX Designing", link: "/UiUxDesigning" },
      { title: "Graphic Designing", link: "/GraphicDesigning" },
      { title: "Logo Designing", link: "/LogoDesigning" },
      { title: "Video Editing", link: "/VideoEditing" },
    ],
  },
  {
    title: "Development",
    subMenu: [
      { title: "iOS App Development", link: "/IosAppDevelopment" },
      { title: "Android App Development", link: "/AndroidAppDevelopment" },
      { title: "Web Development", link: "/WebDevelopment" },
      { title: "Windows Development", link: "/WindowsDevelopment" },
    ],
  },
  { title: "Hosting", link: "/Hosting" },
  { title: "Animated Videos", link: "/AnimatedVideos" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [is_Open, setIs_Open] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggle_Dropdown = () => {
    setIs_Open(!is_Open);
  };

  // useEffect(() => {
  //       AOS.init({
  //         duration: 1000, // Animation duration in milliseconds
  //         once: true, // Whether animation should happen only once
  //       });
  //     }, []);

  return (
    <nav className="relative manrope w-full z-50 bg-white border-b border-gray-300 ">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/jncw2kb8u/image.png?updatedAt=1738665004511"
            alt="Logo"
            className="h-20 w-50"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-black hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-blue-500">
            About Us
          </Link>
          <div className="relative inline-block text-left hover:cursor-pointer">
            <button
              className=" text-black rounded-lg flex items-center gap-2 hover:text-blue-500"
              onClick={toggleDropdown}
            >
              Services <ChevronDown size={16} />
            </button>
            {isOpen && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-56">
                {services.map((service, index) => (
                  <div key={index} className="relative">
                    {service.subMenu ? (
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        {service.title} <ChevronRight size={14} />
                        {openDropdown === index && (
                          <div className="absolute left-full top-0 mt-0 w-56 bg-white border rounded-lg shadow-lg">
                            {service.subMenu.map((sub, subIndex) => (
                              <Link
                                key={subIndex}
                                to={sub.link}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={service.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" className="text-black hover:text-blue-500">
            Blog
          </Link>
          <Link to="/contact" className="text-black hover:text-blue-500">
            Contact Us
          </Link>
        </div>
        <div className="hidden md:block bg-gradient-to-r from-sky-200 to-blue-500 hover:scale-110 transition duration-300 shadow-lg hover:shadow-3xl">
          <button
            type="tel"
            className="bg-white m-1  p-10  text-black text-lg px-4 py-2  "
          >
            +91-8968881110
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-200 p-4 space-y-2 shadow-lg">
          <Link to="/" className="block text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block text-gray-800 hover:text-blue-500">
            About Us
          </Link>
          <div className="relative inline-block text-left hover:cursor-pointer">
            <button
              className="text-black rounded-lg flex items-center gap-2 hover:text-blue-500 focus:outline-none"
              onClick={toggle_Dropdown}
            >
              Services <ChevronDown size={16} />
            </button>
            {is_Open && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-40 z-50">
                {services.map((service, index) => (
                  <div key={index} className="relative">
                    {service.subMenu ? (
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        {service.title} <ChevronRight size={14} />
                        {openDropdown === index && (
                          <div className="absolute left-full top-0 mt-0 w-40 bg-white border rounded-lg shadow-lg z-50">
                            {service.subMenu.map((sub, subIndex) => (
                              <Link
                                key={subIndex}
                                to={sub.link}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={service.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="block text-gray-800 hover:text-blue-500">
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-gray-800 hover:text-blue-500"
          >
            Contact Us
          </Link>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
            +91-8968881110
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
