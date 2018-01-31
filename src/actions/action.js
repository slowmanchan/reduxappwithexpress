export const SELECT_TODO = 'SELECT_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export function selectTodo(todo) {
  return {
    type: SELECT_TODO,
    todo
  }
}

function requestTodo(todo) {
  return {
    type: REQUEST_TODOS,
    todo
  }
}

function receivePosts(todo, json) {
  return {
    type: RECEIVE_TODOS,
    todo,
    todos: json.data.children.map(child => child.data)
    //,receivedAt: Date.now()
  }
}
