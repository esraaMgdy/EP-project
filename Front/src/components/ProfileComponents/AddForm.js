import React, { Component } from "react";
class AddForm extends Component {
  render() {
      
    return (
      <form className="addForm" onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label>Your Question title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label>Choose question topic:</label>
          <select className="form-control" id="exampleFormControlSelect1">
            {this.props.options.map(option => (
              <option className="option">{option.title}</option>
            ))}
            ))}
          </select>
        </div>
        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default AddForm;
