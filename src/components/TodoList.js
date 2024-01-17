import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filterType = useSelector((state) => state.todos.filterType);
  console.log(filterType);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [remainingTodos, setRemainingTodos] = useState(0);

  useEffect(() => {
    switch (filterType) {
      case "ACTIVE":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      case "COMPLETED":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }

    const remaining = todos.filter((todo) => !todo.completed).length;
    setRemainingTodos(remaining);
  }, [filterType, todos]);

  return (
    <div>
      <div className="font-bold text-3xl">{`${remainingTodos} tasks remaining`}</div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
