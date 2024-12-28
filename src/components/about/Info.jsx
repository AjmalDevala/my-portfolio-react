const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Professional Experience</h3>
        <span className="about__subtitle">2+ Years in Development</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projects Delivered</h3>
        <span className="about__subtitle">10+ High-Quality Solutions</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Client Support</h3>
        <span className="about__subtitle">Available 24/7 Globally</span>
      </div>
    </div>
  );
};

export default Info;
