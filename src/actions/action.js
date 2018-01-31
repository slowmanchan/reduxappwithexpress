import axios from 'axios';
export const SELECT_TODO = 'SELECT_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const INVALIDATE_TODOS = 'INVALIDATE_TODOS'


export function invalidateTodos(todos) {
  return (
    type: INVALIDATE_TODOS,
    todos
  )
}

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
    receivedAt: Date.now()
  }
}

export function fetchTodos(todos) {
  // Thunk middleware knows how to handle functions.
// It passes the dispatch method as an argument to the function,
// thus making it able to dispatch actions itself.
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestTodos(todos))
    // The function called by the thunk middleware can return a value,
   // that is passed on as the return value of the dispatch method.

   // In this case, we return a promise to wait for.
   // This is not required by thunk middleware, but it is convenient for us.

   return axios.get('/todos')
     .then(res => dispatch(recieveTodos()))
  }
}
