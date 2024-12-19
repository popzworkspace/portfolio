import React from "react";
import Popz from "@/assets/popz.png";
import code from "@/assets/code.jpg"
import { CgCode } from "react-icons/cg";
import app from "@/assets/app.png"
import web from "@/assets/web.png"
import ui from "@/assets/ui.png"
import click from "@/assets/click.png"
import ecom from "@/assets/ecom.png"
import orion from "@/assets/orion.png"
import design from "@/assets/design.png"





const MyComponent = () => {
  return (<>
    <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={Popz} // Use the imported image
      alt="Popz"
    />
    <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={app} // Use the imported image
      alt="app"
    />
    <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={web} // Use the imported image
      alt="web"
    />
      <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={ui} // Use the imported image
      alt="ui"
    />
       <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={click} // Use the imported image
      alt="click"
    />
      <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={ecom} // Use the imported image
      alt="ecom"
    />
      <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={orion} // Use the imported image
      alt="orion"
    />
      <img
      style={{ width: "100%", height: "100%", borderRadius: 9999 }}
      src={design} // Use the imported image
      alt="design"
    />
    <img
    style={{ width: "100%", height: "100%", borderRadius: 9999 }}
    src={CgCode} // Use the imported image
    alt="Code"
  /></>
  );
};

export default MyComponent;
