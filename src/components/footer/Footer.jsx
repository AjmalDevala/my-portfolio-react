import { Helmet } from "react-helmet-async";
import "./footer.css";

const Footer = () => {
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
      
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/ajmal-devala"
              className="footer__social-link"
              rel="noreferrer"
              target="_blank"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/AjmalDevala"
              className="footer__social-link"
              rel="noreferrer"
              target="_blank"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="https://www.instagram.com/ajmal_pq"
              className="footer__social-link"
              rel="noreferrer"
              target="_blank"
            >
              <i className="uil uil-instagram"></i>
            </a>
          </div>
          <span className="footer__copy">© Ajmal. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
