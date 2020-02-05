import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeCourseCard.css";
export default class HomeCourseCard extends Component {
  render() {
    return (
      <div className="card">
        <Link to="">
          <div className="card-body">
            <h4 className="card-title">{this.props.data.title}</h4>
            <p className="card-text">{this.props.data.body}</p>
          </div>
        </Link>
      </div>
    );
  }
}
