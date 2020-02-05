import React, { Component } from "react";
import AddForm from "./AddForm";
class FormProfileLogic extends Component {
  state = {
    options: [{ title: "Courses" }, { title: "Projects" }],
    Projects: [{ course: "" }],
    Courses: [{ project: "" }]
  };
  handleSubmit = e => {
    e.preventDefault();
    //select form fields to get the values of them
    const form = document.querySelector(".addForm");
    const input = document.querySelector("#exampleFormControlInput1").value;
    const select = document.querySelector("#exampleFormControlSelect1");
    const option = select.options[select.selectedIndex].value;
    //validate the form
    if (input === "") {
      return;
    }
    //put the form's values in the state console here for testing
    if (option === "Courses") {
      this.state.Courses.push({
        course: input
      });
      console.log({
        course: input
      });
    } else if (option === "Projects") {
      this.state.Projects.push({
        project: input
      });
      console.log(
          this.state.Projects
      );
    }
    //reset the form after submit
    form.reset();
  };
  render() {
    return (
      <AddForm options={this.state.options} onSubmit={this.handleSubmit} />
    );
  }
}

export default FormProfileLogic;
