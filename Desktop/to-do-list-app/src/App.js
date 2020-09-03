import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { initialData } from "./data/data";
import Tachyons from "tachyons/css/tachyons.min.css";
import "./App.css";

const LOCAL_STORAGE_KEY = "to-do-list";

function App() {
  const [todos, setTodo] = useState(initialData);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storage) {
      setTodo(storage);
    }
  }, []);

  function addTodo(todo) {
    setTodo([todo, ...todos]);
  }

  function markComplete(id) {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="app mv1 mh5 flex flex-column items-center justify-center">
      <Form addTodo={addTodo} />
      <List todos={todos} markComplete={markComplete} removeTodo={removeTodo} />
    </main>
  );
}

export default App;
