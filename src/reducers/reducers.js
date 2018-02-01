import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  RECEIVE_TODOS,
  REQUEST_TODOS
} from '../actions/todoActions';

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

// function postsByTodoType(state = {}, action) {
//   switch (action.type) {
//     case RECEIVE_TODOS:
//     case REQUEST_TODOS:
//       return Object.assign({}, state, {
//         [action.todoType]: posts(state[action.todoType], action)
//       })
//     default:
//       return state
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  posts,
  todos
})

export default todoApp
