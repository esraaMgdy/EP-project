import React, { Component } from "react";
import "./sideBar.css";
import Content from "./Content";
import AddCourse from './Add';
class SideBar extends Component {
  render() {
    const links = this.props.links;
    const profileData = this.props.profileData;
    return (
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {profileData.map(data => (
              <div className="bioCard">
                <img className="profileImg" src={data.img.PersonImg} />
                <div className="bio">
                  <h4>{data.name}</h4>
                  <p>{data.position}</p>
                  <p>{data.experience}</p>
                </div>
              </div>
            ))}
            {links.map(link => (
              <a
                className="nav-link"
                id="v-pills-home-tab"
                data-toggle="pill"
                href={link.href}
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                key={link.title}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content content" id="v-pills-tabContent">
            {links.map(link => (
              <Content
                key={link.title}
                id={link.title}
                title={link.title}
                content={link.content}
              />
            ))}
            <AddCourse />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
