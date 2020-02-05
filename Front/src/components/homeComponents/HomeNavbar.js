import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./HomeNavbar.css";
export default class HomeNavbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-btn"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-chevron-down"></i>
              </a>
              <div
                className="dropdown-home-navbar dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/logIn" className="dropdown-item" href="#">
                  Login
                </Link>
                <Link to="/signUp" className="dropdown-item" href="#">
                  Sign up
                </Link>
              </div>
            </li>
          </ul>
        </nav>
    );
  }
}
