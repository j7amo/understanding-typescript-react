import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

const App: React.FC = () => {
  // TS infers state type based on what we pass in useState hook
  // to be clear about types here we need to add specific type to angle brackets
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // as we need only the latest state we need to use a special form of setter with callback (instead of traditional setter without callback)
    // it receives the latest state as an argument and guarantees that we use the latest state
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), title: text },
    ]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
