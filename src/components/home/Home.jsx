import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";

const Home = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();
      const imgCenterX = rect.left + rect.width / 2;
      const imgCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - imgCenterX;
      const deltaY = e.clientY - imgCenterY;

      // Limit rotation to ±20 degrees for realism
      const rotateX = Math.min(Math.max(-20, deltaY / 10), 20);
      const rotateY = Math.min(Math.max(-20, -deltaX / 10), 20);

      imgRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(1.1)`;
    };

    const handleMouseEnter = () => {
      if (imgRef.current) {
        imgRef.current.style.transition = "transform 0.1s ease-out";
      }
    };

    const handleMouseLeave = () => {
      if (!imgRef.current) return;
      imgRef.current.style.transition = "transform 0.5s ease";
      imgRef.current.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)`;
    };

    // Event listeners for hover effects
    document.addEventListener("mousemove", handleMouseMove);
    imgRef.current?.addEventListener("mouseenter", handleMouseEnter);
    imgRef.current?.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      imgRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      imgRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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

      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img" ref={imgRef}></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
        <div className="home__background"></div>
      </section>
    </>
  );
};

export default Home;
