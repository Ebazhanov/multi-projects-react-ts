import React, { useState } from "react";
import "./NavigationBar.scss";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Zhenja</h3>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/users">UsersSearch</Link>
          </li>
          <li>
            <Link to="/currency-converter">Converter</Link>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
