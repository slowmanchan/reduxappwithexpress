import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncApp from './containers/AsyncApp'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList/>
    <AsyncApp />
  </div>
)

export default App;
