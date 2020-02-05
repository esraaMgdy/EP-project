import React, { Component } from "react";
import "./sideBar.css";
import Content from "./Content";
import AddQuess from "./AddQues";
class SideBar extends Component {
  state = {};
  render() {
    const { questions, topics, onSubmit } = this.props;
    return (
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {topics.map(topic => (
              <a
                className="nav-link"
                id="v-pills-home-tab"
                data-toggle="pill"
                href={topic.href}
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                key={topic.title}
              >
                {topic.title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            {questions.map(ques => (
              <Content
                key={ques.id}
                id={ques.option}
                ques={ques.ques}
                title={ques.title}
              />
            ))}
          </div>
          <AddQuess
            onSubmit={onSubmit}
            topics={topics}
            option={topics.option}
          />
        </div>
      </div>
    );
  }
}

export default SideBar;
