import React, { useState } from "react";

const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoObj = {
      id: new Date().getTime(),
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
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
