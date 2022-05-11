import "./home.css";
import React from "react";
import "../colors/color-1.css";
//component
import Aside from "../Aside/aside";
import About from "../about/about";
import Project from "../Project/project";
import HomeSection from "./homeSection";
import Contact from "../contact/contact";
function home() {
  return (
      <div className="main-container">
        <Aside/>
        <HomeSection />
        <About />
        <Project />
        <Contact />
      </div>
  );
}

export default home;
