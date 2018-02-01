export const SELECT_TODO = 'SELECT_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

import axios from 'axios';

export function selectTodo(todo) {
  return {
    type: SELECT_TODO,
    todo
  }
}

export function requestTodo(todo) {
  return {
    type: REQUEST_TODOS,
    todo
  }
}

export function receivePosts(json) {
  return {
    type: RECEIVE_TODOS,
    todos: json.data.children.map(child => child.data)
    //,receivedAt: Date.now()
  }
}

export function fetchPosts(todo) {
  return function (dispatch) {
    dispatch(requestTodo(todo))

    return axios.get('/todos')
      .then(
        res => dispatch(receivePosts(json))
      )
      .catch(err => console.log(err))
  }
}
