import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./qualification.css";
const Qualifications = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <>
      <Helmet>
        <title>Ajmal U - Full Stack Developer | MERN Stack</title>
        <meta
          name="description"
          content="Ajmal U, a full-stack developer specializing in building scalable web applications and responsive interfaces using the MERN stack."
        />
        <meta
          name="keywords"
          content="Ajmal U, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, JavaScript, ajmaldevala, devala"
        />
        <meta
          property="og:title"
          content="Ajmal U - Full Stack Developer | MERN Stack"
        />
        <meta
          property="og:description"
          content="Portfolio of Ajmal U, showcasing skills in full-stack development with the MERN stack."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>

        <div className="qualification__container">
          {/* Tabs */}
          <div className="qualification__tabs">
            <div
              className={`qualification__button ${
                activeTab === "experience" ? "qualification__active" : ""
              }`}
              onClick={() => setActiveTab("experience")}
            >
              <i className="uil uil-briefcase qualification__icon"></i>
              Experience
            </div>

            <div
              className={`qualification__button ${
                activeTab === "education" ? "qualification__active" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
          </div>

          {/* Experience Content */}
          <div
            className={`qualification__content ${
              activeTab === "experience" ? "qualification__content-active" : ""
            }`}
          >
            {/* Ampcome Technologies */}
            <div className="qualification__data">
              <div className="qualification__align-right">
                <h3 className="qualification__title">Software Engineer</h3>

                <a
                  href="https://www.ampcome.com/"
                  className="qualification__subtitle"
                >
                  Ampcome Technologies Pvt. Ltd.
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>

            {/* Brototype */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__info">
                <h3 className="qualification__title">Full Stack Development</h3>
                <a
                  href="https://www.brototype.com/"
                  className="qualification__subtitle"
                >
                  Brototype
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> August 2022 - June
                  2023
                </div>
              </div>
            </div>
          </div>

          {/* Education Content */}
          <div
            className={`qualification__content ${
              activeTab === "education" ? "qualification__content-active" : ""
            }`}
          >
            {/* MSc */}
            <div className="qualification__data">
              <div className="qualification__align-right">
                <h3 className="qualification__title">MSc (Computer Science)</h3>
                <a
                  href="https://b-u.ac.in/"
                  className="qualification__subtitle"
                >
                  Bharathiar University
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>

            {/* BSc */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__info">
                <h3 className="qualification__title">BSc (Computer Science)</h3>
                <a
                  href="https://b-u.ac.in/"
                  className="qualification__subtitle"
                >
                  Bharathiar University
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualifications;
