import { Helmet } from "react-helmet-async";

const ScrollDown = () => {
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

      <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
          <svg
            width="32px"
            height="32px"
            className="home__scroll-mouse"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokelinejoin: "round",
              strokeMiterlimit: 1.5,
            }}
          >
            <path
              className="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: "var(--title-color)",
                strokeWidth: "20px",
              }}
            ></path>
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: "var(--title-color)",
                strokeWidth: "20px",
              }}
            ></path>
          </svg>
          <span className="home__scroll-name">Scroll Down</span>
          <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
      </div>
    </>
  );
};

export default ScrollDown;
