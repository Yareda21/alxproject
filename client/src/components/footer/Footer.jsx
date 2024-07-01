import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-text-center">
          <h2 className="footer-heading">Sell and Buy Your Real Estate</h2>

          <p className="footer-paragraph">
            Our vision is to revolutionize the real estate industry by
            leveraging advanced technology and innovative solutions to provide a
            seamless and efficient service for our users.
          </p>

          <a href="#" className="footer-cta">
            Get Started
          </a>
        </div>

        <div className="footer-bottom">
          <ul className="footer-custom">
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Tiktok</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
          <h3>Infinity Real Estate Brockers</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
