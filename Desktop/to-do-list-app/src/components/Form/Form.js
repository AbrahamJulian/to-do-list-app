import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    body: "",
    completed: false,
  });

  function handleInputChange(e) {
    setTodo({ ...todo, body: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.body.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, body: "" });
    }
  }

  return (
    <div className="form">
      <h3>To do list</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          value={todo.body}
          onChange={handleInputChange}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}

export default Form;
