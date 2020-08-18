import React from "react";

function Todo({ todo, markComplete, removeTodo }) {
  function handleCheckClick() {
    markComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <li className="todo">
      <label className="checkbox">
        <input type="checkbox" checked={todo.completed} />
        <span className="checkbox-custom" onClick={handleCheckClick}></span>
      </label>
      <p style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.body}
      </p>
      <button onClick={handleRemoveClick}>x</button>
    </li>
  );
}

export default Todo;
