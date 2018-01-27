import React, { Component } from 'react';
import TodoAdd from './TodoAdd';

class TodoList extends Component {
  render() {
    return(
      <div>
        <h1>Todo List</h1>
        <TodoAdd/>
      </div>
    )
  }
}

export default TodoList;
