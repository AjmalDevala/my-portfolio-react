/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { data } from "./data";

const Modal = ({ close, show, title }) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    setService(data[title]);
  }, [service, title]);

  return (
    <div className={show ? "services__modal active-modal" : "services__modal"}>
      <div className="services__modal-content">
        <i onClick={close} className="uil uil-times services__modal-close"></i>

        <h3 className="services__modal-title">{title}</h3>
        <ul className="services__modal-services grid">
          {service?.map((desc, index) => (
            <li key={index} className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
