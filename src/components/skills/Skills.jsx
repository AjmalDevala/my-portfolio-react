import "./skills.css";
import SkillSet from "./SkillSet";
// import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Proficiency</span>
      <div className="skills__container container">
        <SkillSet />
      </div>
    </section>
  );
};

export default Skills;
