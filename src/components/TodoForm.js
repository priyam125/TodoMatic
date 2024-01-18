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
      <div className="flex items-center">
        <input
          type="text"
          className="outline-none rounded-sm bg-transparent border border-[#8758ff] text-[#fff] lg:py-[0.3rem] py-[0.25rem] lg:px-[1rem]"
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#8758ff] border-none lg:py-[0.33rem] px-[0.5rem] py-[0.28rem]"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
