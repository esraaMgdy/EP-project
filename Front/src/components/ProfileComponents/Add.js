import React, { Component } from "react";
import "./add.css";
import AddForm from "./AddForm";
import FormProfileLogic from './FormProfileLogic';
class AddCourse extends Component {
  state = {};
  render() {
    return (
      <div className="dropdown addDropDown">
        <button
          className="btn btn-secondary dropdown-toggle addCourseBtn"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-plus"></i>
        </button>
        <div className="dropdown-menu addMenu" aria-labelledby="dropdownMenu2">
          <FormProfileLogic />
        </div>
      </div>
    );
  }
}

export default AddCourse;
