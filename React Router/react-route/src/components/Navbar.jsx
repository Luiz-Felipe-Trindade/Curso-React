// Styles
import "./Navbar.css";

//React
import { NavLink, Link } from "react-router-dom";

// 2- Links com react router
const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
