import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todoActions";

const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoObj = {
      id: new Date().getTime(),
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-x-2">
        <input
          type="text"
          className="outline rounded-sm"
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit" className="">
          ADD
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
