import { Helmet } from "react-helmet-async";
import "./qualification.css";

const Qualifications = () => {
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
          content="Ajmal U, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, JavaScript , ajmaldevala ,devala"
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
        {/* <span className="section__subtitle">My personal journey</span> */}

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button button--flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>
          </div>

          <div className="qualification__section">
            <div className="qualification__content">
              {/* MERN Stack Development */}
              <div className="qualification__data">
                <div className="qualification__align-right">
                  <h3 className="qualification__title">
                    Full Stack Development
                  </h3>
                  <span className="qualification__subtitle">Brototype</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> August 2022 - June
                    2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* MSc (Computer Science) */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    MSc (Computer Science)
                  </h3>
                  <span className="qualification__subtitle">
                    Bharathiar University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                  </div>
                </div>
              </div>

              {/* BSc (Computer Science) */}
              <div className="qualification__data">
                <div className="qualification__align-right">
                  <h3 className="qualification__title">
                    BSc (Computer Science)
                  </h3>
                  <span className="qualification__subtitle">
                    Bharathiar University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2020
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
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
