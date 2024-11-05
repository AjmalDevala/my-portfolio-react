import "./footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
