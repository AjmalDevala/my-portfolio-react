import React, { useEffect, useState } from "react";
import "./FloatingShapes.css";
import { Helmet } from "react-helmet-async";

const FloatingShapes = () => {
  const [shapes, setShapes] = useState([]);
  const canonicalUrl = "https://ajmaldevala.netlify.app/"; // Replace with your actual portfolio URL
  const socialImageUrl =
    "https://ajmaldevala.netlify.app/assets/AboutImg-14b68c43.jpg"; // Replace with your social sharing image

  useEffect(() => {
    // Generate initial shapes
    const initialShapes = Array.from({ length: 30 }, (_, index) => ({
      id: index,
      shape: [
        "circle",
        "hexagon",
        "triangle",
        "square",
        "pentagon",
        "star",
        "ellipse",
        "parallelogram",
      ][Math.floor(Math.random() * 8)],
      size: Math.random() * (60 - 20) + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: [
        "hsla(220, 100%, 85%, 0.1)", // Light blue
        "hsla(350, 100%, 50%, 0.1)", // Accent color
        "hsla(220, 20%, 85%, 0.1)", // Text color
        "hsla(220, 15%, 40%, 0.1)", // Darker shade
        "hsla(120, 100%, 75%, 0.1)", // Green
        "hsla(50, 100%, 70%, 0.1)", // Yellow
      ][Math.floor(Math.random() * 6)],
      duration: Math.random() * (20 - 10) + 10,
      delay: Math.random() * 10,
      moveType: Math.floor(Math.random() * 3), // 0: up, 1: diagonal, 2: wave
    }));
    setShapes(initialShapes);
  }, []);

  const getShapePath = (shape) => {
    switch (shape) {
      case "triangle":
        return "polygon(50% 0%, 0% 100%, 100% 100%)";
      case "hexagon":
        return "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
      case "square":
        return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      case "pentagon":
        return "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
      case "star":
        return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
      case "ellipse":
        return "ellipse(50% 50%)";
      case "parallelogram":
        return "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)";
      default:
        return "50%"; // circle
    }
  };

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
      <div className="floating-shapes">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`shape move-${shape.moveType}`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: shape.color,
              borderRadius: shape.shape === "circle" ? "50%" : "0%",
              clipPath: getShapePath(shape.shape),
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              animationDuration: `${shape.duration}s`,
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingShapes;
