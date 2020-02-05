import React, { Component } from "react";
import HomeCourseCard from "./HomeCourseCard";

import { Link } from "react-router-dom";
import "./HomeCourses.css";
import HomeNavbar from "./HomeNavbar";
export default class HomeCourses extends Component {
  state = {
    courses: [
      {
        title: "Web development",
        body: "Lorem ipsum dolor sit amet, consectetur"
      },
      {
        title: "App development",
        body: "Lorem ipsum dolor sit amet, consectetur"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="home-component">
          <HomeNavbar />

          <div className="courseMenu">
            <div className="scrollMenu">
              <h4 className="courseDesc">
                Scroll left & right to explore our tracks
              </h4>
              <div className="card-con">
                {this.state.courses &&
                  this.state.courses.map(course => {
                    return <HomeCourseCard key={course.title} data={course} />;
                  })}
              </div>
            </div>
            <Link to="/courses-page">
              <button className="btn">See more</button>
            </Link>
            <div className="arrowBtns">
              <Link to="/">
                <i className="fas fa-chevron-left"></i>
              </Link>
              <Link to="/do-test">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
