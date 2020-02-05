import React, { Component } from "react";
import "./content.css";

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="tab-pane fade show"
          id={this.props.id}
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <h4>{this.props.title}</h4>
          <p>{this.props.content}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
