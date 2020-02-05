import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeNavbar from "./HomeNavbar";
export default class DoTest extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-component">
          <HomeNavbar />
          <div id="bg">
            <h1 className="ques1">Do You Learn Programming ?</h1>
            <button className="test">Do Test</button>
            <Link to="/view/courses" className="back-left-btn">
              <i className="fas fa-chevron-left"></i>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
