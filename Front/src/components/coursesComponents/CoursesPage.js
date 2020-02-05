import React, { Component } from "react";
import Navbar from "../sharedComponents/Navbar";
import Header from "./Header";
import Courses from "./Courses";
import Footer from "../sharedComponents/Footer";
class CoursesPage extends Component {
  render() {
    return (
      <div className="coursesFullPage">
        <Navbar />
        <Header />
        <Courses />
        <Footer />
      </div>
    );
  }
}

export default CoursesPage;
