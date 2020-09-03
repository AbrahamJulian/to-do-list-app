import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CirclePicker } from "react-color";
import { render } from "@testing-library/react";

const color = ["#8ff2a9", "#91e0ff", "#ff9cb6", "#ffdb9e", "#fffc9e"];
const circleSize = 20;

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
      this.setState({ ...this.state, body: "", color: "" });
    }
  };

  handleColorChange = (color, e) => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <div className="form pa0">
        <h3 className="tc pa1 avenir">To do list</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className="pv1 ph3 ma2 br4 ba b--mid-gray"
            name="todo"
            type="text"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <button
            className="pv1 ph3 ma2 bg-blue white br4 ba b--mid-gray pointer"
            type="submit"
          >
            Add todo
          </button>
          <CirclePicker
            colors={color}
            circleSize={circleSize}
            className="pv3 ph3"
            onChangeComplete={this.handleColorChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
