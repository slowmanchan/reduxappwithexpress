import { FETCH_TODOS, FETCH_TODOS_SUCCESS} from '../actions/todos'

const INITIAL_STATE = { todosList: {todos: [], error: null, loading: false }}

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todosList: { todos: [], error: null, loading: true }};
    case FETCH_TODOS_SUCCESS:
      return { ...state, todosList: { todos: action.payload, error: null, loading: false }};
    break
  default:
    return state
  }
}
