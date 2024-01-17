import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { updateTodo } from "../redux/todos/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(updateTodo(todo.id));
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        ></input>
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="">
        <span>
          <Icon icon={edit2} />
        </span>
        <span>
          <Icon icon={trash} />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
