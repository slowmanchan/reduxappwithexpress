import { combineReducers } from 'redux'
import {
  SELECT_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS
} from '../actions/todoActions'

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

const rootReducer = combineReducers({

})
