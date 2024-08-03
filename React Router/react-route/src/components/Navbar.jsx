// Styles
import "./Navbar.css";

//React
import { Link } from "react-router-dom";

// 2- Links com react router
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
