import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faComments,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./aside.css";
function aside() {
  // fontawesome.library.add(faHouse, faUser, faBriefcase);
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
            <FontAwesomeIcon className="fa " icon={faHouse}></FontAwesomeIcon>{" "}
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            <FontAwesomeIcon className="fa " icon={faUser}></FontAwesomeIcon>{"  "}
            About
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <FontAwesomeIcon
              className="fa"
              icon={faBriefcase}
            ></FontAwesomeIcon>
            Project
          </a>
        </li>
        <li>
          <a href="#contact">
            <FontAwesomeIcon className="fa" icon={faComments}></FontAwesomeIcon>
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default aside;
