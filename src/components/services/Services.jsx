import { useState } from "react";
import Modal from "./Modal";
import "./services.css";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");

  const show = (title) => {
    setTitle(title);
    setShowModal(true);
  };

  const close = () => {
    setShowModal(false);
  };

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
      <div className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-icons services__icon"></i>
              <h3 className="services__title">
                UI/UX <br /> Designing
              </h3>
              <span
                className="services__button"
                onClick={() => show("UI/UX Designing")}
              >
                View More
                <i className="uil uil-angle-double-right services__button-icon "></i>
              </span>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-react services__icon"></i>
              <h3 className="services__title">
                Frontend <br /> Development
              </h3>
              <span
                className="services__button"
                onClick={() => show("Frontend Development")}
              >
                View More
                <i className="uil uil-angle-double-right services__button-icon "></i>
              </span>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-brackets-curly services__icon"></i>
              <h3 className="services__title">
                Backend <br /> Development
              </h3>
              <span
                className="services__button"
                onClick={() => show("Backend Development")}
              >
                View More
                <i className="uil uil-angle-double-right services__button-icon "></i>
              </span>
            </div>
          </div>

          <Modal show={showModal} close={close} title={title} />
        </div>
      </div>
    </>
  );
};

export default Services;
