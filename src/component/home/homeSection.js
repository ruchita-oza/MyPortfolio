import React from "react";
// images
import profile from "../../image/profile.jpg";
import "./homeSection.css";
function homeSection() {
  return (
    <section class="home section" id="home">
      <div class="container">
        <div class="row">
          <div class="home-info">
            <h3 class="hello">
              Hello , my name is <span class="name">Ruchita Oza</span>
            </h3>
            <h3 class="my-profession">
              I' m a <span class="typing"> web developer</span>
            </h3>
            <p>
              {" "}
              I'm a Web Developer, a competitive programmer , a Graphic designer
              and a student!!{" "}
            </p>
            <div className="button">
              <a href="#content" class="btn hire-me">
                Hire me
              </a>
              <a
                href="https://drive.google.com/file/d/1bqhFjtnnoLymDaCj4jv_jR9hhRUN52kh/view?usp=sharing"
                download="Ruchita_Oza.pdf"
                class="btn hire-me"
              >
                Get Resume
              </a>
            </div>
          </div>
          <div class="home-img padd-15">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default homeSection;
