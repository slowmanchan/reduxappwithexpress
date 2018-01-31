import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './todo/TodoList';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
registerServiceWorker();
