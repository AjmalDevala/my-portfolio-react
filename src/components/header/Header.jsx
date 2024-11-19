import { useState } from "react";
import Logo from "../../assets/me-Photoroom.png";
import "./header.css";
import { Helmet } from "react-helmet-async";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleNavClick = (link) => {
    setActiveLink(link);
    setToggle(false); // Close the menu on link click
  };

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
          content="Ajmal U, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, JavaScript, ajmaldevala ,devala"
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
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            <img src={Logo} alt="Logo" className="nav__logo-img" />
          </a>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${
                    activeLink === "#home" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavClick("#home")}
                >
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className={`nav__link ${
                    activeLink === "#about" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavClick("#about")}
                >
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className={`nav__link ${
                    activeLink === "#skills" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavClick("#skills")}
                >
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  className={`nav__link ${
                    activeLink === "#services" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavClick("#services")}
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  className={`nav__link ${
                    activeLink === "#portfolio" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavClick("#portfolio")}
                >
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#qualification"
                  className={`nav__link ${
                    activeLink === "#qualification" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavClick("#qualification")}
                >
                  <i className="uil uil-scenery nav__icon"></i>Qualification
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className={`nav__link ${
                    activeLink === "#contact" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavClick("#contact")}
                >
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
