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
