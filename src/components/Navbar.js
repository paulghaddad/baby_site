import React, { useState } from "react";
import { Link } from "gatsby";
import pinterest from "../img/social/pinterest.svg";
import facebook from "../img/social/facebook.svg";
import logo from "../img/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "200px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/books">
                Books
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/toys">
                Toys
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/baby-log">
                Baby Log
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="https://entrepreneurialmom.substack.com/">
                  Newsletter
              </Link>
            </li>
            <li className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/amy.LearningBabies/"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
            </li>
            <li className="navbar-end has-text-centered pinterest">
              <a
                className="navbar-item"
                href="https://pinterest.com/amyhaddad11"
              >
                <span className="icon">
                  <img src={pinterest} alt="Pinterest" />
                </span>
              </a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
