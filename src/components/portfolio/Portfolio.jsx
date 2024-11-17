import { Helmet } from "react-helmet-async";
import Works from "./Works";
import "./portfolio.css";

const Portfolio = () => {
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

      <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>

        <Works />
      </section>
    </>
  );
};

export default Portfolio;
