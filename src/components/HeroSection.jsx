import React from "react";
import "./HeroSection.css";
import Popz from "../assets/popz.png";
import { Link } from "react-router-dom"; // Import for navigation links
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "65px",
          color: "white",
          fontSize: "60px",
          fontFamily: "Signature",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        PZ
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
  <li>
    <a href="#home">Home</a>
  </li>
  <li>
    <a href="#about">About</a>
  </li>
  <li>
    <a href="#services">Services</a>
  </li>
  <li>
    <a href="#work">Works</a>
  </li>
  <li>
    <a href="#contact" className="contact-button">Contact</a>
  </li>
</ul>


      {/* Hero Content */}
      <div className="hero-content">
        <div className="text-content">
          <div
            style={{
              position: "absolute",
              top: 150,
              left: 100,
              color: "white",
              fontSize: 30,
              fontFamily: "Lufga",
              fontWeight: "300",
              letterSpacing: 1.5,
              wordWrap: "break-word",
            }}
          >
            FULL-STACK DEVELOPER
          </div>
          <div
            style={{
              position: "absolute",
              top: 190,
              left: 100,
              opacity: 0.66,
              color: "white",
              fontSize: 90,
              fontFamily: "Unbounded",
              fontWeight: "400",
              letterSpacing: 4.5,
              wordWrap: "break-word",
            }}
          >
            Prasanna
          </div>
          <div
            style={{
              position: "absolute",
              top: 285,
              left: 100,
              opacity: 0.66,
              color: "white",
              fontSize: 90,
              fontFamily: "Unbounded",
              fontWeight: "400",
              letterSpacing: 4.5,
              wordWrap: "break-word",
            }}
          >
            Popz
          </div>
          <div
            style={{
              position: "absolute",
              top: 430,
              left: 100,
              color: "white",
              fontSize: 17,
              fontFamily: "Lufga",
              fontWeight: "300",
              letterSpacing: 0.85,
              textAlign: "left",
              lineHeight: "1.5",
              wordWrap: "break-word",
            }}
          >
            I’m A Full-Stack Developer with multiple project <br />
            experience and also a Designer I work remotely <br />
            from India
          </div>
          <div
            style={{
              position: "absolute",
              top: 540,
              left: 100,
              display: "flex",
              gap: "51px",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Adam",
                fontWeight: "300",
                letterSpacing: 3.68,
                whiteSpace: "nowrap",
              }}
            >
              DEVELOPER
            </div>
            <div
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Adam",
                fontWeight: "300",
                letterSpacing: 3.68,
                whiteSpace: "nowrap",
              }}
            >
              DESIGNER
            </div>
            <div
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Adam",
                fontWeight: "300",
                letterSpacing: 3.68,
                whiteSpace: "nowrap",
              }}
            >
              CREATOR
            </div>
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: 100,
            right: 50,
            width: 430,
            height: 430,
            borderRadius: 9999,
          }}
          src={Popz}
          alt="Popz"
        />
      </div>

      {/* Social Media Icons */}
      <div
        style={{
          position: "absolute",
          top: 550,
          right: 60,
          transform: "translateX(-50%)",
          display: "flex",

          gap: "20px",
        }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            style={{ fontSize: "32px", color: "white", opacity: 0.8 }}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter
            style={{ fontSize: "32px", color: "white", opacity: 0.8 }}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            style={{ fontSize: "32px", color: "white", opacity: 0.8 }}
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            style={{ fontSize: "32px", color: "white", opacity: 0.8 }}
          />
        </a>

      </div>
      
      
    </div>
  );
};

export default HeroSection;
