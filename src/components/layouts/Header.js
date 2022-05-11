import React from "react";
import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";

export default function Header() {
  return (
    <div>
      <a className="logo-left-bottom navbar-a" href="https://optimumtech.org">
        <img className="filter-green" src="/logo.svg" />
        <p className="logo-left-bottom-text">optimum<span style={{color:"#14a7e0"}}>tech</span></p>
      </a>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <Link className="navbar-a" to="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-a" to="/about">
            <span>About</span>
          </Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-a" to="/videos">
            <span>Youtube Videos</span>
          </Link>
        </li>
        {/* <li className="navbar-li">
          <Link className="navbar-a" to="/contact">
            <span>Contact</span>
          </Link>
        </li> */}
      </ul>

      <Link className="right" to="https://www.youtube.com/c/OptimumTech">
        <span>
          <AiFillYoutube />
        </span>
      </Link>
    </div>
  );
}
