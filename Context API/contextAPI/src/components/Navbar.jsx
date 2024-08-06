import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";

import { NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};

export default Navbar;
