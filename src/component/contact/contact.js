import React from "react";
import "./contact.css";
function contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact me</h2>
          </div>
        </div>
        <h3 className="contact-title">Have you any Questions?</h3>
        <h4 className="contact-sub-title">I'M AT YOUR SERVICE</h4>
        <div className="row">
          {/* <!-- contact info item start --> */}
          <div className="contact-info-item">
            <div className="icon">
              <i className="fa fa-envelope padd-15"></i>
              <h4>Contact Me On</h4>
              <p>ruchitaoza9@gmail.com</p>
            </div>
          </div>
          {/* <!-- contact info item ends --> */}
          {/* <!-- contact info item start --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-globe-europe padd-15"></i>
              <h4>website</h4>
              <p>Www.ruchitaoza.com</p>
            </div>
          </div>
          {/* <!-- contact info item ends --> */}
          {/* <!-- contact info item start --> */}
          <div className="contact-info-item padd-15">
            <a href="https://github.com/ruchita-oza">
              <div className="icon">
                <i className="fa-brands fa-github padd-15"></i>
                <h4>Github</h4>
                <p>https://github.com/ruchita-oza</p>
              </div>
            </a>
          </div>
          {/* <!-- contact info item ends --> */}
          {/* <!-- contact info item start --> */}
          <div className="contact-info-item padd-15">
            <a href="https://www.linkedin.com/in/ruchita-oza-5863181b6/">
              <div className="icon">
                <i className="fa-brands fa-linkedin padd-15"></i>
                <h4>Linkedin</h4>
                <p>https://www.linkedin.com/in/ruchita-oza-5863181b6/</p>
              </div>
            </a>
          </div>
          {/* <!-- contact info item ends --> */}
        </div>
        <h3 className="contact-title">Send Me A Email</h3>
        <h4 className="contact-sub-title">I'M VERY RESPONSIVE TO MAILS</h4>
        {/* <!-- contact form start--> */}
        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button className="btn" type="submit">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact form ends --> */}
      </div>
    </section>
  );
}

export default contact;
