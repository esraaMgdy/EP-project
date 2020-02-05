import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./HomeMainCard.css";
import HomeNavbar from "./HomeNavbar";
export default class HomeMainCard extends Component {
  state = {
    welcomeText: "Lorem ipsum dolor sit amet, consectetur",
    btnText: "Join us"
  };

  render() {
    return (
      <React.Fragment>
        <div className="home-component">
          <HomeNavbar />

          <article className="mainCard">
            <p> {this.state.welcomeText} </p>
            <Link to="/join-us">
              <button className="btn"> {this.state.btnText} </button>
            </Link>
          </article>
          <Link to="/view/courses" className="left-btn">
            <i className="fas fa-chevron-left"></i>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
