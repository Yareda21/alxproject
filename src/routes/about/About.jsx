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
                <span className="highlight">different</span>
              </h2>
              <p className="description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque it.
              </p>
              <div className="button-group">
                <a href="/" className="primary-button">
                  View More
                </a>
                <a href="/" className="secondary-button">
                  Watch how it works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="additional-image-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bounce-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
            <div className="additional-image">
              <img src="https://placehold.co/400x400" alt="Additional" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
