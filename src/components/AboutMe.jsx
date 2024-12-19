import React from "react";
import Popz from "../assets/popz.png";
import code from "../assets/code.jpg";

const AboutMe = () => {
  return (
    <>
      <img
        style={{
          position: "absolute",
          top: 700,
          left: 50,
          width: 430,
          height: 430,
          borderRadius: 9999,
        }}
        src={code}
        alt="Popz"
      />
      <div
        style={{
          position: "absolute",
          top: 700,
          left: 50,
          width: 430,
          height: 430,
          opacity: 0.66,
          background: "linear-gradient(161deg, #100C1C 0%, #2D2250 99%)",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 700,
          left: 510,
          opacity: 0.66,
          color: "white",
          fontSize: 80,
          fontFamily: "Unbounded",
          fontWeight: "400",
          letterSpacing: 4.5,
          wordWrap: "break-word",
        }}
      >
        About me
      </div>
      <div
        style={{
          position: "absolute",
          top: 850,
          left: 510,
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
          top: 1030,
          left: 515,
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
          top: 1030,
          left: 850,
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
    </>
  );
};
export default AboutMe;
