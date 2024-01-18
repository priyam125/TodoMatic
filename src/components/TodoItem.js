import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { save } from "react-icons-kit/feather/save";
import { x } from "react-icons-kit/feather/x";
import { updateTodo, editTodo, removeTodo } from "../redux/todos/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState();

  useEffect(() => {
    console.log(editedTodo);
  });

  useEffect(() => {
    setEditedTodo(todo.todo);
  }, [todo.todo]);

  const handleSaveTodo = () => {
    dispatch(editTodo(todo.id, editedTodo));
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedTodo(todo.todo);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleTodoChange = (e) => {
    setEditedTodo(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2 w-full justify-between bg-[#8758ff] mb-2 lg:p-2 p-1">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch(updateTodo(todo.id, todo.todo, !todo.completed))
          }
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTodo}
            onChange={handleTodoChange}
            className="outline rounded-sm"
          />
        ) : (
          <p style={todo.completed ? { textDecoration: "line-through" } : {}}>
            {todo.todo}
          </p>
        )}
      </div>
      <div className="flex gap-2 items-center">
        {isEditing ? (
          <>
            <span onClick={handleSaveTodo}>
              <Icon icon={save} />
            </span>
            <span onClick={handleCancel}>
              <Icon icon={x} />
            </span>
          </>
        ) : (
          <>
            <span onClick={handleEdit}>
              <Icon icon={edit2} />
            </span>
            <span onClick={handleDelete}>
              <Icon icon={trash} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
