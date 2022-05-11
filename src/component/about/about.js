import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function about() {
  return (
    <div>
      {" "}
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text">
                  <h3>
                    I'm Ruchita oza and <span>Web developer</span>
                  </h3>
                  <p>
                    Software engineer with excellent problem-solving skills and
                    ability to perform well in a team. Passionate about coding
                    and enjoy to learning new skills
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthdate : <span>17 oct 2001</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age : <span>20</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>ruchita@atliq.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>CS ('23)</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Amreli , Gujarat</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        FreeLnace : <span>Available , Gujarat</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons">
                      <a href="#content" className="btn hire-me">
                        Hire me
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1bqhFjtnnoLymDaCj4jv_jR9hhRUN52kh/view?usp=sharing"
                        download="Ruchita_Oza.pdf"
                        className="btn hire-me"
                      >
                        Get Resume
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Problem-solving</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "76%" }}
                        ></div>
                        <div className="skill-percent">76%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MERN</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "82%" }}
                        ></div>
                        <div className="skill-percent">82%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>SQL</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "70%" }}
                        ></div>
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Python- Django</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "62%" }}
                        ></div>
                        <div className="skill-percent">62%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>DSA</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "76%" }}
                        ></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>ASP.NET</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "89%" }}
                        ></div>
                        <div className="skill-percent">89%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <FontAwesomeIcon
                              className="fa"
                              icon={faCalendar}
                            ></FontAwesomeIcon>
                            2019-Present
                          </h3>
                          <h4 className="timeline-title">
                            B.E. in computer science
                          </h4>
                          <p className="timeline-text">
                            Dharamsinh desai university - Nadiad, India with CPI
                            8.33
                          </p>
                        </div>
                        {/* <!-- timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <FontAwesomeIcon
                              className="fa"
                              icon={faCalendar}
                            ></FontAwesomeIcon>{" "}
                            2017-2019
                          </h3>
                          <h4 className="timeline-title">12th Board</h4>
                          <p className="timeline-text">
                            Oxford school , Amreli india with 89% in GSEB , JEE
                            score - 98.39 pr
                          </p>
                        </div>
                        {/* <!-- timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <FontAwesomeIcon
                              className="fa"
                              icon={faCalendar}
                            ></FontAwesomeIcon>{" "}
                            2015-2017
                          </h3>
                          <h4 className="timeline-title">10th Board</h4>
                          <p className="timeline-text">
                            Sankul , Amreli india with 92% in GSEB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <FontAwesomeIcon
                              className="fa"
                              icon={faCalendar}
                            ></FontAwesomeIcon>{" "}
                            2022-Present
                          </h3>
                          <h4 className="timeline-title">
                            Summer Intern AT ATLIQ vadodara , India.
                          </h4>
                          <p className="timeline-text">
                            AtliQ was established in 2017 as an IT services
                            company with the aim to help businesses integrate
                            their processes with automated tools. As a first
                            industry experience , I personally found This team
                            sorry this family better.
                          </p>
                        </div>
                        {/* <!-- timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <FontAwesomeIcon
                              className="fa"
                              icon={faCalendar}
                            ></FontAwesomeIcon>{" "}
                            10/2020 - Present
                          </h3>
                          <h4 className="timeline-title">
                            Graphic Designer At Samvaad DDU Club
                          </h4>
                          <p className="timeline-text">
                            Samvaad is a basically communication club in our
                            collage. I'm Head of graphic designers in this club.
                            This club helped me a lot to work on my
                            communication in a team which really helped me to
                            improve my teamwork skill.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
