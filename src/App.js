import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="p-4 space-y-4">
      <div className="text-4xl font-bold"> TodoMatic </div>
      <div className="text-3xl font-bold"> What needs to be done?</div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
