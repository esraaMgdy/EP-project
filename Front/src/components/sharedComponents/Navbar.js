import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileIcon from "./ProfileIcon";
import SignUp from "./../LogInAndSignUp/SignUP";
class Navbar extends Component {
  state = {
    checkLogIn: "true"
  };

  componentDidMount() {
    if (this.state.checkLogIn === "true") {
      document.querySelector("#logIn").remove();
      document.querySelector("#signUp").remove();
    } else {
      return;
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          EduSmart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs-1" className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item dropdown item">
              <a
                className="nav-link dropdown-toggle nav-btn"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div
                className="dropdown-menu pages-dropdown"
                aria-labelledby="dropdownMenuLink"
              >
                <Link to="/blogs" className="dropdown-item" href="#">
                  Blogs
                </Link>
                <Link to="/questions-page" className="dropdown-item" href="#">
                  Questions
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="courses-page" className="nav-link" href="#">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactUs" className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logIn" id="logIn" className="nav-link" href="#">
                log in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signUp" id="signUp" className="nav-link" href="#">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
                <ProfileIcon checkState={this.state.checkLogIn} />
            </li>
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
                <i id="Demo" className="fas fa-search"></i>
              </a>

              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2 input"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
