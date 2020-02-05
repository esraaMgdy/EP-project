import React, { Component } from "react";
import "./courses.css";
class Courses extends Component {
  state = {
    courses: [
      {
        title: "React JS for beginners",
        desc: `When television was young,
           there was a huge popular show based on
            the still popular fictional character 
            of Superman`,
        price: `$150`,
        participants: 340,
        comments: 35,
        id: 1
      },
      {
        title: "React JS for beginners",
        desc: `When television was young,
           there was a huge popular show based on
            the still popular fictional character 
            of Superman`,
        price: `$150`,
        participants: 340,
        comments: 35,
        id: 2
      },
      {
        title: "React JS for beginners",
        desc: `When television was young,
           there was a huge popular show based on
            the still popular fictional character 
            of Superman`,
        price: `$150`,
        participants: 340,
        comments: 35,
        id: 3
      },
      {
        title: "React JS for beginners",
        desc: `When television was young,
           there was a huge popular show based on
            the still popular fictional character 
            of Superman`,
        price: `$150`,
        participants: 340,
        comments: 35,
        id: 4
      }
    ]
  };
  render() {
    return (
      <div className="container-fluid courses testimonial-group">
        <div className="desc col-xs-6">
          <h1>Popular Courses</h1>
          <p>
            There is a moment in the life of any aspiring astronomer that it is
            time to buy that first telescope. It’s exciting to think about
            setting up your own viewing station.
          </p>
        </div>
        <div className="row">
          {this.state.courses.map(course => (
            <div className="col-xl-4 card" key={course.id}>
              <h4>{course.title}</h4>
              <p>{course.desc}</p>
              <p className="data">
                <i className="far fa-user"></i>
                {course.participants}
              </p>
              <p className="data comments">
                <i className="far fa-comment"></i>
                {course.comments}
              </p>
              <button>{course.price}</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Courses;
