import {
  ADD_TODO,
  DELETE_ALL,
  FILTER_TODOS,
  UPDATE_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "../todos/todoActions";

const initialState = {
  todos: [
    { id: 1, todo: "Buy Laptop", completed: false },
    { id: 2, todo: "Master Redux", completed: false },
    { id: 3, todo: "Watering Plants", completed: true },
  ],
  filterType: "ALL", // Set a default value for filterType
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_ALL:
      return { ...state, todos: [] };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case EDIT_TODO:
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, todo: action.payload.updatedTodo }
            : todo
        ),
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case FILTER_TODOS:
      return { ...state, filterType: action.payload.filterType };
    default:
      return state;
  }
};

export default todoReducer;
