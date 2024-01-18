export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const FILTER_TODOS = "FILTER_TODOS";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

export const updateTodo = (id) => ({
  type: UPDATE_TODO,
  payload: { id },
});

export const editTodo = (id, updatedTodo) => ({
  type: EDIT_TODO,
  payload: { id, updatedTodo },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const filterTodos = (filterType) => ({
  type: FILTER_TODOS,
  payload: { filterType },
});
