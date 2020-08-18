import React from "react";
import Todo from "../Todo/Todo";

function List({ todos, markComplete, removeTodo }) {
  return (
    <ul
      className="list"
      style={{ visibility: todos.length ? "visible" : "hidden" }}
    >
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default List;
