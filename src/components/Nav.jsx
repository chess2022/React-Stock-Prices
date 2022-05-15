import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav(props) {
  return (
    <nav className="nav">
      <Link to="/" id="logo">
        <div>iStocks</div>
      </Link>
      <Link to="/stocks">
        <div>STOCKS</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
    </nav>
  );
}
