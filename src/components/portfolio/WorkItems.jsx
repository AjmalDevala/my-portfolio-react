import "./portfolio.css";
const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <div className="work__img">
        <img src={item.image} alt={`AjmaldevalaPortfolio`} />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__subtitle">{item.subtitle}</p>
      {item.status === "Source Code Available" ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Source Code
          <i className="work__button-icon"> →</i>
        </a>
      ) : (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          View Project <i className="work__button-icon"> →</i>
        </a>
      )}
    </div>
  );
};

export default WorkItems;
