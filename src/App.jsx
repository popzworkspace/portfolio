import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Services2 from "./components/Services2";
import Services3 from "./components/Services3";
import Works from "./components/Works";

function App() {
  return (
    <>
      <HeroSection />
      <AboutMe/>
      <Services/>
      <Services2/>
      <Services3/>
      <Works/>
    </>
  );
}

export default App;
