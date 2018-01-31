import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import DATA from './data';

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <h2>Todos: </h2>
        <TodoList data={ DATA } />
        <TodoAdd />
      </div>
    )
  }
}

export default TodoBox;
