import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CirclePicker } from "react-color";
import { render } from "@testing-library/react";

class Form extends React.Component {
  constructor(addTodo) {
    super(addTodo);

    this.state = {
      id: "",
      body: "",
      completed: false,
      color: "#ffffff",
    };
  }

  handleInputChange = (e) => {
    this.setState({ ...this.state, body: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.body.trim()) {
      this.props.addTodo({ ...this.state, id: uuidv4() });
      this.setState({ ...this.state, body: "" });
      this.setState({ ...this.state, color: "" });
    }
  };

  handleColorChange = (color, e) => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <div className="form">
        <h3>To do list</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="todo"
            type="text"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add todo</button>
          <CirclePicker onChangeComplete={this.handleColorChange} />
        </form>
      </div>
    );
  }
}

export default Form;
