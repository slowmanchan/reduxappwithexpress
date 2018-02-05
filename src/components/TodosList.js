import React, { Component } from 'react';

class TodosList extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }


  renderTodos(todos) {
    return todos.map((todo) => {
      return (<li key={todo._id}>
        <h3>{todo.title}</h3>
        <p>{todo.date}</p>
      </li>)
    })
  }

  render() {
    const { todos, loading, error } = this.props.todosList;

    if(loading) {
      return <div><h1>Todos</h1><h3>loading...</h3></div>
    } else if (error) {
      return <div>Error</div>
    }

    return (
      <div>
        <h1>Todos</h1>
        <ul>

          {this.renderTodos(this.props.todosList.todos)}
        </ul>
      </div>
    )
  }
}
export default TodosList;
