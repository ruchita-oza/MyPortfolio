import React from "react";
//project image
import "./project.css";
import project_1 from "../../image/project-1.jpg";
import project_2 from "../../image/project-1.jpg";
import project_3 from "../../image/project-1.jpg";
import project_4 from "../../image/project-1.jpg";

function project() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Prjects</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Project :</h2>
          </div>
        </div>
        {/* <!-- project item --> */}
        <div className="row">
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a href="https://github.com/Hetvee17/Pet_Finder.git">
                  <img src={project_1} alt="img" />
                </a>
              </div>
            </div>
          </div>
          {/* </div><!-- project item --> */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a href="https://github.com/ruchita-oza/Online_pizza_ordering_system.git">
                  <img src={project_2} alt="img" />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project item --> */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a href="https://github.com/ruchita-oza/Gender-And-Age-Detaction.git">
                  <img src={project_3} alt="img" />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project item --> */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a href="https://github.com/miyatrayash/connectus.git">
                  <img src={project_4} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default project;
