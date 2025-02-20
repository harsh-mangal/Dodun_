import { useState, useEffect } from "react";
import { ArrowUp, Linkedin, Github, Twitter } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
        {/* Social Media Links */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white p-2 rounded-full shadow-lg hover:bg-sky-600 transition"
        >
          <Twitter size={20} />
        </a>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          style={{ zIndex: 9999 }}
        >
          <ArrowUp />
        </button>
      </div>
    )
  );
};

export default BackToTop;
