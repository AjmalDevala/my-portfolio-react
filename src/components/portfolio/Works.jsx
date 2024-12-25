import "./portfolio.css";
import { useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";
import { Helmet } from "react-helmet-async";

const Works = () => {
  const [filter, setFilter] = useState("All");
  const canonicalUrl = "https://ajmaldevala.netlify.app/"; // Replace with your actual portfolio URL
  const socialImageUrl =
    "https://ajmaldevala.netlify.app/assets/AboutImg-14b68c43.jpg"; // Replace with your social sharing image

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === filter);

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
      <div className="works-container">
        {/* Filter Section */}
        <div className="filter-section">
          <button
            className={`filter-button ${filter === "All" ? "active" : ""}`}
            onClick={() => handleFilterChange("All")}
          >
            Explore All
          </button>
          <button
            className={`filter-button ${
              filter === "Organizational Work" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("Organizational Work")}
          >
            Team Contributions
          </button>
          <button
            className={`filter-button ${
              filter === "Personal Work" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("Personal Work")}
          >
            Independent Projects
          </button>
        </div>

        {/* Project Grid */}
        <div className="work__container container grid">
          {filteredProjects.map((item) => (
            <WorkItems item={item} key={item.id} />
          ))}
        </div>

        {/* Show More Button for Personal Work filter */}
        {filter === "Personal Work" && (
          <a href="https://github.com/AjmalDevala">
            <button className="show-more-button">Show More</button>
          </a>
        )}
      </div>
    </>
  );
};

export default Works;
