import React, { Component } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react';

class TodoAdd extends Component {
  constructor() {
    super();
    this.state = {title: '', content: ''};

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent =  this.handleChangeContent.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeContent(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addData(this.state.title, this.state.content)
    this.setState(Object.assign({}, this.state, {title: '', content: ''}))

  }



  render() {
    return(
      <Form   onSubmit={this.handleSubmit}>
        <Form.Group
          widths='equal'

        >
          <Form.Input fluid
            label='Title'

            placeholder='Title your thoughts...'
            value={this.state.title}
            onChange={this.handleChangeTitle}

          />
          <Form.TextArea
            label='Content'
            placeholder='Tell us something'
            value={this.state.content}
            onChange={this.handleChangeContent}
          />
        </Form.Group>

        <Button type='submit' animated>
          <Button.Content visible>Add Todo</Button.Content>
          <Button.Content hidden>
            <Icon name='up arrow' />
          </Button.Content>
        </Button>
        </Form>
    )
  }
}

export default TodoAdd;
