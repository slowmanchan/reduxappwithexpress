import React, { Component } from 'react';
import { Card, Icon, Grid, Segment } from 'semantic-ui-react';
import TodoAdd from './TodoAdd';
import axios from 'axios';
import SidebarLeftOverlay from './SidebarLeftOverlay'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      data: '',
      alert: false
    };
    this.addData = this.addData.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
  }

  componentDidMount() {
    this.loadTodos();
  }


  loadTodos() {
    axios.get('/todos')
      .then(res => this.setState({ todos: [...this.state.todos, ...res.data] }))
      .catch(err => console.log(err));

  }

  addData(title, content) {
    axios.post('/todos', {
      title,
      content
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data ]}))
      .catch(err => console.error('Error: ', err))

  }

  render() {
    var todos = this.state.todos.map(todo => {
      return(
            <Grid.Column>

               <Card>
                 <Card.Content header={todo.title} />
                 <Card.Content description={todo.content} />
                 <Card.Content description={todo.date} />
               </Card>

             </Grid.Column>
             )}
    ).reverse()

    console.log(todos)

    return(
      <div>
        <SidebarLeftOverlay page={<div><h1>Todo the thing list</h1>
        <TodoAdd addData={this.addData} />
        <Grid>
          <Grid.Row columns={3 }>

                {todos}

          </Grid.Row>
        </Grid></div>}/>



      </div>
    )
  }
}

export default TodoList;
