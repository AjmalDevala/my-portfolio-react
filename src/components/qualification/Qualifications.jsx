import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./qualification.css";
const Qualifications = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const canonicalUrl = "https://ajmaldevala.netlify.app/"; // Replace with your actual portfolio URL
  const socialImageUrl =
    "https://ajmaldevala.netlify.app/assets/AboutImg-14b68c43.jpg"; // Replace with your social sharing image
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Ajmal U - Full Stack Developer | MERN Stack Expert</title>
        <meta
          name="description"
          content="Ajmal U: A passionate full-stack developer crafting scalable web applications with expertise in React, Node.js, Express, and MongoDB. Transforming ideas into innovative digital solutions."
        />

        {/* Extended Keywords */}
        <meta
          name="keywords"
          content="Ajmal U, Full Stack Developer, MERN Stack Developer, Web Application Developer, React Developer, Node.js Engineer, MongoDB Expert, JavaScript Specialist, Front-end Developer, Back-end Developer, Web Development, Software Engineer, ajmaldevala, devala, responsive web design, scalable web applications"
        />

        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ajmal U - Full Stack Developer | MERN Stack Expert"
        />
        <meta
          property="og:description"
          content="Portfolio of Ajmal U: Innovative full-stack developer specializing in building robust and scalable web applications using cutting-edge technologies."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImageUrl} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ajmal U - Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Discover the portfolio of Ajmal U, a skilled full-stack developer creating innovative web solutions."
        />
        <meta name="twitter:image" content={socialImageUrl} />

        {/* Additional SEO Enhancements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ajmal U" />
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
