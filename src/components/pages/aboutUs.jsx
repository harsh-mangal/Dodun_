import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Client from "./home/client";
import Cards from "./aboutus/cards";
import Who from "./aboutus/who";

const aboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <Cards />
      <Who />
      <Client />
      <Footer />
    </>
  );
};

export default aboutUs;
