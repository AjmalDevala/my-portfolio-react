import { useState } from "react";
import Modal from "./Modal";
import "./services.css";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");

  const show = (title) => {
    setTitle(title);
    setShowModal(true);
  };

  const close = () => {
    setShowModal(false);
  };

  return (
    <div className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-icons services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designing
            </h3>
            <span
              className="services__button"
              onClick={() => show("UI/UX Designing")}
            >
              View More
              <i className="uil uil-angle-double-right services__button-icon "></i>
            </span>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-react services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Development
            </h3>
            <span
              className="services__button"
              onClick={() => show("Frontend Development")}
            >
              View More
              <i className="uil uil-angle-double-right services__button-icon "></i>
            </span>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-brackets-curly services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Development
            </h3>
            <span
              className="services__button"
              onClick={() => show("Backend Development")}
            >
              View More
              <i className="uil uil-angle-double-right services__button-icon "></i>
            </span>
          </div>
        </div>

        <Modal show={showModal} close={close} title={title} />
      </div>
    </div>
  );
};

export default Services;
