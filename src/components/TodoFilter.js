import React from "react";
import { useDispatch } from "react-redux";
import { filterTodos } from "../redux/todos/todoActions";

const TodoFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (filterType) => {
    dispatch(filterTodos(filterType));
  };

  const buttonStyles =
    "px-4 border border-gray-500 rounded flex lg:text-base text-sm";

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      <button className={`${buttonStyles}`} onClick={() => handleFilter("ALL")}>
        Show all tasks
      </button>
      <button className={buttonStyles} onClick={() => handleFilter("ACTIVE")}>
        Show active tasks
      </button>
      <button
        className={buttonStyles}
        onClick={() => handleFilter("COMPLETED")}
      >
        Show completed tasks
      </button>
    </div>
  );
};

export default TodoFilter;
