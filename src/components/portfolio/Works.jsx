import "./portfolio.css";
import { useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === filter);

  return (
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
  );
};

export default Works;
