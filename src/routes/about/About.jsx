import "./about.scss";

const About = () => {
  return (
    <div className="containerc">
      <div className="inner-container">
        <div className="content-wrapper">
          <div className="image-container">
            {/* <div className="overlay-image">
              <img src="https://placehold.co/200x100" alt="Overlay" />
            </div> */}
            <div className="text-wrapper">
              <p className="subtitle">About Us</p>
              <h2 className="title">
                We make you look
                <span className="highlight">luxurious</span>
              </h2>
              <p className="description">
                Trust, Quality, Excellence. Building Dreams, Brick by Brick. Our
                Homes Age Better Than Fine Wine. Your Partner in the Journey to
                Home. From Sale to Sold, We’re Your Guide.
              </p>
              <div className="button-group">
                <a href="/" className="primary-button">
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className="additional-image-container">
            <div className="additional-image">
              <img src="/about.jpg" alt="Additional" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
