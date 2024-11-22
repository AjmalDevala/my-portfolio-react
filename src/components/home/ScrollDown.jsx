import { Helmet } from "react-helmet-async";

const ScrollDown = () => {
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
