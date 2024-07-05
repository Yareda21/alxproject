import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/OIP.JPEG" alt="" />
          <span>INFINITY</span>
        </a>
      </div>
      <div className="right">
        <Link to={`/`}>
          <button>Home</button>
        </Link>
        <Link to={`/about`}>
          <button>About</button>
        </Link>
        <Link to={`/contact`}>
          <button>Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
