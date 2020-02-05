import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProfileIcon extends Component {
  check = () => {
    if (this.props.checkState === "true") {
      return (
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      );
    } else {
      return;
    }
  };
  render() {
    return <React.Fragment>{this.check()}</React.Fragment>;
  }
}

export default ProfileIcon;
