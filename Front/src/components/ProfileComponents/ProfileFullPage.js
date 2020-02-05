import React, { Component } from "react";
import Navbar from "./../sharedComponents/Navbar";
import SideBar from "./SideBar";
import Footer from "./../sharedComponents/Footer";
import PersonImg from "../../imgs/person.png";
class ProfileFullPage extends Component {
  state = {
    links: [
      { title: "Courses", href: "#Courses", content: "ghghg"},
      { title: "Projects", href: "#Projects", content: "hhfhgf"},
      { title: "Activity", href: "#Activity",content: "fsdrw"}
    ],
    profileData: [
      {img: {PersonImg} ,name: "Jhon Due", position: "Web developer", experience: "Project1"}
    ]
  };
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <SideBar
            links={this.state.links}
            profileData={this.state.profileData}
          />
          <Footer />
      </React.Fragment>
    );
  }
}

export default ProfileFullPage;
