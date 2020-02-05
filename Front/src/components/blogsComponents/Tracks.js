import React, { Component } from "react";
import "./tracks.css";
class Tracks extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "Web development",
        desc: "Web development"
      },
      {
        id: 2,
        title: "Web development",
        desc: "Web development"
      },
      {
        id: 3,
        title: "Web development",
        desc: "Web development"
      },
      {
        id: 4,
        title: "Web development",
        desc: "Web development"
      },
      {
        id: 5,
        title: "Web development",
        desc: "Web development"
      }
    ]
  };
  render() {
    return (
      <div className="container-fluid testimonial-group tracks">
        <div className="row">
          {this.state.data.map(track => (
            <div className="col-xl-4 track" key={track.id}>
              <a href="#">
                <h4>{track.title}</h4>
                <p>{track.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Tracks;