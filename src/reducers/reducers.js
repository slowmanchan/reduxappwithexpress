import { combineReducers } from 'redux'
import {
  SELECT_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  INVALIDATE_TODOS
} from '../actions'

function selectedTodo(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_TODO:
      return action.todo
      break;
    default:
      return state
  }
}


function todos(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_TODOS:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TODOS
      return Object.assign({}, state, {
        isFetching: false,
        items: actions.todos
      })
      break;
    default:
      return state

  }
}

function todosByList( state = {}, action) {
  switch (action.type) {
    case INVALIDATE_TODOS:
    case RECEIVE_TODOS:
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        [action.todos]: todos(state[action.todos], action)
      })
  }
}
const rootReducer = combineReducers({

})
