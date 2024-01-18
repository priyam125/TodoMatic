import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTodos: [],
      remainingTodos: 0,
    };
  }

  componentDidMount() {
    this.filterTodos(this.props.filterType, this.props.todos);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.filterType !== this.props.filterType ||
      prevProps.todos !== this.props.todos
    ) {
      this.filterTodos(this.props.filterType, this.props.todos);
    }
  }

  filterTodos(filterType, todos) {
    switch (filterType) {
      case "ACTIVE":
        this.setState({
          filteredTodos: todos.filter((todo) => !todo.completed),
        });
        break;
      case "COMPLETED":
        this.setState({
          filteredTodos: todos.filter((todo) => todo.completed),
        });
        break;
      default:
        this.setState({ filteredTodos: todos });
    }

    const remaining = todos.filter((todo) => !todo.completed).length;
    this.setState({ remainingTodos: remaining });
  }

  render() {
    return (
      <div className="">
        <div className="font-bold lg:text-3xl md:text-2xl">
          {`${this.state.remainingTodos} tasks remaining`}
        </div>
        <div className="px-6 py-2 md:w-3/4 w-[100%]">
          {this.state.filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  filterType: state.todos.filterType,
});

export default connect(mapStateToProps)(TodoList);
