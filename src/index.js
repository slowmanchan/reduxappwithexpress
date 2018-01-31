import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './todo/TodoList';
import 'semantic-ui-css/semantic.min.css';
import { createStore } from 'redux'
import todoApp from './reducers/reducers'
import { Provider } from 'react-redux';

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
