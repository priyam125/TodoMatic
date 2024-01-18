import "./App.css";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:p-7 md:p-4 p-2 space-y-6 xl:w-[60%] w-3/4 h-[60%] bg-[#1A1A40] text-white rounded overflow-y-scroll">
      <div className="lg:text-4xl md:text-3xl text-xl font-bold text-center">
        TodoMatic
      </div>
      <div className="flex flex-col space-y-4 xl:w-3/4 lg:w-[80%] md:w-[] mx-auto px-4">
        <div className="lg:text-3xl md:text-2xl font-bold">
          What needs to be done?
        </div>
        <div className="flex flex-col space-y-2">
          <TodoForm />
          <TodoFilter />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
