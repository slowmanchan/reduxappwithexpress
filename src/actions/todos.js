import axios from 'axios';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS = 'FETCH_TODOS'


export function fetchTodos() {
  const request = axios({
    method: 'get',
    url: '/todos'
  })
  return {
    type: FETCH_TODOS,
    payload: request
  }
}

export function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  }
}
