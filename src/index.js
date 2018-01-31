import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './todo/TodoList';
import 'semantic-ui-css/semantic.min.css';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectTodos, fetchTodos } from './actions/action'
import rootReducer from './reducers/reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(selectTodos('reactjs'))
store
  .dispatch(fetchTodos('reactjs'))
  .then(() => console.log(store.getState()))

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
registerServiceWorker();
