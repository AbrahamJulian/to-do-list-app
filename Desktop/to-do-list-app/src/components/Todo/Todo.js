import React from "react";
import "./Todo.css";

function Todo({ todo, markComplete, removeTodo }) {
  function handleCheckClick() {
    markComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <li
      className="flex flex-row pa1 ma2 mw-100 ba b--gray br4"
      style={{ background: todo.color }}
    >
      <label className="checkbox w2 pa2 ma2">
        <input
          className="pointer"
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckClick}
        />
      </label>
      <p
        className="w-80 center"
        style={{ textDecoration: todo.completed ? "line-through" : null }}
      >
        {todo.body}
      </p>
      <button
        className="w2 h2 pa2 ma2 br3 self-center white bg-blue bw0 tc f7 pointer"
        onClick={handleRemoveClick}
      >
        X
      </button>
    </li>
  );
}

export default Todo;
