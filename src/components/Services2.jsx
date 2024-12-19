import React from "react";
import Popz from "../assets/popz.png";
import code from "../assets/code.jpg";
import app from "../assets/app.png";
import web from "../assets/web.png";

const Services2 = () => {
  return (
    <>
  <div
        style={{
          position: "absolute",
          top: 1980,
          left: 130,

          opacity: 0.66,
          color: "white",
          fontSize: 40,
          fontFamily: "Unbounded",
          fontWeight: "400",
          letterSpacing: 4.5,
          wordWrap: "break-word",
        }}
      >
        Web Development
      </div>
      <div
        style={{
          position: "absolute",
          top: 2050,
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
        <br />
        Designer I work remotely I’m Prasanna, a developer skilled in creating{" "}
        web <br />
        and mobile applications using React and Flutter, with expertise in
        languages <br />
        like C, Python, JavaScript, and more. As a designer, I excel in UI/UX,
        branding, <br /> and graphic design using Figma and Adobe tools. Let’s
        create something exceptional!
      </div>
      <div
        style={{
          position: "absolute",
          top: 2180,
          left: 130,
          width: "100%",
          height: "100%",
          opacity: 0.46,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 36,
            fontfamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          30 +
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Lufga",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Project Completed
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2180,
          left: 530,
          width: "100%",
          height: "100%",
          opacity: 0.46,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 36,
            fontfamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          3 +
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Lufga",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Years Expirence
        </div>

      </div>
      <img
        style={{
          top: 1930,
          right: 130,

          position: "absolute",
          height: 358,
          width: 266,
        }}
        src={web}
        alt="web"
      />
    
       




      
    </>
  );
};
export default Services2;
