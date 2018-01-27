import React, { Component } from 'react';

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
    alert('Title: ' + this.state.title + ' Content: ' + this.state.content);
    fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

    e.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type='text' value={this.state.title} onChange={this.handleChangeTitle} />
        </label>
        <label>
          Content:
          <textarea type='text' value={this.state.content} onChange={this.handleChangeContent}>
          </textarea>
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default TodoAdd;
