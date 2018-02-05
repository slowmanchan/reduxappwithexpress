import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './containers/todoListContainer'
import TodoList from './components/TodosList'


class App extends Component {

  render() {
    return (
      <div>

        <TodoListContainer />
      </div>
    );
  }
}

export default App;
