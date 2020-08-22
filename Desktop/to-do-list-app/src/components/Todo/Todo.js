import React from "react";

function Todo({ todo, markComplete, removeTodo }) {
  function handleCheckClick() {
    markComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <li
      className="flex flex-row pa1 ma2 mw-100"
      style={{ background: todo.color }}
    >
      <label className="checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckClick}
        />
      </label>
      <p style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.body}
      </p>
      <button onClick={handleRemoveClick}>x</button>
    </li>
  );
}

export default Todo;
