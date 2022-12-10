import React from "react";
import "./TodoList.css";

// we need to define an interface for TodoList props because TS expects us to do it, and of course we need
// all the advantages of typechecking
interface TodoListProps {
  todos: { id: string; title: string }[];
  onDeleteTodo: (todoId: string) => void;
}

// to set previously defined interface to props we use generics:
// we can put our interface name in angle brackets after React.FC, and it will count as a type for props
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button type="button" onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
            </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
