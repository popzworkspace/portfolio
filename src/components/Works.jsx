import React from "react";
import Popz from "../assets/popz.png";
import code from "../assets/code.jpg";
import app from "../assets/app.png";
import web from "../assets/web.png";
import ui from "../assets/ui.png";
import click from "../assets/click.png";
import ecom from "../assets/ecom.png";

const Works = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 2860,
          left: 130,

          opacity: 0.66,
          color: "white",
          fontSize: 65,
          fontFamily: "Unbounded",
          fontWeight: "400",
          letterSpacing: 4.5,
          wordWrap: "break-word",
        }}
      >
        Works
      </div>
      <div
        style={{
          position: "absolute",
          top: 2980,
          left: 130,
          color: "white",
          fontSize: 15,
          fontFamily: "Lufga",
          fontWeight: "300",
          letterSpacing: 0.85,
          textAlign: "left",
          lineHeight: "1.5",
          wordWrap: "break-word",
        }}
      >
        I’m A Full-Stack Developer with multiple project experience and also a
        Designer I work remotely I’m Prasanna, a developer <br />
        skilled in creating web and mobile applications using React and Flutter,
        with expertise in languages like C, Python, JavaScript,
        <br /> and more. As a designer, I excel in UI/UX, branding, and graphic
        design using Figma and Adobe tools. Let’s create something
        <br />
        exceptional!
      </div>
      <img
        style={{
          top: 3150,
          left: 100,

          position: "absolute",
          height: 437,
          width: 517,
        }}
        src={click}
        alt="click"
      />
      <img
        style={{
          top: 3150,
          right: 100,

          position: "absolute",
          height: 437,
          width: 517,
        }}
        src={ecom}
        alt="ecom"
      />
      <div
        style={{
            position: "absolute",
            top: 3350,
            left: 110,
          width: "100%",
          color: "white",
          fontSize: 20,
          fontFamily: "Lufga",
          fontWeight: "500",
          lineHeight: 28,
          wordWrap: "break-word",
        }}
      >
        Click
      </div>
      <div
        style={{
            position: "absolute",
            top: 3380,
            left: 110,
          width: "100%",
          color: "white",
          fontSize: 20,
          fontFamily: "Lufga",
          fontWeight: "500",
          lineHeight: 28,
          wordWrap: "break-word",
        }}
      >
        Mobile App
      </div>
      <div
        style={{
            position: "absolute",
            top: 3350,
            left: 660,
          
          width: "100%",
          color: "white",
          fontSize: 20,
          fontFamily: "Lufga",
          fontWeight: "500",
          lineHeight: 28,
          wordWrap: "break-word",
        }}
      >
        E-Com
      </div>
      <div
        style={{
            position: "absolute",
            top: 3380,
            left: 660,

            
          width: "100%",
          color: "white",
          fontSize: 20,
          fontFamily: "Lufga",
          fontWeight: "500",
          lineHeight: 28,
          wordWrap: "break-word",
        }}
      >
        Website
      </div>
    </>
  );
};
export default Works;
