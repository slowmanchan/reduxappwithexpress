import { connect } from 'react-redux';
import { fetchTodos, fetchTodosSuccess } from '../actions/todos';
import TodosList from '../components/TodosList';

const mapStateToProps = (state) => {
  return {
    todosList: state.todos.todosList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos()).then((res) => {
        dispatch(fetchTodosSuccess(res.payload.data))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
