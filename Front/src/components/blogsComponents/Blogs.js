import React, { Component } from "react";
import "./blogs.css";
import Tracks from "./Tracks";
import Profile from "./Profile";
class Blogs extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: "React JS for beginners",
        desc: `When television was young,
           there was a huge popular show based on
            the still popular fictional character 
            of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 2,
        title: "React JS for beginners",
        desc: `When television was young,
           there was a huge popular show based on
            the still popular fictional character 
            of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 3,
        title: "React JS for beginners",
        desc: `When television was young,
           there was a huge popular show based on
            the still popular fictional character 
            of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 4,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 5,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 6,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 7,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 8,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 9,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 10,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 11,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      },
      {
        id: 12,
        title: "React JS for beginners",
        desc: `When television was young,
         there was a huge popular show based on
          the still popular fictional character 
          of Superman`,
        writer: "Mark wiens",
        field: "Technology",
        views: 340,
        comments: 35,
        date: 54
      }
    ]
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row blogContent">
          <Tracks />
          <div className="col-xl-4 col-l-6 col-md-6 scroll">
            {this.state.blogs.map(blog => (
              <div className="blogCard" key={blog.id}>
                <h4>{blog.title}</h4>
                <p>{blog.desc}</p>
                <button>View more</button>
                <p className="numeralData"><i className="far fa-eye"></i>{blog.views}</p>
                <p className="numeralData"><i className="far fa-comment"></i>{blog.comments}</p>
              </div>
            ))}
          </div>
          <Profile />
        </div>
      </div>
    );
  }
}

export default Blogs;
