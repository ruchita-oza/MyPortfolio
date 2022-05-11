import React from "react";
import "./aside.css";
function aside() {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#home">
          <span>A</span>tlas
        </a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <a href="#home" className="active">
            <i className="fa fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fa fa-user"></i> About
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i className="fa fa-briefcase"></i> Project
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa fa-comments"></i> Contact me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default aside;
