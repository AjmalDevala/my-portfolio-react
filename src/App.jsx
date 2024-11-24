import "./App.css";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
// import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Qualifications from "./components/qualification/Qualifications";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <Layout>
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
      <Header />
      <main className="main">
        <Home />
        <About />
        {/* <Skills />
        <Services />
        <Portfolio /> */}
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
