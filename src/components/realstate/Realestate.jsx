import "./realestate.scss";

const Realestate = ({ title, location, details, img }) => {
  return (
    <div className="hero">
      <a href="#" className="class">
        <img alt="" src={img} className="image" />

        <div className="element">
          <p className="para">{title}</p>

          <p className="para2">{location}</p>

          <div className="combo">
            <div className="inner">
              <p className="innerp">{details}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Realestate;
