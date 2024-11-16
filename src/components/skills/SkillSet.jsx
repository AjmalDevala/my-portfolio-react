import HtmlIcon from "../../assets/html.png";
import CssIcon from "../../assets/css.png";
import JsIcon from "../../assets/javascript.png";
import TsIcon from "../../assets/typescript.png";
import ReactIcon from "../../assets/react.png";
import Nestjs from "../../assets/nestjs.png";
import NodejsIcon from "../../assets/node.png";
import ExpressIcon from "../../assets/express-original.svg";
import MongoIcon from "../../assets/mongodb-original.svg";
import NextjsIcon from "../../assets/nextjs-icon.svg";
import PostgresIcon from "../../assets/postgre.png";
import BootstrapIcon from "../../assets/bootstrap.png";
import TaiwindIcon from "../../assets/tailwindcss-icon.svg";
import FigmaIcon from "../../assets/figma.png";
import GitIcon from "../../assets/git.png";
import FirebaseIcon from "../../assets/firebase-icon.svg";
import DockerIcon from "../../assets/docker-icon.png";
import AwsIcon from "../../assets/aws-icon.webp";
import { Helmet } from "react-helmet-async";

const SkillSet = () => {
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
          content="Ajmal U, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, JavaScript , ajmaldevala ,devala"
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
      <div className="skills__box">
        <div className="skills__group grid">
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={HtmlIcon} alt="Html" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">HTML</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={CssIcon} alt="CSS" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">CSS</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={JsIcon} alt="Javascript" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">JavaScript</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={TsIcon} alt="Typescript" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">TypeScript</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={ReactIcon} alt="React" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">React</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={NextjsIcon} alt="Next.js" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">Next js</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={NodejsIcon} alt="Node.js" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">Node js</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img
                src={ExpressIcon}
                alt="Express.js"
                className="skills__icon"
              />
            </div>
            <div>
              <span className="skills__name">Express js</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={Nestjs} alt="Nestjs" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">Nest js</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={MongoIcon} alt="MongoDB" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">MongoDB</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={PostgresIcon} alt="Postgres" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">PostgreSQL</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img
                src={BootstrapIcon}
                alt="Bootstrap"
                className="skills__icon"
              />
            </div>
            <div>
              <span className="skills__name">Bootstrap</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img
                src={TaiwindIcon}
                alt="Tailwind css"
                className="skills__icon"
              />
            </div>
            <div>
              <span className="skills__name">Tailwind CSS</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={FigmaIcon} alt="Figma" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">Figma</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={GitIcon} alt="Git" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">Git</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={FirebaseIcon} alt="Firebase" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">Firebase</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={DockerIcon} alt="Docker" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">Docker</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__icon-container">
              <img src={AwsIcon} alt="AWS" className="skills__icon" />
            </div>
            <div>
              <span className="skills__name">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSet;
