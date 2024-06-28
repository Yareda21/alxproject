import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-text-center">
          <h2 className="footer-heading">Sell and Buy Your Real Estate</h2>

          <p className="footer-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            maiores ipsum eos temporibus ea nihil.
          </p>

          <a href="#" className="footer-cta">
            Get Started
          </a>
        </div>

        <div className="footer-border-t pt-8 sm:pt-24 lg:pt-24">
          <ul className="footer-flex footer-justify-center footer-gap-4 footer-text-xs lg:footer-justify-end">
            <li>
              <a
                href="#"
                className="footer-link text-gray-500 transition hover:opacity-75"
              >
                <span className="">Facebook</span>
              </a>
            </li>
          </ul>

          <ul className="footer-flex footer-justify-center footer-gap-6 sm:footer-mt-0 lg:footer-justify-end">
            <li>
              <a
                href="#"
                className="footer-link text-gray-700 transition hover:opacity-75"
              >
                <span className="">Instagram</span>
              </a>
            </li>
          </ul>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
