import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ajmal - Full Stack Software Developer</title>
        <meta
          name="description"
          content="Ajmal is a full-stack software developer skilled in building scalable web applications and responsive user interfaces using the MERN stack."
        />
        <meta
          name="keywords"
          content="ajmal u, ajmaledevala, devala, full stack developer, MERN stack"
        />
      </Helmet>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;
